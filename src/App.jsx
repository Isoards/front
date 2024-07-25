import React from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/api.js";

import RootLayout from "./layout/Root.jsx";
import Register from "./pages/Register.jsx";
import Search from "./pages/Search.jsx";
import Work from "./pages/Work.jsx";
import Mypage from "./pages/Mypage.jsx";
import Loading from "./pages/Loading.jsx";
import RecommendedCaregiverList from "./components/caregiver/RecommendedCaregiverList.jsx";
import FindWork from "./components/work/FindWork.jsx";
import Profile from "./pages/Profile.jsx";
import Matching from "./pages/Matching.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/register", element: <Register /> },
      { path: "/search", element: <Search /> },
      { path: "/work", element: <Work /> },
      { path: "/mypage", element: <Mypage /> },
      { path: "/loading", element: <Loading /> },
      { path: "/list", element: <RecommendedCaregiverList /> },
      { path: "/findwork", element: <FindWork /> },
      { path: "/profile", element: <Profile /> },
      { path: "/matching", element: <Matching /> },
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
