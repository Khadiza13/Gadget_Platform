import banner from "../assets/banner.jpg";
const Banner = ({ title, subtitle, ban }) => {
  return (
    <div className="mb-80 w-[97%] mx-auto ">
      <div className="hero bg-[#9538E2] relative rounded-xl">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-white mb-5">{title}</h1>
            <p className=" text-white mb-6 font-thin">{subtitle}</p>
            <button className="btn bg-white text-[#9538E2] font-bold text-lg rounded-3xl px-4 py-2 mb-64">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-96 left-[25rem] w-[700px] h-[400px] border-4 border-solid border-white rounded-xl p-3">
        <img
          className="w-full h-full object-cover rounded-xl "
          src={ban}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
