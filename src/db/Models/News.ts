import mongoose, { Schema } from 'mongoose';

const newsSchema = new Schema({
    title: String,
    mainMessage: String,
    icon: String,
    supportingNews: Array
});

export default mongoose.model("News", newsSchema);