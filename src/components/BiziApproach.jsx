import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../assets/css/index.css";
import { BiziImg } from "../utils";
import { content } from "../constants";

const BiziApproach = () => {
    return (
        <section className="relative bg-[#FFECCF] py-10 md:py-20 min-h-[500px]">
            <Container>
                <Row className="flex justify-center items-center">
                    <h1 className="text-center text-[28px] md:text-[52px] text-[#083C87] font-extrabold md:pb-[30px]">The BIZI Approach</h1>
                    <Col lg={7} md={7} sm={12} className="flex justify-center">
                        <div className="image-right">
                            <img src={BiziImg} alt="Banner" />
                        </div>
                    </Col>
                    <Col lg={5} md={5} sm={12}>
                        <div className="flex flex-col gap-4">
                            {content.map((item, index) => (
                                <div key={index}>
                                    <h1 className="text-[#083C87] text-[20px] md:text-[32px] font-bold ">
                                        {item.title}
                                    </h1>
                                    <div className="text-[14px] md:text-[18px] text-[#000000] pb-3">
                                        {Array.isArray(item.description) ? (
                                            <ul className="networking-list">
                                                {item.description.map((desc, idx) => (
                                                    <li key={idx} className="list-disc">{desc}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="pb-0 mb-0">{item.description}</p>
                                        )}
                                    </div>
                                    <div className="bg-[#FF9700] p-[8px]"></div>
                                </div>
                            ))}
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default BiziApproach;
