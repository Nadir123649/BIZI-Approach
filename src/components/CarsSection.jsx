import React from 'react';
import TitleComponent from './TitleComponent';
import { Col, Row } from 'react-bootstrap';
import MainCard from './MainCard';
import { cardData } from '../constants';

const CarsSection = () => {
    return (
        <section className='px-[40px] py-[100px]'>
            <div className='max-w-[1400px] w-full mx-auto'>
                <TitleComponent title="Type of cares" className="flex items-center justify-start gap-[30px] mt-[0px] ml-[0px]" />
                <Row className='px-[40px] flex-margin'>
                    {cardData.map((card) => (
                        <Col key={card.id} lg={3} md={6} sm={12} xs={12}>
                            <MainCard card={card} />
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
}

export default CarsSection;
