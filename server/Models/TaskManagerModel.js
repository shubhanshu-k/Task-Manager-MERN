const mongoose = require('mongoose');


const TaskManagerSchema = new mongoose.Schema({
 text :{
    type: String,
    require:true
 },
 status:{
    type:String,
    require:true,
    enum:['pending','completed'],
    default:'pending',
 },
 date:{
    type:Date,
    require:true
 }

})
module.exports=mongoose.model('TaskManager',TaskManagerSchema);