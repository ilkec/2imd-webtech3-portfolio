const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({
    text: String,
    user: String,
    completed: Boolean
});

const Message = mongoose.model('Message', messageSchema);


const getMessages = (req, res)=>{
    res.json({
        "message": "getting messages"
    });
}

const getMessagesForId = (req, res)=>{
    res.json({
        "message": "getting messages " + req.params.id
    });
}

const postNewMessage = (req, res)=>{
    
    let message = new Message();
   message.text = "My first message";
   message.user =  "Joris";

   message.save( (err, doc) => {
       if(!err){
        res.json({
            "status" : "success",
            "data": {
                "message" : doc
            }
        });
       }
   })

   
} 
const updateMessage = (req, res)=>{
    res.json({
        "message": "UPDATING a message with id " + req.params.id
    });
} 

const deleteMessage = (req, res)=>{
    res.json({
        "message": "DELETING a message with id " + req.params.id
    });
}
const getMessagesForUser = (req, res)=>{
    Message.find({"user": req.params.username}, (err, docs) =>{
        if(!err){
            res.json({
                "status" : "success",
                "data": {
                "message" : doc
                }
            }); 
        }
    })
   
}

 //verschillende functies die we een aparte naam kunnen geven
module.exports.getMessages = getMessages;
module.exports.getMessagesForId = getMessagesForId;
module.exports.postNewMessage = postNewMessage;
module.exports.updateMessage = updateMessage;
module.exports.deleteMessage = deleteMessage;
module.exports.getMessagesForUser = getMessagesForUser;
