import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addCart, addWish, getAllWishs } from "../utility";
import { Helmet } from "react-helmet-async";

const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [wish, setWish] = useState(false);
  useEffect(() => {
    const single = data.find((prodeuct) => prodeuct.id === parseInt(id));
    setDetails(single);
    const wish = getAllWishs();
    const wishExists = wish.find((item) => item.id === single.id);
    if (wishExists) {
      setWish(true);
    }
  }, [data, id]);
  const {
    title,
    img,
    price,
    description,
    Specification,
    availability,
    rating,
  } = details;

  const handleCart = (product) => {
    addCart(product);
  };

  const handleWish = (product) => {
    addWish(product);
    setWish(true);
  };

  return (
    <div className="mb-80">
      <Helmet>
        <title>Details - Gadget Heaven</title>
      </Helmet>
      <div className=" w-full mx-auto ">
        <div className="hero bg-[#9538E2] relative mb-80">
          <div className="hero-content text-center">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold text-white mb-5">
                Product Details
              </h1>
              <p className=" text-white mb-60 font-thin ">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
            </div>
          </div>
        </div>
        <div className="absolute flex items-start gap-5 top-60 left-[22rem] w-[800px] h-[450px] border-4 border-solid border-white rounded-xl p-8  bg-white shadow-md">
          <div className="w-1/3">
            <div className="bg-gray-200 rounded-lg h-80 w-full flex items-center justify-center">
              <img
                src={img}
                alt={title}
                className="h-full w-auto rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="w-2/3 pl-5">
            <h1 className="text-2xl font-bold mb-2">{title}</h1>
            <p className="text-xl font-semibold text-gray-700 mb-2">
              Price: ${price}
            </p>
            <div className="mb-3">
              {availability ? (
                <span className="inline-block px-3 py-1 text-green-600 font-medium bg-green-100 rounded-full">
                  In Stock
                </span>
              ) : (
                <span className="inline-block px-3 py-1 text-red-600 font-medium bg-red-100 rounded-full">
                  Not Available
                </span>
              )}
            </div>
            <p className="text-gray-600 mb-3">{description}</p>
            <div className="mb-3">
              <h3 className="font-semibold mb-1">Specification:</h3>
              <ul className="list-decimal pl-5 text-gray-600">
                {Specification &&
                  Specification.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
              </ul>
            </div>
            <div className="flex items-center mb-3 gap-2">
              <span className="font-semibold">Rating:</span>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                />
              </div>
              <span className="ml-2 text-gray-600">{rating}</span>
            </div>

            <button
              onClick={() => handleCart(details)}
              className="px-5 py-2 bg-purple-500 text-white font-medium rounded-full mr-2"
            >
              Add To Cart
            </button>
            <button
              disabled={wish}
              onClick={() => handleWish(details)}
              className="p-1 border-2 border-gray-400 rounded-full"
            >
              <a>
                <img
                  className="w-4"
                  src="https://img.icons8.com/?size=25&id=f3DSk7zyYLW7&format=png"
                  alt=""
                />
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* <div className="flex items-start p-5 bg-white shadow-md rounded-lg">
        <div className="w-1/3">
          <div className="bg-gray-200 rounded-lg h-60 w-full flex items-center justify-center">
            <img src={img} alt={title} className="h-full w-auto rounded-lg" />
          </div>
        </div>
        <div className="w-2/3 pl-5">
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
          <p className="text-xl font-semibold text-gray-700 mb-2">
            Price: ${price}
          </p>
          <div className="mb-3">
            {availability ? (
              <span className="inline-block px-3 py-1 text-green-600 font-medium bg-green-100 rounded-full">
                In Stock
              </span>
            ) : (
              <span className="inline-block px-3 py-1 text-red-600 font-medium bg-red-100 rounded-full">
                Not Available
              </span>
            )}
          </div>
          <p className="text-gray-600 mb-3">{description}</p>
          <div className="mb-3">
            <h3 className="font-semibold mb-1">Specification:</h3>
            <ul className="list-decimal pl-5 text-gray-600">
              {Specification &&
                Specification.map((spec, index) => <li key={index}>{spec}</li>)}
            </ul>
          </div>
          <div className="flex items-center mb-3 gap-2">
            <span className="font-semibold">Rating:</span>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
              />
            </div>
            <span className="ml-2 text-gray-600">{rating}</span>
          </div>

          <button className="px-5 py-2 bg-purple-500 text-white font-medium rounded-full mr-2">
            Add To Cart
          </button>
          <button className="p-1 border-2 border-gray-400 rounded-full">
            <a>
              <img
                className="w-4"
                src="https://img.icons8.com/?size=25&id=f3DSk7zyYLW7&format=png"
                alt=""
              />
            </a>
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Details;
