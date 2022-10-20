import express from "express";
import LivrosController from "../controllers/livrosController.js";

const router = express.Router();


// Importante:
// Seguir com a order da rota pois o express pega sempre os que estão na frente por ex:
// 
//.get('/livros/:id', LivrosController.buscaLivro)
//.get('/livros/busca/', LivrosController.listarLivrosPorEditora)
// 
// No exemplo acima ele irá considerar o 'buscaLivro' sempre ao invés de 'listarLivrosPorEditora' 
// pois o método é o mesmo GET
// Então deve se, mudar a ordem de chamada 

router
    .get('/livros', LivrosController.listarLivros)
    .get('/livros/busca/', LivrosController.listarLivrosPorEditora)
    .get('/livros/:id', LivrosController.buscaLivro)
    .post('/livros', LivrosController.cadastarLivro)
    .put('/livros/:id', LivrosController.atualizarLivro)
    .delete('/livros/:id', LivrosController.excluirLivro);

export default router;