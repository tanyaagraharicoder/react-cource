const User =({user})=>{
    return (
        <div style={{
            border:"1px solid red",
            padding:"10px",
            margin:"11px",
            width:"400px",
            borderRadius:"10px"

        }}>
            <h3 > Name : <span style={{color: "green"}}>  {user.name }</span></h3>
            <h3 > Age : <span style={{color: "green"}}>  {user.age }</span></h3>
            <h3 > email : <span style={{color: "green"}}>  {user.email }</span></h3>
           
        </div>
    )
}
export default User;