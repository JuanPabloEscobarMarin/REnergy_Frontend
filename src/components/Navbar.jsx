import { useState } from "react";
import { MenuListItem } from "./MenuListItem";
import { IconSocialMedia } from "./IconSocialMedia";
import { GithubIcon, LinkedinIcon } from "./icons";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="bg-gray-100 rounded-lg w-[95%] ml-auto mr-auto fixed z-50 top-[16px] right-[0%] left-[0%] bottom-auto py-2 pl-8 pr-2">

        <div className="flex justify-between items-center relative">

          <a className="flex items-center cursor-pointer" href="#">
            <img src="../../assets/logo_REnergy.ico" className="size-[50px]" />
            <span className="text-2xl font-bold text-[#40513B]">REnergy</span>
          </a>

          <div className="flex items-center gap-3">
            <a className="text-white bg-[#40513B] font-medium rounded-lg text-md px-8 py-3 cursor-pointer">Log in</a>
            <button className="text-gray-900 cursor-pointer bg-[#E7E7E7] rounded-lg font-medium text-md px-8 py-3" onClick={() => setShowMenu(!showMenu)}>Menu</button>

            <div className={`absolute z-10 bg-[#E7E7E7] w-1/7 px-8 py-3 rounded-lg ${showMenu ? "block" : "hidden"}`} style={{ inset: "68px 0 auto auto" }}>
              <ul className="flex flex-col gap-2 pt-4">
                <MenuListItem to="#" text="Quienes somos" />
                <MenuListItem to="#" text="Portafolio" />
                <MenuListItem to="#" text="Galeria" />
                <MenuListItem to="#" text="Contactor" />
              </ul>

              <ul className="flex pt-4 gap-2">
                <IconSocialMedia to="#">
                  <LinkedinIcon />
                </IconSocialMedia>
                <IconSocialMedia to="https://github.com/JuanPabloEscobarMarin/REnergy_Frontend/tree/main">
                  <GithubIcon />
                </IconSocialMedia>
              </ul>

            </div>
          </div>
        </div>
      </nav>
    </>

  );
};
