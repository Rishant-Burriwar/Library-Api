import {connect} from "mongoose";

async function connectDb(){
    try{
        await connect("mongodb://localhost:27017/library");
        console.log("DB is working");
    }catch(err){
        console.log("Message :",err.message());
    }
};

export {connectDb};