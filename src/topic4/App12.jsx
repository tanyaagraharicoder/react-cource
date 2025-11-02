import User from "./User";

function App12() {
  const displayName = (name) => {
    alert(name);
  };
  const getUser=()=>{
    alert("get user function called ")
  }

  return (
    <>
      <h1>Call Parent Component Function from Child Component</h1>

      <User displayName={displayName} name="Tanya Agrahari" onClick={getUser} />
      <User displayName={displayName} name="Riya Sharma" onClick={getUser} />
      <User displayName={displayName} name="Ananya Gupta"  onClick={getUser}/>
      <User displayName={displayName} name="Neha Verma"onClick={getUser} />
    </>
  );
}

export default App12;
