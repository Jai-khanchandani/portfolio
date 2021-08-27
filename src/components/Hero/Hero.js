import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Porfolio
      </SectionTitle>
      <SectionText>
        Hello, I am Jai I quickly pickup things by implementing and understanding complex architectures. <br /> you can know more about me here.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/jai-khanchandani-572b71156/'} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;