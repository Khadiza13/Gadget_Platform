const Footer = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="text-center border-base-300 border-b">
        <h2 className="font-bold text-2xl mb-2">Gadget heaven</h2>
        <p className="text-gray-500 mb-8">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <footer className="footer footer-center flex justify-evenly text-base-content p-10">
        <nav>
          <h6 className=" text-[#09080F] font-bold text-lg">Services</h6>
          <a className="link link-hover text-gray-500">Product Support</a>
          <a className="link link-hover text-gray-500">Order Tracking</a>
          <a className="link link-hover text-gray-500">Shipping & Delivery</a>
          <a className="link link-hover text-gray-500">Returns</a>
        </nav>
        <nav>
          <h6 className=" text-[#09080F] font-bold text-lg">Company</h6>
          <a className="link link-hover text-gray-500">About us</a>
          <a className="link link-hover text-gray-500">Careers</a>
          <a className="link link-hover text-gray-500">Contact</a>
        </nav>
        <nav>
          <h6 className=" text-[#09080F] font-bold text-lg">Legal</h6>
          <a className="link link-hover text-gray-500">Terms of Service</a>
          <a className="link link-hover text-gray-500">Privacy policy</a>
          <a className="link link-hover text-gray-500">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
