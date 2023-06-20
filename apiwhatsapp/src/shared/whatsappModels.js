function MessageText(textResponse, targetNumber){
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

function MessageMenuStart(targetNumber){
    const data = JSON.stringify(
        {
            "messaging_product":"whatsapp",
            "to": targetNumber,
            "type":"text",
            "text":{
                "body": "*[Bot]*\nSeja bem-vindo à *bot de teste*!\nA partir deste momento, seus dados são protegidos pela Lei 13.709/2018 - Lei Geral de Proteção de Dados.\n\nPara continuarmos, escolha uma das opções para o atendimento:\n*1* - para Orçamentos\n*2* - para Agendamento de Exames\n*3* - para Exames Laboratoriais\n*4* - para Preparo de Exames\n*5* - para Convênios\n*6* - para Outras Informações\n"
            }
        }
    );

    return data;
}

function MessageMenuService(targetNumber){
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

module.exports = {
    MessageText,
    MessageMenuService,
    MessageMenuStart
}