
import { useState } from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks,setTasks] = useState([
    {
        id:1,
        text:'school homework',
        day:'Feb 5th at 3:20pm',
        reminder:true,
      },
      {
        id:2,
        text:'office work',
        day:'Feb 5th at 3:20pm',
        reminder:true,
      },
      {
        id:3,
        text:'kids holiday homework',
        day:'Feb 5th at 3:20pm',
        reminder:false,
      },
    ])
  // Delete task
  const deleteTask=(id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  //Toggle Reminder
  const toggleReminder = (id) => {
     setTasks(
      tasks.map((task) => 
      task.id === id ? {...task, reminder:
      !task.reminder } : task
      )
     )
  }
  return (
    <div className="container">
     <Header/>
     <AddTask/>
     {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete ={deleteTask} onToggle = {toggleReminder} />
     ):('No Tasks To Display')
     }
    </div>
  );
}

export default App;
