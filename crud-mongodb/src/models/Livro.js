import mongoose from "mongoose";    

// Define a estrutura da colletion/Schema
// campo "autor" está sendo referenciado pela collection 'autores' por isso um tratamento no type
// Ajustar o XXXController quando for necessário esse tipo de referencia para campos 
const livroSchema = new mongoose.Schema(
    {
        id: { type:String},
        titulo:{type:String, required: true},
        autor:{type:mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
        editora:{type:String, required: true},
        num_paginas:{type:Number}
    }
);

// Aqui usa o nome da colletion, se não existir será criado com esse nome "livros"
const livros = mongoose.model('livros', livroSchema);

export default livros;