const mongoose = require('mongoose');
// Connect to MongoDB
const connect = async () => {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("mongodb connected")
}

export default connect;
