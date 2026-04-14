import { Outlet } from "react-router-dom";

export const LoginLayout = () => {
  return (
    <main className="auth-layout">
      <Outlet />
    </main>
  );
};