

function App() {
  const userName=['Anil','Sunil','Kiran','Ravi','Ramesh'];
  const userData=[
    {name :'Anil', age :67, email: "swqdwe.com",id: 1 },
    {name :'Sunil', age :34, email: "asdasd.com",id: 2 },
    {name :'Kiran', age :23, email: "zxcxz.com",id: 3 },
    {name :'Ravi', age :45, email:" qweqwe.com",id: 4 },
    {name :'Ramesh', age :29, email:" asdasd.com",id: 5 },
  ]



  return (
    <>
    <h1> Loop in jsx with Map function</h1>

     <table border={1} style={{margin:'auto'}}>
      <thead>
        <tr>
          <td> id</td>
          <td> name </td>
          <td> email </td>
          <td> age </td>

        </tr>
      </thead>
      <tbody>
       {
        userData.map((user)=>(
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
          </tr>
        ))
       }
      </tbody>
     </table>
    </>
  );
}

export default App;
