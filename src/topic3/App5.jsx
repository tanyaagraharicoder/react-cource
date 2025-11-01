import { useState } from "react";
function App5() {
  const [cardStyle, setCardStyle] = useState({
    border: "1px solid #ccc",
    width: "300px",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0 0 10px #ccc",
    backgroundColor: "white",
    color: "black",
  });
  const [textColor, setTextColor] = useState("black");
  const [grid, setGrid] = useState(false);


   const toggleLayout = () => {
    setGrid(!grid);
  };



  const updateTheme = (bgColor, textColor) => {
    setCardStyle({
      ...cardStyle,
      backgroundColor: bgColor,
        color: textColor,
    });
  };

  return (
    <>
      <h1 style={{ color: "red" }}>Dynamic and Conditional Inline Style</h1>
      <button onClick={() => updateTheme("grey", "green ")}>
        {" "}
        Gray Theme{" "}
      </button>
      <button onClick={() => updateTheme("white", "black ")}>
        {" "}
        default Theme{" "}
      </button>
     <button onClick={toggleLayout} style={{ marginLeft: "10px" }}>
          Toggle Layout
        </button>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <img
            style={{ width: "200px", borderRadius: "10px" , color: textColor }}
            src="https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=is&k=20&c=qoSqKizQmeP0RByR-ARGs6W7JqVkNO17LlnXG_l6sc0="
            alt="Tanya Agrahari"
          />
          <div>
            <h4>Tanya Agrahari</h4>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
      <div style={{
          display: grid ? "grid" : "flex",
          gridTemplateColumns: grid ? "repeat(3, 1fr)" : "none",
          flexWrap: grid ? "nowrap" : "wrap",
          gap: "20px",
          justifyContent: "center",
        }}>
        <div style={cardStyle}>
          <img
            style={{ width: "200px", borderRadius: "10px" , color: textColor }}
            src="https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=is&k=20&c=qoSqKizQmeP0RByR-ARGs6W7JqVkNO17LlnXG_l6sc0="
            alt="Tanya Agrahari"
          />
          <div>
            <h4>Tanya Agrahari</h4>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
      <div style={{ display: grid? "flex " : "block", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <img
            style={{ width: "200px", borderRadius: "10px" , color: textColor }}
            src="https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=is&k=20&c=qoSqKizQmeP0RByR-ARGs6W7JqVkNO17LlnXG_l6sc0="
            alt="Tanya Agrahari"
          />
          <div>
            <h4>Tanya Agrahari</h4>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <img
            style={{ width: "200px", borderRadius: "10px" , color: textColor }}
            src="https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=is&k=20&c=qoSqKizQmeP0RByR-ARGs6W7JqVkNO17LlnXG_l6sc0="
            alt="Tanya Agrahari"
          />
          <div>
            <h4>Tanya Agrahari</h4>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <img
            style={{ width: "200px", borderRadius: "10px" , color: textColor }}
            src="https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=is&k=20&c=qoSqKizQmeP0RByR-ARGs6W7JqVkNO17LlnXG_l6sc0="
            alt="Tanya Agrahari"
          />
          <div>
            <h4>Tanya Agrahari</h4>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <img
            style={{ width: "200px", borderRadius: "10px" , color: textColor }}
            src="https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=is&k=20&c=qoSqKizQmeP0RByR-ARGs6W7JqVkNO17LlnXG_l6sc0="
            alt="Tanya Agrahari"
          />
          <div>
            <h4>Tanya Agrahari</h4>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <img
            style={{ width: "200px", borderRadius: "10px" , color: textColor }}
            src="https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=is&k=20&c=qoSqKizQmeP0RByR-ARGs6W7JqVkNO17LlnXG_l6sc0="
            alt="Tanya Agrahari"
          />
          <div>
            <h4>Tanya Agrahari</h4>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <img
            style={{ width: "200px", borderRadius: "10px" , color: textColor }}
            src="https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=is&k=20&c=qoSqKizQmeP0RByR-ARGs6W7JqVkNO17LlnXG_l6sc0="
            alt="Tanya Agrahari"
          />
          <div>
            <h4>Tanya Agrahari</h4>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App5;
