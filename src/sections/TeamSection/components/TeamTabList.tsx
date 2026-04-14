type TeamTabListProps = {
  tabs: string[];
  activeIndex: number;
  onTabChange: (index: number) => void;
};

export const TeamTabList = ({ tabs, activeIndex, onTabChange }: TeamTabListProps) => {
  return (
    <div
      role="tablist"
      className="relative items-stretch bg-transparent box-border caret-transparent gap-x-1 flex justify-start max-w-full min-h-[auto] min-w-[auto] order-1 outline-[3px] gap-y-1 w-full mt-12 mb-0 p-0 rounded-2xl overflow-x-auto scrollbar-hide md:items-center md:bg-gray-50 md:gap-x-2 md:flex-nowrap md:justify-center md:order-none md:gap-y-2 md:w-auto md:mt-0 md:mb-12 md:p-2 md:overflow-x-visible"
    >
      {tabs.map((label, i) => (
        <button
          key={label}
          role="tab"
          aria-selected={activeIndex === i}
          onClick={() => onTabChange(i)}
          className={`relative font-semibold items-center box-border caret-transparent gap-x-2 flex justify-center leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 text-left underline-offset-1 align-top z-[1] p-3 rounded-xl transition-all duration-300 whitespace-nowrap shrink-0 md:shrink md:gap-x-3 md:gap-y-3 md:px-4 md:py-2.5 hover:outline-0 cursor-pointer ${
            activeIndex === i
              ? "text-gray-900 bg-white shadow-[rgba(17,24,39,0.16)_0px_0px_0px_1px,rgba(17,24,39,0.04)_0px_2px_2px_-2px,rgba(17,24,39,0.04)_0px_4px_4px_0px,rgba(17,24,39,0.04)_0px_8px_8px_0px,rgba(17,24,39,0.04)_0px_16px_16px_0px,rgba(17,24,39,0.04)_0px_32px_32px_0px] z-[2]"
              : "text-gray-500 bg-transparent hover:bg-gray-900/5"
          }`}
        >
          <div className="text-sm self-center box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] underline-offset-1 text-current md:text-base md:leading-6">
            {label}
          </div>
        </button>
      ))}
    </div>
  );
};
