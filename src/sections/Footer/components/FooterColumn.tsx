export type FooterColumnLink = {
  href: string;
  label: string;
  className: string;
  hasInnerDiv?: boolean;
};

export type FooterColumnProps = {
  title: string;
  links: FooterColumnLink[];
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="text-sm items-start box-border caret-transparent flex flex-col auto-cols-[100%] grid-cols-[100%] grid-rows-[auto] justify-items-start leading-[17.5px] min-h-[auto] min-w-[auto] outline-[3px]">
      <div className="font-semibold box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] mb-3">
        {props.title}
      </div>
      {props.links.map((link, index) => (
        <a key={index} href={link.href} className={link.className}>
          {link.hasInnerDiv ? (
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap">
              {link.label}
            </div>
          ) : (
            link.label
          )}
        </a>
      ))}
    </div>
  );
};
