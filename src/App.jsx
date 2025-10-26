import { useState } from "react";

function App() {
  const[val , setVal]= useState("Tanya Agrahari");
  return(
    <>
    <h1> Get Input field Value</h1>
    <input type="text" value={val} onChange={(event )=> setVal(event.target.value)} placeholder=" Enter User name " />
    <h2> User Name is : {val} </h2>
    <button onClick={()=> setVal("")}> clear value</button>

    </>

  ) 
}

export default App;
