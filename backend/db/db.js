// const mongoose = require('mongoose');
import mongoose from "mongoose"

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Db Connected Sucessfully')
    } catch (error) {
        console.log('DB Connection Error',error);
    }
}
export default db;
// module.exports = {db}