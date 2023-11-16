import React from 'react'

const task = [{
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
}
]
const Tasks = () => {
  return (
    <>
      {Tasks.map((task) =>{
        <h3>{task.text}</h3>
      })}
    </>
  )
}

export default Tasks