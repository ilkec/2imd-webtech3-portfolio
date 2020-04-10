const express = require('express');
const router = express.Router();

/* GET: /  voor een gewone homepage*/
router.get("/", (req, res) =>{
    //gewone homepage
});
router.get("/api/v1/messages", (req, res) => {
    res.json({
        "message": "getting messages"
    });
});

router.get("/api/v1/messages/:id", (req, res) => {
    res.json({
        "message": "getting messages" + req.param.id
    });
});

router.post("/api/v1/messages", (req, res) => {
    res.json({
        "message": "POSTING a new message for user Pikachu"
    });
});

router.put("/api/v1/messages/:id", (req, res) => {
    res.json({
        "message": "UPDATING a message with id" + req.param.id
    });
});

router.delete("/api/v1/messages/:id", (req, res) => {
    res.json({
        "message": "DELETING a message with id" + req.param.id
    });
});

router.get("/api/v1/messages?user=username", (req, res) => {
    res.json({
        "message": "GETTING message for username" + req.param.username
    });
});