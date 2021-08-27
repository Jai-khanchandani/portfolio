import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { certificate: 'React.js', text: 'Front-end web development with react (Certification Id: FZ4ZVBJT2V74)'},
  { certificate: 'AWS', text: 'AWS Fundamentals by Amazon (Certification Id: FZ4ZVBJT2V74)', },
  { certificate: 'Django', text: 'Certified Django Developer by Technoglobe', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Certifications</SectionTitle>
    <Boxes >
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.certificate}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
