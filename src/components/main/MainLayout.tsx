import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
