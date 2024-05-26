// ### use "export" antes de funtion para poder ser utilizada em outro .js
// por exemplo ## export function countWords(input)
function clearWord(input){
        return input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function getParagraph(input){
    return input.toLowerCase().split('\n');
}

export function countWords(input){
    const paragraphs = getParagraph(input);

    // flatMap: pega um array e achata em um só.
    // DE: [1, 2, [3, 4]]
    // PARA:  [1, 2, 3, 4]
    const resultInput = paragraphs.flatMap((paragraph) => {
                                // Se o paragráfo for branco retornar um array vazio...
                                if (!paragraph) { 
                                    return [];
                                }else{
                                    return checksDuplicateWords(paragraph);        
                                }
                            })

    return resultInput;
}

// #######################################
// Cria um array/lista com as palavras recebidas splitada por ' ' "espaço"
// Contra a quantidade de ocorrencias e monta um obj com o resultado
function checksDuplicateWords(input){
    const lstWords = input.split(' ');
    const result = {};

    lstWords.forEach(word => {
        if (word.length >= 3) {
            const tmpWord = clearWord(word);
            result[tmpWord] = (result[tmpWord] || 0) + 1;
        }
    });

    return result;
}