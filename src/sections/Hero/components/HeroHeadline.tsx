export type HeroHeadlineProps = {
  level: "h1" | "h2";
  className: string;
  children: React.ReactNode;
  showBreak?: boolean;
};

export const HeroHeadline = (props: HeroHeadlineProps) => {
  const Tag = props.level;
  return (
    <Tag className={props.className}>
      {props.children}
      {props.showBreak && (
        <br className="text-[30.4px] box-border caret-transparent inline tracking-[-0.608px] leading-[34px] min-h-0 min-w-0 outline-[3px] md:text-[64px] md:block md:tracking-[-1.28px] md:leading-[68px] md:min-h-[auto] md:min-w-[auto]" />
      )}
    </Tag>
  );
};
