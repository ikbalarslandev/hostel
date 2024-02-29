import Image from "next/image";

const Template = ({ src, desc }: any) => {
  return (
    <div className="m-5 bg-white pb-4 mb-10 flex flex-col md:flex-row md:mx-[20vw] md:pb-0">
      <Image
        src={src}
        alt="About us"
        width={800}
        height={500}
        layout="responsive"
      />
      <p className="px-3 text-pink py-2">{desc}</p>
    </div>
  );
};

export default Template;
