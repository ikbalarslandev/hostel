import { FaTripadvisor } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const iconClass =
    "w-10 md:w-9 md:h-9 h-10 bg-yellow-400 m-1 p-2 rounded-full";
  return (
    <footer className="h-20 md:h-12 bg-black flex items-center justify-between px-1">
      {/* logo */}
      <div className=" flex items-center flex-col md:flex-row md:gap-8 ">
        <p className="font-bold italic text-4xl text-pink">FAQ</p>
        <p className="text-yellow-500 font-bold hidden md:block">
          Privacy Policy
        </p>
        <p className="text-yellow-500 font-bold">Contact us</p>
      </div>

      {/* icons */}
      <div className=" flex flex-col items-end  justify-center  mt-1   ">
        <div className="flex mr-auto md:mr-0">
          <FaTripadvisor className={iconClass} />
          <FaTwitter className={iconClass} />
          <FaInstagram className={iconClass} />
          <FaFacebookF className={iconClass} />
        </div>
        <p className=" text-end font-bold text-yellow-400 md:hidden  ">
          Privacy Policy
        </p>
      </div>

      <div className="gap-3  hidden md:flex mr-2  ">
        <p className="text-yellow-400 font-bold">Şehit Muhtar str.</p>
        <p className="text-yellow-400 ">Istanbul</p>
      </div>
    </footer>
  );
};

export default Footer;
