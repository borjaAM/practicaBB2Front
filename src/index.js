import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ItemsList from './components/Items/ItemsList'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/users",
    element: <h1>Users</h1>
  },
  {
    path: "/suppliers",
    element: <h1>Suppliers</h1>
  },
  {
    path: "/items",
    element: <ItemsList />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
