import {
    SIGN_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
  } from "./actionTypes";
  
  const initialState = {
    user: null,
    error: null,
    loading: false,
    token: null,
  };
  
  export const userReducer = (state = initialState, action) => {
    
    const { type, payload } = action;
    switch (type) {
      case SIGN_UP:
      case LOGIN:
        return { ...state, loading: true };
      
        case SIGN_UP_SUCCESS:
        return { ...state, loading: false, user: payload, error: null };
      
        case LOGIN_SUCCESS:
        const { user, token } = payload;
        return { ...state, loading: false, user, token, error: null };
      
        case SIGN_UP_FAIL:
      case LOGIN_FAIL:
        return { ...state, loading: false, error: payload };
      
        default:
        return state;
    }
  };
  