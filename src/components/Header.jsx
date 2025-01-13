import React from "react";
import "../assets/css/index.css";
import { useNavigate } from "react-router-dom";
import { Logo, NavBg } from "../utils";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-[#0D1B21] h-[100px] md:h-[70px] fixed flex flex-col justify-center inset-0 z-50 w-full">
      <img src={NavBg} alt="navigationBackground" className=" nav-zigzag-bg z-[1]" />
      <div className="flex justify-between flex-col md:flex-row items-end md:items-center gap-[20px] px-[10px] md:px-[40px] relative z-10 ">
        <img src={Logo} onClick={() => navigate("/")} alt="logo" className="cursor-pointer hidden md:block" />
        <nav className="nav-one flex items-center justify-between">
          <img src={Logo} onClick={() => navigate("/")} alt="logo" className="cursor-pointer  block md:hidden" width={100} />
          <ul className="flex items-center gap-[10px] md:gap-[32px]">
            <li className=" cursor-pointer text-[11px] md:text-[14px] capitalize leading-[32px] text-[#D2D3D4] font-medium not-italic transition-all duration-300 ease-in-out hover:text-[#FFCC2A]">
              Giveaway
            </li>
            <li className=" cursor-pointer text-[11px] md:text-[14px] capitalize leading-[32px] text-[#D2D3D4] font-medium not-italic transition-all duration-300 ease-in-out hover:text-[#FFCC2A]">
              Team
            </li>
            <li className=" cursor-pointer text-[11px] md:text-[14px] capitalize leading-[32px] text-[#D2D3D4] font-medium not-italic transition-all duration-300 ease-in-out hover:text-[#FFCC2A]">
              Roadmap
            </li>
          </ul>
        </nav>
        <nav className="bg-navigation">
          <ul className="flex items-end  md:items-center gap-[20px] md:gap-[32px]">
            <li className="cursor-pointer capitalize text-[#0D1B21] text-[11px] md:text-[14px] font-medium leading-[32px] not-italic transition-all duration-300 ease-in-out  hover:underline"
              onClick={() => navigate("/about")}>
              THE GAME
            </li>
            <li className="cursor-pointer capitalize text-[#0D1B21] text-[11px] md:text-[14px] font-medium leading-[32px] not-italic transition-all duration-300 ease-in-out hover:underline">
              DSCOFF WIKI
            </li>
            <li className="cursor-pointer capitalize text-[#0D1B21] text-[11px] md:text-[14px] font-medium leading-[32px] not-italic transition-all duration-300 ease-in-out hover:underline">
              MARKETPLICE
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
