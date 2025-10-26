import User from "./User";
import Wrapper from "./Wrapper";

function App() {
  return(
    <>

    <h1> props in react js </h1>
    <Wrapper color="blue">
         <h1> hello everyyOne</h1>
    </Wrapper>
    <Wrapper color="purple">
         <h1> whatsapp</h1>
    </Wrapper>
    <Wrapper>
         <h1> hello admin </h1>
         <h2 style={ {color: "red " }}> please login</h2>
    </Wrapper>
    {/* <User name ="Tanya agrhari"/>
    <User /> */}



    </>

  ) 
}

export default App;
