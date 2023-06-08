import React from 'react'
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"
function TaskManager  ({text,date,status,updateMode,deleteTask}) {
  return (
    < div className="Taskmanager">
        <div className="text">{text}</div>
        <div className='text'>{date}</div>
        <div className='text'>{status}</div>

     < div className="icons">
    <BiEdit className='icon' onClick={updateMode}/>
    <AiFillDelete className='icon' onClick={deleteTask}/>
     </div>
    </div>
    )
}

export default TaskManager;

