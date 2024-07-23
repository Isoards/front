import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/api.js";

import "./App.css";
import Register from "./pages/Register.jsx";
import RootLayout from "./layout/Root.jsx";
import Search from "./pages/Search.jsx";
import Mypage from "./pages/Mypage.jsx";
import Searching from "./components/Searching.jsx";
import RecommendedCaregiverList from "./components/caregiver/RecommendedCaregiverList.jsx";
import FindWork from "./components/work/FindWork.jsx";
import Work from "./pages/Work.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/register", element: <Register /> },
      { path: "/search", element: <Search /> },
      { path: "/work", element: <Work /> },
      { path: "/mypage", element: <Mypage /> },
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
