import { CONFIRM_PROFILEPIC_ACTION } from "../Actions/AllAction";

const AddClientState = {
    profilePic: {
      data: "",
    },
  }
  
  const ProfileImgReducer = (state = AddClientState, action) => {
    // console.log("state",state);
    if (action.type === CONFIRM_PROFILEPIC_ACTION) {
      return {
        ...state,
        data: action.payload,
      }
    }
    return state
  }
  
  export default ProfileImgReducer;