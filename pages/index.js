import Head from 'next/head'
import Link from 'next/link'

import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import ThemeButton from '../comps/ThemeButton'
import { useTheme } from '../utils/provider'

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
  height: 40vh;
  width: 100%;
  /* background-color: yellow; */
`
const HeadshotCont = styled.div`
  display: flex;
  /* background-color: green; */
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
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #433B73;
`
const StudentText = styled.span`
  font-family: 'Circular';
  font-weight: bold;
  font-size: 2.3vw;
  color: #433B73;
`
const HeadshotImg = styled.img`
  padding-left: 10px;
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
          <HeaderText>
            Hello,<br/>I'm Saihaj
          </HeaderText>
          <StudentText>
            I'm a graduating student from BCIT's Digital Design and Development Program.
          </StudentText>
        </IntroTextCont>
        <HeadshotCont>  
          <HeadshotImg src='/headshot-round.png'/>
        </HeadshotCont>
      </IntroCont>
    </Wrapper>
  </>
}