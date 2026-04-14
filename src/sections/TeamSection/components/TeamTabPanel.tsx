import { useEffect, useRef, useState } from "react";

export type TeamTabPanelProps = {
  title: string;
  description: string;
  features: string[];
  learnMoreText: string;
  learnMoreHref: string;
  placeholderColor: string;
  placeholderIcon: string;
  statText: string;
  isActive: boolean;
  direction: "left" | "right";
};

export const TeamTabPanel = ({
  title,
  description,
  features,
  learnMoreText,
  learnMoreHref,
  placeholderColor,
  placeholderIcon,
  statText,
  isActive,
  direction,
}: TeamTabPanelProps) => {
  const [shouldRender, setShouldRender] = useState(isActive);
  const [animState, setAnimState] = useState<"enter" | "exit" | "visible" | "hidden">(isActive ? "visible" : "hidden");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (isActive) {
      setShouldRender(true);
      setAnimState("enter");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimState("visible");
        });
      });
    } else if (shouldRender) {
      setAnimState("exit");
      timerRef.current = setTimeout(() => {
        setShouldRender(false);
        setAnimState("hidden");
      }, 350);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isActive]);

  if (!shouldRender) return null;

  const enterFrom = direction === "right" ? "translate-x-8" : "-translate-x-8";

  let transformClasses = "";
  switch (animState) {
    case "enter":
      transformClasses = `opacity-0 ${enterFrom} scale-[0.97]`;
      break;
    case "visible":
      transformClasses = "opacity-100 translate-x-0 scale-100";
      break;
    case "exit":
      transformClasses = "opacity-0 scale-[0.97]";
      break;
    default:
      transformClasses = "opacity-0";
  }

  return (
    <div
      role="tabpanel"
      className={`w-full transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${transformClasses} ${!isActive && animState === "exit" ? "absolute top-0 left-0" : "relative"}`}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="box-border caret-transparent flex max-w-full outline-[3px] gap-x-8 flex-col justify-between gap-y-8 md:gap-x-[normal] md:flex-row md:gap-y-[normal]">
        {/* Left: text content */}
        <div className="box-border caret-transparent outline-[3px] min-h-[auto] min-w-[auto] pr-0 md:pr-20 md:w-1/2">
          <div className="relative box-border caret-transparent outline-[3px]">
            <div className="relative box-border caret-transparent outline-[3px]">
              <h3 className="text-2xl font-semibold bg-clip-text bg-[linear-gradient(102deg,rgb(17,24,39)_70%,rgba(30,43,72,0.9)_90%)] box-border caret-transparent tracking-[-0.24px] leading-[30.4px] outline-[3px] mb-2 md:text-4xl md:tracking-[-0.36px] md:leading-[44px] md:mb-4">
                {title}
              </h3>
              <p className="text-lg box-border caret-transparent inline-block leading-6 outline-[3px] text-left text-gray-600 md:text-xl md:leading-7 md:text-start">
                {description}
              </p>
            </div>
            <div className="box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] outline-[3px] gap-y-3 mt-8 md:grid-cols-[1fr_1fr] md:grid-rows-[auto_auto]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-2"
                >
                  <img
                    src="https://c.animaapp.com/mnxsvuft69auLT/assets/66759a51f2c5179385278f99_check-features.svg"
                    alt=""
                    className="box-border caret-transparent h-5 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-5"
                  />
                  <div className="text-gray-900 text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] outline-[3px]">
                    {feature}
                  </div>
                </div>
              ))}
            </div>
            <a
              href={learnMoreHref}
              className="text-blue-700 font-medium items-center box-border caret-transparent gap-x-2 flex max-w-full outline-[3px] gap-y-2 underline-offset-1 mt-6 md:mt-8 hover:outline-0 group"
            >
              <div className="text-lg items-center self-center box-border caret-transparent flex leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] underline-offset-1 transition-transform duration-200 group-hover:translate-x-1">
                {learnMoreText}
              </div>
            </a>
          </div>
        </div>
        {/* Right: placeholder mockup + stat */}
        <div className="relative items-center self-center box-border caret-transparent flex justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:w-6/12">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden rounded-2xl w-full">
            <div className={`bg-gradient-to-br ${placeholderColor} w-full aspect-[4/3] flex items-center justify-center rounded-2xl`}>
              <div className="flex flex-col items-center gap-3">
                <span className="text-6xl">{placeholderIcon}</span>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                  <span className="text-white font-semibold text-lg">Preview em breve</span>
                </div>
              </div>
            </div>
          </div>
          {statText && (
            <div className="absolute items-center self-center backdrop-blur-[10px] bg-white/70 bottom-[-19px] shadow-[rgba(17,24,39,0.1)_0px_0px_0px_1px,rgba(17,24,39,0.05)_0px_2px_2px_-2px,rgba(17,24,39,0.05)_0px_4px_4px_0px,rgba(17,24,39,0.05)_0px_8px_8px_0px,rgba(17,24,39,0.05)_0px_16px_16px_0px,rgba(17,24,39,0.05)_0px_32px_32px_0px] box-border caret-transparent flex basis-[0%] grow auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] justify-center outline-[3px] p-3 rounded-xl">
              <div className="items-center box-border caret-transparent hidden shrink-0 h-6 justify-center min-h-0 min-w-0 outline-[3px] w-6 md:flex md:min-h-[auto] md:min-w-[auto]">
                <img
                  src="https://c.animaapp.com/mnxsvuft69auLT/assets/667d704b8545ea01e0a35a09_top-right.svg"
                  alt=""
                  className="box-border caret-transparent inline-block max-w-full min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto]"
                />
              </div>
              <div className="text-gray-900 text-xs font-medium items-center box-border caret-transparent flex shrink-0 justify-start leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-0 md:text-sm md:leading-[14px] md:ml-2">
                {statText}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
