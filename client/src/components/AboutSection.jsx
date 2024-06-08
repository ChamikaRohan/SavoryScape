import React from 'react';
import styled from '@emotion/styled';
import about from "../assets/about.png"

const AboutContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
  background-color: #ffffff;
  margin: 40px 0;
  border-radius: 10px;
  box-shadow: 10px 10px 10px 10px rgba(0.1, 0.1, 0.1, 0.1);
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #000000;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #000000;
  max-width: 700px;
  margin: 0 auto 20px;
`;

const AboutHighlight = styled.span`
  color: #ff6347;
  font-weight: bold;
`;

const AboutImage = styled.img`
  width: 100%;
  max-width: 1230px;
  height: auto;
  aspect-ratio: 1230 / 850;
  margin: 20px auto;
  border-radius: 10px;
`;

const AboutSection = () => {
    return (
      <AboutContainer>
        <AboutTitle>About SavoryScape</AboutTitle>
        <AboutText>
          Welcome to <AboutHighlight>SavoryScape</AboutHighlight>, where you can create, explore, and search for recipes from around the world.
          We're passionate about sharing delicious recipes from different cuisines. Our mission is to inspire home cooks to explore new cuisines and create memorable meals for their families and friends.
        </AboutText>
        <AboutText>
          At <AboutHighlight>SavoryScape</AboutHighlight>, we believe that cooking should be a joyful and adventurous experience.
          Whether you're a seasoned chef or just starting out, our collection of recipes is designed to help you discover new flavors and techniques.
        </AboutText>
        <AboutImage src={about} alt="About SavoryScape" />
      </AboutContainer>
    );
  }

export default AboutSection;
