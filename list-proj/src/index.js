import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const DATA = [
  {id: "todo-0", name: "cook", completed: true},
  {id: "todo-1", name: "groceries", completed: false},
  {id: "todo-2", name: "laundry", completed: false},
];

ReactDOM.render(
  <App tasks= {DATA} /> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
