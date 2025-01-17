import React from "react";
import "../assets/css/index.css";
import { useNavigate } from "react-router-dom";
import { Logo, NavBg } from "../utils";

const Header = () => {
  const navigate = useNavigate();

  const navItemStyles = "cursor-pointer text-[11px] md:text-[14px] capitalize leading-[32px] text-[#D2D3D4] font-medium not-italic transition-all duration-300 ease-in-out hover:text-[#FFCC2A]";

  const navItemLinkStyles = "cursor-pointer capitalize text-[#0D1B21] text-[11px] md:text-[14px] font-medium leading-[32px] not-italic transition-all duration-300 ease-in-out hover:underline";

  return (
    <header className="bg-[#0D1B21] h-[100px] md:h-[70px] fixed flex flex-col justify-center inset-0 z-50 w-full">
      <img src={NavBg} alt="Navigation Background" className="nav-zigzag-bg z-[1]" />

      <div className="flex justify-between flex-col md:flex-row items-end md:items-center gap-[20px] px-[10px] md:px-[40px] relative z-10">
        {/* Logo for desktop */}
        <img
          src={Logo}
          onClick={() => navigate("/")}
          alt="Logo"
          className="cursor-pointer hidden md:block"
        />

        <nav className="nav-one flex items-center justify-between">
          {/* Logo for mobile */}
          <img
            src={Logo}
            onClick={() => navigate("/")}
            alt="Logo"
            className="cursor-pointer block md:hidden"
            width={100}
          />

          <ul className="flex items-center gap-[10px] md:gap-[32px]">
            <li className={navItemStyles}>
              <a href="/#giveaway" className={navItemStyles}>Giveaway</a>
            </li>
            <li className={navItemStyles}>
              <a href="/#team" className={navItemStyles}>Team</a>
            </li>
            <li className={navItemStyles}>
              <a href="/#roadmap" className={navItemStyles}>Roadmap</a>
            </li>
          </ul>
        </nav>

        {/* Secondary navigation items */}
        <nav className="bg-navigation">
          <ul className="flex items-end md:items-center gap-[20px] md:gap-[32px]">
            <li className={navItemLinkStyles} onClick={() => navigate("/#thegame")}>
              <a href="/#thegame" className={navItemLinkStyles} >THE GAME</a>
            </li>
            <li className={navItemLinkStyles} onClick={() => navigate("/#dscoff")}>
              <a href="/#dscoff" className={navItemLinkStyles} >DSCOFF WIKI</a>
            </li>
            <li className={navItemLinkStyles} onClick={() => navigate("/#marketplice")}>
              <a href="/#marketplice" className={navItemLinkStyles} >DSCOFF WIKI</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
