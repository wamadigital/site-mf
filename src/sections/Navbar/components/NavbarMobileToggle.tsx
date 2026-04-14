type NavbarMobileToggleProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export const NavbarMobileToggle = ({ isOpen, onToggle }: NavbarMobileToggleProps) => {
  return (
    <button
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      onClick={onToggle}
      className="relative text-2xl items-center box-border caret-transparent block float-right h-12 justify-center leading-6 min-h-[auto] min-w-[auto] outline-[3px] w-12 z-[11] -mr-3 p-0 bg-transparent border-none cursor-pointer md:[align-items:normal] md:hidden md:h-auto md:justify-normal md:leading-9 md:min-h-0 md:min-w-0 md:w-auto md:z-auto md:mr-0 md:p-[18px]"
    >
      <img
        src="https://c.animaapp.com/mnxsvuft69auLT/assets/632c5f554e318bead613b8f4_close.svg"
        alt=""
        className={`absolute items-center box-border caret-transparent block shrink-0 h-6 justify-center leading-6 max-w-full outline-[3px] translate-x-[-50%] translate-y-[-50%] w-6 overflow-visible left-1/2 top-1/2 transition-opacity duration-200 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"} md:static md:[align-items:normal] md:inline-block md:shrink md:h-auto md:justify-normal md:leading-9 md:opacity-100 md:transform-none md:w-auto md:overflow-clip md:inset-auto`}
      />
      <img
        src="https://c.animaapp.com/mnxsvuft69auLT/assets/632c5f551cc90e49c4db5b06_menu.svg"
        alt=""
        className={`absolute items-center box-border caret-transparent block shrink-0 h-6 justify-center leading-6 max-w-full outline-[3px] translate-x-[-50%] translate-y-[-50%] w-6 overflow-visible left-1/2 top-1/2 transition-opacity duration-200 ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"} md:static md:[align-items:normal] md:inline-block md:shrink md:h-auto md:justify-normal md:leading-9 md:transform-none md:w-auto md:overflow-clip md:inset-auto`}
      />
    </button>
  );
};
