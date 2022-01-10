import Head from 'next/head'
import Link from 'next/link'

import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 60vw;
  margin: 0 auto;
  background-color: aliceblue;
`
const Header = styled.p`
  font-family: Circular;
  font-size: 72px;
`
export default function Home() {
  return <>
    <Wrapper>
      <Header>
        Circular Test
      </Header>
    </Wrapper>
  </>
}