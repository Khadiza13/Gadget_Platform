import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="w-10/12 mx-auto">
      <ul className="menu bg-base-200 w-56">
        {categories.map((category) => {
          <li>
            <Link to={`/category/${category.category}`}>
              {category.category}
            </Link>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default Categories;
