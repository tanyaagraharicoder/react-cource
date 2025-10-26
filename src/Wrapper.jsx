function Wrapper ({children, color="yellow" }) {
 
    return(
        <div style={ {color:color, border: "5px solid green " , width: "400px" , margin: "10px " , padding: "10px" , borderRadius: "40px" } }>
            {children}
         
           
        </div>
    )
}
export default Wrapper