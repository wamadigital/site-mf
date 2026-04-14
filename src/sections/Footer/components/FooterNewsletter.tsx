export const FooterNewsletter = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-4 flex flex-col h-auto justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 w-full md:items-center md:gap-x-10 md:flex-row md:h-14 md:gap-y-10">
      <div className="text-[22px] font-medium box-border caret-transparent leading-7 min-h-[auto] min-w-[auto] outline-[3px] pr-10 md:text-3xl md:leading-8 md:pr-0">
        Smarter Stories, Every Month.
      </div>
      <div className="text-sm box-border caret-transparent flex leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:w-auto">
        <form
          name="wf-form-Newsletter_Form"
          aria-label="Newsletter_Form"
          className="relative items-center box-border caret-transparent gap-x-2 flex flex-col justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 w-full md:gap-x-[normal] md:flex-row md:gap-y-[normal] md:w-[420px]"
        >
          <input
            name="email"
            placeholder="Enter your email"
            type="email"
            className="relative box-border caret-transparent block h-14 min-h-[auto] min-w-[auto] outline-[3px] align-middle w-full border border-gray-200 px-4 py-0 rounded-xl border-solid md:pr-[114px] md:rounded-2xl"
          />
          <input
            type="submit"
            value="Subscribe"
            className="relative font-semibold items-center shadow-[rgba(17,24,39,0.04)_0px_32px_32px_0px,rgba(17,24,39,0.04)_0px_16px_16px_0px,rgba(17,24,39,0.04)_0px_8px_8px_0px,rgba(17,24,39,0.04)_0px_4px_4px_-2px,rgba(17,24,39,0.04)_0px_2px_2px_-1px,rgba(17,24,39,0.16)_0px_0px_0px_1px] box-border caret-transparent gap-x-2 flex auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] h-12 justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 text-center text-nowrap w-full px-4 py-0 rounded-xl right-0 md:absolute md:min-h-0 md:min-w-0 md:w-auto md:right-1 hover:bg-gray-50 hover:shadow-[rgba(17,24,39,0)_0px_32px_32px_0px,rgba(17,24,39,0)_0px_16px_16px_0px,rgba(17,24,39,0.04)_0px_8px_8px_-4px,rgba(17,24,39,0.04)_0px_4px_4px_-2px,rgba(17,24,39,0.04)_0px_2px_2px_-1px,rgba(17,24,39,0.16)_0px_0px_0px_1px]"
          />
        </form>
        <div
          role="region"
          aria-label="Newsletter_Form success"
          className="box-border caret-transparent hidden outline-[3px] text-right"
        >
          <div className="box-border caret-transparent outline-[3px]">
            All good, you&#39;re in!
          </div>
        </div>
        <div
          role="region"
          aria-label="Newsletter_Form failure"
          className="bg-red-100 box-border caret-transparent hidden outline-[3px] mt-2.5 p-2.5"
        >
          <div className="box-border caret-transparent outline-[3px]">
            We have a little issue, please try again later.
          </div>
        </div>
      </div>
    </div>
  );
};
