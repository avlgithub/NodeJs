const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const processMessage = require("../shared/processMessage");

const VerificaToken = (req, res) => {
    try {
        var acessToken = "SEU-TOKEN-AQUI";

        var token     = req.query['hub.verify_token'];
        var challenge = req.query['hub.challenge'];

        if (challenge != null && token != null && token == acessToken){
            res.send( challenge );
        }else{
            res.status(400).send();
        }
    } catch (e) {
        res.status(400).send();
    }
    
}

const MessagemRecebida  = (req, res) => {
    try {
        var entry         = (req.body["entry"][0]);
        var changes       = (entry["changes"][0]);
        var value         = changes["value"];
        var messageObject = value["messages"];

        if (typeof messageObject != "undefined"){
            // Tratando conteúdo
            var messages = messageObject[0];
            var text = GetTextUser(messages);
            var targetNumber = messages["from"];

            // Tratando as interações
            if (text != ""){
                processMessage.Process(text, targetNumber);
            }
        }

        res.send("EVENT_RECEIVED");
    } catch (e) {
        myConsole.log(e);
        res.send("EVENT_RECEIVED");
    }
}

function GetTextUser(messages){
        var text = "";
        var typeMessage = messages["type"];

        if (typeMessage == "text"){
            text = (messages["text"])["body"];
        }else if (typeMessage == "interactive"){
                // Verificando o tipo da interação....
                var interactiveObj = messages["interactive"];
                var typeInteractive = interactiveObj["type"];
                
                if (typeInteractive == "button_reply"){
                    text = (interactiveObj["button_reply"])["title"];

                }else if (typeInteractive == "list_reply"){
                        text = (interactiveObj["list_reply"])["title"];

                }else{

                    myConsole.log("Messagem não identificada.");
                }

        }else{
            myConsole.log("Messagem não identificada.");
        }

        return text;
}

module.exports = {
    VerificaToken,
    MessagemRecebida
}