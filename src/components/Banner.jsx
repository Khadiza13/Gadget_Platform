import { Link, NavLink } from "react-router-dom";
import banner from "../assets/banner.jpg";
const Banner = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => ` ${isActive ? "underline" : ""}`}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/Statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/Dashboard">Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div className="mb-80 w-[97%] bg-[#9538E2] mx-auto rounded-xl mt-4">
      <div className="w-10/12 mx-auto">
        <div className="navbar ">
          <div className="navbar-start">
            <Link to={"/"} className="text-white text-xl font-bold">
              Gadget Heaven
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">{links}</ul>
          </div>
          <div className="navbar-end gap-2">
            <a className="btn p-3 rounded-full">
              <img
                src="https://img.icons8.com/?size=24&id=Vfx42bq0G2lJ&format=png"
                alt=""
              />
            </a>
            <a className="btn p-3 rounded-full">
              <img
                src="https://img.icons8.com/?size=25&id=f3DSk7zyYLW7&format=png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div className="hero  relative ">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-white mb-5">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className=" text-white mb-6 font-thin">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>

            <button className="btn bg-white text-[#9538E2] font-bold text-lg rounded-3xl px-4 py-2 mb-64">
              <Link to={"/dashboard"}>Shop Now</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-96 left-[25rem] w-[700px] h-[400px] border-4 border-solid border-white rounded-xl p-3">
        <img
          className="w-full h-full object-cover rounded-xl "
          src={banner}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
