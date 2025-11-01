import Counter from "./Counter";
import { useState } from "react";

function App3() {
    const[count, setCount]=useState(0);
    const [data, setData]= useState (0);
    return(
        <>
        
        <Counter count = {count } data = {data }/>
        <button  onClick={()=> setCount(count+1) }>counter  :  {count} </button>
        <button onClick = {()=> setData(data+1)}> data :{data }</button>



        </>
    )
}
export default App3;