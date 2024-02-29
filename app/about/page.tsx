import Template from "@/components/about/about-template";
import data from "@/data/about";

const AboutPage = () => {
  return (
    <main className="overflow-hidden bg-zinc-200 min-h-screen">
      <div className="banner3  w-screen h-28 md:h-40 flex flex-col  items-center justify-center">
        <h1 className="text-white text-5xl font-bold shadow-lg">About Us</h1>
      </div>
      {data.map((item, index) => (
        <div key={index}>
          <Template src={item?.img} desc={item?.desc} />
        </div>
      ))}
    </main>
  );
};

export default AboutPage;
