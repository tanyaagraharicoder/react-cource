import { useState } from 'react';

function App() {
  const [ name, setName]= useState("");
  const [ password, setPassword]= useState("");
  const [ email, setEmail]= useState("");
 
  return(
    <>
    <h1>Controller Component </h1>
    <form action="" method="get">
      <input type="text" value={name  } onChange={(event)=> setName(event.target.value)} placeholder="Enter Value" />
      <br /> <br />
      <input type="password" value={password}  onChange={(event)=>setPassword(event.target.value)} placeholder="Enter password" />
      <br /> <br />
      <input  value={email} type="text" onChange={(event)=>setEmail(event.target.value)} placeholder="Enter email" />
      <br /> <br />
      <button>submit</button>
      <button type="button"  onClick={() => { setEmail(''); setPassword(''); setName(''); }}>
  Clear
</button>

      <h3>{name}</h3>
      <h3>{password}</h3>
      <h3>{email}</h3>
    </form>
    

    </>

  ) 
}

export default App;
