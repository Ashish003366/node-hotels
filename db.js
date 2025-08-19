import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

//Define the MongoDB connection URL
//const mongourl = process.env.mongodbURLLocal //local server
const mongourl = process.env.mongodbURL // online server
// setup mongoDB connection
mongoose.connect(mongourl)

const db =mongoose.connection;


db.on('connected', () => {
    console.log("✅ Connected to MongoDB server");
});

db.on('disconnected', () => {
    console.log("⚠️ Disconnected from MongoDB server");
});

db.on('error', (err) => {
    console.error("❌ MongoDB connection error:", err);
});


export default db;