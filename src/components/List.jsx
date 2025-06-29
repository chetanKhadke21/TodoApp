import React from 'react'
import "../App.css"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const List = ({value:{todos, setTodos, newTask, setNewTask}}) => {

  function handleDelete(id){

    setTodos( todos.filter((todo) => ( todo.id != id )))

  }

  function handleTaskState(task){
    setTodos((todos) => {
        return todos.map((todo) => {
          if(todo.id === task.id){
          return {...todo, isCompleted : !todo.isCompleted}
        }

        return todo;
      })
    })
  }

  function handleMarkAllDone(){
    setTodos((todos => {
      return todos.map((todo) => ({...todo, isCompleted : true }))
  }))
  }

  return (
    <div>
      {
        todos.map((todo) => (
          <li key={todo.id} style={{textDecoration :todo.isCompleted ? "line-through" : ""}}> {todo.task} <Button sx={{ mx: 3 }} variant="contained" startIcon={<DeleteIcon/>} onClick={() => handleDelete(todo.id)} className='btn'>Delete</Button> {todo.isCompleted ? <Button onClick={() => handleTaskState(todo)} variant="contained" color="success" className='btn'>Done</Button> : <Button onClick={() => handleTaskState(todo)} variant="outlined" color="error" className='btn'>Pending</Button>}</li>
        ))
      }
      { todos.length > 0 ? <Button id='allDone' onClick={handleMarkAllDone} variant='contained' startIcon={<DoneAllIcon/>}>Mark All Done</Button> : "" }

      
      
    </div>
  )
}

export default List