function filterOccurrences(paragraph) {
    return Object.keys(paragraph).filter(key => paragraph[key] > 1)
  }
  
  function updateResultFile(listaPalavras) {
    let tmp = '';
    listaPalavras.forEach((paragraph, indice) => {
      const duplicadas = filterOccurrences(paragraph).join(', ');
      tmp += `Palavras duplicadas no parágrafo ${indice + 1}: ${duplicadas} \n`
    })
  
    return tmp;
  }
  
  export { updateResultFile };