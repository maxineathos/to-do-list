# To-Do List API

![Node.js](https://img.shields.io/badge/Node.js-v18.0.0-green) ![Express](https://img.shields.io/badge/Express-v5.1.0-blue) ![SQLite](https://img.shields.io/badge/SQLite-v5.1.7-orange) ![License](https://img.shields.io/badge/License-MIT-brightgreen)

A RESTful API for managing tasks, built with Node.js, Express, and SQLite.

## 🚀 Technologies

This project was developed using the following technologies:

- [Node.js](https://nodejs.org/en/) - JavaScript runtime
- [Express](https://expressjs.com/) - Web framework
- [Sequelize](https://sequelize.org/) - ORM
- [SQLite](https://www.sqlite.org/) - Database
- [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express) - API documentation
- [dotenv](https://www.npmjs.com/package/dotenv) - Environment variable management

## 📋 Prerequisites

Before starting, make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/maxineathos/to-do-list.git
cd to-do-list
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

   - Use the `.env.example` file as a reference to create your own `.env` file. The `.env` file should contain your custom configurations. For example:

```env
PORT=3000
```

   - The `PORT` variable specifies the port the server will run on. If not set, the default is `3000`.

## ⚡ Quick Start

After installing dependencies and configuring your environment, you can quickly set up and run the project:

```bash
# Set up the database (creates database, runs migrations, and seeds sample data)
npm run db:init

# Start the development server
npm run dev
```

The API will be available at `http://localhost:3000` and Swagger documentation at `http://localhost:3000/api-docs`

---

Alternatively, you can run the commands separately:
```bash
npm run migrate    # Create database schema
npm run seed       # Populate with example data
```

## 📚 API Documentation

The complete API documentation is available via Swagger UI at:

```
http://localhost:3000/api-docs
```

### Available Endpoints

- `GET /tasks` - List all tasks
- `GET /tasks/:id` - Get a specific task
- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update an existing task
- `PATCH /tasks/:id/status` - Update only the status of a task
- `DELETE /tasks/:id` - Remove a task
- `DELETE /tasks` - Remove all tasks

## 🧪 Project Structure

```
backend/
  ├── src/
  │   ├── app.js           # Express configuration
  │   ├── swagger.json     # API documentation
  │   ├── config/         # Database configurations
  │   ├── controllers/    # Controllers
  │   ├── database/      # SQLite database
  │   ├── middlewares/   # Middlewares
  │   ├── migrations/    # Sequelize migrations
  │   ├── models/       # Sequelize models
  │   ├── routes/       # API routes
  │   ├── seeders/      # Database seeders
  │   └── services/     # Service layer
  └── package.json
```

## 📝 Database Configuration

The `config.json` file is pre-configured to use SQLite by default. If you prefer to use another database, you can update the `config.json` file accordingly. Refer to the [Sequelize documentation](https://sequelize.org/docs/v6/getting-started/) for details on how to configure other databases.

## 📝 Data Model

### Task
```json
{
  "id": "number",
  "title": "string",
  "description": "string",
  "status": "enum['to_do', 'in_progress', 'done']",
  "createdAt": "date",
  "updatedAt": "date"
}
```

## 🤝 Contributing

Contributions are always welcome! To contribute:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🚧 Improvements

Here are some ideas for future improvements:

- Implement a front-end client (React, Vue, Angular, etc.) to interact with the API
- Add user authentication and authorization
- Improve error handling and validation
- Add more unit and integration tests
- Enhance API documentation with more examples
- Deploy the application using cloud services

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Made with ❤️ by [maxineathos](https://github.com/maxineathos)