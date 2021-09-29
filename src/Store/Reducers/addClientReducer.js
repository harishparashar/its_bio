import { CONFIRM_ADD_CLIENT_ACTION } from "../Actions/AllAction";

const AddClientState = {
    id: {
      id: "",
    },
  }
  
  const AddClientReducer = (state = AddClientState, action) => {
    // console.log("action",action);
    // console.log("state",state);
    if (action.type === CONFIRM_ADD_CLIENT_ACTION) {
      return {
        ...state,
        id: action.payload,
      }
    }
    return state
  }
  
  export default AddClientReducer;