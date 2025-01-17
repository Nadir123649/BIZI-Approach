import React from "react";
import { Discord, FooterLogo, FooterOne, FooterTwo, Instagram, RightUnion, Telegram, Tiktok, Twitter, Youtube } from "../utils";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <img src={RightUnion} alt="left-line" className='w-full absolute top-[0px] left-0 z-30' />
      <div className="footer-top pt-[70px] pb-[60px] px-[40px]">
        <Row>
          <Col lg={3} md={6} sm={12}>
            <div>
              <img src={FooterLogo} alt="Footer-logo" className="mb-[50px] dsc-footer-logo" />
              <ul className="flex flex-col gap-[12px]">
                <li className="text-[#D2D3D4] text-[24px] md:text-[32px] leading-normal font-[400] not-italic cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FFCC2A]">Giveaway</li>
                <li className="text-[#D2D3D4] text-[24px] md:text-[32px] leading-normal font-[400] not-italic cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FFCC2A]">Team</li>
                <li className="text-[#D2D3D4] text-[24px] md:text-[32px] leading-normal font-[400] not-italic cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FFCC2A]">Roadmap</li>
              </ul>
            </div>

          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="mt-[6px] md:mt-[101px]">
              <ul className="flex flex-col gap-[12px]">
                <li className="text-[#FFCC2A] text-[24px] md:text-[32px] font-[400] leading-normal cursor-pointer transition-all duration-300 ease-in-out hover:text-[#D2D3D4]">THE GAME</li>
                <li className="text-[#FFCC2A] text-[24px] md:text-[32px] font-[400] leading-normal cursor-pointer transition-all duration-300 ease-in-out hover:text-[#D2D3D4]">Dscoff Wiki</li>
                <li className="text-[#FFCC2A] text-[24px] md:text-[32px] font-[400] leading-normal cursor-pointer transition-all duration-300 ease-in-out hover:text-[#D2D3D4]">MARKETPLICE</li>
              </ul>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <div className="mt-[50px] md:mt-[109px] pl-0 md:pl-[52px]">
              <p className="text-[20px] italic inter font-[700] text-[#F3F3F3] mb-[14px]">
                Stay Connected
              </p>
              <ul className=" flex items-center flex-wrap md:flex-row gap-[20px] md:gap-[10px]">
                <li className="w-[58px] h-[58px] bg-[#0D1B21] rounded-[16px] flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#FFCC2A]" >
                  <img src={Twitter} alt="twitter" />
                </li>
                <li className="w-[58px] h-[58px] bg-[#0D1B21] rounded-[16px] flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#FFCC2A]" >
                  <img src={Discord} alt="discord" />
                </li>
                <li className="w-[58px] h-[58px] bg-[#0D1B21] rounded-[16px] flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#FFCC2A]" >
                  <img src={Telegram} alt="telegram" />
                </li>
                <li className="w-[58px] h-[58px] bg-[#0D1B21] rounded-[16px] flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#FFCC2A]" >
                  <img src={Instagram} alt="instagram" />
                </li>
                <li className="w-[58px] h-[58px] bg-[#0D1B21] rounded-[16px] flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#FFCC2A]" >
                  <img src={Youtube} alt="Youtube" />
                </li>
                <li className="w-[58px] h-[58px] bg-[#0D1B21] rounded-[16px] flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#FFCC2A]" >
                  <img src={Tiktok} alt="Tiktok" />
                </li>
              </ul>
              <p className="text-[20px] inter antratic font-[700] text-[#F3F3F3] mb-[14px] mt-[42px]">
                GET IN THE DRIVERS SEAT
              </p>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                <img src={FooterOne} alt="footer-alt" className=" cursor-pointer social-btns" />
                <img src={FooterTwo} alt="footer-alt" className=" cursor-pointer social-btns" />
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="footer-bottom flex flex-col md:flex-row gap-[8px] md:gap-0 justify-between items-center py-[24px] px-[20px] md:px-[40px]">
        <div>
          <ul className="flex items-center gap-[20px] md:gap-[40px] ">
            <li className="text-[#D2D3D4] cursor-pointer fot-[400] inter leading-normal text-[10px] md:text-[14px] not-italic">Legal & Privacy</li>
            <li className="text-[#D2D3D4] cursor-pointer fot-[400] inter leading-normal text-[10px] md:text-[14px] not-italic">User Agreement</li>
            <li className="text-[#D2D3D4] cursor-pointer fot-[400] inter leading-normal text-[10px] md:text-[14px] not-italic">Privacy & Cookie Policy</li>
          </ul>
        </div>
        <p className="mb-0 text-[#D2D3D4] text-[12px] md:text-[14px] inter font-[400] leading-normal not-italic">
          © 2024 DSCOFF Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
