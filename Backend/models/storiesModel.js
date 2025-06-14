import mongoose from "mongoose";

const storiesModel = mongoose.Schema({
    caption : {type : String , required : true},
    username : {type : String , required : true},
    userId : {type : String , required : true},
    image : {type : String , required : true},
    tags : String,
    likes : {type : String , default : 0},
    postDate : {type : Date , default : new Date()}
})

export default mongoose.model("Stories" , storiesModel)