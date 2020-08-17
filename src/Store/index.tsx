import { createStore, applyMiddleware} from "redux";
import { generateReducers } from "../Reducers/rootReducer";
import { routerMiddleware } from "connected-react-router";
import thunk from 'redux-thunk';
import { createBrowserHistory }  from "history";

export const history =  createBrowserHistory()
export const store = createStore(generateReducers(history), applyMiddleware(thunk, routerMiddleware(history)))
// export default function configureStore(
//   history: History,
//   initialState: ApplicationState
// ): Store<ApplicationState> {
//   const store = createStore(
//     generateReducers(history),
//     initialState,
//     applyMiddleware(routerMiddleware(history), thunk)
//   );
//   return store;
// }

// const generateClassName = createGenerateClassName();
// const jss = create({
//   ...jssPreset(),
//   // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
//   insertionPoint: document.getElementById("jss-insertion-point")
// });



// export const history = createBrowserHistory();

// const middlewares = [
//   applyMiddleware(routerMiddleware(history), thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__
//     ? window.__REDUX_DEVTOOLS_EXTENSION__()
//     : f => f
// ];

// const store = createStore(generateReducers(history), compose(...middlewares));

