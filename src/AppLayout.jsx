import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Sections/Footer";

function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
