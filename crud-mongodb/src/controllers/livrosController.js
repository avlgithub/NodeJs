import livros from "../models/Livro.js";

class LivrosController {

    static listarLivros = (req, res) => {
        // Realiza um find no banco e retornar 
        livros
            .find()
            .populate('autor')
            .exec(
                (erro, livros) => {
                   res.status(200).json(livros);
                });
    }

    static buscaLivro = (req, res) => {
        const id = req.params.id;

        // Realiza um find com ID 
        // Caso queira exibir um campo especifíco use conforme abaixo
        // >>>> .populate('autor', 'nome, nacionalidade')
        // Ou deixa apenas ".populate('autor')" para exibbir todos os campos
        livros.findById(id)
        .populate('autor', 'nome')
        .exec(
                (erro, livros) => {
                    if (erro){
                        res.status(400).send({message: `${erro.message} - Livro não localizado.`});
                    }else{
                        res.status(200).json(livros);
                    }
                }
            );
    }

    static cadastarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((erro) => {

                        if (erro){
                            res.status(500).send({message: `${erro.message} - falha ao cadastrar o livro.`});
                        }else{
                            res.status(200).send( livro.toJSON() );

                        }

                    }
                )
    }


    static atualizarLivro = (req, res) => {
        // identifica o ID do livreo e busca para atualizar o item
        const id = req.params.id;
        livros.findByIdAndUpdate(id, 
                                { $set: req.body }, 
                                (erro) => {
                                    if (erro){
                                        res.status(500).send( {message: `${erro.message} - falha ao atualizar o livro.`} );
                                    }else{
                                        res.status(200).send( {message: `Livro atualizado com sucesso!` } );
                                    }
                                }
                            )
    }


    static excluirLivro = (req, res) => {
        const id = req.params.id;

        // Realiza um find com ID 
        livros.findByIdAndDelete(id, (erro) => {
            if (erro){
                res.status(500).send( {message: erro.message} );
            }else{
                res.status(200).send({message: `Livro excluído com sucesso.`});
            }
        });
    }
    
    static listarLivrosPorEditora = (req, res) => {
        const editora = req.query.editora;

        livros.find(
                    { 'editora' : editora}, 
                    {}, 
                    (erro, livros) => {
                        if (erro){
                            res.status(500).send( { message: `${erro.message} - Nenhum livros localizado para a editora ${editora}.` } );
                        }else{
                            res.status(200).send( livros );
                        }
                    }
                )
    }
    
}

export default LivrosController;