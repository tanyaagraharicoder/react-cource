import User from "./User";


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
    <h1> reuse componnet in loops </h1>
    {
      userData.map((user)=>(
        <div  key={user.id}> 
          <User user= {user}/>
       </div>
      ))
    }
   
    </>
  );
}

export default App;
