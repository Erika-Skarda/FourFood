import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "../src/Containers/Router/index";

import { store, history } from './Store';

import { ThemeProvider } from "styled-components";
import {
   MuiThemeProvider,
  //createGenerateClassName,
  //jssPreset,
  CssBaseline
} from "@material-ui/core";
import { GlobalStyle, AppWrapper } from "./Styles/globals";
import  theme  from './Styles/theme'

const App:React.FC = () => (

  <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CssBaseline />
        {/* <BrowserRouter />  */}
        <AppWrapper>
          <Router history={history} />
        </AppWrapper>
      </ThemeProvider>
  </Provider>
  
);

export default App;