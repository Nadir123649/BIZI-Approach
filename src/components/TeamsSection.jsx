import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { teamsData } from '../constants';
import TeamCard from './TeamCard';
import { TeamBg } from '../utils';

const TeamsSection = () => {
  return (
    <section className='relative overflow-hidden'>
      <img src={TeamBg} alt="teams-bg" className="absolute top-0 right-0 -z-5" />
      <Row className='px-[40px] py-[80px] row-gap-px relative z-10'>
        {teamsData.map((team) => (
          <Col key={team.id} lg={4} md={6} sm={6} xs={6}>
            <TeamCard team={team} />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default TeamsSection;
