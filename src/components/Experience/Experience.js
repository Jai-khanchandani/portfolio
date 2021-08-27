import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ExperienceStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { experience } from '../../constants/constants';



const Experience = () => (
  <Section nopadding id="experience" >  
    <SectionDivider />
    <SectionTitle main>Experience</SectionTitle>
    <GridContainer>
      {experience.map(({ id, image, title, description, tags, source, visit }) =>  (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr  />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
              <br />
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              )
              )}
            </TagList>
          </div>
          {/* <UtilityList>
            <ExternalLinks href={visit}>Web-Site</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>

          </UtilityList> */}
        </BlogCard>
      ))}
    </GridContainer>

  </Section>
);

export default Experience;