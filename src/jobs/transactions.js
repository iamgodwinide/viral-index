import { Connection, PublicKey } from "@solana/web3.js";
import TransactionModel from '../db/Models/Transaction.js';

// Initialize Solana and MongoDB configurations
const RPC_ENDPOINT = `${process.env.RPC_ENDPOINT}`;
const connection = new Connection(RPC_ENDPOINT, { commitment: "confirmed", confirmTransactionInitialTimeout: 60_000 });
const TOKEN_ADDRESS = new PublicKey(`${process.env.TOKEN_ADDRESS}`);

export default async function fetchAndSaveTransactions() {
  try {
    const lastTransaction = await TransactionModel.findOne().sort({ slot: -1 });

    const options = lastTransaction ? { until: lastTransaction.signature || undefined } : {};
    const newTransactions = await connection.getConfirmedSignaturesForAddress2(TOKEN_ADDRESS, options);

    if (newTransactions.length > 0) {
      await TransactionModel.insertMany(newTransactions.map((tx) => ({
        signature: tx.signature,
        slot: tx.slot,
        blockTime: tx.blockTime,
        err: tx.err,
      })));

      console.log(`Fetched and saved ${newTransactions.length} new transactions.`);
    } else {
      console.log("No new transactions found.");
    }
  } catch (error) {
    console.error("Error fetching or saving transactions:", error);
  }
}

