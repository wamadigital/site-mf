export type HowItWorksCardProps = {
  imageSrc: string;
  imageSizes?: string;
  tag: string;
  title: string;
  description: string;
};

export const HowItWorksCard = (props: HowItWorksCardProps) => {
  return (
    <div className="items-start bg-gray-50 box-border caret-transparent flex flex-col col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-between min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden rounded-2xl">
      <img
        src={props.imageSrc}
        sizes={props.imageSizes}
        alt=""
        className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full"
      />
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pb-6 px-6">
        <div className="text-xs box-border caret-transparent leading-5 outline-[3px] mb-2 md:mb-2.5">
          {props.tag}
        </div>
        <h4 className="text-gray-900 text-base font-semibold box-border caret-transparent tracking-[-0.12px] leading-6 outline-[3px] mb-1 md:text-xl md:tracking-[-0.15px] md:leading-[26px] md:mb-1.5">
          {props.title}
        </h4>
        <p className="text-sm box-border caret-transparent leading-5 outline-[3px] md:text-base md:leading-[22px]">
          {props.description}
        </p>
      </div>
    </div>
  );
};
