import mongoose from "mongoose";
const messageSchema =  new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    
    },
    message:{
        type:String,
        required:true,
    }
    //createdAt,updatedAt =msg.createdAt: 15:30
    },{timestamps:true});

    const message =mongoose.model("Message",messageSchema);
    export default message;

