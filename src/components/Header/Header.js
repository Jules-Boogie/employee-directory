import React from 'react';


function header(){
const style ={
    fontFamily: "'Satisfy', cursive",
    background: "grey",
    color: "white",
    textAlign:"center"
}

return(
 <div style={style} >
<h1> Employee Directory  </h1>
<h4> Click on the Name and Age Buttons to Filter by Employee by Name or Age. Also use the search button for a specific user by thier first name.  </h4>
 </div>

)


}

export default header;