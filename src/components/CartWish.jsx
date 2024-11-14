const CartWish = ({ item }) => {
  const { id, title, img, description, price } = item;
  return (
    <div>
      <div className="flex items-center justify-between p-4 bg-white rounded-lg mb-3">
        <div className="flex items-center gap-5">
          <div className="w-24 h-20 bg-gray-300 rounded-lg p-2">
            <img className="w-full h-full object-cover" src={img} alt="" />
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-2">{title}</h2>
            <p className="text-sm text-gray-600 mb-2">{description}</p>
            <p className="text-md font-medium mt-1">Price: ${price}</p>
          </div>
        </div>
        <button>
          <img
            src="https://img.icons8.com/?size=24&id=99950&format=png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default CartWish;
