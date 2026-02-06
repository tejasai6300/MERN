import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
const Todo = () => {
    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([])
    const [editing,setEditing]=useState(null);
    const API = "http://localhost:3000"

    const fetchData=async(req,res)=>{
       const responce = await axios.get(`${API}/api/todo`)
       setTodos(responce.data);
    }
    useEffect(()=>{
        fetchData();
    },[]);
    const handleAddOrUpdate= async (e)=>{
        e.preventDefault();
        if(editing!==null){
         await axios.put(`${API}/api/todo/update/${editing}`,{task})
          setEditing(null);

        }else{
           
            await axios.post(`${API}/api/todo/create`,{task})
        }
        setTask("");
        fetchData();
       
    };
    const handleDelete= async(id)=>{
        await axios.delete(`${API}/api/todo/delete/${id}`)
        fetchData();
    };
    const handleToggleComplete= async(todo)=>{
        await axios.put(`${API}/api/todo/update/${todo._id}`,{completed:!todo.completed})
        fetchData();
    };
    const handleEdit=(todo)=>{
        setTask(todo.task);
        setEditing(todo._id);
    }
    
    return (
        <div>
            <h1>Todo</h1>
            <form>
                <input type="text" placeholder='Enter the task' value={task} onChange={(e)=>setTask(e.target.value)}/>
                <button onClick={handleAddOrUpdate}>{editing!==null? "Update":"Add"}</button>
    
            </form>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo._id}>
                    <span style={{cursor:"pointer",textDecoration:todo.completed?"line-through":"none"}} onClick={()=>handleToggleComplete(todo)}>{todo.task}</span>
                    <button onClick={()=>handleEdit(todo)}>Edit</button>
                    <button onClick={()=>handleDelete(todo._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Todo;