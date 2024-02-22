const Banner = () => {
  return (
    <section className="h-[90vh] flex">
      <div className="flex-1 flex flex-col">
        <div className="flex-1 bg-pink text-white font-semibold text-lg flex items-center justify-center text-center">
          EXPERIENCE THE AMBIANCE
        </div>
        <div className="flex-1 banner2"></div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 banner1"></div>
        <div className="flex-1 bg-yellow-400 text-lg flex items-center justify-center text-center font-semibold">
          DISCOVER A NEW SIDE OF ISTANBUL
        </div>
      </div>
    </section>
  );
};

export default Banner;
