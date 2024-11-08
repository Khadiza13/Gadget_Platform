import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <a>Statistics</a>
      </li>
      <li>
        <a>Dashboard</a>
      </li>
    </>
  );
  return (
    <div className="w-10/12 mx-auto">
      <div className="navbar bg-base-100">
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
