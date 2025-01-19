import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../assets/css/index.css";
import { ArrowImg } from "../utils";

const Networking = () => {
    return (
        <section className="py-10 md:py-20 bg-[#F2F4F7]">
            <Container>
                <Row className="flex items-center justify-center pb-20 md:pb-20 ">
                    <h2 className="font-extrabold text-[#083C87] text-[28px] md:text-[52px] text-center pb-[20px]">ONE-STOP NETWORKING SOLUTION</h2>
                    <p className="current-item pb-32 font-medium text-[16px] md:text-[18px] text-center">Current social platforms in the market lack the all-in-one capabilities that can integrate profile matching, business activities / events engagement and a full-fledged instant messaging tool under one app.  BiziChat will offer an one-stop business networking and communication solution.</p>
                    <div className="relative flex justify-center items-center">
                        <img src={ArrowImg} alt="arrow img" className="arrow-img" width={524} />
                        {/* Positioning Paragraphs Around the Image */}
                        <p className="arrow-one absolute text-[14px] md:text-[20px] text-[#083C87] font-bold top-[-60%] left-[2%] md:top-[-12%] md:left-[7%] text-left md:text-right">Matching and connecting strangers based on personal attributes and business objectives</p>
                        <p className="arrow-two absolute text-[14px] md:text-[20px] text-[#083C87] font-bold bottom-[0%] left-[2%] md:bottom-[10%] md:left-[7%] text-left md:text-right">Proactive engagement of business ideas/ activities/events</p>
                        <p className="arrow-three absolute text-[14px] md:text-[20px] text-[#083C87] font-bold bottom-[-50%] left-[30%] md:bottom-[-30%] md:left-[40%] text-center ">One-to-One instant messaging with full chat app capabilities</p>
                        <p className="arrow-four absolute text-[14px] md:text-[20px] text-[#083C87] font-bold right-[0%] bottom-[-4%] md:bottom-[15%] md:right-[7%] text-left">One phone book solution; existing friends plus new connections</p>
                        <p className="arrow-five absolute text-[14px] md:text-[20px] text-[#083C87] font-bold top-[-40%] right-[2%] md:top-[-12%] md:right-[7%] text-center">Personalised feeds on business interests / ideas</p>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default Networking;
