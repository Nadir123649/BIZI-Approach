import React from 'react';
import TitleComponent from './TitleComponent';
import { LeftUnion, RightUnion } from '../utils';
import { Col, Row } from 'react-bootstrap';


const RoadmapSection = () => {
    return (
        <section className='px-[20px] md:px-[40px] min-h-screen roadmap-bg relative overflow-hidden'>
            <img src={RightUnion} alt="left-line" className='w-full absolute top-0 right-0' />
            <img src={LeftUnion} alt="left-line" className='w-full absolute bottom-0 left-0' />
            <TitleComponent title="Roadmap" />
            <h1 className='text-[#D2D3D4]  text-[12px] md:text-[36px] font-[400] leading-normal mt-[32px] mb-[40px] ml-[2px] md:ml-[32px]'>
                DSCOFF STORY
            </h1>
            <Row className='row-grap-extra pb-[190px]'>
                <Col lg={4} md={6} sm={6} xs={12}>
                    <h2 className='text-left md:text-right text-[20px] font-[400] leading-normal text-[#D2D3D4]'><span className='text-[#FFCC2A]'>January</span> 2024</h2>
                </Col>

                <Col lg={8} md={6} sm={6} xs={12}>
                    <div className='pl-[0px] md:pl-[62px]'>
                        <h4 className='text-[#D2D3D4] text-[14px] leading-normal font-[400] mb-[14px] mt-[5px]'>
                            Game concept development
                        </h4>
                        <p className=' text-[16px] italic font-[300] leading-normal text-[#D2D3D4 inter max-w-[565px] w-full text-[#D2D3D4]'>
                            The initial vision for the game was outlined, focusing on creating a high-speed,
                            adrenaline-fueled racing experience. Core gameplay mechanics and unique features
                            were brainstormed to stand out in the genre.
                        </p>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12}>
                    <h2 className='text-left md:text-right text-[20px] font-[400] leading-normal text-[#D2D3D4]'><span className='text-[#FFCC2A]'>May</span> 2024</h2>
                </Col>

                <Col lg={8} md={6} sm={6} xs={12}>
                    <div className='pl-[0px] md:pl-[62px]'>
                        <h4 className='text-[#D2D3D4] text-[14px] leading-normal font-[400] mb-[14px] mt-[5px]'>
                            Start of pre-production
                        </h4>
                        <p className=' text-[16px] italic font-[300] leading-normal text-[#D2D3D4 inter max-w-[565px] w-full text-[#D2D3D4]'>
                            The initial vision for the game was outlined, focusing on creating a high-speed, adrenaline-fueled racing experience. Core gameplay mechanics and unique features were brainstormed to stand out in the genre.
                        </p>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12}>
                    <h2 className='text-left md:text-right text-[20px] font-[400] leading-normal text-[#D2D3D4]'><span className='text-[#FFCC2A]'>September</span> 2024</h2>
                </Col>

                <Col lg={8} md={6} sm={6} xs={12}>
                    <div className='pl-[0px] md:pl-[62px]'>
                        <h4 className='text-[#D2D3D4] text-[14px] leading-normal font-[400] mb-[14px] mt-[5px]'>
                            Server prototype
                        </h4>
                        <p className=' text-[16px] italic font-[300] leading-normal text-[#D2D3D4 inter max-w-[565px] w-full text-[#D2D3D4]'>
                            The initial vision for the game was outlined, focusing on creating a high-speed, adrenaline-fueled racing experience. Core gameplay mechanics and unique features were brainstormed to stand out in the genre.
                        </p>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12}>
                    <h2 className='text-left md:text-right text-[20px] font-[400] leading-normal text-[#D2D3D4]'><span className='text-[#FFCC2A]'>NOVEMBER</span> 2024</h2>
                </Col>

                <Col lg={8} md={6} sm={6} xs={12}>
                    <div className='pl-[0px] md:pl-[62px]'>
                        <h4 className='text-[#D2D3D4] text-[14px] leading-normal font-[400] mb-[14px] mt-[5px]'>
                            Scaling game development team
                        </h4>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12}>
                    <h2 className='text-left md:text-right text-[20px] font-[400] leading-normal text-[#D2D3D4]'><span className='text-[#FFCC2A]'>APRIL</span> 2025</h2>
                </Col>

                <Col lg={8} md={6} sm={6} xs={12}>
                    <div className='pl-[0px] md:pl-[62px]'>
                        <h4 className='text-[#D2D3D4] text-[14px] leading-normal font-[400] mb-[14px] mt-[5px]'>
                            Vertical slice
                        </h4>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12}>
                    <h2 className='text-left md:text-right text-[20px] font-[400] leading-normal text-[#D2D3D4]'><span className='text-[#FFCC2A]'>APRIL</span> 2025</h2>
                </Col>

                <Col lg={8} md={6} sm={6} xs={12}>
                    <div className='pl-[0px] md:pl-[62px]'>
                        <h4 className='text-[#D2D3D4] text-[14px] leading-normal font-[400] mb-[14px] mt-[5px]'>
                            Open Alpha 0.1
                        </h4>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12}>
                    <h2 className='text-left md:text-right text-[20px] font-[400] leading-normal text-[#D2D3D4]'><span className='text-[#FFCC2A]'>JUNE</span> 2025</h2>
                </Col>

                <Col lg={8} md={6} sm={6} xs={12}>
                    <div className='pl-[0px] md:pl-[62px]'>
                        <h4 className='text-[#D2D3D4] text-[14px] leading-normal font-[400] mb-[14px] mt-[5px]'>
                            Open Alpha 0.2
                        </h4>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12}>
                    <h2 className='text-left md:text-right text-[20px] font-[400] leading-normal text-[#D2D3D4]'><span className='text-[#FFCC2A]'>FEBRUARY </span> 2025</h2>
                </Col>

                <Col lg={8} md={6} sm={6} xs={12}>
                    <div className='pl-[0px] md:pl-[62px]'>
                        <h4 className='text-[#D2D3D4] text-[14px] leading-normal font-[400] mb-[14px] mt-[5px]'>
                            FULL RELEASE
                        </h4>
                    </div>
                </Col>
            </Row>
        </section>
    );
}

export default RoadmapSection;
