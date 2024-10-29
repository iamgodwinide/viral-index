const { Schema, model } = require('mongoose');

const newsSchema = new Schema({
    title: String,
    mainMessage: String,
    icon: String,
    supportingNews: Array
});

export default model("News", newsSchema);