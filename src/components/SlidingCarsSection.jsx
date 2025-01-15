import React from 'react';
import TitleComponent from './TitleComponent';
import { Col, Row } from 'react-bootstrap';
import TypesCard from './TypesCard';
import { typedData } from '../constants';
import { CarsBanner } from '../utils';

const SlidingCarsSection = () => {
    return (
        <section className="relative min-h-[50vh] md:min-h-[100vh] overflow-hidden mb-[120px]">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-50"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={CarsBanner} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="relative z-10 h-full min-h-[50vh] md:min-h-[100vh] text-center w-full px-[20px] md:px-[40px]">
                <TitleComponent title="Type of races" className="flex items-center justify-end gap-[24px] md:gap-[30px] mt-[52px] mr-[0px] md:mr-[32px]" />
                <Row className='px-[0px] md:px-[40px] flex-gap '>
                    {typedData.map((types) => (
                        <Col key={types.id} lg={6} md={6} sm={12} xs={12}>
                            <TypesCard types={types} />
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
}

export default SlidingCarsSection;
