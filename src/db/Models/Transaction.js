const { Schema, model } = require('mongoose');

const transactionSchema = new Schema({
    signature: String,
    slot: Number,
    blockTime: Number,
    err: Object,
});

export default model("Transaction", transactionSchema);