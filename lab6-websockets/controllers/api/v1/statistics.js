const getStatistics = (req, res) =>{
    res.json({
        "status": "succes",
        "message": "GETTING statistics"
    });
}

const updateStatistics = (req, res) =>{
    res.json({
        "status": "succes",
        "message": "UPDATING statistics"
    });
}

module.exports.getStatistics = getStatistics;
module.exports.updateStatistics = updateStatistics;