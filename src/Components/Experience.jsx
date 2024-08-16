import React from 'react';
import styled from 'styled-components';
import suitcaseIcon from '../Assets/suitcase.png'; // Adjust the path as needed

const Cover = styled.div`
  width: 100%;
  background-color: #000f16;
  margin: 0 auto;
  position: relative;
  border: none;
  h1{
    color: rgb(25, 174, 140);
  width: fit-content;
  border-bottom: 0.2rem solid rgb(25, 174, 140);
  margin: 1rem auto;
  margin-top: 4rem;
}
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const ExperienceList = styled.ul`
  list-style-image: url(${suitcaseIcon});
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media screen and (max-width: 750px) {
    height: fit-content;
  }
`;

const ExperienceItem = styled.li`
  width: 500px;
  margin: 1rem;
  border-left: 1px solid grey;
  padding-left: 1rem;
  color: white;

  h5 {
    width: 90%;
  }

  @media screen and (max-width: 750px) {
    width: auto;
    margin: 0;
    margin-bottom: 2rem;
  }
`;

const ExperienceTitle = styled.h2`
  color: rgb(25, 174, 140);
  font-size: medium;
  @media screen and (max-width: 750px) {
    font-size: 1.2rem;
  }
`;

const ExperienceSubtitle = styled.span`
  font-size: 1rem;
  color: white;
`;

const Experience = () => {
  return (
    <Cover id='edu'>
        <h1>Education & Experience</h1>
      <ExperienceContainer>
        <ExperienceList>
          <ExperienceItem>
            <p>2019-2020</p>
            <ExperienceTitle>
              Matriculation-<ExperienceSubtitle>Sri Ambal Vidhyalaya[CBSE]</ExperienceSubtitle>
            </ExperienceTitle>
            <h5>I completed my Matriculation in 2020 with 88.4%.</h5>
          </ExperienceItem>
          <ExperienceItem>
            <p>2021-2022</p>
            <ExperienceTitle>
              Higher Secondary-<ExperienceSubtitle>Sri Ambal Vidhyalaya[CBSE]</ExperienceSubtitle>
            </ExperienceTitle>
            <h5>I completed my Higher Secondary in 2022 with 88.8%.</h5>
          </ExperienceItem>
          <ExperienceItem>
            <p>2022-2026</p>
            <ExperienceTitle>
              Bachelor's Degree-<ExperienceSubtitle>SRM University</ExperienceSubtitle>
            </ExperienceTitle>
            <h5>
              I am currently pursuing a Bachelor's degree in Computer Science and Engineering, with a CGPA of 9.65.
            </h5>
          </ExperienceItem>
          <ExperienceItem>
            <p>Feb 2024 - Mar 2024</p>
            <ExperienceTitle>
              Web Development Intern-<ExperienceSubtitle>Oasis Infobyte</ExperienceSubtitle>
            </ExperienceTitle>
            <h5>I completed a remote internship in Web Development and Designing.</h5>
          </ExperienceItem>
          <ExperienceItem>
            <p>Feb 2024 - Jul 2024</p>
            <ExperienceTitle>
              Technical Team Member-<ExperienceSubtitle>Techwiz Club, SRM Institute of Science and Technology</ExperienceSubtitle>
            </ExperienceTitle>
            <h5>I contributed to organizing technical events and workshops as a Technical Team Member.</h5>
          </ExperienceItem>
          <ExperienceItem>
            <p>Jul 2024 - Present</p>
            <ExperienceTitle>
              Technical Co-Lead-<ExperienceSubtitle>Techwiz Club, SRM Institute of Science and Technology</ExperienceSubtitle>
            </ExperienceTitle>
            <h5>
              I am currently serving as the Technical Co-Lead, overseeing technical initiatives and team coordination.
            </h5>
          </ExperienceItem>
        </ExperienceList>
      </ExperienceContainer>
    </Cover>
  );
};

export default Experience;
