import { Routes, Route } from "react-router-dom";
import { Home} from "@/pages/Home/Home";
import { Gallery } from "@/pages/Gallery/Gallery";
import { Contacts } from "@/pages/Contacts/Contacts";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
};