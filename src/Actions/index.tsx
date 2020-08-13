import { ActionCreator } from 'redux';
import { action, createAction } from 'typesafe-actions';
import { Types, Message } from "../Utils/types";
// export const setOpen = (option) => ({
//   type: "SET_OPEN",
//   payload: {
//       option
//   }
// })

// export const setMessage = (text:string, color:string) => ({
//   type: "SET_MESSAGE",
//   payload: {
//       text,
//       color
//   }
// })
// export const SET_MESSAGE = 'SET_MESSAGE'

// interface SetMessageAction extends Action {
//   type: typeof SET_MESSAGE
//   payload: {Message}
// }

export const setMessage = 
(text:string, color:string) => 
  action(Types.SET_MESSAGE, text, color
  )

// export const setSecretMessage = (option) => ({
//   type: "SET_SECRET_MESSAGE",
//   payload: {
//       option
//   }
// })

// export const setInputSearch = (inputData) => ({
//   type: 'SET_INPUT_SEARCH',
//   payload: {
//       inputData
//   }
// })

// export const setLoading = (option) => ({
//   type: 'SET_LOADING',
//   payload: {
//       option
//   }
// })