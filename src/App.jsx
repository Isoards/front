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
import UserSignUp from "./pages/UserSignUp.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import PatientInfoForm from "./components/work/PatientInfoForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/userLogin", element : <UserLogin/>},//유저, 간병인 로그인 1.
      { path: "/userSignUp", element : <UserSignUp/>},//유저 회원가입 2.
      { path: "/register", element: <Register /> },
      { path: "/search", element: <Search /> },//한번 csss 고칠거 있나 보기 4.
      { path: "/work", element: <Work /> },//간병인 회원가입 3.
      { path: "/mypage", element: <Mypage /> },
      { path: "/loading", element: <Loading /> },
      { path: "/list", element: <RecommendedCaregiverList /> },//이 부분 동영님꺼 복붙
      { path: "/findwork", element: <FindWork /> },
      { path: "/profile", element: <Profile /> },
      { path: "/matching", element: <Matching /> },
      { path: "/patient/:id?", element:<PatientInfoForm/>},
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
