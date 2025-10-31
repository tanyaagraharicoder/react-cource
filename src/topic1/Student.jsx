const Student =({student })=>{
    return(
        <>
        <h3> Student name </h3>
          <li>
            {
                student.map((student)=>(
                    <div>
                        <h4>{student.name}</h4>

                    </div>


                ))
            }
          </li>

        </>
      
           
    )

}
export default Student;