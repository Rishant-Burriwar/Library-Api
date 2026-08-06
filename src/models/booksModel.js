import { model, Schema } from "mongoose";

const bookSchema = new Schema({
    book_id :{
        type : Number,
        unique:true,
        required:true,
        min : [1,"ID must be greater then 0"]
    },
    name: {
        type:String,
        maxLength : [15,"Name cannot be this long"],
        required :true
    },
    author:{
        type : String,
        maxLength : [15,"Author name cannot be this long"],
        required : true
    },
    price :{
        type: Number,
        required :true
    },
    status :{
        type :Boolean,
        default :true,
    }
});

const Books = model("Book",bookSchema);

export {Books}