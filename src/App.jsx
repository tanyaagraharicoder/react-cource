

 const fruit=( name)=>{
    alert(name)
  }

function App() {
  function callFun(){
    alert("function called")
  }
  const fruit=( name)=>{
    alert(name)
  }
 

  return (
    <>
    <h1> event and function </h1>
    {/*  here we just pass function defition of callFun because onClick don not work with function call like callFun() */}
    <button onClick={callFun}> click here</button>
    {/*  here we take an exaple ike if we have to  pass paameter then we use it like this  */}
    <button onClick={()=>fruit("apple")}> apple </button>

   


 
    </>
  )
}


  
export default App
