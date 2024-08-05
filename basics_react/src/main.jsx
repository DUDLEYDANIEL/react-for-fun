import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Card from './Card.jsx';
import './index.css';
import CardPage from './Card-page.jsx';
import Button from './Buttons.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Oops! There was an error.</div>,
  },
  {
    path: '/card',
    element: <CardPage />,
  },{
    path:'/button',
    element:<Button/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
