const Statistics = require('../../../models/Statistics');

const getStatistics = (req, res) =>{
    Statistics.find({}, (err, docs) =>{ //zoeken op niets want je moet alle messages eruit krijgen!
        if(!err){
            res.json({
                "status" : "success",
                "data": docs
            }); 
        }
        if(err){
            res.json({
                 "status": "error",
                 "message": "Could not find any messages"
            });
        }
    });
}

/*const postNewStats = (req, res)=>{
    // console.log(req.body);
     let statistics = new Statistics();
     statistics.numberOfCases = req.body.numberOfCases;
     statistics.country =  req.body.country;
 
     statistics.save( (err, doc) => {
        if(!err){
         res.json({
             "status" : "success",
             "data":  doc
            
         });
        }
 
        if(err){
            res.json({
                 "status": "error",
                 "message": "Could not post this new message"
            });
        }
    })
 } */

const updateStatistics = (req, res) =>{
    res.json({
        "status": "succes",
        "message": "UPDATING statistics"
    });
}

module.exports.getStatistics = getStatistics;
module.exports.updateStatistics = updateStatistics;
/*module.exports.postNewStats = postNewStats;*/