/*
 * @Descripttion: 
 * @Author: xiao wang
 * @Date: 2021-04-11 10:36:53
 * @LastEditors: Wei
 * @LastEditTime: 2021-04-17 21:02:35
 * @FilePath: \react-typescript\src\index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
