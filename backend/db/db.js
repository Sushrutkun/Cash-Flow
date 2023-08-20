const mongoose = require('mongoose');
// let MONGO_URL="mongodb+srv://admin:admin@admindash.uzzw6rq.mongodb.net/?retryWrites=true&w=majority";

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
    }
}

module.exports = {db}