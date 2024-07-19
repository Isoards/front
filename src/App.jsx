import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Register from "./pages/Register.jsx";
import RootLayout from "./layout/Root.jsx";
import Search from "./pages/Search.jsx";
import Mypage from "./pages/Mypage.jsx";
import PatientCondition from "./pages/search/PatientCondition.jsx";
import PatientSymptoms from "./pages/search/PatientSymptoms.jsx";
import GuardianInfo from "./pages/search/GuardianInfo.jsx";
import CaregiverInfo from "./pages/work/CaregiverInfo.jsx";
import WorkExperience from "./pages/work/WorkExperience.jsx";
import CareDate from "./pages/work/CareDate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/register", element: <Register /> },
      { path: "/search", element: <Search /> },
      { path: "/mypage", element: <Mypage /> },
      { path: "/patient", element: <PatientCondition /> },
      { path: "/symptoms", element: <PatientSymptoms /> },
      { path: "/info", element: <GuardianInfo /> },
      { path: "/test", element: <CaregiverInfo /> },
      { path: "/experience", element: <WorkExperience /> },
      { path: "/caredate", element: <CareDate /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
