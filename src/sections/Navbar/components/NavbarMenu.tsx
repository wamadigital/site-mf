import { NavbarDropdownItem } from "@/sections/Navbar/components/NavbarDropdownItem";
import { NavbarLink } from "@/sections/Navbar/components/NavbarLink";

type NavbarMenuProps = {
  mobileOpen: boolean;
  onClose: () => void;
};

export const NavbarMenu = ({ mobileOpen, onClose }: NavbarMenuProps) => {
  return (
    <nav
      role="navigation"
      className={`fixed text-[28.8px] items-center bg-white box-border caret-transparent float-none h-screen justify-start leading-[43.2px] min-h-0 min-w-0 outline-[3px] w-full inset-[0%] z-[10] transition-all duration-300 ease-in-out ${mobileOpen ? "flex opacity-100 visible" : "hidden opacity-0 invisible"} md:relative md:text-base md:bg-transparent md:flex md:float-right md:h-auto md:justify-center md:leading-6 md:min-h-[auto] md:min-w-[auto] md:w-auto md:inset-auto md:opacity-100 md:visible md:z-auto`}
    >
      <div className={`absolute text-[28.8px] items-stretch bg-white box-border caret-transparent flex flex-col h-full justify-start leading-[43.2px] min-h-0 min-w-0 outline-[3px] text-center w-full z-[1] overflow-y-auto ml-0 pt-[70px] pb-[110px] px-4 inset-[0%] transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"} md:static md:text-base md:[align-items:normal] md:bg-transparent md:flex-row md:h-auto md:leading-6 md:min-h-[auto] md:min-w-[auto] md:opacity-100 md:text-start md:z-auto md:overflow-visible md:ml-4 md:p-0 md:inset-auto`}>
        <div className="relative text-[28.8px] items-stretch self-center box-border caret-transparent gap-x-0 flex flex-col justify-start leading-[43.2px] min-h-0 min-w-0 outline-[3px] gap-y-0 text-center w-full mt-4 px-2 md:static md:text-base md:items-center md:self-auto md:gap-x-0.5 md:flex-row md:justify-center md:leading-6 md:min-h-[auto] md:min-w-[auto] md:gap-y-0.5 md:text-start md:w-auto md:mt-0 md:px-0">
          <NavbarDropdownItem
            label="Product"
            imgClassName="md:-scale-100"
            dropdownContent={
              <div className="relative text-xl box-border caret-transparent hidden min-w-full opacity-0 outline-[3px] text-center transform-none origin-[0%_0%] invisible md:absolute md:text-base md:flex md:min-w-80 md:opacity-100 md:text-start md:-translate-x-4 md:translate-y-3 md:visible">
                <div className="relative text-xl items-start bg-white shadow-[rgba(17,24,39,0.03)_0px_16px_16px_0px,rgba(17,24,39,0.03)_0px_8px_8px_0px,rgba(17,24,39,0.03)_0px_4px_4px_0px,rgba(17,24,39,0.03)_0px_2px_2px_-2px,rgba(17,24,39,0.12)_0px_0px_0px_1px] box-border caret-transparent gap-x-0 flex flex-col shrink-0 justify-start min-h-0 min-w-0 outline-[3px] gap-y-0 text-center invisible w-full mt-2 p-1 rounded-xl md:text-base md:gap-x-1 md:flex-row md:min-h-[auto] md:min-w-[auto] md:gap-y-1 md:text-start md:w-auto">
                  <div className="text-xl box-border caret-transparent flex flex-col shrink-0 min-h-0 min-w-0 outline-[3px] text-center w-full md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start md:w-[296px]">
                    <div className="text-gray-500 text-xs box-border caret-transparent leading-4 min-h-0 min-w-0 outline-[3px] text-left p-3 md:min-h-[auto] md:min-w-[auto]">
                      Features
                    </div>
                    <a
                      href="/product/interactive-demo"
                      className="text-gray-900 text-xl items-stretch bg-white box-border caret-transparent gap-x-3 flex basis-[0%] grow justify-start max-w-full min-h-0 min-w-0 outline-[3px] gap-y-3 text-center underline-offset-1 w-full pl-3 pr-4 py-3 rounded-lg md:text-base md:items-center md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px] md:w-auto hover:bg-gray-50 hover:outline-0"
                    >
                      <div className="text-xl items-center bg-gray-50 box-border caret-transparent flex flex-col shrink-0 h-10 justify-center min-h-0 min-w-0 outline-[3px] text-center underline-offset-1 w-10 rounded-lg md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                        <img
                          alt=""
                          src="https://c.animaapp.com/mnxsvuft69auLT/assets/69288c60315fff9ad8c3610b_demos.svg"
                          className="text-xl aspect-[auto_20_/_20] box-border caret-transparent h-6 max-w-full min-h-0 min-w-0 outline-[3px] text-center underline-offset-1 w-5 md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]"
                        />
                      </div>
                      <div className="text-xl items-start box-border caret-transparent gap-x-0.5 flex flex-col justify-center min-h-0 min-w-0 outline-[3px] gap-y-0.5 text-center underline-offset-1 md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                        <div className="text-gray-700 text-sm items-center box-border caret-transparent flex leading-5 min-h-0 min-w-0 outline-[3px] text-left underline-offset-1 md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                          Interactive Demos
                        </div>
                        <div className="text-gray-500 text-xs font-normal items-center box-border caret-transparent flex leading-4 min-h-0 min-w-0 outline-[3px] text-left underline-offset-1 md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                          Effortlessly beautiful demos
                        </div>
                      </div>
                    </a>
                    <a
                      href="/product/creator-studio"
                      className="text-gray-900 text-xl items-stretch bg-white box-border caret-transparent gap-x-3 flex basis-[0%] grow justify-start max-w-full min-h-0 min-w-0 outline-[3px] gap-y-3 text-center underline-offset-1 w-full pl-3 pr-4 py-3 rounded-lg md:text-base md:items-center md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px] md:w-auto hover:bg-gray-50 hover:outline-0"
                    >
                      <div className="text-xl items-center bg-gray-50 box-border caret-transparent flex flex-col shrink-0 h-10 justify-center min-h-0 min-w-0 outline-[3px] text-center underline-offset-1 w-10 rounded-lg md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                        <img
                          alt=""
                          src="https://c.animaapp.com/mnxsvuft69auLT/assets/69288c7386df42edca37f020_studio.svg"
                          className="text-xl aspect-[auto_20_/_20] box-border caret-transparent h-6 max-w-full min-h-0 min-w-0 outline-[3px] text-center underline-offset-1 w-5 md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]"
                        />
                      </div>
                      <div className="text-xl items-start box-border caret-transparent gap-x-0.5 flex flex-col justify-center min-h-0 min-w-0 outline-[3px] gap-y-0.5 text-center underline-offset-1 md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                        <div className="text-gray-700 text-sm items-center box-border caret-transparent flex leading-5 min-h-0 min-w-0 outline-[3px] text-left underline-offset-1 md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                          AI Videos &amp; Visuals
                        </div>
                        <div className="text-gray-500 text-xs font-normal items-center box-border caret-transparent flex leading-4 min-h-0 min-w-0 outline-[3px] text-left underline-offset-1 md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                          Built in minutes with Creator Studio
                        </div>
                      </div>
                    </a>
                    <a
                      href="/product/personalization"
                      className="text-gray-900 text-xl items-stretch bg-white box-border caret-transparent gap-x-3 flex basis-[0%] grow justify-start max-w-full min-h-0 min-w-0 outline-[3px] gap-y-3 text-center underline-offset-1 w-full pl-3 pr-4 py-3 rounded-lg md:text-base md:items-center md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px] md:w-auto hover:bg-gray-50 hover:outline-0"
                    >
                      <div className="text-xl items-center bg-gray-50 box-border caret-transparent flex flex-col shrink-0 h-10 justify-center min-h-0 min-w-0 outline-[3px] text-center underline-offset-1 w-10 rounded-lg md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                        <img
                          alt=""
                          src="https://c.animaapp.com/mnxsvuft69auLT/assets/6596c059dfade96ac3d637bf_icon-personalization.svg"
                          className="text-xl aspect-[auto_20_/_20] box-border caret-transparent h-6 max-w-full min-h-0 min-w-0 outline-[3px] text-center underline-offset-1 w-5 md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]"
                        />
                      </div>
                      <div className="text-xl items-start box-border caret-transparent gap-x-0.5 flex flex-col justify-center min-h-0 min-w-0 outline-[3px] gap-y-0.5 text-center underline-offset-1 md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                        <div className="text-gray-700 text-sm items-center box-border caret-transparent flex leading-5 min-h-0 min-w-0 outline-[3px] text-left underline-offset-1 md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                          Personalization
                        </div>
                        <div className="text-gray-500 text-xs font-normal items-center box-border caret-transparent flex leading-4 min-h-0 min-w-0 outline-[3px] text-left underline-offset-1 md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                          Tailored storytelling at scale
                        </div>
                      </div>
                    </a>
                    <a
                      href="/integrations"
                      className="text-gray-900 text-xl items-stretch bg-white box-border caret-transparent gap-x-3 flex basis-[0%] grow justify-start max-w-full min-h-0 min-w-0 outline-[3px] gap-y-3 text-center underline-offset-1 w-full pl-3 pr-4 py-3 rounded-lg md:text-base md:items-center md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px] md:w-auto hover:bg-gray-50 hover:outline-0"
                    >
                      <div className="text-xl items-center bg-gray-50 box-border caret-transparent flex flex-col shrink-0 h-10 justify-center min-h-0 min-w-0 outline-[3px] text-center underline-offset-1 w-10 rounded-lg md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                        <img
                          alt=""
                          src="https://c.animaapp.com/mnxsvuft69auLT/assets/65cba33f4b46bb630ad0edec_integrations.svg"
                          className="text-xl aspect-[auto_20_/_20] box-border caret-transparent h-6 max-w-full min-h-0 min-w-0 outline-[3px] text-center underline-offset-1 w-5 md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]"
                        />
                      </div>
                      <div className="text-xl items-start box-border caret-transparent gap-x-0.5 flex flex-col justify-center min-h-0 min-w-0 outline-[3px] gap-y-0.5 text-center underline-offset-1 md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                        <div className="text-gray-700 text-sm items-center box-border caret-transparent flex leading-5 min-h-0 min-w-0 outline-[3px] text-left underline-offset-1 md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                          Integrations
                        </div>
                        <div className="text-gray-500 text-xs font-normal items-center box-border caret-transparent flex leading-4 min-h-0 min-w-0 outline-[3px] text-left underline-offset-1 md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                          Connect Arcade to other tools
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="text-xl box-border caret-transparent flex flex-col shrink-0 min-h-0 min-w-0 outline-[3px] text-center w-full md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start md:w-[296px]">
                    <div className="text-gray-500 text-xs box-border caret-transparent leading-4 min-h-0 min-w-0 outline-[3px] text-left p-3 md:min-h-[auto] md:min-w-[auto]">
                      Tools
                    </div>
                    <a
                      href="https://chromewebstore.google.com/detail/arcade/gagidkjllbdgggpboolfmmdpeagghjlm"
                      className="text-gray-900 text-xl items-stretch bg-white box-border caret-transparent gap-x-3 flex basis-[0%] grow justify-start max-w-full min-h-0 min-w-0 outline-[3px] gap-y-3 text-center underline-offset-1 w-full pl-3 pr-4 py-3 rounded-lg md:text-base md:items-center md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px] md:w-auto hover:bg-gray-50 hover:outline-0"
                    >
                      <div className="text-xl items-center bg-gray-50 box-border caret-transparent flex flex-col shrink-0 h-10 justify-center min-h-0 min-w-0 outline-[3px] text-center underline-offset-1 w-10 rounded-lg md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                        <img
                          alt=""
                          src="https://c.animaapp.com/mnxsvuft69auLT/assets/6802230bb074828273d20568_ext-menu.svg"
                          className="text-xl aspect-[auto_20_/_20] box-border caret-transparent h-6 max-w-full min-h-0 min-w-0 outline-[3px] text-center underline-offset-1 w-5 md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]"
                        />
                      </div>
                      <div className="text-xl items-start box-border caret-transparent gap-x-0.5 flex flex-col justify-center min-h-0 min-w-0 outline-[3px] gap-y-0.5 text-center underline-offset-1 md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                        <div className="text-gray-700 text-sm items-center box-border caret-transparent flex leading-5 min-h-0 min-w-0 outline-[3px] text-left underline-offset-1 md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                          Browser Extension
                        </div>
                        <div className="text-gray-500 text-xs font-normal items-center box-border caret-transparent flex leading-4 min-h-0 min-w-0 outline-[3px] text-left underline-offset-1 md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                          Capture from your browser
                        </div>
                      </div>
                    </a>
                    <a
                      href="/download"
                      className="text-gray-900 text-xl items-stretch bg-white box-border caret-transparent gap-x-3 flex basis-[0%] grow justify-start max-w-full min-h-0 min-w-0 outline-[3px] gap-y-3 text-center underline-offset-1 w-full pl-3 pr-4 py-3 rounded-lg md:text-base md:items-center md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px] md:w-auto hover:bg-gray-50 hover:outline-0"
                    >
                      <div className="text-xl items-center bg-gray-50 box-border caret-transparent flex flex-col shrink-0 h-10 justify-center min-h-0 min-w-0 outline-[3px] text-center underline-offset-1 w-10 rounded-lg md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                        <img
                          alt=""
                          src="https://c.animaapp.com/mnxsvuft69auLT/assets/6802230b5d8125360a4384e4_desktop-menu.svg"
                          className="text-xl aspect-[auto_20_/_20] box-border caret-transparent h-6 max-w-full min-h-0 min-w-0 outline-[3px] text-center underline-offset-1 w-5 md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]"
                        />
                      </div>
                      <div className="text-xl items-start box-border caret-transparent gap-x-0.5 flex flex-col justify-center min-h-0 min-w-0 outline-[3px] gap-y-0.5 text-center underline-offset-1 md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                        <div className="text-gray-700 text-sm items-center box-border caret-transparent flex leading-5 min-h-0 min-w-0 outline-[3px] text-left underline-offset-1 md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                          Desktop App
                        </div>
                        <div className="text-gray-500 text-xs font-normal items-center box-border caret-transparent flex leading-4 min-h-0 min-w-0 outline-[3px] text-left underline-offset-1 md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                          Capture multiple apps at once
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://www.figma.com/community/plugin/1428419310515420089/arcade-turn-designs-into-interactive-demos"
                      className="text-gray-900 text-xl items-stretch bg-white box-border caret-transparent gap-x-3 flex basis-[0%] grow justify-start max-w-full min-h-0 min-w-0 outline-[3px] gap-y-3 text-center underline-offset-1 w-full pl-3 pr-4 py-3 rounded-lg md:text-base md:items-center md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px] md:w-auto hover:bg-gray-50 hover:outline-0"
                    >
                      <div className="text-xl items-center bg-gray-50 box-border caret-transparent flex flex-col shrink-0 h-10 justify-center min-h-0 min-w-0 outline-[3px] text-center underline-offset-1 w-10 rounded-lg md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                        <img
                          alt=""
                          src="https://c.animaapp.com/mnxsvuft69auLT/assets/6802230bde0b794e535106e2_figma-menu.svg"
                          className="text-xl aspect-[auto_20_/_20] box-border caret-transparent h-6 max-w-full min-h-0 min-w-0 outline-[3px] text-center underline-offset-1 w-5 md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]"
                        />
                      </div>
                      <div className="text-xl items-start box-border caret-transparent gap-x-0.5 flex flex-col justify-center min-h-0 min-w-0 outline-[3px] gap-y-0.5 text-center underline-offset-1 md:text-base md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                        <div className="text-gray-700 text-sm items-center box-border caret-transparent flex leading-5 min-h-0 min-w-0 outline-[3px] text-left underline-offset-1 md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                          Figma Plugin
                        </div>
                        <div className="text-gray-500 text-xs font-normal items-center box-border caret-transparent flex leading-4 min-h-0 min-w-0 outline-[3px] text-left underline-offset-1 md:min-h-[auto] md:min-w-[auto] md:text-start md:underline-offset-[0.8px]">
                          Turn your designs into demos
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            }
          />
          <NavbarDropdownItem
            label="Solutions"
            containerClassName="border-b-gray-700 border-l-gray-700 border-r-gray-700 border-t-gray-200 border-t md:border-t-gray-700 md:border-t-0"
          />
          <NavbarDropdownItem
            label="Resources"
            containerClassName="border-b-gray-700 border-l-gray-700 border-r-gray-700 border-t-gray-200 border-t md:border-t-gray-700 md:border-t-0"
          />
          <NavbarDropdownItem
            label="Company"
            containerClassName="relative text-gray-700 text-xl font-medium border-b-gray-700 border-l-gray-700 border-r-gray-700 border-t-gray-200 box-border caret-transparent shrink-0 leading-6 min-h-0 min-w-0 outline-[3px] text-center px-0 py-6 rounded-none border-t md:text-base md:border-t-gray-700 md:min-h-[auto] md:min-w-[auto] md:text-start md:px-4 md:py-2.5 md:rounded-xl md:border-t-0 hover:bg-gray-900/0"
          />
          <NavbarLink />
          <a
            onClick={onClose}
            href="https://app.arcade.software/"
            className="text-white text-lg font-semibold items-center bg-blue-700 shadow-[rgba(17,24,39,0.04)_0px_32px_32px_0px,rgba(17,24,39,0.04)_0px_16px_16px_0px,rgba(17,24,39,0.04)_0px_8px_8px_0px,rgba(17,24,39,0.04)_0px_4px_4px_-2px,rgba(17,24,39,0.04)_0px_2px_2px_-1px,rgb(24,47,165)_0px_0px_0px_1px] box-border caret-transparent gap-x-2 hidden auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] h-12 justify-center leading-[18px] min-h-14 outline-[3px] gap-y-2 text-center underline-offset-[0.9px] mt-4 px-4 rounded-xl md:text-base md:leading-4 md:min-h-0 md:text-start md:underline-offset-[0.8px] md:mt-0 hover:bg-indigo-600 hover:shadow-[rgba(17,24,39,0)_0px_32px_32px_0px,rgba(17,24,39,0)_0px_16px_16px_0px,rgba(17,24,39,0.04)_0px_8px_8px_-4px,rgba(17,24,39,0.04)_0px_4px_4px_-2px,rgba(17,24,39,0.04)_0px_2px_2px_-1px,rgb(33,66,231)_0px_0px_0px_1px] hover:outline-0 hover:border-blue-700"
          >
            Open app
          </a>
          <a
            onClick={onClose}
            href="https://app.arcade.software/auth"
            className="text-black text-lg font-semibold items-center bg-gray-100 shadow-none box-border caret-transparent gap-x-2 flex auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] h-12 justify-center leading-[18px] min-h-14 outline-[3px] gap-y-2 text-center underline-offset-[0.9px] mt-4 px-4 rounded-xl md:text-white md:text-base md:bg-blue-700 md:shadow-[rgba(17,24,39,0.04)_0px_32px_32px_0px,rgba(17,24,39,0.04)_0px_16px_16px_0px,rgba(17,24,39,0.04)_0px_8px_8px_0px,rgba(17,24,39,0.04)_0px_4px_4px_-2px,rgba(17,24,39,0.04)_0px_2px_2px_-1px,rgb(24,47,165)_0px_0px_0px_1px] md:hidden md:leading-4 md:min-h-0 md:text-start md:underline-offset-[0.8px] md:mt-0 hover:bg-indigo-600 hover:shadow-[rgba(17,24,39,0)_0px_32px_32px_0px,rgba(17,24,39,0)_0px_16px_16px_0px,rgba(17,24,39,0.04)_0px_8px_8px_-4px,rgba(17,24,39,0.04)_0px_4px_4px_-2px,rgba(17,24,39,0.04)_0px_2px_2px_-1px,rgb(33,66,231)_0px_0px_0px_1px] hover:outline-0 hover:border-blue-700"
          >
            Log in
          </a>
          <a
            onClick={onClose}
            href="https://app.arcade.software/auth"
            className="text-white text-lg font-semibold items-center bg-blue-700 shadow-[rgba(17,24,39,0.04)_0px_32px_32px_0px,rgba(17,24,39,0.04)_0px_16px_16px_0px,rgba(17,24,39,0.04)_0px_8px_8px_0px,rgba(17,24,39,0.04)_0px_4px_4px_-2px,rgba(17,24,39,0.04)_0px_2px_2px_-1px,rgb(24,47,165)_0px_0px_0px_1px] box-border caret-transparent gap-x-2 flex auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] h-12 justify-center leading-[18px] min-h-14 outline-[3px] gap-y-2 text-center underline-offset-[0.9px] mt-4 px-4 rounded-xl md:text-base md:hidden md:leading-4 md:min-h-0 md:text-start md:underline-offset-[0.8px] md:mt-0 hover:bg-indigo-600 hover:shadow-[rgba(17,24,39,0)_0px_32px_32px_0px,rgba(17,24,39,0)_0px_16px_16px_0px,rgba(17,24,39,0.04)_0px_8px_8px_-4px,rgba(17,24,39,0.04)_0px_4px_4px_-2px,rgba(17,24,39,0.04)_0px_2px_2px_-1px,rgb(33,66,231)_0px_0px_0px_1px] hover:outline-0 hover:border-blue-700"
          >
            Sign up for free
          </a>
          <a
            onClick={onClose}
            href="/contactsales"
            className="text-gray-900 text-lg font-semibold items-center bg-white shadow-[rgba(17,24,39,0.04)_0px_32px_32px_0px,rgba(17,24,39,0.04)_0px_16px_16px_0px,rgba(17,24,39,0.04)_0px_8px_8px_0px,rgba(17,24,39,0.04)_0px_4px_4px_-2px,rgba(17,24,39,0.04)_0px_2px_2px_-1px,rgba(17,24,39,0.16)_0px_0px_0px_1px] box-border caret-transparent gap-x-2 flex auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] h-12 justify-center leading-[18px] min-h-14 outline-[3px] gap-y-2 text-center underline-offset-[0.9px] mt-4 px-4 rounded-xl md:text-base md:hidden md:leading-4 md:min-h-0 md:text-start md:underline-offset-[0.8px] md:mt-0 hover:bg-gray-50 hover:shadow-[rgba(17,24,39,0)_0px_32px_32px_0px,rgba(17,24,39,0)_0px_16px_16px_0px,rgba(17,24,39,0.04)_0px_8px_8px_-4px,rgba(17,24,39,0.04)_0px_4px_4px_-2px,rgba(17,24,39,0.04)_0px_2px_2px_-1px,rgba(17,24,39,0.16)_0px_0px_0px_1px] hover:outline-0"
          >
            Talk to sales
          </a>
        </div>
      </div>
    </nav>
  );
};
