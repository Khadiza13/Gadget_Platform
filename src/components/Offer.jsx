import { Link } from "react-router-dom";

const Offer = ({ item }) => {
  const { id, title, img, price, discount } = item;
  const Cost = price - price * (discount / 100);
  return (
    <div>
      <div className="card bg-base-100 w-80 mb-6">
        <figure className="px-5 pt-5 ">
          <img src={img} alt="Shoes" className="rounded-xl h-48" />
        </figure>
        <div className="card-body py-3">
          <h2 className="card-title">{title}</h2>
          <h2 className="card-title text-[#9538E2]">
            Discount: {discount}% Off
          </h2>
          <p>Discount Price: {Cost}k</p>
          <div className="card-actions">
            <Link to={`/product/${id}`}>
              <button className="btn border-solid border-2 border-[#9538E2] text-[#9538E2] rounded-full">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
