import { Outlet, useLoaderData } from "react-router-dom";
import banner from "../assets/banner.jpg";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

const Home = () => {
  const categories = useLoaderData();
  //console.log(categories);
  return (
    <div>
      {/* Banner */}
      <Banner
        title={"Upgrade Your Tech Accessorize with Gadget Heaven Accessories"}
        subtitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
        ban={banner}
      ></Banner>
      {/* Categories section */}
      <h2 className="font-bold text-center text-4xl mb-6">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex gap-2 w-10/12 mx-auto">
        <Categories categories={categories}></Categories>
        {/* Dynamic section */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
