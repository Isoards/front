import { Outlet, Navigate, useLocation } from "react-router-dom";
import Navbar from "../components/header/Navbar";

export default function RootLayout() {
  const location = useLocation();

  // 초기 경로를 /register로 설정
  if (location.pathname === "/") {
    return <Navigate to="/register" replace />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
