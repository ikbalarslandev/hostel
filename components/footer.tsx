import { FaTripadvisor } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const iconClass =
    "w-10 md:w-9 md:h-9 h-10 bg-yellow-400 m-1 p-2 rounded-full";
  return (
    <footer className="h-20 md:h-12 bg-black flex items-center justify-between px-1">
      <div className=" flex items-center flex-col md:flex-row md:gap-8 ">
        <Link href="#">
          <p className="font-bold italic text-4xl text-pink">FAQ</p>
        </Link>
        <Link href="#">
          <p className="text-yellow-500 font-bold hidden md:block">
            Privacy Policy
          </p>
        </Link>
        <Link href="#">
          <p className="text-yellow-500 font-bold">Contact us</p>
        </Link>
      </div>

      <div className=" flex flex-col items-end  justify-center  mt-1   ">
        <div className="flex mr-auto md:mr-0 ">
          <Link href="https://www.tripadvisor.com/">
            <FaTripadvisor className={iconClass} />
          </Link>
          <Link href="https://www.twitter.com/">
            <FaTwitter className={iconClass} />
          </Link>
          <Link href="https://www.instagram.com/">
            <FaInstagram className={iconClass} />
          </Link>
          <Link href="https://www.facebook.com/">
            <FaFacebookF className={iconClass} />
          </Link>
        </div>
        <p className=" text-end font-bold text-yellow-400 md:hidden  ">
          <Link href="#">Privacy Policy</Link>
        </p>
      </div>
      <Link
        className="gap-3  hidden md:flex mr-2"
        href="https://www.google.com/maps/place/Taksim+Square,+%C5%9Eehit+Muhtar,+34435+Beyo%C4%9Flu%2F%C4%B0stanbul/@41.0370013,28.974792,15z/data=!3m1!4b1!4m6!3m5!1s0x14cab7650656bd63:0x8ca058b28c20b6c3!8m2!3d41.0370023!4d28.9850917!16zL20vMDJ5cW40?entry=ttu"
      >
        <div className="gap-3  hidden md:flex mr-2  ">
          <p className="text-yellow-400 font-bold">Şehit Muhtar str.</p>
          <p className="text-yellow-400 ">Istanbul</p>
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
