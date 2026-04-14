import { LogoMarquee } from "@/sections/LogoStrip/components/LogoMarquee";

export const LogoStrip = () => {
  return (
    <section className="relative box-border caret-transparent gap-x-4 auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] outline-[3px] gap-y-4 z-[5] overflow-hidden mt-8 mb-16 md:gap-x-[normal] md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:gap-y-[normal] md:mt-16">
      <div className="box-border caret-transparent max-w-[1040px] outline-[3px] text-center w-full mx-auto md:w-[90%]">
        <div className="text-gray-900/60 text-sm items-center box-border caret-transparent inline-block justify-start leading-6 outline-[3px] align-middle mt-4 mb-8 px-4 md:leading-[18px] md:mb-12 md:px-0">
          More than{" "}
          <span className="items-center backdrop-blur bg-clip-text bg-[linear-gradient(93deg,rgb(17,24,39)_1.12%,rgb(17,24,39)_78.33%,rgb(33,66,231)_79.94%,rgb(3,181,237)_90.11%,rgb(33,66,231)_96.51%,rgb(17,24,39)_97.77%)] shadow-[rgba(17,24,39,0.1)_0px_0px_0px_1px,rgba(17,24,39,0.04)_0px_1px_1px_-0.5px,rgba(17,24,39,0.04)_0px_3px_3px_-1.5px,rgba(17,24,39,0.04)_0px_6px_6px_-3px,rgba(17,24,39,0.04)_0px_12px_12px_-6px,rgba(17,24,39,0.04)_0px_24px_24px_-12px] box-border caret-transparent inline-flex h-7 justify-center leading-6 outline-[3px] mx-0.5 px-1.5 py-1 rounded-lg md:h-auto md:leading-[18px]">
            30k companies
          </span>
          choose Arcade to tell better product stories
        </div>
      </div>
      <div className="items-center box-border caret-transparent flex justify-start [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_20%,rgb(0,0,0)_80%,rgba(0,0,0,0)_100%)] outline-[3px] overflow-hidden">
        <LogoMarquee containerClassName="items-center self-center box-border caret-transparent gap-x-0 flex shrink-0 auto-cols-[1fr] grid-flow-col grid-cols-[1fr] grid-rows-[auto] justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 mx-auto md:self-auto md:auto-cols-auto md:grid-flow-row md:grid-cols-none md:grid-rows-none" />
        <LogoMarquee containerClassName="items-center self-center box-border caret-transparent gap-x-0 flex shrink-0 auto-cols-[1fr] grid-flow-col grid-cols-[1fr] grid-rows-[auto] justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 mx-auto md:self-auto md:auto-cols-auto md:grid-flow-row md:grid-cols-none md:grid-rows-none" />
      </div>
    </section>
  );
};
