import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const Layouts = () => {
  return (
    <div>
      <Toaster />
      {/* navbar */}
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-232px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layouts;
