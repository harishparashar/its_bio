import Helper from '../../Common Pages/Constants/helper';
import apiPath from '../../Common Pages/Constants/apiPath'
import Swal from 'sweetalert2';
import { navigate } from 'gatsby-link';
import { CONFIRM_EDIT_PROFILE_ACTION } from './AllAction';
import { ProfileAction } from './ProfileAction';




const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

export function EditProfileAction(companyname,companytype,location,aboutus) {
  return async(dispatch) => {
          let postJson = {
            companyname: companyname,
            companytype: companytype,
            location:location,
            aboutus:aboutus
         };
       let path = apiPath.updateProfile;
      const fr = await Helper.posts(postJson, path);
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
      dispatch(confirmedEditProfileAction(res))
  }
}



export function confirmedEditProfileAction(payload) {
  return {
    type: CONFIRM_EDIT_PROFILE_ACTION,
    payload,
  }
}
