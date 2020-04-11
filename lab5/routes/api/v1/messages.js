const express = require('express');
const router = express.Router();
const controllerMessages = require("../../../controllers/api/v1/messages");

/* GET: /  voor een gewone homepage*/
router.get("/", controllerMessages.getHomepage);

router.get("/", controllerMessages.getMessages);

router.get("/:id",controllerMessages.getMessagesForId);

router.post("/", controllerMessages.postNewMessage);

router.put("/:id", controllerMessages.updateMessage);

router.delete(":id", controllerMessages.deleteMessage);

router.get("/?user=username",controllerMessages.getMessagesForUser);

module.exports = router;