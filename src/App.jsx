import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import AddTask from './components/AddTask'
import List from './components/List'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import BedtimeOffIcon from '@mui/icons-material/BedtimeOff';

function App() {

  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [theme, setTheme] = useState(false);

  function changeTheme(){
    setTheme((theme) => !theme);
    console.log(theme)
  }

  useEffect(() => {
    document.body.style.backgroundColor = theme ? "#121212" : "#798c9b"; 
  }, [theme])
  

  return(
    <div>
      <h1>Listify</h1>
      <Button variant='contained' onClick={changeTheme}  startIcon={theme ? <BedtimeOffIcon/> : <DarkModeIcon/>}>Change Theme</Button>
      <div id='content'>
        <AddTask value={{todos, setTodos, newTask, setNewTask}}/>
        <List value={{todos, setTodos, newTask, setNewTask}}/>
      </div>
    </div>
  )
}

export default App
