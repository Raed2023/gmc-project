import axios from "axios";
import {
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "./actionTypes";

export const userSignUp = (newUser) => async (dispatch) => {
  dispatch({ type: SIGN_UP });
  try {
    const { data } = await axios.post("/user/singUp", newUser);
    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SIGN_UP_FAIL,
      payload: error?.response?.data || "Something went wrong",
    });
  }
};

export const userLogin = (user) => async (dispatch) => {
  dispatch({
    type: LOGIN,
  });
  try {
    const { data } = await axios.post("/user/login", user);
    localStorage.setItem("token", data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error?.response?.data || "Something went wrong",
    });
  }
};
