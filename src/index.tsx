import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { CacheProvider } from "rest-hooks";
import * as serviceWorker from './serviceWorker';

import App from './App';

import "antd/dist/antd.css";
import "./styles.css";

ReactDOM.createRoot(
  document.querySelector('#root')!
).render(
  <CacheProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CacheProvider>
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
