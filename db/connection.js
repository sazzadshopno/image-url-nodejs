import mongoose from 'mongoose';
require('dotenv').config();

const URI = `mongodb+srv://travelersofbangladesh:${process.env.MONGO_PASSWORD}@cluster0.hx3oo.mongodb.net/${process.env.MONGO_DATABASE_NAME}?retryWrites=true&w=majority`;

const dbConnection = async () => {
    await mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true});
}

module.exports = dbConnection;