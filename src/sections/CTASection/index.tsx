export const CTASection = () => {
  return (
    <section className="relative box-border caret-transparent outline-[3px] z-0 px-2 md:z-[1] md:px-4">
      <div className="items-center bg-[linear-gradient(rgb(255,255,255),rgb(243,244,246))] box-border caret-transparent flex justify-center outline-[3px] w-full mx-auto px-6 rounded-b-2xl md:px-0">
        <div className="items-center box-border caret-transparent gap-x-8 flex flex-col justify-between max-w-[1080px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-8 w-[90%] py-16 md:flex-row md:py-[104px]">
          <h2 className="text-[28px] font-semibold bg-clip-text bg-[linear-gradient(92deg,rgb(17,24,39)_70%,rgba(30,43,72,0.9)_95%)] box-border caret-transparent tracking-[-0.42px] leading-8 min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-5xl md:tracking-[-0.72px] md:leading-[56px] md:text-start">
            Build AI-powered content that drives action.
          </h2>
          <div className="items-stretch box-border caret-transparent gap-x-3 flex flex-col shrink-0 justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 md:items-center md:gap-x-4 md:flex-row md:justify-end md:gap-y-4">
            <a
              href="https://app.arcade.software/"
              className="text-white text-base font-semibold items-center bg-blue-700 shadow-[rgba(17,24,39,0.04)_0px_32px_32px_0px,rgba(17,24,39,0.04)_0px_16px_16px_0px,rgba(17,24,39,0.04)_0px_8px_8px_0px,rgba(17,24,39,0.04)_0px_4px_4px_-2px,rgba(17,24,39,0.04)_0px_2px_2px_-1px,rgb(24,47,165)_0px_0px_0px_1px] box-border caret-transparent gap-x-2 flex auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] h-12 justify-center leading-4 max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 underline-offset-[0.8px] px-4 rounded-xl hover:bg-indigo-600 hover:shadow-[rgba(17,24,39,0)_0px_32px_32px_0px,rgba(17,24,39,0)_0px_16px_16px_0px,rgba(17,24,39,0.04)_0px_8px_8px_-4px,rgba(17,24,39,0.04)_0px_4px_4px_-2px,rgba(17,24,39,0.04)_0px_2px_2px_-1px,rgb(33,66,231)_0px_0px_0px_1px] hover:outline-0 hover:border-blue-700"
            >
              <div className="items-center self-center box-border caret-transparent flex shrink-0 justify-center min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.8px] md:[align-items:normal] md:block md:shrink md:justify-normal">
                <strong className="font-bold box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.8px] md:inline md:min-h-0 md:min-w-0">
                  Sign up for free
                </strong>
              </div>
            </a>
            <a
              href="/contactsales"
              className="text-gray-900 text-base font-semibold items-center bg-white shadow-[rgba(17,24,39,0.04)_0px_32px_32px_0px,rgba(17,24,39,0.04)_0px_16px_16px_0px,rgba(17,24,39,0.04)_0px_8px_8px_0px,rgba(17,24,39,0.04)_0px_4px_4px_-2px,rgba(17,24,39,0.04)_0px_2px_2px_-1px,rgba(17,24,39,0.16)_0px_0px_0px_1px] box-border caret-transparent gap-x-2 flex auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] h-12 justify-center leading-4 max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 underline-offset-[0.8px] px-4 rounded-xl hover:bg-gray-50 hover:shadow-[rgba(17,24,39,0)_0px_32px_32px_0px,rgba(17,24,39,0)_0px_16px_16px_0px,rgba(17,24,39,0.04)_0px_8px_8px_-4px,rgba(17,24,39,0.04)_0px_4px_4px_-2px,rgba(17,24,39,0.04)_0px_2px_2px_-1px,rgba(17,24,39,0.16)_0px_0px_0px_1px] hover:outline-0"
            >
              <div className="items-center self-center box-border caret-transparent flex shrink-0 justify-center min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.8px] md:[align-items:normal] md:block md:shrink md:justify-normal">
                Talk to a GTM expert
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
