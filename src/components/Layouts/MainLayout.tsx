import { Outlet } from "react-router-dom";
import Navber from "../../pages/home/shared/navber/Navber";
import Footer from "../../pages/home/shared/footer/Footer";
import Comparison from "../Tools/Comparison";
import ScrollToTop from "../Tools/ScrollToTop";
const MainLayout = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <Footer />
      <div className="fixed bottom-[20px] right-[20px] center gap-[20px]">
        <div className="flex gap-2">
        <Comparison />
        <ScrollToTop />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
