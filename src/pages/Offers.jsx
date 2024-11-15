import { useLoaderData } from "react-router-dom";
import Offer from "../components/Offer";
import { Helmet } from "react-helmet-async";

const Offers = () => {
  const data = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Offers - Gadget Heaven</title>
      </Helmet>
      <div className="hero bg-[#9538E2] relative mb-6">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-white mb-5">
              Get the Offer
            </h1>
            <p className=" text-white mb-10 font-thin ">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </div>
      <div className="w-9/12 mx-auto grid grid-cols-3 gap-2">
        {data.map((item) => (
          <Offer key={item.id} item={item}></Offer>
        ))}
      </div>
    </div>
  );
};

export default Offers;
