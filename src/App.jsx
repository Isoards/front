import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './App.css';
import Register from './pages/Register.jsx';
import RootLayout from './pages/Root.jsx';
import Search from './pages/Search.jsx';
import Mypage from './pages/Mypage.jsx';
import PatientCondition from './components/layout/search/PatientCondition.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/register", element: <Register /> },
      { path: "/search", element: <Search />},
      { path: "/mypage", element: <Mypage />},
      { path: "/patient", element: <PatientCondition />}
    ]
  }
]);

function App() {
  return (

      <RouterProvider router={router} />
  );
}

export default App;
