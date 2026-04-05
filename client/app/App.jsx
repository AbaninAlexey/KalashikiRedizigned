import { AppRouter } from "./routing/AppRouter";
import Header from "@/widgets/Header";

export const App = () => {
  return (
    <>
      <Header/>
      <AppRouter/>
    </>
  );
};