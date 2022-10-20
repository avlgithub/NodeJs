import chalk from "chalk";

function extractLink(lstLinks){
    // retorna uma lista de links.
    return lstLinks.map( (objLink) => Object.values( objLink).join() );
}

async function checkStatusLink(links){

    const lstStatus = await Promise.all(
                                        links.map(async (url) => {
                                            try {
                                                const response = await fetch(url)
                                                return response.status;
                                            } catch (erro) {
                                                return verifyError(erro);
                                            }
                                        })
                                    )

    return lstStatus;
}

function verifyError (erro) {
    if (erro.cause.code === 'ENOTFOUND') {
      return 'Link não encontrado';
    } else {
      return 'Ocorreu algum erro';
    }
  }
  

export default async function validateList(lstLinks){
    const links = extractLink(lstLinks);
    const status = await checkStatusLink(links);

    return lstLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
      }))
}