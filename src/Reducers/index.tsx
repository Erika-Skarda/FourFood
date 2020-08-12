import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";


export const generateReducers = (history: History<any>) =>

  combineReducers({
    
    router: connectRouter(history),
  

    
  });