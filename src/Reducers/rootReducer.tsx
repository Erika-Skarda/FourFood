import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import user from "./user";
import feed from './restaurants'

export const generateReducers = (history: History<any>) =>

  combineReducers({
    
    router: connectRouter(history),
    user:user,
    restaurants:feed
  
  });