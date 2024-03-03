import Template from "@/components/about/about-template";
import data from "@/data/about";
import PageTemplate from "@/components/page.template";

const AboutPage = () => {
  return (
    <main className="bg-zinc-200  pb-10">
      <PageTemplate title="About Us" />
      {data.map((item, index) => (
        <div key={index}>
          <Template src={item?.img} desc={item?.desc} />
        </div>
      ))}
    </main>
  );
};

export default AboutPage;
