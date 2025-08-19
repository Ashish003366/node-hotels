import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

//Define the MongoDB connection URL
//const mongourl = process.env.mongodbURLLocal //local server
const mongourl = process.env.mongodbURL // online server
// setup mongoDB connection
mongoose.connect(mongourl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db =mongoose.connection;

db.on('connected', ()=>{
    console.log("connected to mongoDB server");
})

db.on('disconnected', ()=>{
    console.log("disconnected to mongoDB server",err);
})
db.on('error', (err)=>{
    console.log("error to mongoDB server");
})

export default db;