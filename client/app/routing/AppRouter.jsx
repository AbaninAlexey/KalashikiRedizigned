import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Gallery from "@/pages/Gallery";
import Contacts from "@/pages/Contacts";
import Login from '@/pages/Login/Login'
import ErrorPage from '@/pages/ErrorPage'

import { MainLayout } from "@/app/layouts/MainLayout";
import { LoginLayout } from "@/app/layouts/LoginLayout";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>

      <Route element={<LoginLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};