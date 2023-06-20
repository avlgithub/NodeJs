const express = require("express");
const router = express.Router();
const whatsAppController = require("../controllers/whatsappControllers");

router
    .get("/", whatsAppController.VerificaToken)
    .post("/", whatsAppController.MessagemRecebida);


module.exports = router;