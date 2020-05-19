import React from 'react';
import Header from "../src/components/Header/Header"
import Employee from "../src/containers/EmployeeContainer/Employee"

function App() {

  const style = {
    fontFamily: "'Satisfy', cursive",
    background: "black",
    color: "white",
}
  return (
    <div style={style}>
      <Header/>
      <Employee/>
    </div>
  );
}

export default App;
