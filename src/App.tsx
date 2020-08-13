import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import thunk from "redux-thunk";
import Router from "../src/Containers/Router/index";
import {
   MuiThemeProvider,
  //createGenerateClassName,
  //jssPreset,
  CssBaseline
} from "@material-ui/core";
import { GlobalStyle, AppWrapper } from "./Styles/globals";
import  theme  from './Styles/theme'
import {store, history} from './Store';
import { BrowserRouter } from "react-router-dom";

const App:React.FC = () => (

  <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <GlobalStyle />
        <CssBaseline />
        <BrowserRouter />
        <AppWrapper>
          <Router history={history} />
        </AppWrapper>
      </MuiThemeProvider>
  </Provider>
);

export default App;