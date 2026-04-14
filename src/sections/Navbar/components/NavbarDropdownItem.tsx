export type NavbarDropdownItemProps = {
  label: string;
  containerClassName?: string;
  imgClassName?: string;
  dropdownContent?: React.ReactNode;
};

export const NavbarDropdownItem = (props: NavbarDropdownItemProps) => {
  return (
    <div
      className={`relative text-gray-700 text-xl font-medium box-border caret-transparent shrink-0 leading-6 min-h-0 min-w-0 outline-[3px] text-center px-0 py-6 rounded-none md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start md:px-4 md:py-2.5 md:rounded-xl hover:bg-gray-900/0 ${props.containerClassName ?? ""}`.trim()}
    >
      <div className="relative text-xl items-center box-border caret-transparent gap-x-2 flex justify-between outline-[3px] gap-y-2 text-center md:text-base md:justify-normal md:text-start">
        <div className="text-xl box-border caret-transparent min-h-0 min-w-0 outline-[3px] text-center md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start">
          {props.label}
        </div>
        <img
          src="https://c.animaapp.com/mnxsvuft69auLT/assets/654cd75c994cb881e35cabfe_icons-down.svg"
          alt=""
          className={`text-xl box-border caret-transparent h-[18px] max-w-full min-h-0 min-w-0 outline-[3px] text-center w-[18px] md:text-base md:h-3 md:min-h-[auto] md:min-w-[auto] md:text-start md:w-3 ${props.imgClassName ?? ""}`.trim()}
        />
      </div>
      {props.dropdownContent && (
        <div className="relative text-xl box-border caret-transparent hidden min-w-full opacity-0 outline-[3px] text-center transform-none origin-[0%_0%] invisible md:absolute md:text-base md:flex md:min-w-80 md:opacity-100 md:text-start md:-translate-x-4 md:translate-y-3 md:visible">
          {props.dropdownContent}
        </div>
      )}
    </div>
  );
};
