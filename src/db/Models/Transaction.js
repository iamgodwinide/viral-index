const { Schema, model } = require('mongoose');

const transactionSchema = new Schema({
    signature: String,
    slot: Number,
    blockTime: Number,
    err: Object,
});

module.exports = model("Transaction", transactionSchema);