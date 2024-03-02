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
          <p className="font-bold italic text-4xl text-white">FAQ</p>
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
        href="https://www.google.com/maps/place/Berlin+Hostel+%26+Street/@36.8809976,30.7036395,18.42z/data=!4m10!3m9!1s0x14c39006eedf3f27:0xcaa355039f162897!5m3!1s2024-05-04!4m1!1i2!8m2!3d36.8844456!4d30.7085944!16s%2Fg%2F11tfc5dq11?entry=ttu"
      >
        <div className="gap-3  hidden md:flex mr-2  ">
          <p className="text-yellow-400 font-bold">Kandiller str.</p>
          <p className="text-yellow-400 ">Istanbul</p>
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
