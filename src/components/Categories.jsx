/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  console.log(categories);
  return (
    <div className="">
      <ul className="menu bg-white w-40 gap-3">
        {categories.map((category) => (
          <li className="bg-base-200 rounded-3xl p-1" key={category.category}>
            <Link to={`/category/${category.category}`}>
              {category.category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
