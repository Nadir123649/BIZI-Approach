import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/index.css";
import { Logo } from "../utils";
import { Col, Container, Row } from "react-bootstrap";

const Header = () => {
  const navigate = useNavigate();


  return (
    <header className=" h-[100px] md:h-[70px] flex flex-col justify-center inset-0 z-50 w-full">
      <Container>
        <a href="/">
          <img src={Logo} alt="logo" className="max-w-[120px]" />
        </a>
      </Container>

    </header>
  );
};

export default Header;
