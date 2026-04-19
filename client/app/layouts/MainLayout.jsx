import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <div className="app">
        <Header />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};