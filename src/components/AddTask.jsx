import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

const AddTask = ({value :{todos, setTodos, newTask, setNewTask}}) => {

    function handleInput(event){
        setNewTask(event.target.value);

    }

    function handleAddTask(){
      if(newTask.trim() != ""){
        setTodos((todos) => [...todos, {task: newTask, id: uuidv4(), isCompleted: false}])
        setNewTask("")
      }else{
        alert("Enter the task first")
      }
    }

  return (
    <div id='search'>
        <input type="text"  value={newTask}  onChange={handleInput} placeholder="Enter a task"/>
        <Button onClick={handleAddTask} variant='contained' id='add' startIcon={<AddIcon/>} >Add</Button>
    </div>
  )
}

export default AddTask