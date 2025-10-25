function User ({user}) {
 
    return(
        <div>
            <h1> User Component </h1>
            <h2>{user.name}</h2>
            <h2>{user.age}</h2>
            <h2>email: {user.email}</h2>
        </div>
    )
}
export default User