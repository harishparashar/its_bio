import Helper from '../../Common Pages/Constants/helper'
import apiPath from '../../Common Pages/Constants/apiPath'
import Swal from 'sweetalert2';
import { CONFIRM_PROFILE_ACTION,UPDATE_PROFILE_ACTION } from './AllAction';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

export function ProfileAction() {
  return async(dispatch) => {
    let path = apiPath.user_Profile;
    let fr = await Helper.get(path);
    const res = fr.response.data[0]; 
    let data = {...res} 
    if (data.success === true) {     
    } else {
        Toast.fire({
            type: "error",
            title: data.message,
        });
    }
      dispatch(confirmProfileAction(data))
  }
}

export function confirmProfileAction(payload) {
    return {
      type: CONFIRM_PROFILE_ACTION,
      payload,
    }
  }


