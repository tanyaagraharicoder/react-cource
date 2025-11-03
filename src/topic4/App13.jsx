import { useRef } from "react";
import UserInput from "./UserInput";
function App13(){
    const inputRef= useRef(null);
    const updateInput=()=>{
        inputRef.current.value= 100;
        inputRef.current.focus();

    }
    return(
        <>
        <h1> forward Ref</h1>
        <input type="text " ref={inputRef}/>
        <UserInput rf={inputRef}/>
        <button onClick={updateInput}>  update input field</button>

        </>
    )
}
export  default App13