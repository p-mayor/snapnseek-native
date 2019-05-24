// import { combineReducers } from "redux";
// import { connectRouter } from "connected-react-router";
// // import targets from "./targets";
// // import guesses from "./guesses";
// // import users from "./users";

import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/index";
import { combineReducers } from "redux";

// import { DATA_AVAILABLE } from "../actions/"; //Import the actions types constant we defined in our actions

let dataState = { username: "", password: "" };

const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginLoading: true,
        loginError: null
      };
    case LOGIN_SUCCESS:
      return { ...state, login: action.payload, loginLoading: false };
    case LOGIN_FAIL:
      return { ...state, loginError: action.payload, loginLoading: false };
    default:
      return state;
  }
};

// Combine all the reducers
const rootReducer = combineReducers({
  dataReducer
  // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
});

export default rootReducer;
