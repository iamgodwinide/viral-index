const dotenv = require('dotenv');
dotenv.config({});
const connect = require('./db/config.js')
const cron = require("node-cron");
const updateNewsChannel = require("./jobs/news.js");
const fetchAndSaveTransactions = require("./jobs/transactions.js");


connect();

// Schedule the cron job to run every 5 minutes
cron.schedule("*/1 * * * *", () => {
    updateNewsChannel();
    fetchAndSaveTransactions();
});