import React from 'react';
import Tablehead from '../../components/Table/Tablehead'


const style = {
    fontFamily: "'Satisfy', cursive",
    background: "grey",
    color: "white",
}

function table(props){
return (

  
    <tr style={style}>
    <td scope="row"><img src={props.Image}></img></td>
    <td >{props.firstName} {props.lastName}</td>
    <td >{props.Phone}</td>
    <td >{props.Email}</td>
    <td >{props.Country}</td>
      
    </tr>
   
    
  

)
}


export default table;