import { useEffect } from "react";
const Counter =({count , data})=>{
    const handleCounter=()=>{
        console.log("  called handleCounter");
    }
    const handleData=()=>{
        console.log("  called handleCounter");
    }
    useEffect (()=> {
        
        handleCounter();
    },[])
    useEffect(()=>{
        handleData();

    }, [count, data ])
   
    return(
        <div>
            <h1>Counter value  {count} </h1>
            <h1>data Value  {data} </h1>
            

        </div>
    )

}
export default Counter;