import { useRef } from "react";
function App10(){
    const inputRef = useRef(null);
    const inputHandler=()=>{
        console.log(inputRef)
        inputRef.current.focus()
        inputRef.current.style.border="2px solid red"
        inputRef.current.style.color ="red"
        inputRef.current.placeholder="enter your name here"
        inputRef.current.value="123"


    }
    const toggleHandler=()=>{
        if(inputRef.current.style.display!="none"){
            inputRef.current.style.display="none"
        }else{
            inputRef.current.style.display="inline"



    }
}



    return (
        <>
        <h1> UseRef</h1>
        <button onClick={toggleHandler}>toggle</button>
        <input  ref={inputRef}type="text" placeholder="Enter User Name " />
        <button onClick={inputHandler}> Focus on input field</button>

        </>
    )
}
export default App10;