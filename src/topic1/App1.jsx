import College from "./College";
function App1() {
  const collegeData = [
    {
      name: "ABC College",
      city: "New York",
      website: "www.abccollege.edu",
      student: [
        {
          name: "John Doe",
          age: 20,
          email: "scasda@asds",
        },
        {
          name: "Mike Johnson",
          age: 21,
          email: "asdasd@asdasd",
        },
        {
          name: "Emily Davis",
          age: 19,
          email: "asdasd@asdasd",
        },
      ],
    },
    {
      name: "XYZ University",
      city: "Los Angeles",
      website: "www.xyzuniversity.edu",
      student: [
        {
          name: "John Doe",
          age: 20,
          email: "scasda@asds",
        },
        {
          name: "Mike Johnson",
          age: 21,
          email: "asdasd@asdasd",
        },
        {
          name: "Emily Davis",

          age: 19,
          email: "asdasd@asdasd",
        },
      ],
    },
    {
      name: "PQR Institute",
      city: "Chicago",
      website: "www.pqrinstitute.edu",
      student: [
        {
          name: "John Doe",
          age: 20,
          email: "scasda@asds",
        },
        {
          name: "Mike Johnson",
          age: 21,
          email: "asdasd@asdasd",
        },
        {
          name: "Emily Davis",
          age: 19,
          email: "asdasd@asdasd",
        },
      ],
    },
  ];
  
  return (
    <div>
      <h1> Nested Looping with component </h1>
      {
        collegeData.map((college, index)=>(
           <div key ={index}>
            <College college ={college} />

            </div>


            
        ))
      }
    

    </div>
  );
}
export default App1;
