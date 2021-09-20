import { Link ,navigate } from 'gatsby'
import React, { useState } from 'react'
import '../Styles/login.css'
import apiUrl from '../Common Pages/Constants/apiPath'
import helper from '../Common Pages/Constants/helper'
import Swal from 'sweetalert2';
import axios from 'axios'
import '../../node_modules/sweetalert2/dist/sweetalert2.min.css'
import Layout from '../components/layout'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [islogin, setLogin] = useState(false);


    const onSubmit = async e => {
      e.preventDefault();
      axios({
        url: 'https://client-portfolio.herokuapp.com/user/signin', method: 'POST',
        data: { companyemail:email, password:password }
    }).then((res)=>{
console.log("response",res)
         if (res.data.success === true) {
           console.log('hiii this is ++')
          localStorage.setItem("IsLogin", "true");
          localStorage.setItem("token", res.data.token)
           setLogin(true);
           Toast.fire({
            type: "success",
            title: res.data.message,
          });
           navigate('/')
         } else {
           Toast.fire({
             type: "error",
             title: res.data.message,
           });
         }

    })
      // let postJson = {
      //   companyemail: email,
      //   password: password,
      // };    
      // let path = apiUrl.login;
      // const fr = await helper.post(postJson, path);
      // const res = await fr.response.json();   
      //   if (res.status === 'success') {
      //     Toast.fire({
      //       type: "success",
      //       title: res.message,
      //     });
      //     localStorage.setItem("IsLogin", "true");
      //     localStorage.setItem("token", res.data.token)
      //     setLogin(true);
      //   } else {
      //     Toast.fire({
      //       type: "error",
      //       title: res.message,
      //     });
      //   }    
    }

    // if (localStorage.getItem('IsLogin') === "true") {
    //   return (
    //     navigate('/')
    //   )
    // }
   

    return (
        <>
        <Layout>
      <div className="login">
  <div className="container">
    <div className="login_left">
      <img src="https://cdn-clklo.nitrocdn.com/MYSuIlnSDlfpMrNTtwCzrqpXpFLTEsHf/assets/static/optimized/rev-4a01c7f/wp-content/uploads/2019/12/logo-2.png" alt="logo" />
    </div>
    <div className="login_right">
      <div className="top_right">
        <h3>Sign in</h3>
        <p>New user?<Link>Create an account</Link></p>
      </div>
      <div className="input_box">
        <div className="input_text">
          <label>Email Address</label><br />
          <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        <div className="input_text">
          <label>Password</label><br />
          <input type="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        </div>
      </div>
      <div className="button">
        <button type='submit' onClick={onSubmit}>Sign in</button>
      </div>
    </div>
  </div>
</div>

</Layout> 
        </>
    )
}
