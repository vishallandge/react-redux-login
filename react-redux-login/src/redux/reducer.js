import {
   
    LOGIN,
 
    SET_USER,
   
  } from "./actiontype.js";
  
  const initialState = {
    user: {},
    loading: false,
    login: false,
    data:[],
    token: "",
  
  };
  // eslint-disable-next-line import/no-anonymous-default-export
  export default function (state = initialState, action) {
    switch (action.type) {
      case SET_USER: {
        return {
          ...state,
          user: action.payload,
        };
      }
      
      case LOGIN: {
        return {
          ...state,
          login: true,
          data: action.payload,
        };
      }
     
      default:
        return state;
    }
  }