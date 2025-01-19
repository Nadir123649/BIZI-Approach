import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../assets/css/index.css";

const Demo = () => {
    return (
        <section className="py-10 md:py-20 bg-[#083C87]">
            <Container>
                <Row className="justify-center">
                    <h2 className="font-extrabold text-[#FF9700] text-[28px] md:text-[52px] text-center pb-[20px]">Demo Video</h2>
                    <Col lg={8} md={8} sm={12}>
                        <div className="video-container text-center ">

                            <iframe
                                width="100%"
                                height="420px"
                                src="https://www.youtube.com/embed/your-video-id"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ borderRadius: "7px" }}
                                title="Demo Video"
                            ></iframe>
                        </div>
                        <div className="pt-4 ">
                            <h2 className="text-[#FF9700] font-semibold text-[30px] md:text-[72px] text-left">GET BUSY <span className="text-white text-[28px] md:text-[70px]">CONNECTING</span></h2>
                            <h2 className="text-[#FF9700] font-semibold text-[30px] md:text-[72px] text-left">GET BUSY <span className="text-white text-[28px] md:text-[70px]">CHATTING</span></h2>
                            <h2 className="text-[#FF9700] font-semibold text-[30px] md:text-[72px] text-left">GET BUSY <span className="text-white text-[28px] md:text-[70px]">PITCHING</span></h2>
                            <h2 className="text-[#FF9700] font-semibold text-[30px] md:text-[72px] text-left">GET <span className="text-white text-[28px] md:text-[70px]">BIZI</span></h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Demo;
