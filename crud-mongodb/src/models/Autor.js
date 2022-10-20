import mongoose from "mongoose";    

// Define a estrutura da colletion/Schema
// ****     versionKey: false para não constar no retorno da API, esse campo indica a versão do modelo.
// Como está false não vai constar no retorno
const autorSchema = new mongoose.Schema(
    {
        id: { type:String},
        nome:{type:String, required: true},
        nacionalidade:{type:String, required: true}
    },
    {
        versionKey: false
    }
);

// Aqui usa o nome da colletion, se não existir será criado com esse nome "autores"
const autores = mongoose.model('autores', autorSchema);

export default autores;