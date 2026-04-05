import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Gallery from "@/pages/Gallery";
import Contacts from "@/pages/Contacts";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
};