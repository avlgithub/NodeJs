import fs from 'fs';
import chalk from 'chalk';

async function getFileAsync(pathFile){
    try{
        const encoding = 'utf8';
        const lnFile = await fs.promises.readFile(pathFile, encoding);
        return extractLinks(lnFile);
    }catch(erro){
        checkError(erro);
    }
}

function getFileInPromisses(pathFile){
    const encoding = 'utf8';
    fs.promises
        .readFile(pathFile, encoding)
        .then((lnFile) => console.log( extractLinks(lnFile) ))
        .catch((erro) => checkError(erro)) 
}

function getFile(pathFile){
    const encoding = 'utf8';
    fs.readFile(pathFile, encoding, (erro, lnFile) =>{
        if (erro){
            checkError(erro)
        }

        console.log( extractLinks(lnFile) );
    })

}

function extractLinks(input){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;

    // para cada item encontrado concatena no lista ""/result
    const capture = [...input.matchAll(regex)];

    // monta um array de objetos encontratos.
    const lstResult = capture.map(capture => ({[ [capture[1]] ] : capture[2] }));


    return lstResult.length !== 0 ? lstResult : 'Nenhum link encontrado.';
}

function checkError(erro){
    throw new Error(chalk.red(erro.code, 'Ocorreu um erro ao ler o arquivo.'));
}

//const pathFile = './sample/sample.md';
//getFileInPromisses(pathFile);
//getFileAsync(pathFile);
//getFile(pathFile);

export default  getFileAsync;