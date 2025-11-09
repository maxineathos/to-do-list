// Load environment variables first
require("dotenv").config();

// Imports
const express = require("express");
const routes = require("./routes/index.js");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

// Setting express initialization constants and default server port
const app = express();
const PORT = process.env.PORT || 3000;

// PARSE JSON middleware
app.use(express.json());

// Swagger documentation route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Defining route usage
routes(app);

// 404 handler for unknown routes
const notFoundHandler = require("./middlewares/notFoundHandler.js");
app.use(notFoundHandler);

// Starting the server
app.listen(PORT, () => {
  console.log(`Server running in: http://localhost:${PORT}`);
});

module.exports = app;
