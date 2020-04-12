const Message = require('../../../models/Message');


const getMessages = (req, res)=>{
    Message.find({}, (err, docs) =>{ //zoeken op niets want je moet alle messages eruit krijgen!
        if(!err){
            res.json({
                "status" : "success",
                "data": {
                    "message" : docs
                }
            }); 
        }
    })
}

const getMessagesForId = (req, res)=>{
    Message.find({_id: req.params.id}, (err, docs) =>{
        if(!err){
            res.json({
                "status" : "success",
                "data": {
                    "message" : docs
                }
            }); 
        }
    })
}

const postNewMessage = (req, res)=>{
   // console.log(req.body);
    let message = new Message();
    message.text = req.body.text;
    message.user =  req.body.user;

    message.save( (err, doc) => {
       if(!err){
        res.json({
            "status" : "success",
            "data": {
                "message" : doc
            }
        });
       }

       if(err){
           res.json({
                "status": "error",
                "message": "Could not post this new message"
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
                    "message" : docs
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
