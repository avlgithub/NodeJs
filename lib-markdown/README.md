#lib-markdown
Projeto baseado no curso ALURA Curso de NodeJS: criando sua biblioteca

Iniciando o projeto com "npm init -y" para responder as perguntas automáticas

// 
//Sempre que vamos trabalhar com um projeto em NodeJS do zero, uma das primeiras coisas que fazemos é criar um arquivo de configuração utilizando o comando npm init ou yarn init, assim como para todas as instalações de libs externas utilizamos o comando npm install <nome do pacote> ou yarn add <nome do pacote>.

//Ambos são gerenciadores de pacotes.

instale a biblioteca chalk "npm install chalk@5.0.1 --save-exact"

no projeto foi utilizado a versão 5.0.1

# COMO USAR:
> import chalk from 'chalk';
> const log = console.log;
> log(chalk.blue('Hello word!'));

# .GitIgnores
 node_modules

