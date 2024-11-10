import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            ` ${isActive ? "bg-[#9538E2] text-white" : ""}`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            ` ${isActive ? "bg-[#9538E2] text-white" : ""}`
          }
          to="/Statistics"
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            ` ${isActive ? "bg-[#9538E2] text-white" : ""}`
          }
          to="/Dashboard"
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="w-10/12 mx-auto">
      <div className="navbar ">
        <div className="navbar-start">
          <Link to={"/"} className="text-[#0B0B0B] text-xl font-bold">
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
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
  );
};

export default Navbar;
