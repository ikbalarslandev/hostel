import { FaTripadvisor } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const iconClass = "w-10 h-10 bg-yellow-400 m-1 p-2 rounded-full";
  return (
    <footer className="h-20 bg-black flex  ">
      <div className=" flex-1 flex flex-col items-start ml-2 pt-1 gap-1 justify-center">
        <p className="font-bold italic text-4xl text-pink">FAQ</p>
        <p className="text-yellow-500 font-bold">Contact us</p>
      </div>
      <div className=" flex flex-col items-top  justify-center mx-2 mt-1   ">
        <div className="flex mr-auto">
          <FaTripadvisor className={iconClass} />
          <FaTwitter className={iconClass} />
          <FaInstagram className={iconClass} />
          <FaFacebookF className={iconClass} />
        </div>
        <p className=" text-end font-bold text-yellow-400">Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
