import { useRef } from "react";

function App() {
  const userRef = useRef();
  const passwordRef = useRef();

  // Using querySelector (not recommended in React)
  const handleForm = (event) => {
    event.preventDefault();
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;
    console.log("Without useRef:");
    console.log("Username:", user);
    console.log("Password:", password);
  };

  // Using useRef (React way)
  const handleFormRef = (event) => {
    event.preventDefault();
    const user = userRef.current.value;
    const password = passwordRef.current.value;
    console.log("With useRef:");
    console.log("Username:", user);
    console.log("Password:", password);
  };

  return (
    <>
      <h1>Uncontrolled Component (Normal)</h1>
      <form onSubmit={handleForm}>
        <input type="text" id="user" placeholder="Enter username" />
        <br />
        <br />
        <input type="password" id="password" placeholder="Enter password" />
        <br />
        <button type="submit">Submit</button>
      </form>

      <hr />

      <h1>Uncontrolled Component (with useRef)</h1>
      <form onSubmit={handleFormRef}>
        <input ref={userRef} type="text" placeholder="Enter username" />
        <br />
        <br />
        <input ref={passwordRef} type="password" placeholder="Enter password" />
        <br />
        <button type="submit">Submit with Ref</button>
      </form>
    </>
  );
}

export default App;
