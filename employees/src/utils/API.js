import axios from 'axios';


export default {

    populateEmployee: function(){
        return axios.get("https://randomuser.me/api/?results=500")
    }
}