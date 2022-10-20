import autores from "../models/Autor.js";

class AutoresController {

    static listarAutores = (req, res) => {
        // Realiza um find no banco e retornar 
        autores.find( (erro, autores) => {
            res.status(200).json(autores);
        });
    }

    static buscaAutor = (req, res) => {
        const id = req.params.id;

        // Realiza um find com ID 
        autores.findById(id, (erro, autores) => {
            if (erro){
                res.status(400).send({message: `${erro.message} - Autor não localizado.`});
            }else{
                res.status(200).json(autores);
            }
        });
    }

    static cadastarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((erro) => {

                        if (erro){
                            res.status(500).send({message: `${erro.message} - falha ao cadastrar o autor.`});
                        }else{
                            res.status(200).send( autor.toJSON() );

                        }

                    }
                )
    }


    static atualizarAutor = (req, res) => {
        // identifica o ID do livreo e busca para atualizar o item
        const id = req.params.id;
        autores.findByIdAndUpdate(id, 
                                { $set: req.body }, 
                                (erro) => {
                                    if (erro){
                                        res.status(500).send( {message: `${erro.message} - falha ao atualizar o autor.`} );
                                    }else{
                                        res.status(200).send( {message: `Autor atualizado com sucesso!` } );
                                    }
                                }
                            )
    }


    static excluirAutor = (req, res) => {
        const id = req.params.id;

        // Realiza um find com ID 
        autores.findByIdAndDelete(id, (erro) => {
            if (erro){
                res.status(500).send( {message: erro.message} );
            }else{
                res.status(200).send({message: `Autor excluído com sucesso.`});
            }
        });
    }
    
}

export default AutoresController;