import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FooterLogo, AppleStore, GoogleStore } from "../utils";

const Footer = () => {
  return (
    <footer className="bg-[#083C87] relative overflow-hidden">
      <Container>
        <div className="footer-top pt-[20px] md:pt-[70px] pb-[5px] md:pb-[50px] px-[40px]">
          <div className="flex justify-between items-center">
            <div>
              <img src={FooterLogo} alt="Footer-logo" className="" />
            </div>
            <div className="flex gap-3">
              <img src={AppleStore} alt="apple-store" className="max-w-[135px]" />
              <img src={GoogleStore} alt="google-store" className="max-w-[135px]" />
            </div>
          </div>
        </div>
        <div className="footer-bottom flex flex-row  gap-[20px] md:gap-0 justify-center md:justify-between items-center py-[24px] px-[20px] md:px-[40px]">
          <div className="text-white">
            <ul className="flex items-center gap-[20px] md:gap-[40px] ">
              <li className=" cursor-pointer fot-[400] inter leading-normal text-[10px] md:text-[14px] not-italic">Privacy</li>
              <li className=" cursor-pointer fot-[400] inter leading-normal text-[10px] md:text-[14px] not-italic">Terms of Use</li>
            </ul>
          </div>
          <p className="mb-0 text-white text-[12px] md:text-[14px] inter font-[400] leading-normal not-italic">
            © 2025 BIZI
          </p>
        </div>
      </Container>


    </footer>
  );
};

export default Footer;
