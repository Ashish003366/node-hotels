import mongoose from 'mongoose';

// define person schema(how it will look)

const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number
    },
    work:{
        type: String,
        enum: ['Chef','Waiter','Manager'],
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required:true
    },
    salary:{
        type: Number,
        required: true
    }



});

//create person model

const person =mongoose.model('person',personSchema);
export default person;