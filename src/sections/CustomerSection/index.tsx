import { CustomerCard } from "@/sections/CustomerSection/components/CustomerCard";
import { CustomerStats } from "@/sections/CustomerSection/components/CustomerStats";

export const CustomerSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] pt-8 pb-12 px-2 md:pt-24 md:pb-28 md:px-4">
      <div className="relative items-center bg-[linear-gradient(rgb(248,252,254),rgb(255,255,255))] box-border caret-transparent flex justify-center outline-[3px] transform-none w-full overflow-hidden pt-24 rounded-2xl md:pt-[140px] md:scale-90">
        <div className="relative items-center box-border caret-transparent flex flex-col max-w-[1080px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full z-[2] mx-auto px-6 md:w-[90%] md:px-0">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] mb-8 md:mb-16">
            <h2 className="text-[28px] font-semibold bg-clip-text bg-[linear-gradient(92deg,rgb(17,24,39)_70%,rgba(30,43,72,0.9)_95%)] box-border caret-transparent inline-flex tracking-[-0.42px] leading-8 outline-[3px] md:text-5xl md:tracking-[-0.72px] md:leading-[56px]">
              You’re in great company.
            </h2>
            <p className="text-gray-700 text-xl box-border caret-transparent leading-6 outline-[3px] mt-2 md:text-2xl md:leading-8 md:mt-6">
              How our customers use Arcade to drive impact
            </p>
          </div>
          <CustomerCard />
          <div className="relative box-border caret-transparent hidden list-none max-w-[230px] min-h-0 min-w-0 outline-[3px] w-[600px] z-[1] mb-28 mx-auto md:block md:max-w-none md:min-h-[auto] md:min-w-[auto] md:mb-12">
            <div className="relative items-start caret-transparent flex flex-col h-[370px] justify-start outline-[3px] w-full z-[1]">
              <a
                href="https://www.arcade.software/post/quantum-metric"
                role="group"
                aria-label="1 / 3"
                className="items-start self-stretch backdrop-blur bg-white/90 shadow-[rgba(17,24,39,0.05)_0px_32px_32px_0px,rgba(17,24,39,0.05)_0px_16px_16px_0px,rgba(17,24,39,0.05)_0px_8px_8px_0px,rgba(17,24,39,0.05)_0px_4px_4px_0px,rgba(17,24,39,0.05)_0px_2px_2px_-2px,rgba(17,24,39,0.1)_0px_0px_0px_1px] box-border caret-transparent gap-x-8 flex flex-col h-[370px] justify-center max-w-[280px] min-h-[460px] min-w-0 outline-[3px] gap-y-8 text-left underline-offset-1 transform-none origin-[100%_0px] z-[3] mx-auto p-6 rounded-2xl md:max-w-[600px] md:min-h-[370px] md:min-w-[auto] md:z-[2] md:p-12 hover:outline-0"
              ></a>
              <a
                href="https://www.arcade.software/post/nudge-security"
                role="group"
                aria-label="2 / 3"
                className="items-start self-stretch backdrop-blur bg-white/90 shadow-[rgba(17,24,39,0.05)_0px_32px_32px_0px,rgba(17,24,39,0.05)_0px_16px_16px_0px,rgba(17,24,39,0.05)_0px_8px_8px_0px,rgba(17,24,39,0.05)_0px_4px_4px_0px,rgba(17,24,39,0.05)_0px_2px_2px_-2px,rgba(17,24,39,0.1)_0px_0px_0px_1px] box-border caret-transparent gap-x-8 flex flex-col h-[370px] justify-center max-w-[280px] min-h-[460px] min-w-0 outline-[3px] gap-y-8 text-left underline-offset-1 transform-none origin-[100%_0px] z-[2] mx-auto p-6 rounded-2xl md:max-w-[600px] md:min-h-[370px] md:min-w-[auto] md:translate-y-[-370px] md:z-[3] md:p-12 hover:outline-0"
              ></a>
              <a
                href="https://www.arcade.software/post/capchase"
                role="group"
                aria-label="3 / 3"
                className="items-start self-stretch backdrop-blur bg-white/90 shadow-[rgba(17,24,39,0.05)_0px_32px_32px_0px,rgba(17,24,39,0.05)_0px_16px_16px_0px,rgba(17,24,39,0.05)_0px_8px_8px_0px,rgba(17,24,39,0.05)_0px_4px_4px_0px,rgba(17,24,39,0.05)_0px_2px_2px_-2px,rgba(17,24,39,0.1)_0px_0px_0px_1px] box-border caret-transparent gap-x-8 flex flex-col h-[370px] justify-center max-w-[280px] min-h-[460px] min-w-0 outline-[3px] gap-y-8 text-left underline-offset-1 transform-none origin-[100%_0px] z-[2] mx-auto p-6 rounded-2xl md:max-w-[600px] md:min-h-[370px] md:min-w-[auto] md:p-12 hover:outline-0"
              ></a>
            </div>
          </div>
          <CustomerStats />
          <div className="box-border caret-transparent hidden outline-[3px] before:accent-auto before:caret-transparent before:text-gray-600 before:table before:text-xl before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-7 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-gray-600 after:table after:text-xl after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-7 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter"></div>
          <a
            href="https://www.arcade.software/category/case-study"
            className="text-gray-900 text-base font-semibold items-center bg-white shadow-[rgba(17,24,39,0.04)_0px_32px_32px_0px,rgba(17,24,39,0.04)_0px_16px_16px_0px,rgba(17,24,39,0.04)_0px_8px_8px_0px,rgba(17,24,39,0.04)_0px_4px_4px_-2px,rgba(17,24,39,0.04)_0px_2px_2px_-1px,rgba(17,24,39,0.16)_0px_0px_0px_1px] box-border caret-transparent gap-x-2 flex auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] h-12 justify-center leading-4 max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 underline-offset-[0.8px] mb-12 px-4 rounded-xl hover:bg-gray-50 hover:shadow-[rgba(17,24,39,0)_0px_32px_32px_0px,rgba(17,24,39,0)_0px_16px_16px_0px,rgba(17,24,39,0.04)_0px_8px_8px_-4px,rgba(17,24,39,0.04)_0px_4px_4px_-2px,rgba(17,24,39,0.04)_0px_2px_2px_-1px,rgba(17,24,39,0.16)_0px_0px_0px_1px] hover:outline-0"
          >
            <div className="items-center self-center box-border caret-transparent flex shrink-0 justify-center min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.8px] md:[align-items:normal] md:block md:shrink md:justify-normal">
              More customer stories
            </div>
          </a>
        </div>
        <div className="absolute box-border caret-transparent blur-[208px] h-auto outline-[3px] translate-x-[-50.0%] translate-y-[-850px] w-[780px] z-[1] left-2/4 bottom-0 md:h-[1351px] md:translate-x-[-772px] md:translate-y-[-850px] md:w-[1544px] before:accent-auto before:caret-transparent before:text-gray-600 before:table before:text-xl before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-7 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-gray-600 after:table after:text-xl after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-7 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
          <img
            src="https://c.animaapp.com/mnxsvuft69auLT/assets/icon-8.svg"
            alt="Icon"
            className="box-border caret-transparent inline outline-[3px] align-baseline"
          />
        </div>
      </div>
    </section>
  );
};
