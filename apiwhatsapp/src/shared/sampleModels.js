
function SampleText(textResponse, targetNumber){
        const data = JSON.stringify(
            {
                "messaging_product":"whatsapp",
                "to": targetNumber,
                "type":"text",
                "text":{
                    "body": textResponse
                }
            }
        );

        return data;
}

function SampleImage(targetNumber){
    const data = JSON.stringify(
        {
            "messaging_product":"whatsapp",
            "to": targetNumber,
            "type":"image",
            "image":{
                "link": "https://url-do-recurso/bot.png"
            },
        }
    );

    return data;
}

function SampleAudio(targetNumber){
    const data = JSON.stringify(
        {
            "messaging_product":"whatsapp",
            "to": targetNumber,
            "type":"audio",
            "audio":{
                "link": "https://url-do-recurso/bot.mp3"
            },
        }
    );

    return data;
}

function SampleVideo(targetNumber){
    const data = JSON.stringify(
        {
            "messaging_product":"whatsapp",
            "to": targetNumber,
            "type":"video",
            "video":{
				"link": "https://url-do-recurso/bot.mp4"
            },
        }
    );

    return data;
}

function SampleDocument(targetNumber){
    const data = JSON.stringify(
        {
            "messaging_product":"whatsapp",
            "to": targetNumber,
            "type":"document",
            "document":{
                "link": "https://url-do-recurso/bot.pdf"
            },
        }
    );

    return data;
}

function SampleButtons(targetNumber){
    const data = JSON.stringify(
        {
            "messaging_product":"whatsapp",
            "to": targetNumber,
            "type":"interactive",
            "interactive":{
                "type": "button",
                "body":{
                    "text":"As informações estão corretas ?"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "001",
                                "title": "SIM, estão corretas"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "002",
                                "title": "NÃO, estão corretas"
                            }
                        }
                    ]
                }
            }
        }
    );

    return data;
}

function SampleList(targetNumber){
    const data = JSON.stringify(
        {
            "messaging_product":"whatsapp",
            "to": targetNumber,
            "type":"interactive",
            "interactive": {
                "type": "list",
                "body": {
                    "text" : "Opções disponivel"
                },
                "action": {
                    "button": "Ver opções",
                    "sections": [
                        {
                            "title": "Exames",
                            "rows": [
                                {
                                    "id": "main-agendamento-de-exames",
                                    "title": "Agendamento de Exames",
                                    "description":"Agendamento de Exames"
                                },
                                {
                                    "id": "main-exames-laboratoriais",
                                    "title": "Exames Laboratoriais",
                                    "description":"Agendamento de Exames Laboratoriais"
                                },
                                {
                                    "id": "opcao-consultar-resultados-ou-preparo-de-Exames",
                                    "title": "Resultados ou Preparo",
                                    "description":"Clique para Exames Laboratoriais"
                                }
                            ]
                        },
                        {
                            "title": "Outros",
                            "rows": [
                                {
                                    "id": "opcao-duvidas-de-pedido-medico",
                                    "title": "Dúvidas de Pedido Médico",
                                    "description":"Dúvidas de Pedido Médico"
                                },
                                 {
                                    "id": "opcao-outras-informacoes",
                                    "title": "Outras Informações",
                                    "description":"Clique para Outras Informações"
                                }
                            ]
                        }
                    ]
                }
            }
        }
    );

    return data;
}

function SampleLocation(targetNumber){
    const data = JSON.stringify(
        {
            "messaging_product":"whatsapp",
            "to": targetNumber,
            "type":"location",
            "location":{
                "latitude": "-21.535621",
                "longitude": "-52.7765180",
                "name": "Nome do cliente",
                "address": "Endereço completo aqui, 123 - Cidade, Estado - SP, 00000-100"
            }
        }
    );

    return data;
}

module.exports = {
    SampleText,
    SampleImage,
    SampleAudio,
    SampleVideo,
    SampleDocument,
    SampleButtons,
    SampleList,
    SampleLocation
}