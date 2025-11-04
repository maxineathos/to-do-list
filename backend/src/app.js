// Imports
import express from 'express';
import routes from './routes/routes.route.js';

// Setting express initialization constants and default server port
const app = express();
const PORT = 3000;

// PARSE JSON middleware
app.use(express.json());

// Defining route usage
routes(app);

// Starting the server
app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});