const express = require('express');
const router = express.Router();
const controllerStatistics = require("../../../controllers/api/v1/statistics");

router.get("/", controllerStatistics.getStatistics);

router.put("/updatestats", controllerStatistics.updateStatistics);

module.exports = router;