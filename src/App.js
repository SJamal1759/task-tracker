
import { useState } from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';

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
  
  return (
    <div className="container">
     <Header/>
     <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
