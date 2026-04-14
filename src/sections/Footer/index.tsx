import { FooterNav } from "@/sections/Footer/components/FooterNav";
import { FooterNewsletter } from "@/sections/Footer/components/FooterNewsletter";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <div className="relative text-gray-900 bg-white box-border caret-transparent outline-[3px] z-[1] overflow-hidden pt-12 md:pt-24">
      <div className="box-border caret-transparent max-w-[1080px] outline-[3px] w-full mx-auto px-6 md:w-[90%] md:px-0">
        <div className="items-start box-border caret-transparent gap-x-12 flex flex-col auto-cols-[1fr] grid-flow-row grid-cols-[auto] grid-rows-[auto_auto] justify-start outline-[3px] gap-y-12 md:gap-x-14 md:grid-flow-col md:grid-cols-[0.75fr] md:gap-y-14">
          <FooterNav />
          <div className="bg-gray-100 box-border caret-transparent h-px min-h-[auto] min-w-[auto] outline-[3px] w-full"></div>
          <FooterNewsletter />
        </div>
      </div>
      <FooterCopyright />
    </div>
  );
};
