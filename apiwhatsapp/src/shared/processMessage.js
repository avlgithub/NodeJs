const whatsappModels = require("../shared/whatsappModels");
const whatsappService = require("../services/whatsappService");

function Process(textUser, targetNumber){
        textUser = textUser.toLowerCase();
        var models = [];

        if (textUser.includes("oi") || textUser.includes("olá") || textUser.includes("ola")){
            var model = whatsappModels.MessageMenuStart(targetNumber);
            models.push(model);
        }else if (textUser.includes("orçamentos") || textUser.includes("orcamento")){
                var model = whatsappModels.MessageText("Imagina, estou aqui para lhe servi.", targetNumber);
                models.push(model);
        }else if (textUser.includes("sair")){
                var model = whatsappModels.MessageText("Obrigado pelo seu contato!", targetNumber);
                models.push(model);
        }else{
            var model = whatsappModels.MessageText("Desculpe, não entendi.", targetNumber);
            models.push(model);
        }

        models.forEach(model => {
            whatsappService.SendMsgWhatsapp( model );
        });
}

module.exports = {
    Process
}