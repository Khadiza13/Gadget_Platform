const Card = ({ item }) => {
  //console.log(item);
  const { id, title, img, price } = item;
  return (
    <div>
      <div className="card bg-base-100 w-80 ">
        <figure className="px-5 pt-5 ">
          <img src={img} alt="Shoes" className="rounded-xl h-48" />
        </figure>
        <div className="card-body py-3">
          <h2 className="card-title">{title}</h2>
          <p>Price: {price}k</p>
          <div className="card-actions">
            <button className="btn border-solid border-2 border-[#9538E2] text-[#9538E2] rounded-full">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
