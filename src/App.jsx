
import  {useState} from 'react'
import Counter from './Counter'
function App() {
  const[  fruits, setFruits]= useState("appple")

  
  const handlefruit=()=>{
    setFruits("banana")
  }
  return (
    <>
    <h1> state in react </h1>
    <h2> fruit is : {fruits} </h2>
    <button onClick={handlefruit}> change Fruit Name  </button>
    <Counter/>


    
    

    </>
  )
  

 
    
}


  
export default App
