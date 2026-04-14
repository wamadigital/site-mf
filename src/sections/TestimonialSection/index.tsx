export const TestimonialSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] pt-12 pb-8 md:py-24">
      <div className="relative items-center box-border caret-transparent flex flex-col max-w-[1080px] outline-[3px] text-center w-full z-[2] mx-auto px-6 md:w-[90%] md:px-0">
        <a
          href="https://www.g2.com/products/arcade-software-arcade/reviews"
          className="items-center bg-white box-border caret-transparent block flex-col h-10 justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] underline-offset-1 mb-8 px-2 rounded-xl hover:bg-rose-50 hover:outline-0"
        >
          <div className="items-center box-border caret-transparent flex blur-0 h-10 justify-center outline-[3px] underline-offset-1">
            <img
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/6673f91661f0c5a40fb38fe1_g2.svg"
              alt="G2 5 Stars"
              className="box-border caret-transparent h-6 max-w-full min-h-[auto] min-w-[auto] outline-[3px] underline-offset-1"
            />
          </div>
          <div className="text-red-500 text-base font-semibold items-center box-border caret-transparent flex blur-sm h-10 justify-center leading-5 opacity-0 outline-[3px] underline-offset-1">
            See all reviews
          </div>
        </a>
        <h2 className="text-[28px] font-semibold items-center bg-clip-text bg-[linear-gradient(102deg,rgb(17,24,39)_70%,rgba(30,43,72,0.9)_90%)] box-border caret-transparent flex flex-col tracking-[-1.2px] leading-8 min-h-[auto] min-w-[auto] outline-[3px] md:text-5xl md:leading-[56px]">
          &quot;Arcade&#39;s special sauce: the speed to create professional
          assets.&quot;
        </h2>
        <div className="items-center box-border caret-transparent gap-x-2.5 flex flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5 mt-12">
          <div className="text-gray-900 text-[40px] box-border caret-transparent leading-10 min-h-[auto] min-w-[auto] outline-[3px] font-balig_script">
            Jim Sinai
          </div>
          <div className="text-gray-500 text-sm box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px]">
            CMO @ Supio
          </div>
        </div>
      </div>
    </section>
  );
};
