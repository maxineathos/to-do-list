class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity; // Gets the service
  }

  // Return every single record
  async getAll(req, res) {
    try {
      const RecordsList = await this.serviceEntity.getAllRecords();
      if (RecordsList.length === 0) {
        return res
          .status(204)
          .json(); // No Content
      }
      return res.status(200).json(RecordsList);
    } catch (error) {
      // Return 500 on unexpected errors instead of swallowing them (prevents hanging requests)
      return res
        .status(500)
        .json({
          message: "Internal server error",
          error: error.message,
          status: 500,
        });
    }
  }

  // Return a record by its ID
  async getById(req, res) {
    const { id } = req.params;

    try {
      const uniqueRecord = await this.serviceEntity.getRecordById(id);

      if (!uniqueRecord)
        return res
          .status(404)
          .json({ message: "Record not found", status: 404 });

      return res.status(200).json(uniqueRecord);
    } catch (error) {
      return res
        .status(500)
        .json({
          message: "Internal server error",
          error: error.message,
          status: 500,
        });
    }
  }

  // Create a record
  async create(req, res) {
    const newData = req.body;
    try {
      const newRecordFromData = await this.serviceEntity.createRecord(newData);

      return res.status(201).json(newRecordFromData); // 201 Created
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        return res.status(400).json({
          // 400 Bad Request
          message: "Validation error",
          error: error.message,
          status: 400,
        });
      }

      return res.status(500).json({
        message: "Internal server error",
        error: error.message,
        status: 500,
      });
    }
  }

  // Update a record
  async update(req, res) {
    const { id } = req.params;
    const updatedData = req.body;
    try {
      const uniqueRecord = await this.serviceEntity.getRecordById(id);
      if (!uniqueRecord)
        return res
          .status(404)
          .json({ message: "Record not found", status: 404 });

      const wasUpdated = await this.serviceEntity.updateRecordById(
        updatedData,
        Number(id)
      );

      if (!wasUpdated)
        return res
          .status(400)
          .json({ message: `Record [${id}] was not updated`, status: 400 });

      return res
        .status(200)
        .json([
          { ...updatedData },
          { message: `Record [${id}] was successfully updated.`, status: 200 },
        ]);
    } catch (error) {
      return res
        .status(500)
        .json({
          message: "Internal server error",
          error: error.message,
          status: 500,
        });
    }
  }

  // Delete a record by its ID
  async deleteById(req, res) {
    const { id } = req.params;
    try {
      const uniqueRecordToDelete = await this.serviceEntity.getRecordById(id);

      if (!uniqueRecordToDelete) {
        return res
          .status(404)
          .json({ message: "Record not found", status: 404 });
      }

      await this.serviceEntity.deleteRecordById(Number(id));

      return res.status(204).send(); // No Content after successful deletion
    } catch (error) {
      return res
        .status(500)
        .json({
          message: "Internal server error",
          error: error.message,
          status: 500,
        });
    }
  }

  // Delete all records
  async deleteAll(req, res) {
    const { id } = req.params;
    try {
      const RecordsList = await this.serviceEntity.getAllRecords();

      if (RecordsList.length > 0) {
        await this.serviceEntity.deleteAllRecords();
        return res
          .status(200)
          .json({
            message: `Everything was succefully deleted. Enjoy your free time or add some new tasks :)`,
            status: 200,
          });
      } else {
        return res
          .status(204)
          .json();
      }
    } catch (error) {
      return res
        .status(500)
        .json({
          message: "Internal server error",
          error: error.message,
          status: 500,
        });
    }
  }
}

module.exports = Controller;