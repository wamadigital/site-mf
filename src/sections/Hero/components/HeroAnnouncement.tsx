export const HeroAnnouncement = () => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] mb-0 md:mb-4">
      <a
        href="https://www.arcade.software/storyjam?utm_source=website&utm_medium=banner&utm_campaign=storyjam"
        className="text-transparent items-center backdrop-blur bg-clip-text bg-[linear-gradient(90deg,rgb(17,24,39)_0%,rgb(17,24,39)_45%,rgb(33,66,231)_50%,rgb(3,181,237)_55%,rgb(17,24,39)_60%,rgb(17,24,39)_100%)] bg-size-[200%_100%] shadow-[rgba(17,24,39,0.1)_0px_0px_0px_1px,rgba(17,24,39,0.04)_0px_1px_1px_-0.5px,rgba(17,24,39,0.04)_0px_3px_3px_-1.5px,rgba(17,24,39,0.04)_0px_6px_6px_-3px,rgba(17,24,39,0.04)_0px_12px_12px_-6px,rgba(17,24,39,0.04)_0px_24px_24px_-12px] box-border gap-x-3 flex h-8 justify-start max-w-full outline-[3px] gap-y-3 underline-offset-1 mb-2 px-2 rounded-xl md:h-10 md:mb-0 md:pl-4 md:pr-1 md:rounded-2xl hover:outline-0"
      >
        <div className="text-gray-900 text-[10.8px] font-medium box-border caret-transparent leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] text-center underline-offset-1 md:text-base md:leading-4 md:text-left">
          Build with us and hear from customers on April 14
        </div>
        <div className="text-gray-900 text-xs font-semibold items-center bg-gray-900/0 box-border caret-transparent hidden shrink-0 h-8 justify-center leading-3 min-h-0 min-w-0 outline-[3px] underline-offset-1 border border-gray-900/10 px-2 rounded-xl border-solid md:text-sm md:flex md:leading-[14px] md:min-h-[auto] md:min-w-[auto]">
          Grab a spot
        </div>
      </a>
    </div>
  );
};
