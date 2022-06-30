import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './state/Store';
import { addTodo,removeTodo,editTodo } from './state/todoState';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

store.dispatch(addTodo({ id: 1, title: 'Ho caldo', completed: true }));
store.dispatch(addTodo({ id: 2, title: 'Voglio andare al mare', completed: true }));
store.dispatch(editTodo(1, {title: 'HO DAVVERO TANTO CALDO', completed: true}));
store.dispatch(removeTodo(1));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
