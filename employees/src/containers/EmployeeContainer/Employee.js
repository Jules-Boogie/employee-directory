// make this a stateful class

import React, { Component } from 'react'
import Wrapper from "../../hoc/wrapper"
import API from "../../utils/API"
import SearchForm from "../../components/SearchBox/Search"
import Table from "../../components/Table/Table"
// import TableContainer from "../../containers/Table/TableContainer"
// import Tablehead from "../../components/Table/Tablehead"

const style = {
    fontFamily: "'Satisfy', cursive",
    background: "black",
    color: "white",
}
class Employee extends Component {


    
    // declare state
    state = {
        employee: [],
        search: ""
    }

    componentDidMount() {
        this.getEmployee();

    }

    getEmployee = () => {
        API.populateEmployee()
            .then(res => {

                console.log(res.data.results)
                this.setState({
                    employee: res.data.results.map(employee => ({
                        Image: employee.picture.thumbnail,
                        firstName: employee.name.first,
                        lastName: employee.name.last,
                        Phone: employee.phone,
                        Email: employee.email,
                        Country: employee.location.country

                    }))
                })
            })
            .catch(error => console.log(error))
        

    }


    handleInputChange = (event) => {

        const value = event.target.value;

        this.setState({
            search: value
        })  

        
    }
   handleSearchField = (event) =>{
         event.preventDefault(); 
         var searchResult = this.state.employee.filter(person => person.firstName.toLowerCase() === this.state.search)
                this.setState({
                    employee: searchResult
                })
     }

     

    // searchValue = (search) =>{
    //    var searchResult = this.state.employee.filter(person => person.firstName === search
    //     )
    //     this.setState({
    //         employee: searchResult
    //     })
    // }

    render() {
        
        return (
            <Wrapper style={style}>
                {/* employee component */}
                < SearchForm
                    Value={this.state.search}
                    Change={this.handleInputChange}
                    Test={this.state.search}
                    clicked={this.handleSearchField}
                >

                </SearchForm >
                <table className="table table-hover table-dark" >
                <thead style={style}>
                <tr>
                    <th scope="col">Image </th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Location</th>
                </tr>
            </thead>
                {this.state.employee.map((personInfo,id) => {
                    return(
                        <Table key={id}
                            Image={personInfo.Image}
                            firstName={personInfo.firstName}
                            lastName={personInfo.lastName}
                            Phone={personInfo.Phone}
                            Email={personInfo.Email}
                            Country={personInfo.Country}
                        >
                        </Table>
                    )

                    })}
                </table>
                




            </Wrapper >



        )


    }

}

export default Employee;