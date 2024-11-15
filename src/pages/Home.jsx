import { Outlet, useLoaderData } from "react-router-dom";

import Categories from "../components/Categories";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Home - Gadget Heaven</title>
      </Helmet>
      {/* Categories section */}
      <h2 className="font-bold text-center text-4xl mb-6">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex gap-6 w-10/12 mx-auto my-10">
        <Categories categories={categories}></Categories>
        {/* Dynamic section */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
