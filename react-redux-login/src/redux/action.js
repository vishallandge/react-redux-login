import {
   
    LOGIN,
    SHOW_SNACKBAR,
    SET_USER,
    SET_TOKEN
  } from "./actiontype.js";
  
  export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
  });
  
  export const login = (data) => ({
    type: LOGIN,
    payload: data,
  });
 
  