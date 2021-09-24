import axios from "axios";

const url = process.env.GATSBY_API_URL
  
export function login (companyemail,password){

    const postData = {
        companyemail,password
    }
    return axios.post(`${url}/signin`,postData)
}