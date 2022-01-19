import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Home.module.css';
import styled from 'styled-components';


import ThemeButton from '../comps/ThemeButton';
import ScrollHeader from '../comps/ScrollHeader';
import FrefurnishBox from '../comps/FrefurnishBox';
import EcoutureBox from '../comps/EcoutureBox';
import NavBar from '../comps/NavBar';
import ExperienceText from '../comps/ExperienceText';


import { useTheme } from '../utils/provider';
import { comp_themes } from '../utils/variables';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 60vw;
  margin: 0 auto;
  background-color: ${props=>props.bg};
  justify-content: center;
  align-items: center;
`
const IntroCont = styled.div`
  display: flex;
  flex-direction: row;
  height: 50vh;
  width: 100%;
  /* background-color: yellow; */
`
const HeadshotCont = styled.div`
  display: flex;
  /* background-color: green; */
  align-items: flex-start;
  flex: 1;
`
const IntroTextCont = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: brown; */
  flex: 1;
`
const HeaderText = styled.span`
  font-family: 'Circular';
  font-weight: bold;
  font-style: italic;
  font-size: 6.5vw;
  text-align: right;
  color: #00000000;
  white-space: pre;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${props=>props.color};
`
const StudentText = styled.span`
  font-family: 'Circular';
  font-weight: bold;
  font-size: 2.3vw;
  color: ${props=>props.color};
  white-space: pre;
`
const DescriptionText = styled.p`
  font-family: 'Circular';
  font-weight: normal;
  font-size: 1.8vw;
  color: ${props=>props.color};
  white-space: pre;
`
const HeadshotImg = styled.img`
  padding-left: 10px;
  width: 100%;
  object-fit: contain;
`

const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 60vw;
  margin: 0 auto;
  background-color: ${props=>props.bgcolor};
`
const HeadingCont = styled.div`
  display: flex;
  align-items: flex-start;
  height: auto;
  width: 100vw;
`
const WorkCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 60vh;
  width: 100%;
`
const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const SmallHeading = styled.h2`
  font-family: 'Circular';
  margin-bottom: 10px;
  font-style: normal;
  font-weight: bolder;
  font-size: 3vw;
  color: ${props=>props.color};
`
const SmallText = styled.p`
  font-family: 'Circular';
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2vw;
  color: ${props=>props.color};
`

const ExpCont = styled.div`
  display: flex;
  flex-direction: column;
`
export default function Home() {

  const {theme, setTheme} = useTheme();

  return <>
    <Wrapper>
    <NavBar>
      
    </NavBar>
      <IntroCont>
        <IntroTextCont>
          <HeaderText color={comp_themes[theme].text_color}>
            Hello,<br/>I'm Saihaj
          </HeaderText>
          <StudentText 
            color={comp_themes[theme].text_color}
          >
            I'm a graduating student <br/>from BCIT's Digital Design <br/>and Development Program.
          </StudentText>

          <DescriptionText color={comp_themes[theme].text_color}>
            I’m a Front End Developer who also <br/>has a strong understanding of UX/UI <br/>Design principles.
          </DescriptionText>
        </IntroTextCont>
        <HeadshotCont>  
          <HeadshotImg src='/headshot-round.png'/>
        </HeadshotCont>
      </IntroCont>

    </Wrapper>

    <WorkWrapper bgcolor='none'>

      <WorkCont>
        <HeadingCont>
          <ScrollHeader scrollText='Work'/>
        </HeadingCont>

        <FrefurnishBox/>
        <EcoutureBox/>

      </WorkCont>
    </WorkWrapper>

    <WorkWrapper bgcolor='none'>
      <HeadingCont>
        <ScrollHeader scrollText="About Me"/>
      </HeadingCont>
      <TextCont>
      
      <ExpCont>
        <SmallHeading color={comp_themes[theme].text_color}>
          Profile
        </SmallHeading>

          <ExperienceText 
            role_text="Specialist,"
            place_text="Apple Guildford Town Centre"
            date_text="August 2021 — October 2021"
          />

          <ExperienceText 
            role_text="Designated Sales Associate,"
            place_text="Nordstrom PC"
            date_text="March 2017 — August 2020"
          />
      </ExpCont>
      <ExpCont>
        <SmallHeading color={comp_themes[theme].text_color}>
          Education
        </SmallHeading>

          <ExperienceText
            role_text="Digital Design and Development,"
            place_text="BCIT"
            date_text="September 2020 — Present"
          />
      </ExpCont>
      <ExpCont>
        <SmallHeading color={comp_themes[theme].text_color}>
          Skills
        </SmallHeading>
          <SmallText color={comp_themes[theme].text_color}>
            Front End Development <br/>
            Databasing <br/>
            UX/UI Design <br/>
            Wireframing <br/>
            Prototyping
          </SmallText>
      </ExpCont>

      <ExpCont>
        <SmallHeading color={comp_themes[theme].text_color}>
          Tools
        </SmallHeading>
          <SmallText color={comp_themes[theme].text_color}>
            HTML, CSS, JavaScript <br/>
            React, Next.JS, React-Native <br/>
            Photoshop <br/>
            Illustrator <br/>
            Figma <br/>
            After Effects <br/>
            Visual Studio Code
          </SmallText>
      </ExpCont>
      </TextCont>
      <TextCont>

      </TextCont>

    </WorkWrapper>

  
  </>
}