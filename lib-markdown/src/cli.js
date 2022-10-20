import fs from 'fs';
import chalk from 'chalk';
import getFileAsync from './index.js';
import validateList from './http-validacao.js';
const path = process.argv;

async function displayResultList(validate=false, inputList, type = ''){
    if (validate){
        console.log(
            chalk.yellow('Lista validada'),
            chalk.black.bgGreen(type),
            await validateList(inputList)
        );    
    }
    
    // console.log(
    //     chalk.yellow('Lista de links'),
    //     chalk.black.bgGreen(type),
    //     inputList
    // );
}

async function processText(param) {
    const pathFile = param[2];

    // Verifica se é para validar os link´s
    const validate = param[3] === '--valida';

    try {
        fs.lstatSync(pathFile);
    } catch (erro) {
        if (erro.code === 'ENOENT') {
            console.log('arquivo ou diretório não existe');
            return;
        }
    }

    // Verifica se é um arquivo 
    if (fs.lstatSync(pathFile).isFile()){
        const resultFile = await getFileAsync( pathFile );
        displayResultList(validate, resultFile);
    }else if (fs.lstatSync(pathFile).isDirectory()){
        const listFile = await fs.promises.readdir(pathFile);

        listFile.forEach(async (fileName) => {
            const resultFile = await getFileAsync( `${pathFile}/${fileName}`);
            displayResultList(validate, resultFile, fileName);
        })
    }

}

processText(path);