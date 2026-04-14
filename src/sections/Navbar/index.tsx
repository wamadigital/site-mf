import { useState, useEffect } from "react";
import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { NavbarMenu } from "@/sections/Navbar/components/NavbarMenu";
import { NavbarActions } from "@/sections/Navbar/components/NavbarActions";
import { NavbarMobileToggle } from "@/sections/Navbar/components/NavbarMobileToggle";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div
      role="banner"
      className="fixed text-[28.8px] box-border caret-transparent flex justify-center leading-[43.2px] outline-[3px] z-10 mx-auto p-3 top-[0%] inset-x-[0%] md:text-base md:leading-6 md:px-0 md:top-4 before:accent-auto before:caret-transparent before:text-gray-600 before:table before:text-[28.8px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[43.2px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-base before:md:leading-6 after:accent-auto after:caret-transparent after:clear-both after:text-gray-600 after:table after:text-[28.8px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[43.2px] after:list-outside after:list-disc after:min-h-[auto] after:min-w-[auto] after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-base after:md:leading-6"
    >
      <div className="text-[28.8px] box-border caret-transparent hidden leading-[43.2px] outline-[3px] md:text-base md:leading-6 before:accent-auto before:caret-transparent before:text-gray-600 before:table before:text-[28.8px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[43.2px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-base before:md:leading-6 after:accent-auto after:caret-transparent after:clear-both after:text-gray-600 after:table after:text-[28.8px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[43.2px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-base after:md:leading-6"></div>
      <div className="text-[28.8px] box-border caret-transparent hidden leading-[43.2px] outline-[3px] md:text-base md:leading-6 before:accent-auto before:caret-transparent before:text-gray-600 before:table before:text-[28.8px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[43.2px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-base before:md:leading-6 after:accent-auto after:caret-transparent after:clear-both after:text-gray-600 after:table after:text-[28.8px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[43.2px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-base after:md:leading-6"></div>
      <div className="text-[28.8px] box-border caret-transparent leading-[43.2px] max-w-[1080px] min-h-[auto] min-w-[auto] outline-[3px] w-full mx-auto md:text-base md:leading-6 md:max-w-[1304px] md:w-[90%]">
        <div className={`relative text-[28.8px] items-center box-border caret-transparent gap-x-2 flex auto-cols-[1fr] grid-cols-[minmax(175px,0.25fr)_1fr_0.5fr] grid-rows-[auto] justify-between leading-[43.2px] outline-[3px] gap-y-2 w-full z-[5] p-3 rounded-2xl md:text-base md:leading-6 transition-all duration-300 ${scrolled ? "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]" : "backdrop-blur-0"}`}>
          <NavbarLogo />
          <NavbarMenu mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
          <NavbarActions />
          <NavbarMobileToggle isOpen={mobileOpen} onToggle={() => setMobileOpen(!mobileOpen)} />
        </div>
      </div>
      <div className="absolute text-[28.8px] box-border caret-transparent hidden h-[8966px] leading-[43.2px] outline-[3px] w-full overflow-hidden top-full inset-x-0 md:text-base md:leading-6"></div>
    </div>
  );
};
