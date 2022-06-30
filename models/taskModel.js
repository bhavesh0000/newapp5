const mongoose=require("mongoose")

const taskSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
        match:[/\(?\d+\)?[-.\s]?\d+[-.\s]?\d+/,"Invalid mobile number"],
        minlength:[10,"mobile number should be of 10 digits"],
        maxlength:[10,"mobile number should be of 10 digits"]
    },
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    street:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    loginId:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        match:[/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,"passwword must contain 1 uppercase,1 lowercase and 1 special character"],
        minlength:[6,"minimum length should be 6"]
    }
},{timestamps:true})

const Task = mongoose.model('Task',taskSchema);
module.exports = Task;