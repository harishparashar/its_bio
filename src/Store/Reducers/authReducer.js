
import { CONFIRM_LOGIN_ACTION} from "../Actions/AuthAction"

const InitialState = {
  auth: {
    token: "",
    msg:'',
  },
}

const AuthReducer = (state = InitialState, action) => {
  if (action.type === CONFIRM_LOGIN_ACTION) {
    return {
      ...state,
      auth: action.payload,
    }
  }
  return state
}

export default AuthReducer;




