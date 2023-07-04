const Footer = () => {
  return (
    <div className="mystyle  mx-auto p-10 h-full">
      <div className="text-center">
        <p className="font-bold text-4xl my-2 text-gray-400">
          “The quieter you become, the more you are able to hear.”
        </p>
        <p className="font-semibold my-2">Simanta Barua, {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
