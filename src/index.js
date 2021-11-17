import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MuiThemeProvider  from "./Themes";
import { MoralisProvider } from "react-moralis";
import { AppID, ServerURL } from './constants';
import { Provider } from 'react-redux';
import { store } from './redux/store';


ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={ AppID } serverUrl={ ServerURL }>
    <Provider store={ store }>
      <MuiThemeProvider>
           <App />
      </MuiThemeProvider>
     </Provider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
