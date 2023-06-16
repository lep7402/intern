
import { Request } from './../interfaces/common';
import { combineReducers } from "@reduxjs/toolkit"
// import { GetNotiResult } from "components/Notification/reducers"
//Reducer sẽ viết khi ghép api
import { AppState } from './type';
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_REGISTER, LOGOUT_FAILURE, LOGOUT_SUCCESS, SIGNIN_FAILURE, SIGNIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_SUCCESS } from './actions';

const userInfoString = localStorage.getItem('userInfo');
const userInfo = userInfoString ? JSON.parse(userInfoString) : null;

 const initialState: AppState = {
  // isLoggedIn: false,
  // email:"",
  // username: localStorage.getItem("username") || "",
  // password: "",
  // repass: ""
  signIn: {
    userInfo: userInfo
  }
};

// function loginReducer(state : AppState= initialState, request: Request<Record<string, unknown>>) {
//   switch (request.type) {
//     case AUTH_LOGIN:
//       if (request.payload && request.payload.success) {
//         return {
//           ...state,
//           isLoggedIn: true,
//           user: request.payload.user,
//         };
//       } else {
//         return {
//           ...state,
//           isLoggedIn: false,
//           user: null,
//         };
//       }
//     default:
//       return state;
//   }
// }
function registerReducer(state = initialState, request: Request<Record<string, unknown>>) {
  switch (request.type) {
    case AUTH_REGISTER:
      return {
        ...state,
      }
    case SIGNUP_FAILURE:
      if (request.payload) {
        return {
          ...state,
          username: "",
          email:"",
          error: request.payload.error,
        };
      }
      return state;
    case SIGNUP_SUCCESS:
      if (request.payload) {
        return {
          ...state,
          username: request.payload.username,
          email:request.payload.email,
          error: null,
        };
      }
      return state;
    default:
      return {
        ...state,
      };
  }
}
function loginReducer(state = initialState, request: Request<Record<string, unknown>>) {
  switch (request.type) {
    case AUTH_LOGIN:
      return {
        ...state,
      }
    case SIGNIN_FAILURE:
      if (request.payload) {
        return {
          ...state,
          username: "",
          error: request.payload.error,
        };
      }
      return state;
    case SIGNIN_SUCCESS:
      if (request.payload) {
        return {
          ...state,
          username: request.payload.username,
          error: null,
        };
      }
      return state;
    default:
      return {
        ...state,
      };
  }
}
function logoutReducer(state = initialState, request: Request<Record<string, unknown>>) {
  switch (request.type) {
    case AUTH_LOGOUT:
      return {
        ...state,
      }
    case LOGOUT_FAILURE:
      if (request.payload) {
        return {
          error: request.payload.error,
        };
      }
      return state;
    case LOGOUT_SUCCESS:
      if (request.payload) {
        return {
          username: request.payload,
          error: null,
        };
      }
      return state;
    default:
      return {
        ...state,
      };
  }
}
// Lưu initialState vào localStorage



const rootReducer = combineReducers({
  // getPinsUserResult: GetPinsUserResult
  // login:loginReducer,
  register: registerReducer,
  login:loginReducer,
  logout:logoutReducer,
})

export type State = ReturnType<typeof rootReducer>

export default rootReducer
