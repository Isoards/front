import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/api.js";

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
import Searching from "./components/Searching.jsx";
import RecommendedCaregiverList from "./components/caregiver/RecommendedCaregiverList.jsx";
import FindWork from "./components/work/FindWork.jsx";

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
      { path: "/caregiver", element: <CaregiverInfo /> },
      { path: "/experience", element: <WorkExperience /> },
      { path: "/caredate", element: <CareDate /> },
      { path: "/searching", element: <Searching /> },
      { path: "/list", element: <RecommendedCaregiverList /> },
      { path: "/findwork", element: <FindWork /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
