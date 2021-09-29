import { CONFIRM_PROFILE_ACTION } from "../Actions/AllAction";

const AddClientState = {
    Userprofile: {
      data: "",
    },
  }
  
  const ProfileReducer = (state = AddClientState, action) => {
    // console.log("state",state);
    if (action.type === CONFIRM_PROFILE_ACTION) {
      return {
        ...state,
        data: action.payload,
      }
    }
    return state
  }
  
  export default ProfileReducer;