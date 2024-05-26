import fs from 'fs';
import path from 'path';
import verifyErro from './erros/verifyErro.js';
import { countWords } from './index.js'
import { updateResultFile } from './helpers.js';
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

// Descrição:
//  Patâmetro 
//      -t  path do arquivo de entrada
//      -d  path do arquivo de resultado/saída
//
//  Exemplo:
//      node src/cli.js -t arquivos/in/texto-web.txt -d arquivos/out/
//
program
  .version('0.0.1')
  .option('-t, --fileInput <string>', 'Arquivo de entrada para processamento')
  .option('-d, --fileOutput <string>', 'Local do onde será salvo o resultado ro processamento')
  .action((options) => {
        // Extrai as variáveis/parâmetro recebidos no terminal
        // fileInput e fileOutput
        const { fileInput, fileOutput } = options;

        if (!fileInput || !fileOutput) {
            console.log();
            console.error( chalk.red('Erro: favor inserir caminho de origem e destino') );
            console.log();
            console.log();
            program.help();
            return;
        }

        const pathInput  = path.resolve(fileInput);
        const pathOutput = path.resolve(fileOutput);

        try{
            processFile(pathInput, pathOutput);
            console.log( chalk.green('Arquivo processado com sucesso!') );
            console.log();
            console.log();
        }catch(erro){
            console.log('Erro inesperado: ', erro);
            console.log();
            console.log();
        }
    })

program.parse();

function processFile(inputFile, outputFile){
    fs.readFile(inputFile, 'utf-8', (erro, line) => {
        try {
            // Se ocorrer um erro, for o catch
            if (erro) throw erro;
    
            const result  = countWords(line);        
            createFileResult(result, outputFile);
            
        } catch (erro) {
            console.log(
                verifyErro(erro)
            );
        }
    })
}

// Criando um arquivo com o resultado da validação do arquivo(s) 
async function createFileResult(input, path) {
    const fileName = `${path}/resultado.txt`;
    const dateInput = updateResultFile(input);

    try {
        await fs.promises.writeFile(fileName, dateInput);
    } catch (erro) {
        throw erro;
    }
}