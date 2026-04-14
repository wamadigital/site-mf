import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterNav = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-8 grid grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] outline-[3px] gap-y-8 w-full md:gap-x-14 md:grid-cols-[1fr_1fr_1fr_1fr_1fr] md:gap-y-14">
      <FooterBrand />
      <FooterColumn
        title="Product"
        links={[
          {
            href: "/product/interactive-demo",
            label: "Interactive Demos",
            className:
              "text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900",
          },
          {
            href: "/product/creator-studio",
            label: "AI Videos & Visuals",
            className:
              "text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900",
          },
          {
            href: "/product/personalization",
            label: "Personalization",
            className:
              "text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900",
          },
          {
            href: "/integrations",
            label: "Integrations",
            className:
              "text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900",
          },
          {
            href: "/pricing",
            label: "Pricing",
            className:
              "text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900",
          },
          {
            href: "/download",
            label: "Desktop App",
            className:
              "text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900",
          },
          {
            href: "https://chrome.google.com/webstore/detail/arcade/gagidkjllbdgggpboolfmmdpeagghjlm",
            label: "Chrome Extension",
            className:
              "relative text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 after:accent-auto after:bg-[url('https://cdn.prod.website-files.com/61d72a2cda50bc679e28766b/6939e798e8435f30c5b56cde_out-arrow.svg')] after:bg-center after:bg-no-repeat after:caret-transparent after:text-gray-600 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-3 after:tracking-[normal] after:leading-[17.5px] after:list-outside after:list-disc after:opacity-50 after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:underline-offset-[0.7px] after:text-nowrap after:-translate-y-1.5 after:visible after:w-3 after:border-separate after:-right-2.5 after:top-2/4 after:font-inter hover:text-gray-900 hover:outline-0 hover:border-gray-900",
          },
        ]}
      />
      <FooterColumn
        title="Solutions"
        links={[
          {
            href: "/solutions/product-marketing",
            label: "For Product Marketing",
            className:
              "text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900",
          },
          {
            href: "/solutions/growth-marketing",
            label: "For Growth Marketing",
            className:
              "text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900",
          },
          {
            href: "/solutions/product-management",
            label: "For Product Management",
            className:
              "text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900",
          },
          {
            href: "/solutions/sales-engineering",
            label: "For Sales Engineering",
            className:
              "text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900",
          },
          {
            href: "/contactsales",
            label: "Talk to a GTM expert",
            className:
              "text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900",
          },
        ]}
      />
      <FooterColumn
        title="Resources"
        links={[
          {
            href: "/blog",
            label: "Blog",
            className:
              "text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900",
          },
          {
            href: "https://docs.arcade.software/kb/",
            label: "Knowledge Base",
            className:
              "relative text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 after:accent-auto after:bg-[url('https://cdn.prod.website-files.com/61d72a2cda50bc679e28766b/6939e798e8435f30c5b56cde_out-arrow.svg')] after:bg-center after:bg-no-repeat after:caret-transparent after:text-gray-600 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-3 after:tracking-[normal] after:leading-[17.5px] after:list-outside after:list-disc after:opacity-50 after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:underline-offset-[0.7px] after:text-nowrap after:-translate-y-1.5 after:visible after:w-3 after:border-separate after:-right-2.5 after:top-2/4 after:font-inter hover:text-gray-900 hover:outline-0 hover:border-gray-900",
          },
          {
            href: "/changelog",
            label: "Changelog",
            className:
              "text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900",
          },
          {
            href: "/showcase",
            label: "Showcase",
            className:
              "text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900",
          },
          {
            href: "https://www.arcade.software/category/case-study",
            label: "Case studies",
            className:
              "text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900",
          },
          {
            href: "/guides",
            label: "Guides",
            className:
              "text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900",
          },
          {
            href: "https://arcadecommunity.slack.com/join/shared_invite/zt-3mdvhxge9-101c5hYC0u3msJ2LfD1Zkw#/shared-invite/email",
            label: "Community",
            className:
              "relative text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 after:accent-auto after:bg-[url('https://cdn.prod.website-files.com/61d72a2cda50bc679e28766b/6939e798e8435f30c5b56cde_out-arrow.svg')] after:bg-center after:bg-no-repeat after:caret-transparent after:text-gray-600 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-3 after:tracking-[normal] after:leading-[17.5px] after:list-outside after:list-disc after:opacity-50 after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:underline-offset-[0.7px] after:text-nowrap after:-translate-y-1.5 after:visible after:w-3 after:border-separate after:-right-2.5 after:top-2/4 after:font-inter hover:text-gray-900 hover:outline-0 hover:border-gray-900",
          },
        ]}
      />
      <FooterColumn
        title="Company"
        links={[
          {
            href: "/careers",
            label: "Careers",
            className:
              "relative text-gray-600 box-border caret-transparent flex max-w-full min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 pl-2 pr-10 py-2 md:pr-9 hover:text-gray-900 hover:outline-0 hover:border-gray-900",
            hasInnerDiv: true,
          },
          {
            href: "/brand",
            label: "Brand",
            className:
              "text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900",
          },
          {
            href: "/security",
            label: "Security",
            className:
              "text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900",
          },
          {
            href: "https://arcadehq.statuspage.io/",
            label: "Status",
            className:
              "relative text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 after:accent-auto after:bg-[url('https://cdn.prod.website-files.com/61d72a2cda50bc679e28766b/6939e798e8435f30c5b56cde_out-arrow.svg')] after:bg-center after:bg-no-repeat after:caret-transparent after:text-gray-600 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-3 after:tracking-[normal] after:leading-[17.5px] after:list-outside after:list-disc after:opacity-50 after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:underline-offset-[0.7px] after:text-nowrap after:-translate-y-1.5 after:visible after:w-3 after:border-separate after:-right-2.5 after:top-2/4 after:font-inter hover:text-gray-900 hover:outline-0 hover:border-gray-900",
          },
          {
            href: "/terms-of-service",
            label: "Legal",
            className:
              "text-gray-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] underline-offset-[0.7px] text-nowrap -mx-2 p-2 hover:text-gray-900 hover:outline-0 hover:border-gray-900",
          },
        ]}
      />
    </div>
  );
};
