import dotenv from 'dotenv'
dotenv.config({});
import connect from './db/config.js'
import cron from "node-cron";
import updateNewsChannel from "./jobs/news.js";
import fetchAndSaveTransactions from "./jobs/transactions.js";


connect();

// Schedule the cron job to run every 5 minutes
cron.schedule("*/1 * * * *", () => {
    updateNewsChannel();
    fetchAndSaveTransactions();
});