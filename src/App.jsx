import CheckBox from "./Checkbox";
import { useState } from "react";

function App() {
  const [gender, setGender] = useState("male");
  const [city, setCity] = useState("noida");

  return (
    <>
      <h1> Handle Radio and dropdown </h1>
      <h1> select gender</h1>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        value={"male"}
        checked={gender == "male"}
        name="gender"
        id="male"
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        name="gender"
        onChange={(event) => setGender(event.target.value)}
        value={"female"}
        checked={gender == "female"}
        id="female"
      />
      <label htmlFor="female"> Female</label>
      <h2> seleted gender : {gender}</h2>
      <select defaultValue={"noida"} onChange={(event)=> setCity(event.target.value)}>
        <option value="bnaras">bnaras</option>
        <option value="jaunpur">jaunpur</option>
        <option value="noida">Noida</option>
        <br /> <br />
      </select>
        <h2>selected city:{city}</h2>
    </>
  );
}

export default App;
