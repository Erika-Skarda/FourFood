import { createStore, applyMiddleware, compose } from "redux";
import { generateReducers } from "../Reducers/rootReducer";
import { routerMiddleware } from "connected-react-router";
import thunk from 'redux-thunk';
import { createBrowserHistory }  from "history";

export const history =  createBrowserHistory();

export const store = createStore(generateReducers(history),
  compose(applyMiddleware(thunk, routerMiddleware(history))));

console.log(store)
