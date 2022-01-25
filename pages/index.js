import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import ThemeButton from '../comps/ThemeButton';
import ScrollHeader from '../comps/ScrollHeader';
import FrefurnishBox from '../comps/FrefurnishBox';
import EcoutureBox from '../comps/EcoutureBox';
import NavBar from '../comps/NavBar';
import ExperienceText from '../comps/ExperienceText';

import { useTheme } from '../utils/provider';
import { comp_themes } from '../utils/variables';

import {data} from '../data/data';
import CustomCursor from '../comps/CustomCursor';
import DownloadButton from '../comps/DownloadButton';
import ContactForm from '../comps/ContactForm';

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
  min-height: 30vh;
  width: 100%;
  /* background-color: yellow; */
`
const HeadshotCont = styled(motion.div)`
  display: flex;
  /* background-color: green; */
  margin-top: 20px;
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
  font-size: calc(36px + 4vw);
  line-height: 100%;
  text-align: left;
  color: #00000000;
  white-space: pre;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${props=>props.color};
`
const StudentText = styled.span`
  font-family: 'Circular';
  font-weight: bold;
  font-size: calc(16px + 1vw);
  color: ${props=>props.color};
  white-space: pre;
`
const DescriptionText = styled.p`
  font-family: 'Circular';
  font-weight: normal;
  font-size: calc(12px + 0.7vw);
  color: ${props=>props.color};
  white-space: pre;
`
const HeadshotImg = styled.img`
  padding-left: 10px;
  width: 100%;
  min-width: 300px;
  max-width: 500px;
  object-fit: contain;
`
const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 60vw;
  min-width: ${props=>props.minWidth};
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
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 60vh;
  width: 100%;
`
const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  direction: ${props=>props.dir};
`
const SmallHeading = styled.h2`
  font-family: 'Circular';
  margin-bottom: 10px;
  font-style: normal;
  font-weight: bolder;
  font-size: calc(16px + 2vw);
  color: ${props=>props.color};
`
const SmallText = styled.p`
  font-family: 'Circular';
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: calc(12px + 0.5vw);
  color: ${props=>props.color};
`

const ExpCont = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
export default function Home({
  minWidth="none"
}) {

  const {theme, setTheme} = useTheme();

  return <>
    <CustomCursor/>
    <Wrapper>
    <NavBar />
      <IntroCont>
        <IntroTextCont>
          <HeaderText color={comp_themes[theme].text_color}>
            Hello,<br/>I'm Saihaj
          </HeaderText>

          <StudentText color={comp_themes[theme].text_color}>
            I'm a graduating student <br/>from BCIT's Digital Design <br/>and Development Program.
          </StudentText>

          <DescriptionText color={comp_themes[theme].text_color}>
            I’m a Front End Developer who also <br/>has a strong understanding of UX/UI <br/>Design principles.
          </DescriptionText>

        </IntroTextCont>

        <HeadshotCont   
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>  
          <HeadshotImg src='/headshot-round.png'/>
        </HeadshotCont>
      </IntroCont>
    </Wrapper>

    <WorkWrapper bgcolor='none' minWidth="none" id="work">

      <WorkCont>
        <HeadingCont>
          <ScrollHeader scrollText='Work'/>
        </HeadingCont>

        <FrefurnishBox/>
        <EcoutureBox/>

      </WorkCont>
    </WorkWrapper>

    <WorkWrapper bgcolor='none' id="resume">
      <HeadingCont>
        <ScrollHeader scrollText="Résumé"/>
      </HeadingCont>
      <WorkCont>
        <TextCont dir="ltr">
        
        <ExpCont>
          <SmallHeading color={comp_themes[theme].text_color}>
            Work Experience
          </SmallHeading>

            <ExperienceText 
              role_text="Specialist,"
              place_text="Apple Guildford Town Centre"
              date_text="August 2021 — October 2021"
            />
            <br/>
            <ExperienceText 
              role_text="Designated Sales Associate,"
              place_text="Nordstrom Pacific Centre"
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
        </TextCont>

        <TextCont dir="rtl">
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
      </WorkCont>
      <DownloadButton/>
    </WorkWrapper>

    <WorkWrapper id="about">
      <HeadingCont>
        <ScrollHeader scrollText="About"/>
      </HeadingCont>

      <SmallHeading color={comp_themes[theme].text_color}>
        Profile
      </SmallHeading>

      {data.map((data, i)=>
        <SmallText color={comp_themes[theme].text_color} key={i}>
          {data.profile}
        </SmallText>
      )}

      <SmallHeading color={comp_themes[theme].text_color}>
        What can I do?
      </SmallHeading>

      {data.map((data, i)=>
        <SmallText color={comp_themes[theme].text_color} key={i}>
          {data.skill_desc}
        </SmallText>
      )}


        <ContactForm/>
    </WorkWrapper>
  
  </>
}