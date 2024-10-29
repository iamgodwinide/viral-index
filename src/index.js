import dotenv from 'dotenv'
dotenv.config({});
import connect from './db/config'
import cron from "node-cron";
import updateNewsChannel from "./jobs/news";
import fetchAndSaveTransactions from "./jobs/transactions";


connect();

// Schedule the cron job to run every 5 minutes
cron.schedule("*/1 * * * *", ()=> {
    updateNewsChannel();
    fetchAndSaveTransactions();
});