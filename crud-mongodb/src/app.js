import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js";

// Validando conexão
db.on("error", console.log.bind(console, 'Não foi possível conectar ao banco'));

// Iniciando a conexão com o mongo
db.once("open", ()=>{
    console.log('Conxão feita com sucesso!');
});

// Criando instância
const app = express();

// Interpetra o conteúdo recebido no request
app.use(express.json());

routes(app);

export default app;