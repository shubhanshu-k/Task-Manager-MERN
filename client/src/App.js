import { useEffect, useState } from 'react';
import  './App.css';
import TaskManager from './components/TaskManager';
import { getTasks,addTask } from './utils/HandleApi';
function App() {
  const [Task,setTask]=useState([])
  const [text,setText]=useState("")
  const [isUpdating,setIsupdating]=useState(false)
  const [taskId,setTaskId]=useState("")
  useEffect(()=>{
getTasks(setTask)
  },[])
  const [Date,setDate]=useState("")
  useEffect(()=>{
getTasks(setTask)
  },[])
  const [status,setStatus]=useState("")
  useEffect(()=>{
getTasks(setTask)
  },[])



  return (
    <div className="App">
      <div className="container">
        <h1>TaskManager</h1>
        <div className="top">
<input type="text" placeholder="Enter Task.."
value={text}
onChange={(e)=>setText(e.target.value)}
></input>
 <input type="date" name="date" placeholder="due date"  value={Date}
 onChange={(e)=>setDate(e.target.value)}
 ></input> 
 <input type="radio" id="Choice1" name="status" 
 value={status}
 onChange={(e)=>setStatus(e.target.value)}
 />
      <label for="Choice1">Pending</label>
      <input type="radio" id="Choice2" name="status"  value={status}
      onChange={(e)=>setStatus(e.target.value)} />
      <label for="Choice2">completed</label>
        </div>
        <div className='add' onClick={()=>addTask(text,setText,Date,setDate,status,setStatus,setTask)}>Add</div>
        <div className='list'>
<h2> List of Tasks</h2>
          {Task.map((item)=><TaskManager key={item._id} text={item.text} date={item.date}
          status={item.status}
          />)}

        </div>
      </div>
    </div>
  );
}

export default App;
