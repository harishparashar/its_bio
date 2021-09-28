import Helper from '../../Common Pages/Constants/helper';
import apiPath from '../../Common Pages/Constants/apiPath'
import Swal from 'sweetalert2';
import { navigate } from 'gatsby-link';
import { CONFIRM_LOGIN_ACTION, CONFIRM_SIGNUP_ACTION } from './AllAction';




const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

export function LoginAction(email, password) {
  return async(dispatch) => {
          let postJson = {
           companyemail: email,
           password: password,
         };
       let path = apiPath.login;
      const fr = await Helper.post(postJson, path);
      const res = fr.response.data;
      if (res.success === true) {
        Toast.fire({
          type: "success",
          title: res.message,
        });
        localStorage.setItem("token" ,res.token)
        navigate('/')
      } else {
        Toast.fire({
          type: "error",
          title: res.message,
       });
      } 
      dispatch(confirmedLoginAction(res))
  }
}

export function SignupAction(acconttype, companyname,compemail,linkdin,country,password,confirempassword) {
  return async(dispatch) => {
          let postJson = {
            accounttype: acconttype,
            companyname: companyname,
            companyemail:compemail,
            linkedin:linkdin,
            country:country,
            password:password,
            confirmpassword:confirempassword,
         };
       let path = apiPath.signUp;
      const fr = await Helper.post(postJson, path);
      const res = fr.response.data;
      console.log(res)
      if (res.success === true) {
        Toast.fire({
          type: "success",
          title: res.message,
        });
        navigate('/')
      } else {
        Toast.fire({
          type: "error",
          title: res.message,
       });
      } 
      dispatch(confirmedsignupAction(res))
  }
}


export function confirmedLoginAction(payload) {
  return {
    type: CONFIRM_LOGIN_ACTION,
    payload,
  }
}

export function confirmedsignupAction(payload) {
  return {
    type: CONFIRM_SIGNUP_ACTION,
    payload,
  }
}
