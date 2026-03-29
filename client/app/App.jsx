import  Navbar  from "@/widgets/Navbar/Navbar"
import { AppRouter } from "@/app/providers/router/AppRouter";

export const App = () => {
  return (
    <>
      <Navbar/>
      <AppRouter/>
    </>
  );
};