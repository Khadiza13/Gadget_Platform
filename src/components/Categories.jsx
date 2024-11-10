/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  console.log(categories);
  return (
    <div className="">
      <ul className="menu bg-white w-40 gap-3 rounded-lg py-3">
        {categories.map((category) => (
          <li key={category.category}>
            <NavLink
              to={`/category/${category.category}`}
              className={({ isActive }) =>
                `flex items-center justify-center rounded-3xl p-2  ${
                  isActive ? "bg-[#9538E2] text-white" : "bg-gray-200"
                }`
              }
            >
              {category.category}
            </NavLink>
            {/* <NavLink
              className={({ isActive }) =>
                `block bg-base-200 rounded-3xl p-1 ${
                  isActive ? "bg-[#9538E2] text-white" : ""
                }`
              }
              to={`/category/${category.category}`}
            >
              {category.category}
            </NavLink> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
