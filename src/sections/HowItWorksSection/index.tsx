import { HowItWorksCard } from "@/sections/HowItWorksSection/components/HowItWorksCard";

export const HowItWorksSection = () => {
  return (
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
            <HowItWorksCard
              imageSrc="https://c.animaapp.com/mnxsvuft69auLT/assets/692e403b77c00299c59b63cc_home-1.png"
              imageSizes="(max-width: 479px) 100vw, 500px"
              tag="No code required"
              title="Capture from anywhere"
              description="Record on any device using a Arcade’s Chrome extension, Desktop App, or uploaded media."
            />
          </div>
          <div className="items-stretch box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 md:grid-cols-[1fr_1fr]">
            <HowItWorksCard
              imageSrc="https://c.animaapp.com/mnxsvuft69auLT/assets/692e428745343bdbc3e2e1af_img-1.png"
              imageSizes="(max-width: 479px) 100vw, 500px"
              tag="It takes minutes"
              title="Build interactive demos"
              description="Create engaging demos with voiceovers, branching, and other interactions."
            />
            <HowItWorksCard
              imageSrc="https://c.animaapp.com/mnxsvuft69auLT/assets/692e42870936f426d5eaab24_img-2.png"
              imageSizes="(max-width: 479px) 100vw, 500px"
              tag="Beautiful and on-brand"
              title="Generate videos and visuals"
              description="Don’t wait on designers or agencies. Stand out with beautiful, on-brand videos and visuals."
            />
          </div>
          <div className="items-stretch box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 md:grid-cols-[1fr_1fr]">
            <HowItWorksCard
              imageSrc="https://c.animaapp.com/mnxsvuft69auLT/assets/692e49530021233a9a8a4c10_img-02.png"
              imageSizes="(max-width: 479px) 100vw, 500px"
              tag="Distribution made easy"
              title="Share & Embed"
              description="Embed on your website, share custom links with prospects, download as a GIF, or share as a video."
            />
            <HowItWorksCard
              imageSrc="https://c.animaapp.com/mnxsvuft69auLT/assets/692e461f7fc431d32436db11_img-03.png"
              tag="Drive action"
              title="Analyze instantly"
              description="Leverage analytics to identify your viewers, understand how they engage, and drive action."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
