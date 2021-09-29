import Helper from '../../Common Pages/Constants/helper';
import apiPath from '../../Common Pages/Constants/apiPath'
import Swal from 'sweetalert2';
import { navigate } from 'gatsby-link';
import { CONFIRM_ADD_CLIENT_ACTION } from './AllAction';
import { useSelector } from 'react-redux';




const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

// const data = useSelector((state)=>{
// console.log("state",state)
// })
// console.log("data",data)
export function EditClientAction(name,technology,description) {
  return async(dispatch) => {
          let postJson = {
            name: name,
            technology: technology,
            description:description
         };
       let path = apiPath.edit_Client;
      const fr = await Helper.postclient(postJson, path);
      const res = fr.response.data;
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
      dispatch(confirmedEditClientAction(res))
  }
}

export function confirmedEditClientAction(payload) {
  return {
    type: CONFIRM_ADD_CLIENT_ACTION,
    payload,
  }
}



