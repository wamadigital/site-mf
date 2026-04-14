import { FormatTabs } from "@/sections/FormatSection/components/FormatTabs";
import { FormatPreview } from "@/sections/FormatSection/components/FormatPreview";

export const FormatSection = () => {
  return (
    <section className="relative box-border caret-transparent outline-[3px] py-12 md:pt-24 md:pb-28">
      <div className="box-border caret-transparent max-w-[1080px] outline-[3px] w-full mx-auto px-6 md:w-[90%] md:px-0">
        <div className="relative items-center box-border caret-transparent flex flex-col justify-center max-w-full outline-[3px] text-center z-[1] mb-8 mx-auto md:max-w-[80%] md:mb-[88px]">
          <h2 className="text-[28px] font-semibold bg-clip-text bg-[linear-gradient(92deg,rgb(17,24,39)_70%,rgba(30,43,72,0.9)_95%)] box-border caret-transparent tracking-[-0.42px] leading-8 min-h-[auto] min-w-[auto] outline-[3px] mb-[11.2px] md:text-5xl md:tracking-[-0.72px] md:leading-[56px] md:mb-[19.2px]">
            You&#39;re the storyteller.
            <br className="text-[28px] box-border caret-transparent tracking-[-0.42px] leading-8 outline-[3px] md:text-5xl md:tracking-[-0.72px] md:leading-[56px]" />
            Arcade makes every format effortless.
          </h2>
          <p className="text-gray-700 text-xl box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] outline-[3px] md:text-2xl md:leading-8">
            In a crowded market, your product story matters more than ever. But
            creating beautiful content is painfully slow – until now.
          </p>
        </div>
        <div className="relative box-border caret-transparent outline-[3px]">
          <div className="relative box-border caret-transparent max-w-[1040px] outline-[3px] w-full mx-auto md:w-[90%]">
            <FormatTabs />
            <FormatPreview />
            <div className="absolute backdrop-blur bg-white/10 shadow-[rgba(255,255,255,0.2)_0px_0px_0px_1px_inset,rgba(17,24,39,0.16)_0px_0px_0px_1px,rgba(17,24,39,0.05)_0px_2px_2px_-2px,rgba(17,24,39,0.05)_0px_4px_4px_0px,rgba(17,24,39,0.05)_0px_8px_8px_0px,rgba(17,24,39,0.05)_0px_16px_16px_0px,rgba(17,24,39,0.05)_0px_32px_32px_0px] box-border caret-transparent outline-[3px] z-[3] rounded-2xl top-0 -bottom-2 -inset-x-2"></div>
          </div>
        </div>
      </div>
      <img
        src="https://c.animaapp.com/mnxsvuft69auLT/assets/69c25af2d67b9d93296f6587_image_2.webp"
        sizes="(max-width: 1436px) 100vw, 1436px"
        alt=""
        className="absolute box-border caret-transparent blur-[10px] max-w-[1400px] outline-[3px] w-full z-0 mx-auto top-auto bottom-[130px] inset-x-[0%] md:w-[90%] md:top-[270px] md:bottom-[0%]"
      />
    </section>
  );
};
