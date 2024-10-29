import mongoose, { Schema } from 'mongoose';

const transactionSchema = new Schema({
    signature: String,
    slot: Number,
    blockTime: Number,
    err: Object,
});

export default mongoose.model("Transaction", transactionSchema);