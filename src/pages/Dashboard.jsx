import { useEffect, useState } from "react";
import { getAllCarts, getAllWishs } from "../utility";
import CartWish from "../components/CartWish";

const Dashboard = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [view, setView] = useState("cart");
  useEffect(() => {
    const carts = getAllCarts();
    setCartItems(carts);
    const wish = getAllWishs();
    setWishlistItems(wish);
  }, []);

  const handleViewChange = (newView) => {
    setView(newView);
  };
  const totalCost = (view === "cart" ? cartItems : wishlistItems).reduce(
    (total, item) => total + item.price,
    0
  );

  const handleSort = () => {
    const itemsToSort = view === "cart" ? [...cartItems] : [...wishlistItems];
    const sorted = itemsToSort.sort((a, b) => b.price - a.price);

    if (view === "cart") {
      setCartItems(sorted);
    } else {
      setWishlistItems(sorted);
    }
  };

  return (
    <div className="w-full mx-auto">
      <div className="hero bg-[#9538E2] relative mb-6">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-white mb-5">Dashboard</h1>
            <p className=" text-white mb-6 font-thin ">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className="flex gap-3 items-center justify-center mb-3">
              <button
                onClick={() => handleViewChange("cart")}
                className={`btn font-bold text-xl rounded-3xl px-8 py-2 ${
                  view === "cart"
                    ? "bg-[#9538E2] text-white"
                    : "bg-white text-[#9538E2]"
                }`}
              >
                Cart
              </button>
              <button
                onClick={() => handleViewChange("wishlist")}
                className={`btn font-bold text-xl rounded-3xl px-8 py-2 ${
                  view === "wishlist"
                    ? "bg-[#9538E2] text-white"
                    : "bg-white text-[#9538E2]"
                }`}
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-2xl font-bold">Cart</p>
          </div>
          <div className="flex items-center gap-x-4">
            <p className="text-xl font-bold">Total cost: ${totalCost}</p>
            <button
              onClick={handleSort}
              className="px-4 py-2 border-solid border-2 border-[#9538E2] text-[#9538E2] rounded-3xl font-semibold"
            >
              Sort by Price
            </button>
            <button className="px-4 py-2 bg-[#9538E2] text-white rounded-3xl font-semibold">
              Purchase
            </button>
          </div>
        </div>
        {(view === "cart" ? cartItems : wishlistItems).map((item) => (
          <CartWish key={item.id} item={item}></CartWish>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
