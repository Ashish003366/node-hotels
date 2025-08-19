import mongoose from "mongoose";

const MenuItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    taste:{
        type:String,
        enum :['sour', 'spicy', 'sweet'],
        required:true
    },
    is_drink: {
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        default:[]
    },
    no_of_sales:{
        type:Number,
        default: 0
    }

})

const menu =mongoose.model('menu',MenuItemSchema);
export default menu;