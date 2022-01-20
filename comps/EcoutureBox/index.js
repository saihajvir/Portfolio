import Link from "next/link";
import styled from "styled-components";
import { useTheme } from "../../utils/provider"
import { comp_themes } from "../../utils/variables";

const Cont = styled.div`
    display: flex;
    width: calc(225px + 24%);
    border-radius: 25px;
    background-color: ${props=>props.bgcolor};
    margin: 5px;
    :hover {
        transition: 1s;
        background: linear-gradient(300deg, #51B27E, #3884FF);
        cursor: pointer;
    }
    :after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
`
const ImageCont = styled.div`
    display: flex;
    flex: 1;
`
const InfoCont = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 10px;
`
const Image = styled.img`
    width: 80%;
    height: auto;
    object-fit: contain;
`
const Title = styled.span`
    font-family: "Circular";
    font-size: calc(12px + 2vw);
    font-weight: bold;
    font-style: normal;
    text-align: left;
    width: 100%;
    color: ${props=>props.color};
`
const Info = styled.span`
    font-family: "Circular";
    font-size: calc(12px + 0.3vw);
    font-weight: normal;
    text-align: left;
    width: 100%;
    color: ${props=>props.color};
`

export default function EcoutureBox()
{
    const {theme, setTheme} = useTheme();

    return <>
        <Link href="https://ecouture.ca">
            <Cont
                bgcolor={comp_themes[theme].box_color}
                color={comp_themes[theme].box_text_color}
            >
                <InfoCont>
                    <Title color={comp_themes[theme].box_text_color} >
                        Ecouture
                    </Title>
                    <Info color={comp_themes[theme].box_text_color}>
                        Front End Development <br/>
                        UX/UI Design
                    </Info>
                </InfoCont>
                <ImageCont>
                    <Image src="/ecouture-iphone.png"/>
                </ImageCont>
            </Cont>
        </Link>
    </>
}