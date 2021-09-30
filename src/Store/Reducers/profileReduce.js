import { CONFIRM_PROFILE_ACTION } from "../Actions/AllAction";

const Userprofile = {
      data:'',

  }
  
  const ProfileReducer = (state = Userprofile, action) => {
    if (action.type === CONFIRM_PROFILE_ACTION) {
      return {
        ...state,
        data: action.payload,
      }
    }
    return state
  }
  
  export default ProfileReducer;

  // switch(action.type){
  //   case "CONFIRM_PROFILE_ACTION" :
  //     return {
  //            ...state,
  //           data: action.payload,
  //         }

  //    default : return state;
  //       }