// Importações
import express from 'express';
import routes from './routes/routes.route.js';

// Definindo constantes de inicialização do express e porta padrão do servidor
const app = express();
const PORT = 3000;

// Middleware de PARSE JSON
app.use(express.json());

// Definindo uso de rotas
routes(app);

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});