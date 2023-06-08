import axios from 'axios'
// const baseUrl ="http://localhost:5000"; //for local development
const baseUrl ="https://taskmanage-rbackend.onrender.com"; //for Cloud 
const getTasks=(setTask)=>{
axios
.get(baseUrl)
.then(({data})=>{
    console.log('data--->',data);
    setTask(data);
})

}
const addTask=(text,setText,date,setDate,status,setStatus,setTask)=>{
axios.post(`${baseUrl}/save`,{text},{date},{status})
.then((data)=>{
    console.log(data);
    setText("");
    setDate("");
    setStatus("");
    getTasks(setTask)
})
}
const updateTask=(taskId,text,setText,date,setDate,status,setStatus,setTask,setIsupdating)=>{
    axios.post(`${baseUrl}/update`,{ _id: taskId, text,date,status})
    .then((data)=>{
        console.log(data);
        setText("");
        setDate("");
        setStatus("");
        setIsupdating(false)
        getTasks(setTask)
})
.catch((err)=>console.log(err))
}

export {getTasks,addTask,updateTask}