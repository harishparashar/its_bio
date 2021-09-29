import { CONFIRM_SIGNUP_ACTION } from "../Actions/AllAction"

const InitialState = {
  auth: {
    data:'',
  },
}

const signupReducer = (state = InitialState, action) => {
    console.log("action",action)
  if (action.type === CONFIRM_SIGNUP_ACTION) {
    return {
      ...state,
      auth: action.payload,
    }
  }
  return state
}

export default signupReducer;




