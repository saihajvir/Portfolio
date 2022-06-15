import ScrollHeader from '@/comps/ScrollHeader';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '@/utils/provider';

import { themes, comp_themes } from '@/utils/variables';
import { data } from '@/data/data';

export default function CaseStudy({
})
{
    const {theme, setTheme} = useTheme();

    return <>
        <Wrapper>
            <HeadingWrapper>
                <ScrollHeader scrollText='Case Study 01'/>
                <FrefurnishText color={comp_themes[theme].text_color}>
                    Frefurnish
                </FrefurnishText>
            </HeadingWrapper>
            <ContentCont>
                <HorizCont>
                    <HalfCont>
                        <CodeHeading color={comp_themes[theme].text_color}>
                            &lt;Ideation&gt; 
                        </CodeHeading>
                            <TextContent color={comp_themes[theme].text_color}>
                                {data.ideation}
                            </TextContent>
                        <CodeHeading color={comp_themes[theme].text_color}>
                            &lt;/Ideation&gt; 
                        </CodeHeading>
                    </HalfCont>
                    <HalfCont>
                        <img src='/case_study/ideation.png' width='100%'/>
                    </HalfCont>
                </HorizCont>

                <HorizCont>
                    <HalfCont>
                        <img src='/case_study/prototyping.png' width='100%'/>
                    </HalfCont>
                    <HalfCont>
                        <CodeHeading color={comp_themes[theme].text_color}>
                            &lt;Prototyping&gt; 
                        </CodeHeading>
                            <TextContent color={comp_themes[theme].text_color}>
                                {data.prototyping}
                            </TextContent>
                        <CodeHeading color={comp_themes[theme].text_color}>
                            &lt;/Prototyping&gt; 
                        </CodeHeading>
                    </HalfCont>
                </HorizCont>

                <HorizCont>
                    <HalfCont>
                        <CodeHeading color={comp_themes[theme].text_color}>
                            &lt;Development&gt; 
                        </CodeHeading>
                            <TextContent color={comp_themes[theme].text_color}>
                                {data.development}
                            </TextContent>
                        <CodeHeading color={comp_themes[theme].text_color}>
                            &lt;/Development&gt; 
                        </CodeHeading>
                    </HalfCont>
                    <HalfCont>
                        <img src='/frefurnish-iphone.png' width='80%'/>
                    </HalfCont>
                </HorizCont>

                <HorizCont>
                    <HalfCont>
                        <img src='/code-debugging.png' width='100%' style={{borderRadius:10}}/>
                    </HalfCont>
                    <HalfCont>
                        <CodeHeading color={comp_themes[theme].text_color}>
                            &lt;Debugging&gt; 
                        </CodeHeading>
                            <TextContent color={comp_themes[theme].text_color}>
                                {data.debugging}
                            </TextContent>
                        <CodeHeading color={comp_themes[theme].text_color}>
                            &lt;/Debugging&gt; 
                        </CodeHeading>
                    </HalfCont>
                </HorizCont>
            </ContentCont>
        </Wrapper>
    </>
}
const CodeHeading = styled.h1`
    font-family: "Circular", Arial, Helvetica, sans-serif;
    font-size: 24px;
    font-weight: normal;
    align-self: start;
    color: ${({color}) => color};
`

const TextContent = styled.p`
    font-family: "Circular", Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: ${({color}) => color};
    white-space: pre-line;
    padding:0 0 0 20px;
`
const HalfCont = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: ${({bgcolor}) => bgcolor};
    justify-content: center;
    align-items: center;
    padding: 20px;
`
const HorizCont = styled.div`
    display: flex;
    flex: 1;
    background-color: ${({bgColor}) => bgColor};
`
const ContentCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* height: 2000px; */
`

const FrefurnishText = styled.h2`
    font-family: "Circular", Arial, Helvetica, sans-serif;
    font-size: 64px;
    font-weight: bold;
    color: ${({color}) => color};
    margin: 0;
    padding: 0;
    text-align: center;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  width: 60vw;
  max-width: 1000px;
  margin: 0 auto;
  background-color: ${props=>props.bg};
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px)
  {
    width: 80vw;
  }
`

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  max-width: 1000px;
  width: 60vw;
  min-width: ${props=>props.minWidth};
  margin: 0 auto;
  background-color: ${props=>props.bgcolor};

  @media screen and (max-width: 700px)
  {
    width: 80vw;
  }
`