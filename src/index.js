import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";


import LocalStorage from './core/LocalStorage';
import {ToastProvider,MessageBoxProvider} from './components/';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LocalStorage>
        <ToastProvider>
          <MessageBoxProvider>
            <App />
          </MessageBoxProvider>
        </ToastProvider>
      </LocalStorage>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
