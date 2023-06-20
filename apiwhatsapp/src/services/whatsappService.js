const https = require("https");

function SendMsgWhatsapp(data){
        const options = {
            host: "graph.facebook.com",
            path: "/v17.0/1234567890/messages",
            method: "POST",
            body: data,
            headers: {
                "Content-Type":"application/json",
                Authorization:"Bearer TOKEN_AQUI"
            }
        }

        const req = https.request(options, res => {
            res.on("data", d=>{
                process.stdout.write(d);
            });
        });

        req.on("error", error =>{
            console.error(error);
        })

        req.write(data);
        req.end();
}

module.exports = {
    SendMsgWhatsapp
};