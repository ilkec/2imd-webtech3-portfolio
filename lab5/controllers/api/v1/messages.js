const getHomepage = (req, res)=>{ 
    res.send("get homepage");
}

const getMessages = (req, res)=>{
    res.json({
        "message": "getting messages"
    });
}

const getMessagesForId = (req, res)=>{
    res.json({
        "message": "getting messages" + req.param.id
    });
}

const postNewMessage = (req, res)=>{
    res.json({
        "message": "POSTING a new message for user Pikachu"
    });
} 
const updateMessage = (req, res)=>{
    res.json({
        "message": "UPDATING a message with id" + req.param.id
    });
} 

const deleteMessage = (req, res)=>{
    res.json({
        "message": "DELETING a message with id" + req.param.id
    });
}
const getMessagesForUser = (req, res)=>{
    res.json({
        "message": "GETTING message for username" + req.param.username
    });
}

module.exports.getHomepage = getHomepage;  //verschillende functies die we een aparte naam kunnen geven
module.exports.getMessages = getMessages;
module.exports.getMessagesForId = getMessagesForId;
module.exports.postNewMessage = postNewMessage;
module.exports.updateMessage = updateMessage;
module.exports.deleteMessage = deleteMessage;
module.exports.getMessagesForUser = getMessagesForUser;
