import Helper from '../../Common Pages/Constants/helper';
import apiPath from '../../Common Pages/Constants/apiPath'
import Swal from 'sweetalert2';
import { CONFIRM_PROFILEPIC_ACTION } from './AllAction';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});



export function ProfilePicAction(img) {
  return async(dispatch) => {
    var bodyFormData = new FormData();
    bodyFormData.append('profilepic', img);
       let path = apiPath.profilePic;
      const fr = await Helper.formpost(bodyFormData, path);
      console.log("fr",fr)
      const res = fr.response.data;
      console.log("res",res)
      if (res.success === true) {
        Toast.fire({
          type: "success",
          title: res.message,
        });
      } else {
        Toast.fire({
          type: "error",
          title: res.message,
       });
      } 
      dispatch(confirmProfilePicAction(res))
  }
}

export function confirmProfilePicAction(payload) {
    return {
      type: CONFIRM_PROFILEPIC_ACTION,
      payload,
    }
  }

