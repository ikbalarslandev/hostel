import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
const Template = ({ header, mail, phone }: any) => {
  return (
    <div className="my-5">
      <h1 className="bg-black py-1 px-3 mx-5 my-1 font-semibold text-white text-2xl ">
        {header}
      </h1>
      <div className="flex gap-4 items-center justify-start">
        <CiMail className="h-8 w-8 mx-5 my-1 text-black" />
        {mail}
      </div>
      <div className="flex gap-4 items-center justify-start">
        <CiPhone className="h-8 w-8 mx-5 my-1 text-black" />
        {phone}
      </div>
    </div>
  );
};

export default Template;
