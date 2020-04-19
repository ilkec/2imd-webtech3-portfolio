const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const statisticsSchema = new Schema({
    country: String,
    numberOfCases: String,
});

const Statistics = mongoose.model('Statistics', statisticsSchema);

module.exports = Statistics;