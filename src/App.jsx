import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.css'
import Register from './pages/Register.jsx'
import RootLayout from './pages/Root.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/register", element: <Register /> },

    ]
  }
]);

function App() {
  return (

      <RouterProvider router={router} />
  );
}

export default App;
