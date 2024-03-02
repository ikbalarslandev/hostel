const PageTemplate = ({ title }: any) => {
  return (
    <div className="banner3   h-28 md:h-[15vh] flex flex-col  items-center justify-center  ">
      <div className="bg-black bg-opacity-20 w-full z-0 absolute top-[7vh] md:top-[5vh] left-0 h-28 md:h-[15vh]  "></div>
      <h1 className="text-white text-5xl z-10 font-bold shadow-lg">{title} </h1>
    </div>
  );
};

export default PageTemplate;
