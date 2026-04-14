import { IntegrationGrid } from "@/sections/IntegrationsSection/components/IntegrationGrid";

export const IntegrationsSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] pt-8 pb-12 px-2 md:pt-24 md:pb-28 md:px-4">
      <div className="relative items-center bg-gray-900 box-border caret-transparent flex justify-center outline-[3px] transform-none w-full overflow-hidden py-24 rounded-2xl md:py-[140px] md:scale-90">
        <div className="relative items-center box-border caret-transparent flex flex-col max-w-[1080px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full z-[2] mx-auto px-6 md:w-[90%] md:px-0">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] mb-16">
            <h2 className="text-[28px] font-semibold bg-clip-text bg-[linear-gradient(110deg,rgb(255,255,255)_50.64%,rgba(255,255,255,0.4)_90%)] box-border caret-transparent inline-flex tracking-[-0.42px] leading-8 outline-[3px] md:text-5xl md:tracking-[-0.72px] md:leading-[56px]">
              Integrated with the
              <br className="text-[28px] box-border caret-transparent block tracking-[-0.42px] leading-8 min-h-[auto] min-w-[auto] outline-[3px] md:text-5xl md:tracking-[-0.72px] md:leading-[56px]" />
              tools you rely on.
            </h2>
            <p className="text-xl bg-clip-text bg-[linear-gradient(92deg,rgb(255,255,255)_40.62%,rgba(255,255,255,0.4)_98.68%)] box-border caret-transparent leading-6 opacity-[0.84] outline-[3px] mt-2 md:text-2xl md:leading-8 md:mt-6">
              Gather deep insights, drive action, and get more done with native
              integrations
            </p>
          </div>
          <a
            href="/integrations"
            className="text-gray-900 text-base font-semibold items-center bg-white shadow-[rgba(17,24,39,0.04)_0px_32px_32px_0px,rgba(17,24,39,0.04)_0px_16px_16px_0px,rgba(17,24,39,0.04)_0px_8px_8px_0px,rgba(17,24,39,0.04)_0px_4px_4px_-2px,rgba(17,24,39,0.04)_0px_2px_2px_-1px,rgba(17,24,39,0.16)_0px_0px_0px_1px] box-border caret-transparent gap-x-2 flex auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] h-12 justify-center leading-4 max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 underline-offset-[0.8px] px-4 rounded-xl hover:bg-gray-50 hover:shadow-[rgba(17,24,39,0)_0px_32px_32px_0px,rgba(17,24,39,0)_0px_16px_16px_0px,rgba(17,24,39,0.04)_0px_8px_8px_-4px,rgba(17,24,39,0.04)_0px_4px_4px_-2px,rgba(17,24,39,0.04)_0px_2px_2px_-1px,rgba(17,24,39,0.16)_0px_0px_0px_1px] hover:outline-0"
          >
            <div className="items-center self-center box-border caret-transparent flex shrink-0 justify-center min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.8px] md:[align-items:normal] md:block md:shrink md:justify-normal">
              Explore all integrations
            </div>
          </a>
          <IntegrationGrid />
        </div>
      </div>
    </section>
  );
};
