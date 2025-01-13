import React from "react";
import "../assets/css/index.css";
import { useNavigate } from "react-router-dom";
import { Logo, NavBg } from "../utils";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-[#0D1B21] h-[70px] fixed flex flex-col justify-center inset-0 z-50 w-full">
      <img src={NavBg} alt="navigationBackground" className=" absolute  max-w-[625px] right-0 z-[1]" />
      <div className="flex justify-between items-center px-[40px] relative z-10 ">
        <img src={Logo} onClick={() => navigate("/")} alt="logo" className="cursor-pointer" />
        <nav>
          <ul className="flex items-center gap-[32px]">
            <li className=" cursor-pointer text-[14px] capitalize leading-[32px] text-[#D2D3D4] font-medium not-italic transition-all duration-300 ease-in-out hover:text-[#FFCC2A]">
              Giveaway
            </li>
            <li className=" cursor-pointer text-[14px] capitalize leading-[32px] text-[#D2D3D4] font-medium not-italic transition-all duration-300 ease-in-out hover:text-[#FFCC2A]">
              Team
            </li>
            <li className=" cursor-pointer text-[14px] capitalize leading-[32px] text-[#D2D3D4] font-medium not-italic transition-all duration-300 ease-in-out hover:text-[#FFCC2A]">
              Roadmap
            </li>
          </ul>
        </nav>
        <nav className="bg-navigation">
          <ul className="flex items-center gap-[32px]">
            <li className="cursor-pointer capitalize text-[#0D1B21] text-[14px] font-medium leading-[32px] not-italic transition-all duration-300 ease-in-out  hover:underline"
              onClick={() => navigate("/about")}>
              THE GAME
            </li>
            <li className="cursor-pointer capitalize text-[#0D1B21] text-[14px] font-medium leading-[32px] not-italic transition-all duration-300 ease-in-out hover:underline">
              DSCOFF WIKI
            </li>
            <li className="cursor-pointer capitalize text-[#0D1B21] text-[14px] font-medium leading-[32px] not-italic transition-all duration-300 ease-in-out hover:underline">
              MARKETPLICE
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
