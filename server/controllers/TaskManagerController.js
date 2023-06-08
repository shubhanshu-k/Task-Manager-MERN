const TaskManagerModel= require('../Models/TaskManagerModel');

module.exports.getTasks= async (req,res)=>{
const tm = await TaskManagerModel.find()
res.send(tm)
}
module.exports.saveTask=async(req,res)=>{
    const {text,status,date} =req.body;
    TaskManagerModel
     .create({text,status,date})
    .then((data)=>{
        console.log("Added successfully");
        console.log(data);
        res.send(data);
    })
}

module.exports.updateTask=async(req,res)=>{
    const {_id,text,status,date}=req.body;
    TaskManagerModel
    .findByIdAndUpdate(_id,{text},{status},{date})
    .then(()=>res.set(201).send("Updated successfully..."))
    .catch((err)=>console.log(err))
}

module.exports.deleteTask=async(req,res)=>{
    const {_id}=req.body;
    TaskManagerModel
    .findByIdAndDelete(_id)
    .then(()=>res.send("Deleted successfully..."))
    .catch((err)=>console.log(err))
}
module.exports.updateStatus=async(req,res)=>{
    const {_id,status}=req.body
    TaskManagerModel
    .findByIdAndUpdate(_id,{status})
    .then(()=>res.set(201).send("Status Updated successfully.."))
}

module.exports.getTasksAlphabetically=async (req,res)=>{
    const tm = await TaskManagerModel.find({},null,{sort:{text:1}});
    res.send(tm);
    }
 module.exports.pendingTasks= async (req,res)=>{
        const tm = await TaskManagerModel.find().where("status").equals("pending");
        res.send(tm);
        }
  module.exports.completedTasks= async (req,res)=>{
            const tm = await TaskManagerModel.find().where("status").equals("completed");
            res.send(tm);
            }
module.exports.TasksaccordingtodueDate=async (req,res)=>{
                const tm= await TaskManagerModel.find().sort({date:'asc'});
                res.send(tm);
                }



