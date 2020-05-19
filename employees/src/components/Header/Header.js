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
<h4> Click on the Filter Button or Input Name into Search Boc to Narrow Search  </h4>
 </div>

)


}

export default header;