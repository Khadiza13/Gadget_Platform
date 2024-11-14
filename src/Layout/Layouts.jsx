import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import Banner from "../components/Banner";

const Layouts = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <Toaster />
      {/* navbar */}
      {pathname === "/" ? <Banner></Banner> : <Navbar></Navbar>}

      <div className="min-h-[calc(100vh-232px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layouts;
