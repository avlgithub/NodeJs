// Conexão com o mongoDB utilizando o mongoose
import mongoose from "mongoose";

// ConnectString com o password 
mongoose.connect("mongodb+srv://alima:121314@cluster0.sxe6xax.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;