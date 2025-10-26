import { useState } from "react";

function CheckBox() {
  const [skills, setSkills] = useState([]);

  const handleSkills = (event) => {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  return (
    <div>
      <h1>Select Your Skills</h1>

      <label htmlFor="php">PHP</label>
      <input
        onChange={handleSkills}
        type="checkbox"
        id="php"
        value="PHP"
      />
      <br /> <br />

      <label htmlFor="js">Js</label>
      <input
        onChange={handleSkills}
        type="checkbox"
        id="js"
        value="Js"
      />
      <br /> <br />

      <label htmlFor="node">Node</label>
      <input
        onChange={handleSkills}
        type="checkbox"
        id="node"
        value="Node"
      />
      <br /> <br />

      <label htmlFor="java">Java</label>
      <input
        onChange={handleSkills}
        type="checkbox"
        id="java"
        value="Java"
      />
      <br /> <br />

      <h3>Selected Skills:</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default CheckBox;
