import React from 'react';
import { Col, Row } from 'react-bootstrap';
import TeamCard from './TeamCard';
import { advisorData } from '../constants';
import TitleComponent from './TitleComponent';
import { RightUnion } from '../utils';

const AdvisorsSection = () => {
    return (
        <section className='overflow-hidden px-[20px] md:px-[40px] relative'>
            <img src={RightUnion} alt="left-line" className='w-full absolute top-[0px] left-0' />
            <TitleComponent title="Advisers" />
            <Row className='px-[0px] md:px-[40px] py-[80px] relative z-10'>
                {advisorData.map((team) => (
                    <Col key={team.id} lg={4} md={6} sm={6} xs={6}>
                        <TeamCard team={team} />
                    </Col>
                ))}
            </Row>
        </section>
    );
}

export default AdvisorsSection;
