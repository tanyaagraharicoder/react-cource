import { useState } from "react";
import College from "./college";
import Student from "./Student";
import User from "./User";


function App() {
  let userObject={
    name:"Tanya Agrahari",
    age:23,
    email:"sddg#EXXD"
  }
  let userObject2={
    name:"shivam Agrahari",
    age:23,
    email:"sddg#xsfeEXXD"
  }
  let userObject3={
    name:"shivam Agrahari",
    age:23,
    email:"sddg#xsfeEXXD"
  }


  let collegeName=['as','wd','ssda','sdss']
  const [student,setStudent]=useState();


  return (

    <>
    {
      student && <Student name  = {student}/>
    }
    <button onClick={()=>setStudent('Tanya agrahari')}>update name</button>
    
    <College name ={collegeName[0]}/>
    <College name ={collegeName[1]}/>
    <College name ={collegeName[2]}/>
      <h1>props in react</h1>
      {/* <User name="Tanya Agrahari" age ={ 23} email={"sddg#EXXD"} /> */}
      <User  user={userObject}/>
     <hr />
      <User  user={userObject2}/>
     <hr />
      <User  user={userObject3}/>
    </>
  );
}

export default App;
