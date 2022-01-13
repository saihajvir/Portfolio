import Head from 'next/head'
import Link from 'next/link'

import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import ThemeButton from '../comps/ThemeButton'
import { useTheme } from '../utils/provider'
import { comp_themes } from '../utils/variables'

const Wrapper = styled.div`
  display: flex;
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
  font-size: 1vw;
  color: ${props=>props.color};
`
const HeadshotImg = styled.img`
  padding-left: 10px;
  width: 100%;
  object-fit: contain;
`
export default function Home() {

  const {theme, setTheme} = useTheme();

  return <>
      <ThemeButton
        buttonText={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        onSwitchClick={()=>setTheme(theme === 'dark' ? 'default' : 'dark')}
      />
    <Wrapper>
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
            I’m a Front End Developer who also has a strong understanding of UX/UI Design principles.
          </DescriptionText>
        </IntroTextCont>
        <HeadshotCont>  
          <HeadshotImg src='/headshot-round.png'/>
        </HeadshotCont>
      </IntroCont>
    </Wrapper>
  </>
}