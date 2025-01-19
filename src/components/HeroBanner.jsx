import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../assets/css/index.css";
import { AppleStore, BannerImg, GoogleStore, } from "../utils";

const HeroBanner = () => {


    return (
        <section className=" pb-10 md:py-20">
            <Container>
                <Row className="align-items-center  gap-10 md:gap-0">
                    <Col lg={6} md={6} sm={12}>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[#083C87] text-[24px] md:text-[32px] font-bold">BiziChat provides an integrated social networking solution for business professionals, offering a seamless approach to effective business networking, communication and ideas management. </h1>
                            <p className="text-[18px]">Users can accurately and efficiently connect with their peers (both existing friends and like-minded strangers), chat and share and manage their business ideas within a single app.</p>
                            <div className="flex gap-3">
                                <button><img src={AppleStore} alt="apple-btn" /></button>
                                <button><img src={GoogleStore} alt="google-btn" /></button>
                            </div>

                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="flex justify-center">
                        <div className="image-right">
                            <img src={BannerImg} alt="Banner" />
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default HeroBanner;
