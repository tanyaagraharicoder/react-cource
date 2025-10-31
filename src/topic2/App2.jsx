import { useEffect, useState } from "react";

function App2() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    // callOnce();
    counterFunction();
  }, [counter]);
  function counterFunction(){
    console.log(" Counter Function called",  counter);

  }

  function callOnce() {
    console.log(" callonce Function called");
  }


  return (
    <>
      <h1>useEffect hook </h1>
      <button onClick={() => setCounter(counter + 1)}>
        {" "}
        Counter {counter}{" "}
      </button>
      <button onClick={() => setData(data + 1)}>Data {data} </button>
    </>
  );
}
export default App2;
