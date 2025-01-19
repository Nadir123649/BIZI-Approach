import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/index.css";
import { ScanImg } from "../utils";
import { Col, Container, Row } from "react-bootstrap";

const Scan = () => {
    return (
        <section className="relative bg-[#083C87] py-10 md:py-20 min-h-[400px] md:min-h-[500px] md:flex  md:items-center">
            <Container className="">
                <Row className="flex justify-center items-center" >
                    <Col lg={7} md={7} sm={12} className="flex justify-center">
                        <div className="absolute bottom-[0px] image-right">
                            <img src={ScanImg} alt="Banner" />
                        </div>
                    </Col>
                    <Col lg={5} md={5} sm={12} className="">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[#FF9700] text-[24px] md:text-[40px] font-extrabold">Scan QR Code to Download </h1>
                            <p className="text-[18px] text-white">Quick and easy download  Bizi—scan the QR code and join a world of smarter connections</p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default Scan;
