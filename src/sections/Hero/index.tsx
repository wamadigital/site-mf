import { HeroAnnouncement } from "@/sections/Hero/components/HeroAnnouncement";
import { HeroHeadline } from "@/sections/Hero/components/HeroHeadline";
import { HeroTabSelector } from "@/sections/Hero/components/HeroTabSelector";

export const Hero = () => {
  return (
    <div className="relative bg-white box-border caret-transparent outline-[3px] w-full z-[1] overflow-hidden">
      <header className="relative items-center box-border caret-transparent flex flex-col justify-center min-h-0 outline-[3px] pt-28 pb-24 md:min-h-[750px] md:pt-48 md:pb-40">
        <div className="box-border caret-transparent max-w-[1080px] min-h-[auto] min-w-[auto] outline-[3px] w-full mx-auto px-6 md:w-[90%] md:px-0">
          <div className="relative items-stretch box-border caret-transparent flex flex-col justify-start outline-[3px] md:justify-normal">
            <div className="relative items-center box-border caret-transparent gap-x-4 flex flex-col justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 text-center w-full z-[5] mx-auto md:gap-x-7 md:gap-y-7 md:w-[90%]">
              <HeroAnnouncement />
              <HeroHeadline
                level="h1"
                className="text-[30.4px] font-semibold items-center bg-clip-text bg-[linear-gradient(120deg,rgb(17,24,39)_60%,rgba(30,43,72,0.88)_100%)] box-border caret-transparent gap-x-0 block flex-col justify-center tracking-[-0.608px] leading-[34px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 pr-1 py-1 md:text-[64px] md:gap-x-[normal] md:flex md:flex-row md:tracking-[-1.28px] md:leading-[68px] md:gap-y-[normal] md:pr-1.5 md:py-1.5"
              >
                Your product story,
                <br className="text-[30.4px] box-border caret-transparent inline tracking-[-0.608px] leading-[34px] min-h-0 min-w-0 outline-[3px] md:text-[64px] md:block md:tracking-[-1.28px] md:leading-[68px] md:min-h-[auto] md:min-w-[auto]" />
                built by AI in minutes.
              </HeroHeadline>
              <HeroHeadline
                level="h2"
                className="text-gray-900/80 text-base items-center box-border caret-transparent flex flex-col justify-center tracking-[-0.24px] leading-[22px] min-h-[auto] min-w-[auto] outline-[3px] md:text-xl md:tracking-[-0.3px] md:leading-7"
              >
                Create beautiful, on-brand demos, videos, and visuals of your
                actual product. No designers. No agencies. No waiting.
              </HeroHeadline>
              <HeroTabSelector />
              <div className="relative text-white text-sm bg-gray-900 shadow-[rgba(17,24,39,0.04)_0px_2px_2px_-2px,rgba(17,24,39,0.04)_0px_4px_4px_0px,rgba(17,24,39,0.04)_0px_8px_8px_0px,rgba(17,24,39,0.04)_0px_16px_16px_0px,rgba(17,24,39,0.04)_0px_32px_32px_0px] box-border caret-transparent hidden leading-4 outline-[3px] -mt-5 px-3 py-2.5 rounded-xl bottom-0 md:bottom-auto"></div>
              <div className="items-center box-border caret-transparent gap-x-2.5 flex justify-center min-h-[auto] min-w-[auto] opacity-90 outline-[3px] gap-y-2.5">
                <img
                  src="https://c.animaapp.com/mnxsvuft69auLT/assets/698b4c5913c85186314b0654_try-icon-white.svg"
                  alt=""
                  className="box-border caret-transparent h-[17px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] translate-y-[-5px] w-[19px]"
                />
                <div className="text-white text-sm font-medium box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px]">
                  Try with your website!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-gray-50 box-border caret-transparent [mask-image:-webkit-radial-gradient(center,rgb(255,255,255),rgb(0,0,0))] outline-[3px] origin-[50%_0px] z-[-1] overflow-hidden rounded-2xl inset-2 md:inset-4">
          <div className="absolute bg-[url('https://cdn.prod.website-files.com/61d72a2cda50bc679e28766b/6925e2c477c0e42bcdb8cc52_sdfsd.jpg')] bg-no-repeat bg-cover box-border caret-transparent h-full outline-[3px] w-full bg-[position:0px_0px] bottom-[0%] inset-x-[0%]">
            <img
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/image-1.png"
              aria-label="Unicorn Studio Scene"
              role="img"
              className="aspect-[auto_1872_/_1308] box-border caret-transparent inline-block h-[872px] max-w-full outline-[3px] w-[1248px]"
            />
          </div>
        </div>
      </header>
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
          <div className="items-center self-center box-border caret-transparent gap-x-0 flex shrink-0 auto-cols-[1fr] grid-flow-col grid-cols-[1fr] grid-rows-[auto] justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 mx-auto md:self-auto md:auto-cols-auto md:grid-flow-row md:grid-cols-none md:grid-rows-none">
            <img
              alt="Salesforce"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/6928923a1fba7f9312eaeec0_sfdc.svg"
              className="box-border caret-transparent shrink-0 h-[38px] max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Bubble"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/64afea23c0d3ca725f79936d_bubble_logo.svg"
              className="box-border caret-transparent shrink-0 h-5 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Instacart"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/6928923967dccf2d0f963c05_Frame.svg"
              className="box-border caret-transparent shrink-0 h-5 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="OpenAI"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/69cac1f4b04d7378d91f2806_openai.svg"
              className="box-border caret-transparent shrink-0 h-6 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Webflow"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/6928923aaf0cbced54d57ba5_webflow_2.svg"
              className="box-border caret-transparent shrink-0 h-5 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Retool"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/6928923a8d31d4ff6748bb18_retool.svg"
              className="box-border caret-transparent shrink-0 h-5 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Rudderstack"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/673b393d4393be26d2304727_rudderstack.svg"
              className="box-border caret-transparent shrink-0 h-6 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Atlassian"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/6320fba733a864f6629cb830_atlassian_min.svg"
              className="box-border caret-transparent shrink-0 h-5 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Zapier"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/6724bc2dace6f0947dd88fb8_zap.svg"
              className="box-border caret-transparent shrink-0 h-6 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Quantum Metric"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/641b1a0842f1c87c0d7e432c_quantum.svg"
              className="box-border caret-transparent shrink-0 h-7 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Sentry"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/6320fba764813ef74b2ad141_sentry_min.svg"
              className="box-border caret-transparent shrink-0 h-6 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Appfire"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/667d39a851de723a471229a2_appfire.svg"
              className="box-border caret-transparent shrink-0 h-[26px] max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Mux"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/67129f62b7b4e6d53c3f8740_Mux_logo_1.svg"
              className="box-border caret-transparent shrink-0 h-5 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Pennylane"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/64afea23d0afdf170f434ae3_pennylane_logo.svg"
              className="box-border caret-transparent shrink-0 h-[26px] max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Hack The Box"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/667d4ddcc068c49afb193d76_hackthebox.svg"
              className="box-border caret-transparent shrink-0 h-[26px] max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Carta"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/6320fba79298aa73f31735e5_carta_min.svg"
              className="box-border caret-transparent shrink-0 h-8 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Glide"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/692890ba2d5e8a0ca39c8640_glide-new.svg"
              className="box-border caret-transparent shrink-0 h-[22px] max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="AngelList"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/6320fba731f65442e4a93329_angellist_min.svg"
              className="box-border caret-transparent shrink-0 h-9 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Clearbit"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/6320fba7f64d6792cdb0f885_clearbit_min.svg"
              className="box-border caret-transparent shrink-0 h-8 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
          </div>
          <div className="items-center self-center box-border caret-transparent gap-x-0 flex shrink-0 auto-cols-[1fr] grid-flow-col grid-cols-[1fr] grid-rows-[auto] justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 mx-auto md:self-auto md:auto-cols-auto md:grid-flow-row md:grid-cols-none md:grid-rows-none">
            <img
              alt="Salesforce"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/6928923a1fba7f9312eaeec0_sfdc.svg"
              className="box-border caret-transparent shrink-0 h-[38px] max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Bubble"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/64afea23c0d3ca725f79936d_bubble_logo.svg"
              className="box-border caret-transparent shrink-0 h-5 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Instacart"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/6928923967dccf2d0f963c05_Frame.svg"
              className="box-border caret-transparent shrink-0 h-5 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="OpenAI"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/69cac1f4b04d7378d91f2806_openai.svg"
              className="box-border caret-transparent shrink-0 h-6 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Webflow"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/6928923aaf0cbced54d57ba5_webflow_2.svg"
              className="box-border caret-transparent shrink-0 h-5 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Retool"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/6928923a8d31d4ff6748bb18_retool.svg"
              className="box-border caret-transparent shrink-0 h-5 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Rudderstack"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/673b393d4393be26d2304727_rudderstack.svg"
              className="box-border caret-transparent shrink-0 h-6 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Atlassian"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/6320fba733a864f6629cb830_atlassian_min.svg"
              className="box-border caret-transparent shrink-0 h-5 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Zapier"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/6724bc2dace6f0947dd88fb8_zap.svg"
              className="box-border caret-transparent shrink-0 h-6 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Quantum Metric"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/641b1a0842f1c87c0d7e432c_quantum.svg"
              className="box-border caret-transparent shrink-0 h-7 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Sentry"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/6320fba764813ef74b2ad141_sentry_min.svg"
              className="box-border caret-transparent shrink-0 h-6 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Appfire"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/667d39a851de723a471229a2_appfire.svg"
              className="box-border caret-transparent shrink-0 h-[26px] max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Mux"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/67129f62b7b4e6d53c3f8740_Mux_logo_1.svg"
              className="box-border caret-transparent shrink-0 h-5 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Pennylane"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/64afea23d0afdf170f434ae3_pennylane_logo.svg"
              className="box-border caret-transparent shrink-0 h-[26px] max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Hack The Box"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/667d4ddcc068c49afb193d76_hackthebox.svg"
              className="box-border caret-transparent shrink-0 h-[26px] max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Carta"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/6320fba79298aa73f31735e5_carta_min.svg"
              className="box-border caret-transparent shrink-0 h-8 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Glide"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/692890ba2d5e8a0ca39c8640_glide-new.svg"
              className="box-border caret-transparent shrink-0 h-[22px] max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="AngelList"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/6320fba731f65442e4a93329_angellist_min.svg"
              className="box-border caret-transparent shrink-0 h-9 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
            <img
              alt="Clearbit"
              src="https://c.animaapp.com/mnxsvuft69auLT/assets/6320fba7f64d6792cdb0f885_clearbit_min.svg"
              className="box-border caret-transparent shrink-0 h-8 max-h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-4 md:max-h-none md:px-8"
            />
          </div>
        </div>
      </section>
      <section className="relative box-border caret-transparent outline-[3px] py-12 md:pt-24 md:pb-28">
        <div className="box-border caret-transparent max-w-[1080px] outline-[3px] w-full mx-auto px-6 md:w-[90%] md:px-0">
          <div className="relative items-center box-border caret-transparent flex flex-col justify-center max-w-full outline-[3px] text-center z-[1] mb-8 mx-auto md:max-w-[80%] md:mb-[88px]">
            <h2 className="text-[28px] font-semibold bg-clip-text bg-[linear-gradient(92deg,rgb(17,24,39)_70%,rgba(30,43,72,0.9)_95%)] box-border caret-transparent tracking-[-0.42px] leading-8 min-h-[auto] min-w-[auto] outline-[3px] mb-[11.2px] md:text-5xl md:tracking-[-0.72px] md:leading-[56px] md:mb-[19.2px]">
              You&#39;re the storyteller.
              <br className="text-[28px] box-border caret-transparent tracking-[-0.42px] leading-8 outline-[3px] md:text-5xl md:tracking-[-0.72px] md:leading-[56px]" />
              Arcade makes every format effortless.
            </h2>
            <p className="text-gray-700 text-xl box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] outline-[3px] md:text-2xl md:leading-8">
              In a crowded market, your product story matters more than ever.
              But creating beautiful content is painfully slow – until now.
            </p>
          </div>
          <div className="relative box-border caret-transparent outline-[3px]">
            <div className="relative box-border caret-transparent max-w-[1040px] outline-[3px] w-full mx-auto md:w-[90%]">
              <div className="relative items-center box-border caret-transparent flex justify-between outline-[3px] z-10 -mx-2">
                <div className="relative items-center box-border caret-transparent gap-x-1 flex justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 w-full p-2 md:w-auto">
                  <div className="absolute bg-white/90 shadow-[rgba(17,24,39,0.12)_0px_0px_0px_1px,rgba(17,24,39,0.03)_0px_2px_2px_-2px,rgba(17,24,39,0.03)_0px_4px_4px_0px,rgba(17,24,39,0.03)_0px_8px_8px_0px,rgba(17,24,39,0.03)_0px_16px_16px_0px] box-border caret-transparent h-10 min-w-8 outline-[3px] pointer-events-none w-[106.344px] z-0 rounded-lg left-2 md:min-w-0 md:w-0 md:left-0"></div>
                  <div className="relative text-gray-900 items-center box-border caret-transparent gap-x-2 flex h-10 justify-center min-h-[auto] min-w-fit outline-[3px] gap-y-2 text-nowrap w-full z-[5] px-2 rounded-lg md:w-auto md:pr-3">
                    <div className="items-center bg-indigo-50 shadow-[rgba(17,24,39,0.12)_0px_0px_0px_1px] box-border caret-transparent hidden h-6 justify-center min-h-0 min-w-0 outline-[3px] text-nowrap w-6 overflow-hidden rounded-md border-2 border-solid border-white md:flex md:min-h-[auto] md:min-w-[auto]">
                      <div className="items-center box-border caret-transparent flex h-4 justify-center min-h-0 min-w-0 outline-[3px] text-nowrap w-4 md:min-h-[auto] md:min-w-[auto] before:accent-auto before:caret-transparent before:text-gray-900 before:table before:text-xl before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-7 before:list-outside before:list-disc before:min-h-0 before:min-w-0 before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-inter before:md:min-h-[auto] before:md:min-w-[auto] after:accent-auto after:caret-transparent after:clear-both after:text-gray-900 after:table after:text-xl after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-7 after:list-outside after:list-disc after:min-h-0 after:min-w-0 after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:text-nowrap after:visible after:border-separate after:font-inter after:md:min-h-[auto] after:md:min-w-[auto]">
                        <img
                          src="https://c.animaapp.com/mnxsvuft69auLT/assets/icon-5.svg"
                          alt="Icon"
                          className="box-border caret-transparent flex h-4 outline-[3px] text-nowrap align-baseline w-4"
                        />
                      </div>
                    </div>
                    <div className="text-sm font-medium box-border caret-transparent hidden leading-5 min-h-0 min-w-0 outline-[3px] text-nowrap md:block md:leading-6 md:min-h-[auto] md:min-w-[auto]">
                      Interactive Demo
                    </div>
                    <div className="text-sm font-medium items-center box-border caret-transparent flex justify-start leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-nowrap md:[align-items:normal] md:hidden md:justify-normal md:leading-6 md:min-h-0 md:min-w-0">
                      Demo
                    </div>
                  </div>
                  <div className="relative items-center box-border caret-transparent gap-x-2 flex h-10 justify-center min-h-[auto] min-w-fit outline-[3px] gap-y-2 text-nowrap w-full z-[5] px-2 rounded-lg md:w-auto md:pr-3 hover:bg-white/20">
                    <div className="items-center bg-gray-900/10 shadow-[rgba(17,24,39,0.12)_0px_0px_0px_1px] box-border caret-transparent hidden h-6 justify-center min-h-0 min-w-0 outline-[3px] text-nowrap w-6 overflow-hidden rounded-md border-2 border-solid border-transparent md:flex md:min-h-[auto] md:min-w-[auto]">
                      <div className="items-center box-border caret-transparent flex h-4 justify-center min-h-0 min-w-0 outline-[3px] text-nowrap w-4 md:min-h-[auto] md:min-w-[auto] before:accent-auto before:caret-transparent before:text-gray-600 before:table before:text-xl before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-7 before:list-outside before:list-disc before:min-h-0 before:min-w-0 before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-inter before:md:min-h-[auto] before:md:min-w-[auto] after:accent-auto after:caret-transparent after:clear-both after:text-gray-600 after:table after:text-xl after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-7 after:list-outside after:list-disc after:min-h-0 after:min-w-0 after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:text-nowrap after:visible after:border-separate after:font-inter after:md:min-h-[auto] after:md:min-w-[auto]">
                        <img
                          src="https://c.animaapp.com/mnxsvuft69auLT/assets/icon-6.svg"
                          alt="Icon"
                          className="box-border caret-transparent flex h-4 outline-[3px] text-nowrap align-baseline w-4"
                        />
                      </div>
                    </div>
                    <div className="text-white text-sm font-medium box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-nowrap md:leading-6">
                      Video
                    </div>
                  </div>
                  <div className="relative items-center box-border caret-transparent gap-x-2 flex h-10 justify-center min-h-[auto] min-w-fit outline-[3px] gap-y-2 text-nowrap w-full z-[5] px-2 rounded-lg md:w-auto md:pr-3 hover:bg-white/20">
                    <div className="items-center bg-gray-900/10 shadow-[rgba(17,24,39,0.12)_0px_0px_0px_1px] box-border caret-transparent hidden h-6 justify-center min-h-0 min-w-0 outline-[3px] text-nowrap w-6 overflow-hidden rounded-md border-2 border-solid border-transparent md:flex md:min-h-[auto] md:min-w-[auto]">
                      <div className="items-center box-border caret-transparent flex h-4 justify-center min-h-0 min-w-0 outline-[3px] text-nowrap w-4 md:min-h-[auto] md:min-w-[auto] before:accent-auto before:caret-transparent before:text-gray-600 before:table before:text-xl before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-7 before:list-outside before:list-disc before:min-h-0 before:min-w-0 before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-inter before:md:min-h-[auto] before:md:min-w-[auto] after:accent-auto after:caret-transparent after:clear-both after:text-gray-600 after:table after:text-xl after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-7 after:list-outside after:list-disc after:min-h-0 after:min-w-0 after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:text-nowrap after:visible after:border-separate after:font-inter after:md:min-h-[auto] after:md:min-w-[auto]">
                        <img
                          src="https://c.animaapp.com/mnxsvuft69auLT/assets/icon-7.svg"
                          alt="Icon"
                          className="box-border caret-transparent flex h-4 outline-[3px] text-nowrap align-baseline w-4"
                        />
                      </div>
                    </div>
                    <div className="text-white text-sm font-medium box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-nowrap md:leading-6">
                      Visuals
                    </div>
                  </div>
                </div>
                <div className="relative items-center box-border caret-transparent gap-x-1 hidden justify-start [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0px,rgb(0,0,0)_0px,rgb(0,0,0)_100%,rgba(0,0,0,0)_100%)] min-h-0 min-w-0 outline-[3px] gap-y-1 scroll-smooth overflow-auto p-2 md:flex md:min-h-[auto] md:min-w-[auto]">
                  <div className="absolute bg-white/90 shadow-[rgba(17,24,39,0.12)_0px_0px_0px_1px,rgba(17,24,39,0.03)_0px_2px_2px_-2px,rgba(17,24,39,0.03)_0px_4px_4px_0px,rgba(17,24,39,0.03)_0px_8px_8px_0px,rgba(17,24,39,0.03)_0px_16px_16px_0px] box-border caret-transparent h-10 min-w-10 outline-[3px] pointer-events-none w-0 z-0 rounded-lg left-0 md:w-10 md:left-2"></div>
                  <div className="relative text-gray-900 items-center box-border caret-transparent gap-x-2 flex h-10 justify-center min-h-0 min-w-fit outline-[3px] gap-y-2 text-nowrap w-10 z-[5] overflow-hidden rounded-lg md:min-h-[auto]">
                    <div className="items-center box-border caret-transparent gap-x-3 flex flex-col h-6 justify-start min-h-0 min-w-0 outline-[3px] gap-y-3 text-nowrap w-6 md:min-h-[auto] md:min-w-[auto]">
                      <img
                        src="https://c.animaapp.com/mnxsvuft69auLT/assets/68c1f008d492332385f1a35c_figma-off.svg"
                        alt="Figma"
                        className="box-border caret-transparent blur shrink-0 h-6 max-w-full min-h-0 min-w-0 opacity-0 outline-[3px] text-nowrap transform-none w-6 md:min-h-[auto] md:min-w-[auto] md:-translate-y-9"
                      />
                      <img
                        src="https://c.animaapp.com/mnxsvuft69auLT/assets/68c1f008e646184aee022e17_figma-on.svg"
                        alt="Figma"
                        className="box-border caret-transparent blur-0 shrink-0 h-6 max-w-full min-h-0 min-w-0 outline-[3px] text-nowrap transform-none w-6 md:min-h-[auto] md:min-w-[auto] md:-translate-y-9"
                      />
                    </div>
                  </div>
                  <div className="relative items-center box-border caret-transparent gap-x-2 flex h-10 justify-center min-h-0 min-w-fit outline-[3px] gap-y-2 text-nowrap w-10 z-[5] overflow-hidden rounded-lg md:min-h-[auto] hover:bg-white/20">
                    <div className="items-center box-border caret-transparent gap-x-3 flex flex-col h-6 justify-start min-h-0 min-w-0 outline-[3px] gap-y-3 text-nowrap w-6 md:min-h-[auto] md:min-w-[auto]">
                      <img
                        src="https://c.animaapp.com/mnxsvuft69auLT/assets/68c1f0074a2ca09c86494bac_linear-on.svg"
                        alt="Linear"
                        className="box-border caret-transparent blur-0 shrink-0 h-6 max-w-full min-h-0 min-w-0 outline-[3px] text-nowrap w-6 md:min-h-[auto] md:min-w-[auto]"
                      />
                      <img
                        src="https://c.animaapp.com/mnxsvuft69auLT/assets/68c1f008486ad546807a56a4_linear-off.svg"
                        alt="Linear"
                        className="box-border caret-transparent blur shrink-0 h-6 max-w-full min-h-0 min-w-0 opacity-0 outline-[3px] text-nowrap w-6 md:min-h-[auto] md:min-w-[auto]"
                      />
                    </div>
                  </div>
                  <div className="relative items-center box-border caret-transparent gap-x-2 flex h-10 justify-center min-h-0 min-w-fit outline-[3px] gap-y-2 text-nowrap w-10 z-[5] overflow-hidden rounded-lg md:min-h-[auto] hover:bg-white/20">
                    <div className="items-center box-border caret-transparent gap-x-3 flex flex-col h-6 justify-start min-h-0 min-w-0 outline-[3px] gap-y-3 text-nowrap w-6 md:min-h-[auto] md:min-w-[auto]">
                      <img
                        src="https://c.animaapp.com/mnxsvuft69auLT/assets/68c1f00751171e50f5800f41_notion-off.svg"
                        alt="Notion"
                        className="box-border caret-transparent blur-0 shrink-0 h-6 max-w-full min-h-0 min-w-0 outline-[3px] text-nowrap w-6 md:min-h-[auto] md:min-w-[auto]"
                      />
                      <img
                        src="https://c.animaapp.com/mnxsvuft69auLT/assets/68c1f008ba283bdc49974bf8_notion-on.svg"
                        alt="Notion"
                        className="box-border caret-transparent blur shrink-0 h-6 max-w-full min-h-0 min-w-0 opacity-0 outline-[3px] text-nowrap w-6 md:min-h-[auto] md:min-w-[auto]"
                      />
                    </div>
                  </div>
                  <div className="relative items-center box-border caret-transparent gap-x-2 flex h-10 justify-center min-h-0 min-w-fit outline-[3px] gap-y-2 text-nowrap w-10 z-[5] overflow-hidden rounded-lg md:min-h-[auto] hover:bg-white/20">
                    <div className="items-center box-border caret-transparent gap-x-3 flex flex-col h-6 justify-start min-h-0 min-w-0 outline-[3px] gap-y-3 text-nowrap w-6 md:min-h-[auto] md:min-w-[auto]">
                      <img
                        src="https://c.animaapp.com/mnxsvuft69auLT/assets/68c1f0083f0057077c3f6ca5_webflow-off.svg"
                        alt="Webflow"
                        className="box-border caret-transparent blur-0 shrink-0 h-6 max-w-full min-h-0 min-w-0 outline-[3px] text-nowrap w-6 md:min-h-[auto] md:min-w-[auto]"
                      />
                      <img
                        src="https://c.animaapp.com/mnxsvuft69auLT/assets/68c1f007a065de49ecc7a170_webflow-on.svg"
                        alt="Webflow"
                        className="box-border caret-transparent blur shrink-0 h-6 max-w-full min-h-0 min-w-0 opacity-0 outline-[3px] text-nowrap w-6 md:min-h-[auto] md:min-w-[auto]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative items-center box-border caret-transparent flex-col justify-center outline-[3px] w-full">
                <div className="relative items-center box-border caret-transparent block flex-col justify-start outline-[3px] z-[8] rounded-lg md:flex">
                  <div className="absolute bg-[url('https://cdn.prod.website-files.com/61d72a2cda50bc679e28766b/6929b044d716bf53ee3e031a_Pen%20Tool%20Animation%20%281')] bg-no-repeat bg-size-[48px] shadow-[rgba(17,24,39,0.06)_0px_40px_40px_-24px,rgba(17,24,39,0.06)_0px_32px_32px_2px,rgba(17,24,39,0.06)_0px_16px_16px_0px,rgba(17,24,39,0.06)_0px_8px_8px_0px,rgba(17,24,39,0.06)_0px_4px_4px_0px,rgba(17,24,39,0.06)_0px_2px_3px_-2px] box-border caret-transparent outline-[3px] bg-center rounded-lg top-1 bottom-2 inset-x-1 md:shadow-[rgba(17,24,39,0.05)_0px_2px_2px_-2px,rgba(17,24,39,0.05)_0px_4px_4px_0px,rgba(17,24,39,0.05)_0px_8px_8px_0px,rgba(17,24,39,0.05)_0px_16px_16px_0px,rgba(17,24,39,0.05)_0px_32px_32px_0px,rgba(17,24,39,0.12)_0px_48px_48px_0px]"></div>
                  <div className="relative box-border caret-transparent min-h-0 min-w-0 outline-[3px] w-full rounded-lg md:min-h-[auto] md:min-w-[auto] before:accent-auto before:caret-transparent before:text-gray-600 before:table before:text-xl before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-7 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-gray-600 after:table after:text-xl after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-7 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
                    <div className="relative box-border caret-transparent h-0 mt-[-21px] outline-[3px] w-full -mb-5 pb-[calc(62.5%_+_41px)]">
                      <iframe
                        src="https://demo.arcade.software/4sKSwbo46GG787xH3VzH?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true&disable_border=true"
                        title="Arcade"
                        className="absolute box-border caret-transparent h-full outline-[3px] align-baseline w-full rounded-lg inset-0"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
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
      <section className="box-border caret-transparent outline-[3px] py-12 md:pt-24 md:pb-28">
        <div className="bg-gray-50 box-border caret-transparent max-w-screen-xl outline-[3px] w-full mx-auto pt-10 pb-16 px-10 rounded-3xl md:w-[90%] md:p-[100px]">
          <div className="items-start box-border caret-transparent gap-x-2 flex flex-col justify-between outline-[3px] gap-y-2 md:items-end md:gap-x-8 md:flex-row md:gap-y-8">
            <h2 className="text-gray-900 text-[28px] font-semibold box-border caret-transparent tracking-[-0.42px] leading-8 min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-5xl md:tracking-[-0.72px] md:leading-[56px] md:w-6/12">
              <span className="text-[28px] box-border caret-transparent tracking-[-0.42px] leading-8 opacity-70 outline-[3px] md:text-5xl md:tracking-[-0.72px] md:leading-[56px]">
                AI that knows your product.
              </span>
              AI that knows your brand.
            </h2>
            <p className="box-border caret-transparent tracking-[-0.01px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:w-6/12">
              Arcade isn&#39;t a generic AI tool. It starts with your actual
              product and your brand, so every demo, video, and visual created
              looks like your best creative work.
            </p>
          </div>
          <div className="relative items-center bg-white bg-[url('https://cdn.prod.website-files.com/61d72a2cda50bc679e28766b/6929b0bbc0760a6256da931e_Pen%20Tool%20Animation%20%282')] bg-no-repeat bg-size-[50px] shadow-[rgba(17,24,39,0.12)_0px_0px_0px_1px,rgba(17,24,39,0.03)_0px_2px_2px_-2px,rgba(17,24,39,0.03)_0px_4px_4px_0px,rgba(17,24,39,0.03)_0px_8px_8px_0px,rgba(17,24,39,0.03)_0px_16px_16px_0px] box-border caret-transparent gap-x-2 flex flex-col justify-center min-h-[280px] outline-[3px] gap-y-2 bg-center mt-8 rounded-2xl md:mt-16">
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] before:accent-auto before:caret-transparent before:text-gray-600 before:table before:text-xl before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-7 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-gray-600 after:table after:text-xl after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-7 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
              <div className="relative items-center bg-white box-border caret-transparent flex justify-center outline-[3px] overflow-hidden rounded-2xl">
                <video
                  loop=""
                  playsinline=""
                  className="box-border caret-transparent h-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-full"
                >
                  <source
                    src="https://cdn.arcade.software/web-assets/homepage-assets/arcade-video-gen.mp4"
                    type="video/mp4"
                    className="text-black text-base box-border caret-transparent leading-[normal] outline-[3px] font-times_new_roman"
                  />
                </video>
                <div className="absolute items-center backdrop-blur bg-white/90 shadow-[rgba(17,24,39,0.12)_0px_0px_0px_1px,rgba(17,24,39,0.03)_0px_2px_2px_-2px,rgba(17,24,39,0.03)_0px_4px_4px_0px,rgba(17,24,39,0.03)_0px_8px_8px_0px,rgba(17,24,39,0.03)_0px_16px_16px_0px] box-border caret-transparent flex h-20 justify-center outline-[3px] pointer-events-none translate-x-[-50.0%] translate-y-[-50.0%] w-20 z-10 rounded-[50%] left-2/4 top-2/4 before:accent-auto before:items-center before:bg-[url('https://cdn.prod.website-files.com/61d72a2cda50bc679e28766b/692735d7c8be1904b5eb2ee0_play-rounded.svg')] before:bg-center before:bg-no-repeat before:caret-transparent before:text-gray-600 before:flex before:text-xl before:not-italic before:normal-nums before:font-normal before:h-8 before:justify-center before:tracking-[normal] before:leading-7 before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:outline-[3px] before:pointer-events-none before:text-start before:no-underline before:indent-[0px] before:normal-case before:translate-x-px before:visible before:w-8 before:border-separate before:font-inter"></div>
              </div>
            </div>
            <div className="absolute items-center box-border caret-transparent flex justify-center outline-[3px] -bottom-6">
              <div className="relative items-center backdrop-blur-lg bg-gray-900/30 box-border caret-transparent gap-x-1 flex justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 mt-10 p-1 rounded-2xl">
                <div className="relative items-center box-border caret-transparent flex h-10 justify-center min-h-[auto] min-w-[auto] outline-[3px] z-[2] px-3 rounded-xl">
                  <div className="text-white text-sm font-medium box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] outline-[3px]">
                    Claude
                  </div>
                </div>
                <div className="relative items-center box-border caret-transparent flex h-10 justify-center min-h-[auto] min-w-[auto] outline-[3px] z-[2] px-3 rounded-xl">
                  <div className="text-white text-sm font-medium box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] outline-[3px]">
                    Gemini
                  </div>
                </div>
                <div className="relative items-center box-border caret-transparent flex h-10 justify-center min-h-[auto] min-w-[auto] outline-[3px] z-[2] px-3 rounded-xl">
                  <div className="text-gray-900 text-sm font-medium box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] outline-[3px]">
                    Arcade
                  </div>
                </div>
                <div className="absolute bg-white shadow-[rgba(17,24,39,0.12)_0px_0px_0px_1px,rgba(17,24,39,0.03)_0px_2px_2px_-2px,rgba(17,24,39,0.03)_0px_4px_4px_0px,rgba(17,24,39,0.03)_0px_8px_8px_0px,rgba(17,24,39,0.03)_0px_16px_16px_0px] box-border caret-transparent h-10 min-w-5 outline-[3px] pointer-events-none translate-x-[150px] w-[72px] rounded-xl left-1 inset-y-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="box-border caret-transparent outline-[3px] py-12 md:pt-24 md:pb-28">
        <div className="box-border caret-transparent max-w-[1080px] outline-[3px] w-full mx-auto px-6 md:w-[90%] md:px-0">
          <div className="items-start box-border caret-transparent gap-x-4 flex flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] justify-center outline-[3px] gap-y-4 w-full">
            <div className="items-stretch box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 md:grid-cols-[1fr_1fr]">
              <div className="self-center box-border caret-transparent col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] min-h-[auto] min-w-[auto] outline-[3px] mb-8 pr-0 md:mb-0 md:pr-6">
                <h2 className="text-[28px] font-semibold bg-clip-text bg-[linear-gradient(92deg,rgb(17,24,39)_70%,rgba(30,43,72,0.9)_95%)] box-border caret-transparent tracking-[-0.42px] leading-8 outline-[3px] text-center mb-[11.2px] md:text-5xl md:tracking-[-0.72px] md:leading-[56px] md:text-start md:mb-[19.2px]">
                  The fastest way to tell your story.
                </h2>
                <p className="text-gray-700 text-xl box-border caret-transparent leading-6 outline-[3px] text-center md:text-2xl md:leading-8 md:text-start">
                  On average, it takes 6 minutes to create a new Arcade. Here’s
                  how it works.
                </p>
              </div>
              <div className="items-start bg-gray-50 box-border caret-transparent flex flex-col col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-between min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden rounded-2xl">
                <img
                  src="https://c.animaapp.com/mnxsvuft69auLT/assets/692e403b77c00299c59b63cc_home-1.png"
                  sizes="(max-width: 479px) 100vw, 500px"
                  alt=""
                  className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full"
                />
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pb-6 px-6">
                  <div className="text-xs box-border caret-transparent leading-5 outline-[3px] mb-2 md:mb-2.5">
                    No code required
                  </div>
                  <h4 className="text-gray-900 text-base font-semibold box-border caret-transparent tracking-[-0.12px] leading-6 outline-[3px] mb-1 md:text-xl md:tracking-[-0.15px] md:leading-[26px] md:mb-1.5">
                    Capture from anywhere
                  </h4>
                  <p className="text-sm box-border caret-transparent leading-5 outline-[3px] md:text-base md:leading-[22px]">
                    Record on any device using a Arcade’s Chrome extension,
                    Desktop App, or uploaded media.
                  </p>
                </div>
              </div>
            </div>
            <div className="items-stretch box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 md:grid-cols-[1fr_1fr]">
              <div className="items-start bg-gray-50 box-border caret-transparent flex flex-col col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-between min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden rounded-2xl">
                <img
                  src="https://c.animaapp.com/mnxsvuft69auLT/assets/692e428745343bdbc3e2e1af_img-1.png"
                  sizes="(max-width: 479px) 100vw, 500px"
                  alt=""
                  className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full"
                />
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pb-6 px-6">
                  <div className="text-xs box-border caret-transparent leading-5 outline-[3px] mb-2 md:mb-2.5">
                    It takes minutes
                  </div>
                  <h4 className="text-gray-900 text-base font-semibold box-border caret-transparent tracking-[-0.12px] leading-6 outline-[3px] mb-1 md:text-xl md:tracking-[-0.15px] md:leading-[26px] md:mb-1.5">
                    Build interactive demos
                  </h4>
                  <p className="text-sm box-border caret-transparent leading-5 outline-[3px] md:text-base md:leading-[22px]">
                    Create engaging demos with voiceovers, branching, and other
                    interactions.
                  </p>
                </div>
              </div>
              <div className="items-start bg-gray-50 box-border caret-transparent flex flex-col col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-between min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden rounded-2xl">
                <img
                  src="https://c.animaapp.com/mnxsvuft69auLT/assets/692e42870936f426d5eaab24_img-2.png"
                  sizes="(max-width: 479px) 100vw, 500px"
                  alt=""
                  className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full"
                />
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pb-6 px-6">
                  <div className="text-xs box-border caret-transparent leading-5 outline-[3px] mb-2 md:mb-2.5">
                    Beautiful and on-brand
                  </div>
                  <h4 className="text-gray-900 text-base font-semibold box-border caret-transparent tracking-[-0.12px] leading-6 outline-[3px] mb-1 md:text-xl md:tracking-[-0.15px] md:leading-[26px] md:mb-1.5">
                    Generate videos and visuals
                  </h4>
                  <p className="text-sm box-border caret-transparent leading-5 outline-[3px] md:text-base md:leading-[22px]">
                    Don’t wait on designers or agencies. Stand out with
                    beautiful, on-brand videos and visuals.
                  </p>
                </div>
              </div>
            </div>
            <div className="items-stretch box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 md:grid-cols-[1fr_1fr]">
              <div className="items-start bg-gray-50 box-border caret-transparent flex flex-col col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-between min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden rounded-2xl">
                <img
                  src="https://c.animaapp.com/mnxsvuft69auLT/assets/692e49530021233a9a8a4c10_img-02.png"
                  sizes="(max-width: 479px) 100vw, 500px"
                  alt=""
                  className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full"
                />
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pb-6 px-6">
                  <div className="text-xs box-border caret-transparent leading-5 outline-[3px] mb-2 md:mb-2.5">
                    Distribution made easy
                  </div>
                  <h4 className="text-gray-900 text-base font-semibold box-border caret-transparent tracking-[-0.12px] leading-6 outline-[3px] mb-1 md:text-xl md:tracking-[-0.15px] md:leading-[26px] md:mb-1.5">
                    Share &amp; Embed
                  </h4>
                  <p className="text-sm box-border caret-transparent leading-5 outline-[3px] md:text-base md:leading-[22px]">
                    Embed on your website, share custom links with prospects,
                    download as a GIF, or share as a video.
                  </p>
                </div>
              </div>
              <div className="items-start bg-gray-50 box-border caret-transparent flex flex-col col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-between min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden rounded-2xl">
                <img
                  src="https://c.animaapp.com/mnxsvuft69auLT/assets/692e461f7fc431d32436db11_img-03.png"
                  alt=""
                  className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full"
                />
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pb-6 px-6">
                  <div className="text-xs box-border caret-transparent leading-5 outline-[3px] mb-2 md:mb-2.5">
                    Drive action
                  </div>
                  <h4 className="text-gray-900 text-base font-semibold box-border caret-transparent tracking-[-0.12px] leading-6 outline-[3px] mb-1 md:text-xl md:tracking-[-0.15px] md:leading-[26px] md:mb-1.5">
                    Analyze instantly
                  </h4>
                  <p className="text-sm box-border caret-transparent leading-5 outline-[3px] md:text-base md:leading-[22px]">
                    Leverage analytics to identify your viewers, understand how
                    they engage, and drive action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="box-border caret-transparent outline-[3px] pt-12 pb-20 md:pt-24 md:pb-28">
        <div className="box-border caret-transparent max-w-[1080px] outline-[3px] w-full mx-auto px-6 md:w-[90%] md:px-0">
          <div className="relative items-center box-border caret-transparent flex flex-col justify-center max-w-full outline-[3px] text-center z-[1] mb-8 mx-auto md:max-w-[80%] md:mb-[88px]">
            <h2 className="text-[28px] font-semibold bg-clip-text bg-[linear-gradient(92deg,rgb(17,24,39)_70%,rgba(30,43,72,0.9)_95%)] box-border caret-transparent tracking-[-0.42px] leading-8 min-h-[auto] min-w-[auto] outline-[3px] mb-[11.2px] md:text-5xl md:tracking-[-0.72px] md:leading-[56px] md:mb-[19.2px]">
              Empower your GTM to be better storytellers.
            </h2>
            <p className="text-gray-700 text-xl box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] outline-[3px] md:text-2xl md:leading-8">
              Storytelling changes across the customer journey. Here’s how
              different teams use Arcade.
            </p>
          </div>
          <div className="relative items-center box-border caret-transparent flex flex-col justify-start outline-[3px] md:[align-items:normal] md:block md:flex-row md:justify-normal">
            <div className="relative items-center box-border caret-transparent flex flex-col justify-start min-h-[auto] min-w-[auto] outline-[3px] md:min-h-0 md:min-w-0 before:accent-auto before:caret-transparent before:text-gray-600 before:table before:text-xl before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-7 before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-gray-600 after:table after:text-xl after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-7 after:list-outside after:list-disc after:min-h-[auto] after:min-w-[auto] after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
              <div
                role="tablist"
                className="relative items-stretch bg-transparent box-border caret-transparent gap-x-1 flex flex-wrap justify-center max-w-full min-h-[auto] min-w-[auto] order-1 outline-[3px] gap-y-1 w-full mt-12 mb-0 p-0 rounded-2xl md:items-center md:bg-gray-50 md:gap-x-2 md:flex-nowrap md:order-none md:gap-y-2 md:w-auto md:mt-0 md:mb-12 md:p-2 after:accent-auto after:bg-white after:shadow-[rgba(17,24,39,0.16)_0px_0px_0px_1px,rgba(17,24,39,0.04)_0px_2px_2px_-2px,rgba(17,24,39,0.04)_0px_4px_4px_0px,rgba(17,24,39,0.04)_0px_8px_8px_0px,rgba(17,24,39,0.04)_0px_16px_16px_0px,rgba(17,24,39,0.04)_0px_32px_32px_0px] after:caret-transparent after:text-gray-600 after:hidden after:text-xl after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-7 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-none after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:transform-none after:visible after:w-0 after:z-0 after:rounded-xl after:border-separate after:left-0 after:inset-y-2 after:font-inter after:md:flex after:md:translate-x-2 after:md:w-[110px]"
              >
                <a
                  href="#w-tabs-0-data-w-pane-0"
                  role="tab"
                  className="relative text-gray-900 font-semibold items-center bg-white shadow-[rgba(17,24,39,0.16)_0px_0px_0px_1px,rgba(17,24,39,0.04)_0px_2px_2px_-2px,rgba(17,24,39,0.04)_0px_4px_4px_0px,rgba(17,24,39,0.04)_0px_8px_8px_0px,rgba(17,24,39,0.04)_0px_16px_16px_0px,rgba(17,24,39,0.04)_0px_32px_32px_0px] box-border caret-transparent gap-x-2 flex justify-center leading-[30px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 text-left underline-offset-1 align-top z-[2] p-3 rounded-xl md:bg-transparent md:shadow-none md:gap-x-3 md:gap-y-3 md:px-4 md:py-2.5 hover:outline-0"
                >
                  <div className="text-sm self-center box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] underline-offset-1 md:text-base md:leading-6">
                    Marketing
                  </div>
                </a>
                <a
                  href="#w-tabs-0-data-w-pane-1"
                  role="tab"
                  className="relative text-gray-500 font-semibold items-center bg-transparent box-border caret-transparent gap-x-2 flex justify-center leading-[30px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 text-left underline-offset-1 align-top z-[1] p-3 rounded-xl md:gap-x-3 md:gap-y-3 md:px-4 md:py-2.5 hover:bg-gray-900/0 hover:outline-0"
                >
                  <div className="text-gray-900 text-sm self-center box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] underline-offset-1 md:text-base md:leading-6">
                    Pre-Sales
                  </div>
                </a>
                <a
                  href="#w-tabs-0-data-w-pane-2"
                  role="tab"
                  className="relative text-gray-500 font-semibold items-center bg-transparent box-border caret-transparent gap-x-2 flex justify-center leading-[30px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 text-left underline-offset-1 align-top z-[1] p-3 rounded-xl md:gap-x-3 md:gap-y-3 md:px-4 md:py-2.5 hover:bg-gray-900/0 hover:outline-0"
                >
                  <div className="text-gray-900 text-sm self-center box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] underline-offset-1 md:text-base md:leading-6">
                    Customer Experience
                  </div>
                </a>
                <a
                  href="#w-tabs-0-data-w-pane-3"
                  role="tab"
                  className="relative text-gray-500 font-semibold items-center bg-transparent box-border caret-transparent gap-x-2 flex justify-center leading-[30px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 text-left underline-offset-1 align-top z-[1] p-3 rounded-xl md:gap-x-3 md:gap-y-3 md:px-4 md:py-2.5 hover:bg-gray-900/0 hover:outline-0"
                >
                  <div className="text-gray-900 text-sm self-center box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] underline-offset-1 md:text-base md:leading-6">
                    Enablement
                  </div>
                </a>
                <a
                  href="#w-tabs-0-data-w-pane-4"
                  role="tab"
                  className="relative text-gray-500 font-semibold items-center bg-transparent box-border caret-transparent gap-x-2 flex justify-center leading-[30px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 text-left underline-offset-1 align-top z-[1] p-3 rounded-xl md:gap-x-3 md:gap-y-3 md:px-4 md:py-2.5 hover:bg-gray-900/0 hover:outline-0"
                >
                  <div className="text-gray-900 text-sm self-center box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] underline-offset-1 md:text-base md:leading-6">
                    Product
                  </div>
                </a>
              </div>
              <div className="relative items-start box-border caret-transparent justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full">
                <div
                  role="tabpanel"
                  className="relative box-border caret-transparent outline-[3px] w-full"
                >
                  <div className="box-border caret-transparent gap-x-8 flex flex-col justify-between max-w-full outline-[3px] gap-y-8 md:gap-x-[normal] md:flex-row md:gap-y-[normal]">
                    <div className="relative self-center box-border caret-transparent flex max-w-full min-h-[auto] min-w-[auto] order-1 outline-[3px] w-full md:order-none md:w-6/12">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pr-0 md:pr-20">
                        <div className="relative box-border caret-transparent outline-[3px]">
                          <h3 className="text-2xl font-semibold bg-clip-text bg-[linear-gradient(102deg,rgb(17,24,39)_70%,rgba(30,43,72,0.9)_90%)] box-border caret-transparent inline-flex tracking-[-0.24px] leading-[30.4px] outline-[3px] mb-2 md:text-4xl md:tracking-[-0.36px] md:leading-[44px] md:mb-4">
                            Arcade
                            <br className="text-2xl box-border caret-transparent block tracking-[-0.24px] leading-[30.4px] min-h-[auto] min-w-[auto] outline-[3px] md:text-4xl md:tracking-[-0.36px] md:leading-[44px]" />
                            for marketing
                          </h3>
                          <p className="text-lg box-border caret-transparent inline-block leading-6 outline-[3px] text-left md:text-xl md:leading-7 md:text-start">
                            Create compelling, on-brand demos, videos, and
                            visuals without the wait. Move fast to drive leads,
                            boost adoption, and more effectively tell your
                            product&#39;s story.
                          </p>
                        </div>
                        <div className="box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] outline-[3px] gap-y-3 mt-8 md:grid-cols-[1fr_1fr] md:grid-rows-[auto_auto]">
                          <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
                            <img
                              src="https://c.animaapp.com/mnxsvuft69auLT/assets/66759a51f2c5179385278f99_check-features.svg"
                              alt=""
                              className="box-border caret-transparent h-5 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-5"
                            />
                            <div className="text-gray-900 text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] outline-[3px]">
                              AI-powered demo editor
                            </div>
                          </div>
                          <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
                            <img
                              src="https://c.animaapp.com/mnxsvuft69auLT/assets/66759a51f2c5179385278f99_check-features.svg"
                              alt=""
                              className="box-border caret-transparent h-5 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-5"
                            />
                            <div className="text-gray-900 text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] outline-[3px]">
                              Video generation
                            </div>
                          </div>
                          <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
                            <img
                              src="https://c.animaapp.com/mnxsvuft69auLT/assets/66759a51f2c5179385278f99_check-features.svg"
                              alt=""
                              className="box-border caret-transparent h-5 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-5"
                            />
                            <div className="text-gray-900 text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] outline-[3px]">
                              Embed anywhere
                            </div>
                          </div>
                          <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
                            <img
                              src="https://c.animaapp.com/mnxsvuft69auLT/assets/66759a51f2c5179385278f99_check-features.svg"
                              alt=""
                              className="box-border caret-transparent h-5 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-5"
                            />
                            <div className="text-gray-900 text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] outline-[3px]">
                              Visual generation
                            </div>
                          </div>
                        </div>
                        <a
                          href="/solutions/marketing"
                          className="text-blue-700 font-medium items-center box-border caret-transparent gap-x-2 flex max-w-full outline-[3px] gap-y-2 underline-offset-1 mt-6 md:mt-8 hover:outline-0"
                        >
                          <div className="text-lg items-center self-center box-border caret-transparent flex leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] underline-offset-1">
                            Learn more
                          </div>
                          <img
                            src="https://c.animaapp.com/mnxsvuft69auLT/assets/64ac5db04fb1e5c4d4c432a9_arrow.svg"
                            alt=""
                            className="self-center box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] underline-offset-1"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="relative items-center self-center box-border caret-transparent flex justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:w-6/12">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden rounded-2xl">
                        <div className="box-border caret-transparent h-full outline-[3px] w-full before:accent-auto before:caret-transparent before:text-gray-600 before:table before:text-xl before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-7 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-gray-600 after:table after:text-xl after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-7 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
                          <video
                            src="https://cdn.arcade.software/web-assets/brand.mp4"
                            loop=""
                            autoplay=""
                            playsinline=""
                            muted=""
                            className="box-border caret-transparent h-full object-cover outline-[3px] align-baseline w-full"
                          ></video>
                        </div>
                      </div>
                      <div className="absolute items-center self-center backdrop-blur-[10px] bg-white/70 bottom-[-19px] shadow-[rgba(17,24,39,0.1)_0px_0px_0px_1px,rgba(17,24,39,0.05)_0px_2px_2px_-2px,rgba(17,24,39,0.05)_0px_4px_4px_0px,rgba(17,24,39,0.05)_0px_8px_8px_0px,rgba(17,24,39,0.05)_0px_16px_16px_0px,rgba(17,24,39,0.05)_0px_32px_32px_0px] box-border caret-transparent flex basis-[0%] grow auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] justify-center outline-[3px] p-3 rounded-xl">
                        <div className="items-center box-border caret-transparent hidden shrink-0 h-6 justify-center min-h-0 min-w-0 outline-[3px] w-6 md:flex md:min-h-[auto] md:min-w-[auto]">
                          <img
                            src="https://c.animaapp.com/mnxsvuft69auLT/assets/667d704b8545ea01e0a35a09_top-right.svg"
                            alt=""
                            className="box-border caret-transparent inline-block max-w-full min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto]"
                          />
                        </div>
                        <div className="text-gray-900 text-xs font-medium items-center box-border caret-transparent flex shrink-0 justify-start leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-0 md:text-sm md:leading-[14px] md:ml-2">
                          Up to 5x trial conversion
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="tabpanel"
                  className="relative box-border caret-transparent hidden outline-[3px] w-full"
                >
                  <div className="box-border caret-transparent gap-x-8 flex flex-col justify-between max-w-full outline-[3px] gap-y-8 md:gap-x-[normal] md:flex-row md:gap-y-[normal]">
                    <div className="relative self-center box-border caret-transparent flex max-w-full order-1 outline-[3px] w-full md:order-none md:w-6/12">
                      <div className="box-border caret-transparent outline-[3px] pr-0 md:pr-20">
                        <div className="relative box-border caret-transparent outline-[3px]">
                          <h3 className="text-2xl font-semibold bg-clip-text bg-[linear-gradient(102deg,rgb(17,24,39)_70%,rgba(30,43,72,0.9)_90%)] box-border caret-transparent inline-flex tracking-[-0.24px] leading-[30.4px] outline-[3px] mb-2 md:text-4xl md:tracking-[-0.36px] md:leading-[44px] md:mb-4">
                            Arcade
                            <br className="text-2xl box-border caret-transparent block tracking-[-0.24px] leading-[30.4px] outline-[3px] md:text-4xl md:tracking-[-0.36px] md:leading-[44px]" />
                            for sales &amp; pre-sales
                          </h3>
                          <p className="text-lg box-border caret-transparent inline-block leading-6 outline-[3px] text-left md:text-xl md:leading-7 md:text-start">
                            Create engaging, personalized demos in minutes to
                            win buyers early, showcase your product, and
                            accelerate sales cycles.
                          </p>
                        </div>
                        <div className="box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] outline-[3px] gap-y-3 mt-8 md:grid-cols-[1fr_1fr] md:grid-rows-[auto_auto]">
                          <div className="items-center box-border caret-transparent gap-x-2 flex justify-start outline-[3px] gap-y-2">
                            <img
                              src="https://c.animaapp.com/mnxsvuft69auLT/assets/66759a51f2c5179385278f99_check-features.svg"
                              alt=""
                              className="box-border caret-transparent h-5 max-w-full outline-[3px] w-5"
                            />
                            <div className="text-gray-900 text-base box-border caret-transparent leading-6 outline-[3px]">
                              Collections
                            </div>
                          </div>
                          <div className="items-center box-border caret-transparent gap-x-2 flex justify-start outline-[3px] gap-y-2">
                            <img
                              src="https://c.animaapp.com/mnxsvuft69auLT/assets/66759a51f2c5179385278f99_check-features.svg"
                              alt=""
                              className="box-border caret-transparent h-5 max-w-full outline-[3px] w-5"
                            />
                            <div className="text-gray-900 text-base box-border caret-transparent leading-6 outline-[3px]">
                              Custom links
                            </div>
                          </div>
                          <div className="items-center box-border caret-transparent gap-x-2 flex justify-start outline-[3px] gap-y-2">
                            <img
                              src="https://c.animaapp.com/mnxsvuft69auLT/assets/66759a51f2c5179385278f99_check-features.svg"
                              alt=""
                              className="box-border caret-transparent h-5 max-w-full outline-[3px] w-5"
                            />
                            <div className="text-gray-900 text-base box-border caret-transparent leading-6 outline-[3px]">
                              Camera recording
                            </div>
                          </div>
                        </div>
                        <a
                          href="/solutions/sales"
                          className="text-blue-700 font-medium items-center box-border caret-transparent gap-x-2 flex max-w-full outline-[3px] gap-y-2 underline-offset-1 mt-6 md:mt-8 hover:outline-0"
                        >
                          <div className="text-lg items-center self-center box-border caret-transparent flex leading-[18px] outline-[3px] underline-offset-1">
                            Learn more
                          </div>
                          <img
                            src="https://c.animaapp.com/mnxsvuft69auLT/assets/64ac5db04fb1e5c4d4c432a9_arrow.svg"
                            alt=""
                            className="self-center box-border caret-transparent max-w-full outline-[3px] underline-offset-1"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="relative items-center self-center box-border caret-transparent flex justify-center max-w-full outline-[3px] w-full md:w-6/12">
                      <div className="box-border caret-transparent outline-[3px] overflow-hidden rounded-2xl">
                        <div className="box-border caret-transparent h-full outline-[3px] w-full before:accent-auto before:caret-transparent before:text-gray-600 before:table before:text-xl before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-7 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-gray-600 after:table after:text-xl after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-7 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
                          <video
                            src="https://cdn.arcade.software/web-assets/collections.mp4"
                            loop=""
                            autoplay=""
                            playsinline=""
                            muted=""
                            className="box-border caret-transparent h-full object-cover outline-[3px] align-baseline w-full"
                          ></video>
                        </div>
                      </div>
                      <div className="absolute items-center self-center backdrop-blur-[10px] bg-white/70 bottom-[-19px] shadow-[rgba(17,24,39,0.1)_0px_0px_0px_1px,rgba(17,24,39,0.05)_0px_2px_2px_-2px,rgba(17,24,39,0.05)_0px_4px_4px_0px,rgba(17,24,39,0.05)_0px_8px_8px_0px,rgba(17,24,39,0.05)_0px_16px_16px_0px,rgba(17,24,39,0.05)_0px_32px_32px_0px] box-border caret-transparent flex basis-[0%] grow auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] justify-center outline-[3px] p-3 rounded-xl">
                        <div className="items-center box-border caret-transparent hidden shrink-0 h-6 justify-center outline-[3px] w-6 md:flex">
                          <img
                            src="https://c.animaapp.com/mnxsvuft69auLT/assets/667d704b8545ea01e0a35a09_top-right.svg"
                            alt=""
                            className="box-border caret-transparent inline-block max-w-full outline-[3px] md:block"
                          />
                        </div>
                        <div className="text-gray-900 text-xs font-medium items-center box-border caret-transparent flex shrink-0 justify-start leading-3 outline-[3px] ml-0 md:text-sm md:leading-[14px] md:ml-2">
                          More than 2x demo conversion
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="tabpanel"
                  className="relative box-border caret-transparent hidden outline-[3px] w-full"
                >
                  <div className="box-border caret-transparent gap-x-8 flex flex-col justify-between max-w-full outline-[3px] gap-y-8 md:gap-x-[normal] md:flex-row md:gap-y-[normal]">
                    <div className="relative self-center box-border caret-transparent flex max-w-full order-1 outline-[3px] w-full md:order-none md:w-6/12">
                      <div className="box-border caret-transparent outline-[3px] pr-0 md:pr-20">
                        <div className="relative box-border caret-transparent outline-[3px]">
                          <h3 className="text-2xl font-semibold bg-clip-text bg-[linear-gradient(102deg,rgb(17,24,39)_70%,rgba(30,43,72,0.9)_90%)] box-border caret-transparent inline-flex tracking-[-0.24px] leading-[30.4px] outline-[3px] mb-2 md:text-4xl md:tracking-[-0.36px] md:leading-[44px] md:mb-4">
                            Arcade
                            <br className="text-2xl box-border caret-transparent block tracking-[-0.24px] leading-[30.4px] outline-[3px] md:text-4xl md:tracking-[-0.36px] md:leading-[44px]" />
                            for customer success
                          </h3>
                          <p className="text-lg box-border caret-transparent inline-block leading-6 outline-[3px] text-left md:text-xl md:leading-7 md:text-start">
                            Scale your impact through engaging, informative
                            content designed to educate customers, increase
                            product adoption, and build customer loyalty.
                          </p>
                        </div>
                        <div className="box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] outline-[3px] gap-y-3 mt-8 md:grid-cols-[1fr_1fr] md:grid-rows-[auto_auto]">
                          <div className="items-center box-border caret-transparent gap-x-2 flex justify-start outline-[3px] gap-y-2">
                            <img
                              src="https://c.animaapp.com/mnxsvuft69auLT/assets/66759a51f2c5179385278f99_check-features.svg"
                              alt=""
                              className="box-border caret-transparent h-5 max-w-full outline-[3px] w-5"
                            />
                            <div className="text-gray-900 text-base box-border caret-transparent leading-6 outline-[3px]">
                              Custom variables
                            </div>
                          </div>
                          <div className="items-center box-border caret-transparent gap-x-2 flex justify-start outline-[3px] gap-y-2">
                            <img
                              src="https://c.animaapp.com/mnxsvuft69auLT/assets/66759a51f2c5179385278f99_check-features.svg"
                              alt=""
                              className="box-border caret-transparent h-5 max-w-full outline-[3px] w-5"
                            />
                            <div className="text-gray-900 text-base box-border caret-transparent leading-6 outline-[3px]">
                              Branching
                            </div>
                          </div>
                          <div className="items-center box-border caret-transparent gap-x-2 flex justify-start outline-[3px] gap-y-2">
                            <img
                              src="https://c.animaapp.com/mnxsvuft69auLT/assets/66759a51f2c5179385278f99_check-features.svg"
                              alt=""
                              className="box-border caret-transparent h-5 max-w-full outline-[3px] w-5"
                            />
                            <div className="text-gray-900 text-base box-border caret-transparent leading-6 outline-[3px]">
                              Chapters
                            </div>
                          </div>
                        </div>
                        <a
                          href="/solutions/sales"
                          className="text-blue-700 font-medium items-center box-border caret-transparent gap-x-2 flex max-w-full outline-[3px] gap-y-2 underline-offset-1 mt-6 md:mt-8 hover:outline-0"
                        >
                          <div className="text-lg items-center self-center box-border caret-transparent flex leading-[18px] outline-[3px] underline-offset-1">
                            Learn more
                          </div>
                          <img
                            src="https://c.animaapp.com/mnxsvuft69auLT/assets/64ac5db04fb1e5c4d4c432a9_arrow.svg"
                            alt=""
                            className="self-center box-border caret-transparent max-w-full outline-[3px] underline-offset-1"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="relative items-center self-center box-border caret-transparent flex justify-center max-w-full outline-[3px] w-full md:w-6/12">
                      <div className="box-border caret-transparent outline-[3px] overflow-hidden rounded-2xl">
                        <div className="box-border caret-transparent h-full outline-[3px] w-full before:accent-auto before:caret-transparent before:text-gray-600 before:table before:text-xl before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-7 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-gray-600 after:table after:text-xl after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-7 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
                          <video
                            src="https://cdn.arcade.software/web-assets/variables-alt.mp4"
                            loop=""
                            autoplay=""
                            playsinline=""
                            muted=""
                            className="box-border caret-transparent h-full object-cover outline-[3px] align-baseline w-full"
                          ></video>
                        </div>
                      </div>
                      <div className="absolute items-center self-center backdrop-blur-[10px] bg-white/70 bottom-[-19px] shadow-[rgba(17,24,39,0.1)_0px_0px_0px_1px,rgba(17,24,39,0.05)_0px_2px_2px_-2px,rgba(17,24,39,0.05)_0px_4px_4px_0px,rgba(17,24,39,0.05)_0px_8px_8px_0px,rgba(17,24,39,0.05)_0px_16px_16px_0px,rgba(17,24,39,0.05)_0px_32px_32px_0px] box-border caret-transparent flex basis-[0%] grow auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] justify-center outline-[3px] p-3 rounded-xl">
                        <div className="items-center box-border caret-transparent hidden shrink-0 h-6 justify-center outline-[3px] w-6 md:flex">
                          <img
                            src="https://c.animaapp.com/mnxsvuft69auLT/assets/667d704b8545ea01e0a35a09_top-right.svg"
                            alt=""
                            className="box-border caret-transparent inline-block max-w-full outline-[3px] md:block"
                          />
                        </div>
                        <div className="text-gray-900 text-xs font-medium items-center box-border caret-transparent flex shrink-0 justify-start leading-3 outline-[3px] ml-0 md:text-sm md:leading-[14px] md:ml-2">
                          Save over 3k hours onboarding
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="tabpanel"
                  className="relative box-border caret-transparent hidden outline-[3px] w-full"
                >
                  <div className="box-border caret-transparent gap-x-8 flex flex-col justify-between max-w-full outline-[3px] gap-y-8 md:gap-x-[normal] md:flex-row md:gap-y-[normal]">
                    <div className="relative self-center box-border caret-transparent flex max-w-full order-1 outline-[3px] w-full md:order-none md:w-6/12">
                      <div className="box-border caret-transparent outline-[3px] pr-0 md:pr-20">
                        <div className="relative box-border caret-transparent outline-[3px]">
                          <h3 className="text-2xl font-semibold bg-clip-text bg-[linear-gradient(102deg,rgb(17,24,39)_70%,rgba(30,43,72,0.9)_90%)] box-border caret-transparent inline-flex tracking-[-0.24px] leading-[30.4px] outline-[3px] mb-2 md:text-4xl md:tracking-[-0.36px] md:leading-[44px] md:mb-4">
                            Arcade
                            <br className="text-2xl box-border caret-transparent block tracking-[-0.24px] leading-[30.4px] outline-[3px] md:text-4xl md:tracking-[-0.36px] md:leading-[44px]" />
                            for enablement &amp; training
                          </h3>
                          <p className="text-lg box-border caret-transparent inline-block leading-6 outline-[3px] text-left md:text-xl md:leading-7 md:text-start">
                            Save time, energy, and resources on content
                            creation. Easily create demos and learn from how
                            your audience engages to quickly iterate and
                            improve.
                          </p>
                        </div>
                        <div className="box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] outline-[3px] gap-y-3 mt-8 md:grid-cols-[1fr_1fr] md:grid-rows-[auto_auto]">
                          <div className="items-center box-border caret-transparent gap-x-2 flex justify-start outline-[3px] gap-y-2">
                            <img
                              src="https://c.animaapp.com/mnxsvuft69auLT/assets/66759a51f2c5179385278f99_check-features.svg"
                              alt=""
                              className="box-border caret-transparent h-5 max-w-full outline-[3px] w-5"
                            />
                            <div className="text-gray-900 text-base box-border caret-transparent leading-6 outline-[3px]">
                              Camera recording
                            </div>
                          </div>
                          <div className="items-center box-border caret-transparent gap-x-2 flex justify-start outline-[3px] gap-y-2">
                            <img
                              src="https://c.animaapp.com/mnxsvuft69auLT/assets/66759a51f2c5179385278f99_check-features.svg"
                              alt=""
                              className="box-border caret-transparent h-5 max-w-full outline-[3px] w-5"
                            />
                            <div className="text-gray-900 text-base box-border caret-transparent leading-6 outline-[3px]">
                              Synthetic voiceover
                            </div>
                          </div>
                          <div className="items-center box-border caret-transparent gap-x-2 flex justify-start outline-[3px] gap-y-2">
                            <img
                              src="https://c.animaapp.com/mnxsvuft69auLT/assets/66759a51f2c5179385278f99_check-features.svg"
                              alt=""
                              className="box-border caret-transparent h-5 max-w-full outline-[3px] w-5"
                            />
                            <div className="text-gray-900 text-base box-border caret-transparent leading-6 outline-[3px]">
                              Hotspots and Callouts
                            </div>
                          </div>
                          <div className="items-center box-border caret-transparent gap-x-2 flex justify-start outline-[3px] gap-y-2">
                            <img
                              src="https://c.animaapp.com/mnxsvuft69auLT/assets/66759a51f2c5179385278f99_check-features.svg"
                              alt=""
                              className="box-border caret-transparent h-5 max-w-full outline-[3px] w-5"
                            />
                            <div className="text-gray-900 text-base box-border caret-transparent leading-6 outline-[3px]">
                              Collections
                            </div>
                          </div>
                        </div>
                        <a
                          href="/solutions/product-management"
                          className="text-blue-700 font-medium items-center box-border caret-transparent gap-x-2 flex max-w-full outline-[3px] gap-y-2 underline-offset-1 mt-6 md:mt-8 hover:outline-0"
                        >
                          <div className="text-lg items-center self-center box-border caret-transparent flex leading-[18px] outline-[3px] underline-offset-1">
                            Learn more
                          </div>
                          <img
                            src="https://c.animaapp.com/mnxsvuft69auLT/assets/64ac5db04fb1e5c4d4c432a9_arrow.svg"
                            alt=""
                            className="self-center box-border caret-transparent max-w-full outline-[3px] underline-offset-1"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="relative items-center self-center box-border caret-transparent flex justify-center max-w-full outline-[3px] w-full md:w-6/12">
                      <div className="box-border caret-transparent outline-[3px] overflow-hidden rounded-2xl">
                        <div className="box-border caret-transparent h-full outline-[3px] w-full before:accent-auto before:caret-transparent before:text-gray-600 before:table before:text-xl before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-7 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-gray-600 after:table after:text-xl after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-7 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
                          <video
                            src="https://cdn.arcade.software/web-assets/face-bubble.mp4"
                            loop=""
                            autoplay=""
                            playsinline=""
                            muted=""
                            className="box-border caret-transparent h-full object-cover outline-[3px] align-baseline w-full"
                          ></video>
                        </div>
                      </div>
                      <div className="absolute items-center self-center backdrop-blur-[10px] bg-white/70 bottom-[-19px] shadow-[rgba(17,24,39,0.1)_0px_0px_0px_1px,rgba(17,24,39,0.05)_0px_2px_2px_-2px,rgba(17,24,39,0.05)_0px_4px_4px_0px,rgba(17,24,39,0.05)_0px_8px_8px_0px,rgba(17,24,39,0.05)_0px_16px_16px_0px,rgba(17,24,39,0.05)_0px_32px_32px_0px] box-border caret-transparent flex basis-[0%] grow auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] justify-center outline-[3px] p-3 rounded-xl">
                        <div className="items-center box-border caret-transparent hidden shrink-0 h-6 justify-center outline-[3px] w-6 md:flex">
                          <img
                            src="https://c.animaapp.com/mnxsvuft69auLT/assets/667d704b8545ea01e0a35a09_top-right.svg"
                            alt=""
                            className="box-border caret-transparent inline-block max-w-full outline-[3px] md:block"
                          />
                        </div>
                        <div className="text-gray-900 text-xs font-medium items-center box-border caret-transparent flex shrink-0 justify-start leading-3 outline-[3px] ml-0 md:text-sm md:leading-[14px] md:ml-2">
                          Up to 10x faster than creating a video
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="tabpanel"
                  className="relative box-border caret-transparent hidden outline-[3px] w-full"
                >
                  <div className="box-border caret-transparent gap-x-8 flex flex-col justify-between max-w-full outline-[3px] gap-y-8 md:gap-x-[normal] md:flex-row md:gap-y-[normal]">
                    <div className="relative self-center box-border caret-transparent flex max-w-full order-1 outline-[3px] w-full md:order-none md:w-6/12">
                      <div className="box-border caret-transparent outline-[3px] pr-0 md:pr-20">
                        <div className="relative box-border caret-transparent outline-[3px]">
                          <h3 className="text-2xl font-semibold bg-clip-text bg-[linear-gradient(102deg,rgb(17,24,39)_70%,rgba(30,43,72,0.9)_90%)] box-border caret-transparent inline-flex tracking-[-0.24px] leading-[30.4px] outline-[3px] mb-2 md:text-4xl md:tracking-[-0.36px] md:leading-[44px] md:mb-4">
                            Arcade
                            <br className="text-2xl box-border caret-transparent block tracking-[-0.24px] leading-[30.4px] outline-[3px] md:text-4xl md:tracking-[-0.36px] md:leading-[44px]" />
                            for product
                          </h3>
                          <p className="text-lg box-border caret-transparent inline-block leading-6 outline-[3px] text-left md:text-xl md:leading-7 md:text-start">
                            Demos built for fast-paced product teams looking to
                            drive adoption, gather feedback quickly, and iterate
                            on concepts.
                          </p>
                        </div>
                        <div className="box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] outline-[3px] gap-y-3 mt-8 md:grid-cols-[1fr_1fr] md:grid-rows-[auto_auto]">
                          <div className="items-center box-border caret-transparent gap-x-2 flex justify-start outline-[3px] gap-y-2">
                            <img
                              src="https://c.animaapp.com/mnxsvuft69auLT/assets/66759a51f2c5179385278f99_check-features.svg"
                              alt=""
                              className="box-border caret-transparent h-5 max-w-full outline-[3px] w-5"
                            />
                            <div className="text-gray-900 text-base box-border caret-transparent leading-6 outline-[3px]">
                              Forms
                            </div>
                          </div>
                          <div className="items-center box-border caret-transparent gap-x-2 flex justify-start outline-[3px] gap-y-2">
                            <img
                              src="https://c.animaapp.com/mnxsvuft69auLT/assets/66759a51f2c5179385278f99_check-features.svg"
                              alt=""
                              className="box-border caret-transparent h-5 max-w-full outline-[3px] w-5"
                            />
                            <div className="text-gray-900 text-base box-border caret-transparent leading-6 outline-[3px]">
                              Product analytics
                            </div>
                          </div>
                          <div className="items-center box-border caret-transparent gap-x-2 flex justify-start outline-[3px] gap-y-2">
                            <img
                              src="https://c.animaapp.com/mnxsvuft69auLT/assets/66759a51f2c5179385278f99_check-features.svg"
                              alt=""
                              className="box-border caret-transparent h-5 max-w-full outline-[3px] w-5"
                            />
                            <div className="text-gray-900 text-base box-border caret-transparent leading-6 outline-[3px]">
                              Integrations
                            </div>
                          </div>
                          <div className="items-center box-border caret-transparent gap-x-2 flex justify-start outline-[3px] gap-y-2">
                            <img
                              src="https://c.animaapp.com/mnxsvuft69auLT/assets/66759a51f2c5179385278f99_check-features.svg"
                              alt=""
                              className="box-border caret-transparent h-5 max-w-full outline-[3px] w-5"
                            />
                            <div className="text-gray-900 text-base box-border caret-transparent leading-6 outline-[3px]">
                              Branching
                            </div>
                          </div>
                        </div>
                        <a
                          href="/solutions/product-management"
                          className="text-blue-700 font-medium items-center box-border caret-transparent gap-x-2 flex max-w-full outline-[3px] gap-y-2 underline-offset-1 mt-6 md:mt-8 hover:outline-0"
                        >
                          <div className="text-lg items-center self-center box-border caret-transparent flex leading-[18px] outline-[3px] underline-offset-1">
                            Learn more
                          </div>
                          <img
                            src="https://c.animaapp.com/mnxsvuft69auLT/assets/64ac5db04fb1e5c4d4c432a9_arrow.svg"
                            alt=""
                            className="self-center box-border caret-transparent max-w-full outline-[3px] underline-offset-1"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="relative items-center self-center box-border caret-transparent flex justify-center max-w-full outline-[3px] w-full md:w-6/12">
                      <div className="box-border caret-transparent outline-[3px] overflow-hidden rounded-2xl">
                        <div className="box-border caret-transparent h-full outline-[3px] w-full before:accent-auto before:caret-transparent before:text-gray-600 before:table before:text-xl before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-7 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-gray-600 after:table after:text-xl after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-7 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
                          <video
                            src="https://cdn.arcade.software/web-assets/form-product.mp4"
                            loop=""
                            autoplay=""
                            playsinline=""
                            muted=""
                            className="box-border caret-transparent h-full object-cover outline-[3px] align-baseline w-full"
                          ></video>
                        </div>
                      </div>
                      <div className="absolute items-center self-center backdrop-blur-[10px] bg-white/70 bottom-[-19px] shadow-[rgba(17,24,39,0.1)_0px_0px_0px_1px,rgba(17,24,39,0.05)_0px_2px_2px_-2px,rgba(17,24,39,0.05)_0px_4px_4px_0px,rgba(17,24,39,0.05)_0px_8px_8px_0px,rgba(17,24,39,0.05)_0px_16px_16px_0px,rgba(17,24,39,0.05)_0px_32px_32px_0px] box-border caret-transparent flex basis-[0%] grow auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] justify-center outline-[3px] p-3 rounded-xl">
                        <div className="items-center box-border caret-transparent hidden shrink-0 h-6 justify-center outline-[3px] w-6 md:flex">
                          <img
                            src="https://c.animaapp.com/mnxsvuft69auLT/assets/667d704b8545ea01e0a35a09_top-right.svg"
                            alt=""
                            className="box-border caret-transparent inline-block max-w-full outline-[3px] md:block"
                          />
                        </div>
                        <div className="text-gray-900 text-xs font-medium items-center box-border caret-transparent flex shrink-0 justify-start leading-3 outline-[3px] ml-0 md:text-sm md:leading-[14px] md:ml-2">
                          Up to 30% more activated users
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent hidden outline-[3px] before:accent-auto before:caret-transparent before:text-gray-600 before:table before:text-xl before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-7 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-gray-600 after:table after:text-xl after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-7 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter"></div>
          </div>
        </div>
      </section>
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
                Gather deep insights, drive action, and get more done with
                native integrations
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
            <div className="items-center box-border caret-transparent hidden justify-center [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_20%,rgb(0,0,0)_80%,rgba(0,0,0,0)_100%)] min-h-0 min-w-0 outline-[3px] mt-16 py-4 md:flex md:min-h-[auto] md:min-w-[auto]">
              <div
                role="list"
                className="items-center box-border caret-transparent gap-x-2 grid flex-wrap auto-cols-[1fr] grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[auto_auto_auto] justify-center min-h-0 min-w-0 outline-[3px] gap-y-2 md:gap-x-4 md:flex md:flex-nowrap md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:min-h-[auto] md:min-w-[auto] md:gap-y-4"
              >
                <div
                  role="listitem"
                  className="items-center bg-white/10 shadow-[rgba(17,24,39,0.2)_0px_8px_8px_0px,rgba(17,24,39,0.1)_0px_4px_4px_0px,rgba(17,24,39,0.1)_0px_2px_2px_0px,rgba(17,24,39,0.1)_0px_0px_0px_1px,rgba(255,255,255,0.06)_0px_0px_0px_1px_inset,rgba(255,255,255,0.06)_0px_1px_0px_0px_inset] box-border caret-transparent flex h-16 justify-center min-h-0 min-w-0 outline-[3px] w-16 rounded-2xl md:h-[100px] md:min-h-[auto] md:min-w-[auto] md:w-[100px] md:rounded-3xl"
                >
                  <img
                    src="https://c.animaapp.com/mnxsvuft69auLT/assets/65cb7ac7c1de81ea7c57bab7_slack.svg"
                    alt=""
                    className="box-border caret-transparent h-7 max-w-full min-h-0 min-w-0 outline-[3px] md:h-[42px] md:min-h-[auto] md:min-w-[auto]"
                  />
                </div>
                <div
                  role="listitem"
                  className="items-center bg-white/10 shadow-[rgba(17,24,39,0.2)_0px_8px_8px_0px,rgba(17,24,39,0.1)_0px_4px_4px_0px,rgba(17,24,39,0.1)_0px_2px_2px_0px,rgba(17,24,39,0.1)_0px_0px_0px_1px,rgba(255,255,255,0.06)_0px_0px_0px_1px_inset,rgba(255,255,255,0.06)_0px_1px_0px_0px_inset] box-border caret-transparent flex h-16 justify-center min-h-0 min-w-0 outline-[3px] w-16 rounded-2xl md:h-[100px] md:min-h-[auto] md:min-w-[auto] md:w-[100px] md:rounded-3xl"
                >
                  <img
                    src="https://c.animaapp.com/mnxsvuft69auLT/assets/65cb7a6698c362188f28171f_posthog.svg"
                    alt=""
                    className="box-border caret-transparent h-7 max-w-full min-h-0 min-w-0 outline-[3px] md:h-[42px] md:min-h-[auto] md:min-w-[auto]"
                  />
                </div>
                <div
                  role="listitem"
                  className="items-center bg-white/10 shadow-[rgba(17,24,39,0.2)_0px_8px_8px_0px,rgba(17,24,39,0.1)_0px_4px_4px_0px,rgba(17,24,39,0.1)_0px_2px_2px_0px,rgba(17,24,39,0.1)_0px_0px_0px_1px,rgba(255,255,255,0.06)_0px_0px_0px_1px_inset,rgba(255,255,255,0.06)_0px_1px_0px_0px_inset] box-border caret-transparent flex h-16 justify-center min-h-0 min-w-0 outline-[3px] w-16 rounded-2xl md:h-[100px] md:min-h-[auto] md:min-w-[auto] md:w-[100px] md:rounded-3xl"
                >
                  <img
                    src="https://c.animaapp.com/mnxsvuft69auLT/assets/65cb799af1bb37dce4c10003_mixpanel.png"
                    alt=""
                    className="box-border caret-transparent h-7 max-w-full min-h-0 min-w-0 outline-[3px] md:h-[42px] md:min-h-[auto] md:min-w-[auto]"
                  />
                </div>
                <div
                  role="listitem"
                  className="items-center bg-white/10 shadow-[rgba(17,24,39,0.2)_0px_8px_8px_0px,rgba(17,24,39,0.1)_0px_4px_4px_0px,rgba(17,24,39,0.1)_0px_2px_2px_0px,rgba(17,24,39,0.1)_0px_0px_0px_1px,rgba(255,255,255,0.06)_0px_0px_0px_1px_inset,rgba(255,255,255,0.06)_0px_1px_0px_0px_inset] box-border caret-transparent flex h-16 justify-center min-h-0 min-w-0 outline-[3px] w-16 rounded-2xl md:h-[100px] md:min-h-[auto] md:min-w-[auto] md:w-[100px] md:rounded-3xl"
                >
                  <img
                    src="https://c.animaapp.com/mnxsvuft69auLT/assets/65cb791d020eaa9f4de4889f_hs.svg"
                    alt=""
                    className="box-border caret-transparent h-7 max-w-full min-h-0 min-w-0 outline-[3px] md:h-[42px] md:min-h-[auto] md:min-w-[auto]"
                  />
                </div>
                <div
                  role="listitem"
                  className="items-center bg-white/10 shadow-[rgba(17,24,39,0.2)_0px_8px_8px_0px,rgba(17,24,39,0.1)_0px_4px_4px_0px,rgba(17,24,39,0.1)_0px_2px_2px_0px,rgba(17,24,39,0.1)_0px_0px_0px_1px,rgba(255,255,255,0.06)_0px_0px_0px_1px_inset,rgba(255,255,255,0.06)_0px_1px_0px_0px_inset] box-border caret-transparent flex h-16 justify-center min-h-0 min-w-0 outline-[3px] w-16 rounded-2xl md:h-[100px] md:min-h-[auto] md:min-w-[auto] md:w-[100px] md:rounded-3xl"
                >
                  <img
                    src="https://c.animaapp.com/mnxsvuft69auLT/assets/65cb77e74937db91d20ca86b_ga.png"
                    alt=""
                    className="box-border caret-transparent h-7 max-w-full min-h-0 min-w-0 outline-[3px] md:h-[42px] md:min-h-[auto] md:min-w-[auto]"
                  />
                </div>
                <div
                  role="listitem"
                  className="items-center bg-white/10 shadow-[rgba(17,24,39,0.2)_0px_8px_8px_0px,rgba(17,24,39,0.1)_0px_4px_4px_0px,rgba(17,24,39,0.1)_0px_2px_2px_0px,rgba(17,24,39,0.1)_0px_0px_0px_1px,rgba(255,255,255,0.06)_0px_0px_0px_1px_inset,rgba(255,255,255,0.06)_0px_1px_0px_0px_inset] box-border caret-transparent flex h-16 justify-center min-h-0 min-w-0 outline-[3px] w-16 rounded-2xl md:h-[100px] md:min-h-[auto] md:min-w-[auto] md:w-[100px] md:rounded-3xl"
                >
                  <img
                    src="https://c.animaapp.com/mnxsvuft69auLT/assets/65cb7a02b6e3af161c01c545_sfdc.png"
                    alt=""
                    className="box-border caret-transparent h-7 max-w-full min-h-0 min-w-0 outline-[3px] md:h-[42px] md:min-h-[auto] md:min-w-[auto]"
                  />
                </div>
                <div
                  role="listitem"
                  className="items-center bg-white/10 shadow-[rgba(17,24,39,0.2)_0px_8px_8px_0px,rgba(17,24,39,0.1)_0px_4px_4px_0px,rgba(17,24,39,0.1)_0px_2px_2px_0px,rgba(17,24,39,0.1)_0px_0px_0px_1px,rgba(255,255,255,0.06)_0px_0px_0px_1px_inset,rgba(255,255,255,0.06)_0px_1px_0px_0px_inset] box-border caret-transparent flex h-16 justify-center min-h-0 min-w-0 outline-[3px] w-16 rounded-2xl md:h-[100px] md:min-h-[auto] md:min-w-[auto] md:w-[100px] md:rounded-3xl"
                >
                  <img
                    src="https://c.animaapp.com/mnxsvuft69auLT/assets/65cb700a425180b322389851_amplitude.svg"
                    alt=""
                    className="box-border caret-transparent h-7 max-w-full min-h-0 min-w-0 outline-[3px] md:h-[42px] md:min-h-[auto] md:min-w-[auto]"
                  />
                </div>
                <div
                  role="listitem"
                  className="items-center bg-white/10 shadow-[rgba(17,24,39,0.2)_0px_8px_8px_0px,rgba(17,24,39,0.1)_0px_4px_4px_0px,rgba(17,24,39,0.1)_0px_2px_2px_0px,rgba(17,24,39,0.1)_0px_0px_0px_1px,rgba(255,255,255,0.06)_0px_0px_0px_1px_inset,rgba(255,255,255,0.06)_0px_1px_0px_0px_inset] box-border caret-transparent flex h-16 justify-center min-h-0 min-w-0 outline-[3px] w-16 rounded-2xl md:h-[100px] md:min-h-[auto] md:min-w-[auto] md:w-[100px] md:rounded-3xl"
                >
                  <img
                    src="https://c.animaapp.com/mnxsvuft69auLT/assets/663ddb2a8392d4861ead82e8_phlogo.svg"
                    alt=""
                    className="box-border caret-transparent h-7 max-w-full min-h-0 min-w-0 outline-[3px] md:h-[42px] md:min-h-[auto] md:min-w-[auto]"
                  />
                </div>
                <div
                  role="listitem"
                  className="items-center bg-white/10 shadow-[rgba(17,24,39,0.2)_0px_8px_8px_0px,rgba(17,24,39,0.1)_0px_4px_4px_0px,rgba(17,24,39,0.1)_0px_2px_2px_0px,rgba(17,24,39,0.1)_0px_0px_0px_1px,rgba(255,255,255,0.06)_0px_0px_0px_1px_inset,rgba(255,255,255,0.06)_0px_1px_0px_0px_inset] box-border caret-transparent flex h-16 justify-center min-h-0 min-w-0 outline-[3px] w-16 rounded-2xl md:h-[100px] md:min-h-[auto] md:min-w-[auto] md:w-[100px] md:rounded-3xl"
                >
                  <img
                    src="https://c.animaapp.com/mnxsvuft69auLT/assets/65cb7a7cf531323a9b61303f_segment.png"
                    alt=""
                    className="box-border caret-transparent h-7 max-w-full min-h-0 min-w-0 outline-[3px] md:h-[42px] md:min-h-[auto] md:min-w-[auto]"
                  />
                </div>
                <div
                  role="listitem"
                  className="items-center bg-white/10 shadow-[rgba(17,24,39,0.2)_0px_8px_8px_0px,rgba(17,24,39,0.1)_0px_4px_4px_0px,rgba(17,24,39,0.1)_0px_2px_2px_0px,rgba(17,24,39,0.1)_0px_0px_0px_1px,rgba(255,255,255,0.06)_0px_0px_0px_1px_inset,rgba(255,255,255,0.06)_0px_1px_0px_0px_inset] box-border caret-transparent flex h-16 justify-center min-h-0 min-w-0 outline-[3px] w-16 rounded-2xl md:h-[100px] md:min-h-[auto] md:min-w-[auto] md:w-[100px] md:rounded-3xl"
                >
                  <img
                    src="https://c.animaapp.com/mnxsvuft69auLT/assets/65cb795c5a32125cf29e30ea_intercom.png"
                    alt=""
                    className="box-border caret-transparent h-7 max-w-full min-h-0 min-w-0 outline-[3px] md:h-[42px] md:min-h-[auto] md:min-w-[auto]"
                  />
                </div>
                <div
                  role="listitem"
                  className="items-center bg-white/10 shadow-[rgba(17,24,39,0.2)_0px_8px_8px_0px,rgba(17,24,39,0.1)_0px_4px_4px_0px,rgba(17,24,39,0.1)_0px_2px_2px_0px,rgba(17,24,39,0.1)_0px_0px_0px_1px,rgba(255,255,255,0.06)_0px_0px_0px_1px_inset,rgba(255,255,255,0.06)_0px_1px_0px_0px_inset] box-border caret-transparent flex h-16 justify-center min-h-0 min-w-0 outline-[3px] w-16 rounded-2xl md:h-[100px] md:min-h-[auto] md:min-w-[auto] md:w-[100px] md:rounded-3xl"
                >
                  <img
                    src="https://c.animaapp.com/mnxsvuft69auLT/assets/65cb790b8a89e8cb6b5e0a06_gtm.png"
                    alt=""
                    className="box-border caret-transparent h-7 max-w-full min-h-0 min-w-0 outline-[3px] md:h-[42px] md:min-h-[auto] md:min-w-[auto]"
                  />
                </div>
                <div
                  role="listitem"
                  className="items-center bg-white/10 shadow-[rgba(17,24,39,0.2)_0px_8px_8px_0px,rgba(17,24,39,0.1)_0px_4px_4px_0px,rgba(17,24,39,0.1)_0px_2px_2px_0px,rgba(17,24,39,0.1)_0px_0px_0px_1px,rgba(255,255,255,0.06)_0px_0px_0px_1px_inset,rgba(255,255,255,0.06)_0px_1px_0px_0px_inset] box-border caret-transparent flex h-16 justify-center min-h-0 min-w-0 outline-[3px] w-16 rounded-2xl md:h-[100px] md:min-h-[auto] md:min-w-[auto] md:w-[100px] md:rounded-3xl"
                >
                  <img
                    src="https://c.animaapp.com/mnxsvuft69auLT/assets/65cb71342883eedf51819666_clearbit.png"
                    alt=""
                    className="box-border caret-transparent h-7 max-w-full min-h-0 min-w-0 outline-[3px] md:h-[42px] md:min-h-[auto] md:min-w-[auto]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
            <a
              href="https://www.arcade.software/post/quantum-metric"
              className="items-start self-stretch backdrop-blur bg-white/90 shadow-[rgba(17,24,39,0.05)_0px_32px_32px_0px,rgba(17,24,39,0.05)_0px_16px_16px_0px,rgba(17,24,39,0.05)_0px_8px_8px_0px,rgba(17,24,39,0.05)_0px_4px_4px_0px,rgba(17,24,39,0.05)_0px_2px_2px_-2px,rgba(17,24,39,0.1)_0px_0px_0px_1px] box-border caret-transparent gap-x-8 flex flex-col justify-center max-w-[280px] min-h-0 min-w-[auto] outline-[3px] gap-y-8 text-left underline-offset-1 origin-[100%_0px] mb-16 mx-auto p-8 rounded-2xl md:hidden md:max-w-[600px] md:min-h-[370px] md:min-w-0 md:p-12 hover:outline-0"
            >
              <div className="text-lg font-semibold bg-clip-text bg-[linear-gradient(92deg,rgb(17,24,39)_70%,rgba(30,43,72,0.9)_95%)] box-border caret-transparent flex leading-[22px] min-h-[auto] min-w-[auto] outline-[3px] underline-offset-1 md:text-[28px] md:inline-flex md:leading-8 md:min-h-0 md:min-w-0">
                “Arcade allowed us to have a much more focused narrative to tell
                the story we wanted.”
              </div>
              <div className="items-start box-border caret-transparent gap-x-6 flex flex-col justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-6 underline-offset-1 md:items-center md:flex-row md:min-h-0 md:min-w-0">
                <img
                  src="https://c.animaapp.com/mnxsvuft69auLT/assets/6674334fef4458d4ff98751d_testi-owner-trevor.png"
                  alt=""
                  className="box-border caret-transparent h-10 max-w-full min-h-[auto] min-w-[auto] outline-[3px] underline-offset-1 w-10 md:h-auto md:min-h-0 md:min-w-0 md:w-14"
                />
                <div className="items-start box-border caret-transparent gap-x-1 flex flex-col justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 underline-offset-1 md:min-h-0 md:min-w-0">
                  <img
                    src="https://c.animaapp.com/mnxsvuft69auLT/assets/667433a3fbfaf9e7e54fcf17_testi-owner-trevor-sign.svg"
                    alt="Trevor Pyle"
                    className="box-border caret-transparent shrink-0 h-[30px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] underline-offset-1 md:min-h-0 md:min-w-0"
                  />
                  <div className="text-sm box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] underline-offset-1 md:min-h-0 md:min-w-0">
                    Sr. Director, Product Marketing &amp; Strategy @ Quantum
                    Metric
                  </div>
                </div>
              </div>
            </a>
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
            <div className="relative box-border caret-transparent gap-x-4 hidden auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] list-none max-w-[230px] min-h-0 min-w-0 outline-[3px] gap-y-4 w-[600px] z-[1] overflow-hidden mt-20 mb-16 mx-auto md:grid md:max-w-none md:min-h-[auto] md:min-w-[auto]">
              <div className="relative items-start caret-transparent flex h-[92px] justify-center min-h-0 min-w-0 outline-[3px] w-full z-[1] md:min-h-[auto] md:min-w-[auto]">
                <div
                  role="group"
                  aria-label="2 / 3"
                  className="items-center self-center box-border caret-transparent gap-x-8 flex blur-sm flex-col justify-center max-w-[230px] min-h-0 min-w-0 opacity-0 outline-[3px] gap-y-8 w-[600px] mx-auto md:gap-x-12 md:flex-row md:max-w-[600px] md:min-h-[auto] md:min-w-[auto] md:gap-y-12"
                ></div>
                <div
                  role="group"
                  aria-label="3 / 3"
                  className="items-center self-center box-border caret-transparent gap-x-8 flex blur-0 flex-col justify-center max-w-[230px] min-h-0 min-w-0 outline-[3px] gap-y-8 transform-none w-[600px] mx-auto md:gap-x-12 md:flex-row md:max-w-[600px] md:min-h-[auto] md:min-w-[auto] md:gap-y-12 md:translate-x-[-600px]"
                ></div>
                <div
                  role="group"
                  aria-label="1 / 3"
                  className="items-center self-center box-border caret-transparent gap-x-8 flex blur-sm flex-col justify-center max-w-[230px] min-h-0 min-w-0 opacity-0 outline-[3px] gap-y-8 transform-none w-[600px] mx-auto md:gap-x-12 md:flex-row md:max-w-[600px] md:min-h-[auto] md:min-w-[auto] md:gap-y-12 md:translate-x-[-1200px]"
                >
                  <div className="items-center box-border caret-transparent gap-x-3 flex flex-col justify-start min-h-0 min-w-0 outline-[3px] gap-y-3 md:min-h-[auto] md:min-w-[auto]">
                    <div className="items-center box-border caret-transparent gap-x-1 flex justify-center min-h-0 min-w-0 outline-[3px] gap-y-1 md:min-h-[auto] md:min-w-[auto]">
                      <div className="text-[40px] font-semibold bg-clip-text bg-[linear-gradient(102deg,rgb(17,24,39)_50%,rgba(30,43,72,0.8)_90%)] box-border caret-transparent leading-10 min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                        2
                      </div>
                      <div className="text-gray-900 font-semibold box-border caret-transparent leading-[25px] min-h-0 min-w-0 opacity-50 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                        x
                      </div>
                    </div>
                    <div className="text-sm box-border caret-transparent leading-5 min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                      Conversion rate over
                      <br className="box-border caret-transparent outline-[3px]" />
                      “Get a Demo” page
                    </div>
                  </div>
                  <div className="bg-gray-900/10 box-border caret-transparent h-px min-h-0 min-w-0 outline-[3px] w-[88px] md:h-10 md:min-h-[auto] md:min-w-[auto] md:w-px"></div>
                  <div className="items-center box-border caret-transparent gap-x-3 flex flex-col justify-start min-h-0 min-w-0 outline-[3px] gap-y-3 md:min-h-[auto] md:min-w-[auto]">
                    <div className="items-center box-border caret-transparent gap-x-1 flex justify-center min-h-0 min-w-0 outline-[3px] gap-y-1 md:min-h-[auto] md:min-w-[auto]">
                      <div className="text-[40px] font-semibold bg-clip-text bg-[linear-gradient(102deg,rgb(17,24,39)_50%,rgba(30,43,72,0.8)_90%)] box-border caret-transparent leading-10 min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                        5
                      </div>
                      <div className="text-gray-900 font-semibold box-border caret-transparent leading-[25px] min-h-0 min-w-0 opacity-50 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                        x
                      </div>
                    </div>
                    <div className="text-sm box-border caret-transparent leading-5 min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                      More engagement
                      <br className="box-border caret-transparent outline-[3px]" />
                      vs. video
                    </div>
                  </div>
                  <div className="bg-gray-900/10 box-border caret-transparent h-px min-h-0 min-w-0 outline-[3px] w-[88px] md:h-10 md:min-h-[auto] md:min-w-[auto] md:w-px"></div>
                  <div className="items-center box-border caret-transparent gap-x-3 flex flex-col justify-start min-h-0 min-w-0 outline-[3px] gap-y-3 md:min-h-[auto] md:min-w-[auto]">
                    <div className="items-center box-border caret-transparent gap-x-1 flex justify-center min-h-0 min-w-0 outline-[3px] gap-y-1 md:min-h-[auto] md:min-w-[auto]">
                      <div className="text-[40px] font-semibold bg-clip-text bg-[linear-gradient(102deg,rgb(17,24,39)_50%,rgba(30,43,72,0.8)_90%)] box-border caret-transparent leading-10 min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                        10
                      </div>
                      <div className="text-gray-900 font-semibold box-border caret-transparent leading-[25px] min-h-0 min-w-0 opacity-50 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                        x
                      </div>
                    </div>
                    <div className="text-sm box-border caret-transparent leading-5 min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                      Faster to create
                      <br className="box-border caret-transparent outline-[3px]" />
                      Arcade vs. video
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      <div className="relative text-gray-900 bg-white box-border caret-transparent outline-[3px] z-[1] overflow-hidden pt-12 md:pt-24">
        <div className="box-border caret-transparent max-w-[1080px] outline-[3px] w-full mx-auto px-6 md:w-[90%] md:px-0">
          <div className="items-start box-border caret-transparent gap-x-12 flex flex-col auto-cols-[1fr] grid-flow-row grid-cols-[auto] grid-rows-[auto_auto] justify-start outline-[3px] gap-y-12 md:gap-x-14 md:grid-flow-col md:grid-cols-[0.75fr] md:gap-y-14">
            <div className="items-start box-border caret-transparent gap-x-8 grid grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] outline-[3px] gap-y-8 w-full md:gap-x-14 md:grid-cols-[1fr_1fr_1fr_1fr_1fr] md:gap-y-14">
              <div className="text-sm items-center box-border caret-transparent gap-x-10 flex flex-row auto-cols-[100%] grid-cols-[100%] grid-rows-[auto] h-full justify-between justify-items-start leading-[17.5px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-10 pb-0 md:items-start md:flex-col md:pb-2">
                <a
                  href="/"
                  className="relative text-zinc-800 box-border caret-transparent block ml-[-6.4px] min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] pl-[6.4px] hover:outline-0"
                >
                  <div className="relative text-gray-900 box-border caret-transparent flex h-[26px] justify-center left-[-3px] max-h-[27px] max-w-[34px] outline-[3px] underline-offset-[0.7px] w-8 before:accent-auto before:caret-transparent before:text-gray-900 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[17.5px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:underline-offset-[0.7px] before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-gray-900 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[17.5px] after:list-outside after:list-disc after:min-h-[auto] after:min-w-[auto] after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:underline-offset-[0.7px] after:visible after:border-separate after:font-inter">
                    <img
                      src="https://c.animaapp.com/mnxsvuft69auLT/assets/icon-9.svg"
                      alt="Icon"
                      className="box-border caret-transparent outline-[3px] align-baseline"
                    />
                  </div>
                </a>
                <div className="items-center box-border caret-transparent gap-x-3 flex auto-cols-max grid-flow-col grid-cols-[max-content] grid-rows-[auto] justify-start justify-items-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-0">
                  <a
                    href="https://twitter.com/arcade_demo"
                    className="items-center bg-gray-100 box-border caret-transparent flex h-8 justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] w-8 rounded-[50%] hover:bg-gray-200 hover:outline-0"
                  >
                    <div className="absolute box-border caret-transparent h-px outline-[3px] underline-offset-[0.7px] text-nowrap w-px overflow-hidden -mt-px">
                      Arcade on Twitter
                    </div>
                    <div className="box-border caret-transparent h-4 min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] w-4 before:accent-auto before:caret-transparent before:text-gray-900 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[17.5px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:underline-offset-[0.7px] before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-gray-900 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[17.5px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:underline-offset-[0.7px] after:visible after:border-separate after:font-inter">
                      <img
                        src="https://c.animaapp.com/mnxsvuft69auLT/assets/icon-10.svg"
                        alt="Icon"
                        className="box-border caret-transparent inline outline-[3px] align-baseline"
                      />
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/arcadehq/"
                    className="items-center bg-gray-100 box-border caret-transparent flex h-8 justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] w-8 rounded-[50%] hover:bg-gray-200 hover:outline-0"
                  >
                    <div className="absolute box-border caret-transparent h-px outline-[3px] underline-offset-[0.7px] text-nowrap w-px overflow-hidden -mt-px">
                      Arcade on LinkedIn
                    </div>
                    <div className="box-border caret-transparent h-5 min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] w-5 before:accent-auto before:caret-transparent before:text-gray-900 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[17.5px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:underline-offset-[0.7px] before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-gray-900 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[17.5px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:underline-offset-[0.7px] after:visible after:border-separate after:font-inter">
                      <img
                        src="https://c.animaapp.com/mnxsvuft69auLT/assets/icon-11.svg"
                        alt="Icon"
                        className="box-border caret-transparent inline outline-[3px] align-baseline"
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div className="text-sm items-start box-border caret-transparent flex flex-col auto-cols-[100%] grid-cols-[100%] grid-rows-[auto] justify-items-start leading-[17.5px] min-h-[auto] min-w-[auto] outline-[3px]">
                <div className="font-semibold box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] mb-3">
                  Product
                </div>
                <a
                  href="/product/interactive-demo"
                  className="text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900"
                >
                  Interactive Demos
                </a>
                <a
                  href="/product/creator-studio"
                  className="text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900"
                >
                  AI Videos &amp; Visuals
                </a>
                <a
                  href="/product/personalization"
                  className="text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900"
                >
                  Personalization
                </a>
                <a
                  href="/integrations"
                  className="text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900"
                >
                  Integrations
                </a>
                <a
                  href="/pricing"
                  className="text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900"
                >
                  Pricing
                </a>
                <a
                  href="/download"
                  className="text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900"
                >
                  Desktop App
                </a>
                <a
                  href="https://chrome.google.com/webstore/detail/arcade/gagidkjllbdgggpboolfmmdpeagghjlm"
                  className="relative text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 after:accent-auto after:bg-[url('https://cdn.prod.website-files.com/61d72a2cda50bc679e28766b/6939e798e8435f30c5b56cde_out-arrow.svg')] after:bg-center after:bg-no-repeat after:caret-transparent after:text-gray-600 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-3 after:tracking-[normal] after:leading-[17.5px] after:list-outside after:list-disc after:opacity-50 after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:underline-offset-[0.7px] after:text-nowrap after:-translate-y-1.5 after:visible after:w-3 after:border-separate after:-right-2.5 after:top-2/4 after:font-inter hover:text-gray-900 hover:outline-0 hover:border-gray-900"
                >
                  Chrome Extension
                </a>
              </div>
              <div className="text-sm items-start box-border caret-transparent flex flex-col auto-cols-[100%] grid-cols-[100%] grid-rows-[auto] justify-items-start leading-[17.5px] min-h-[auto] min-w-[auto] outline-[3px]">
                <div className="font-semibold box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] mb-3">
                  Solutions
                </div>
                <a
                  href="/solutions/product-marketing"
                  className="text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900"
                >
                  For Product Marketing
                </a>
                <a
                  href="/solutions/growth-marketing"
                  className="text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900"
                >
                  For Growth Marketing
                </a>
                <a
                  href="/solutions/product-management"
                  className="text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900"
                >
                  For Product Management
                </a>
                <a
                  href="/solutions/sales-engineering"
                  className="text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900"
                >
                  For Sales Engineering
                </a>
                <a
                  href="/contactsales"
                  className="text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900"
                >
                  Talk to a GTM expert
                </a>
              </div>
              <div className="text-sm items-start box-border caret-transparent flex flex-col auto-cols-[100%] grid-cols-[100%] grid-rows-[auto] justify-items-start leading-[17.5px] min-h-[auto] min-w-[auto] outline-[3px]">
                <div className="font-semibold box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] mb-3">
                  Resources
                </div>
                <a
                  href="/blog"
                  className="text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900"
                >
                  Blog
                </a>
                <a
                  href="https://docs.arcade.software/kb/"
                  className="relative text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 after:accent-auto after:bg-[url('https://cdn.prod.website-files.com/61d72a2cda50bc679e28766b/6939e798e8435f30c5b56cde_out-arrow.svg')] after:bg-center after:bg-no-repeat after:caret-transparent after:text-gray-600 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-3 after:tracking-[normal] after:leading-[17.5px] after:list-outside after:list-disc after:opacity-50 after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:underline-offset-[0.7px] after:text-nowrap after:-translate-y-1.5 after:visible after:w-3 after:border-separate after:-right-2.5 after:top-2/4 after:font-inter hover:text-gray-900 hover:outline-0 hover:border-gray-900"
                >
                  Knowledge Base
                </a>
                <a
                  href="/changelog"
                  className="text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900"
                >
                  Changelog
                </a>
                <a
                  href="/showcase"
                  className="text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900"
                >
                  Showcase
                </a>
                <a
                  href="https://www.arcade.software/category/case-study"
                  className="text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900"
                >
                  Case studies
                </a>
                <a
                  href="/guides"
                  className="text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900"
                >
                  Guides
                </a>
                <a
                  href="https://arcadecommunity.slack.com/join/shared_invite/zt-3mdvhxge9-101c5hYC0u3msJ2LfD1Zkw#/shared-invite/email"
                  className="relative text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 after:accent-auto after:bg-[url('https://cdn.prod.website-files.com/61d72a2cda50bc679e28766b/6939e798e8435f30c5b56cde_out-arrow.svg')] after:bg-center after:bg-no-repeat after:caret-transparent after:text-gray-600 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-3 after:tracking-[normal] after:leading-[17.5px] after:list-outside after:list-disc after:opacity-50 after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:underline-offset-[0.7px] after:text-nowrap after:-translate-y-1.5 after:visible after:w-3 after:border-separate after:-right-2.5 after:top-2/4 after:font-inter hover:text-gray-900 hover:outline-0 hover:border-gray-900"
                >
                  Community
                </a>
              </div>
              <div className="text-sm items-start box-border caret-transparent flex flex-col auto-cols-[100%] grid-cols-[100%] grid-rows-[auto] justify-items-start leading-[17.5px] min-h-[auto] min-w-[auto] outline-[3px]">
                <div className="font-semibold box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] mb-3">
                  Company
                </div>
                <a
                  href="/careers"
                  className="relative text-gray-600 box-border caret-transparent flex max-w-full min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 pl-2 pr-10 py-2 md:pr-9 hover:text-gray-900 hover:outline-0 hover:border-gray-900"
                >
                  <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap">
                    Careers
                  </div>
                </a>
                <a
                  href="/brand"
                  className="text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900"
                >
                  Brand
                </a>
                <a
                  href="/security"
                  className="text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900"
                >
                  Security
                </a>
                <a
                  href="https://arcadehq.statuspage.io/"
                  className="relative text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 after:accent-auto after:bg-[url('https://cdn.prod.website-files.com/61d72a2cda50bc679e28766b/6939e798e8435f30c5b56cde_out-arrow.svg')] after:bg-center after:bg-no-repeat after:caret-transparent after:text-gray-600 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-3 after:tracking-[normal] after:leading-[17.5px] after:list-outside after:list-disc after:opacity-50 after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:underline-offset-[0.7px] after:text-nowrap after:-translate-y-1.5 after:visible after:w-3 after:border-separate after:-right-2.5 after:top-2/4 after:font-inter hover:text-gray-900 hover:outline-0 hover:border-gray-900"
                >
                  Status
                </a>
                <a
                  href="/terms-of-service"
                  className="text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900"
                >
                  Legal
                </a>
              </div>
            </div>
            <div className="bg-gray-100 box-border caret-transparent h-px min-h-[auto] min-w-[auto] outline-[3px] w-full"></div>
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
          </div>
        </div>
        <div className="items-start box-border caret-transparent flex justify-center max-h-[50%] opacity-[0.03] outline-[3px] overflow-hidden">
          <img
            src="https://c.animaapp.com/mnxsvuft69auLT/assets/6909f94d112c6f5a0ef5f804_Logo.svg"
            alt=""
            className="box-border caret-transparent clear-left max-w-full min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none translate-y-[25.0%] w-[90%]"
          />
        </div>
      </div>
    </div>
  );
};
