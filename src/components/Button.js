

const Button = ({color,text}) => {
  const onClick = (onClick) => {
    console.log('clicked')
  }
  return <button onClick = {onClick}style={{backgroundColor:color}}className='btn'>Add</button>
  
    
}

export default Button;