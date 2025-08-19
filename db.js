import mongoose from 'mongoose';

//Define the MongoDB connection URL
const mongourl = 'mongodb://localhost:27017/hotels'
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