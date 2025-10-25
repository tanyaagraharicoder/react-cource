
import  {useState} from 'react'
import User from './User.jsx'

function App() {
  const [ display , setDisPlay]= useState(false);
  
  return (
    <>
    <h1> Toggle in react js </h1>
    <button  onClick={()=> setDisPlay(!display)}>  toggle </button>
    {/* {
      display? <h1> Tanya Agrahari</h1>: null
    }
    */}
    {/*  note here  in jsx expression like the conditional render must be inside curly braces {},  otherwise react will treat them as plain tet a d not javascript */}
    {

    display ? <User/>: null
    }

  
    </>
  )
  

 
    
}


  
export default App
