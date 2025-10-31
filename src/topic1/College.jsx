import Student from "./Student";
const College = ({ college }) => {
  return (
    <>
      <div
        style={{
          border: "2px solid black",
          margin: "10px",
          padding: "10px",
          backgroundColor: "lightgray",
         
        }}
      >
        <h1> Name : {college.name}</h1>
        <ul>
          <li>
            <h3> City : {college.city}</h3>
          </li>
          <li>
            <h3> Website : {college.website}</h3>
          </li>
          <Student student ={college.student} />
          
        </ul>
      </div>
    </>
  );
};
export default College;
