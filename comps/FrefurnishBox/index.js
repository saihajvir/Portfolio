import Link from "next/link";
import styled from "styled-components";
import { useTheme } from "../../utils/provider"
import { comp_themes } from "../../utils/variables";

const Cont = styled.div`
    display: flex;
    width: 48%;
    border-radius: 25px;
    background-color: ${props=>props.bgcolor};
    margin: 5px;
    :hover {
        transition: 1s;
        background: linear-gradient(300deg, #EEAB93, #92A8F8);
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
    flex: 1.5;
`
const InfoCont = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 10px;
`
const Image = styled.img`
    width: 90%;
    height: auto;
    object-fit: contain;
`
const Title = styled.span`
    font-family: "Circular";
    font-size: 2.5vw;
    font-weight: bold;
    font-style: normal;
    text-align: right;
    width: 100%;
    color: ${props=>props.color};
`
const Info = styled.span`
    font-family: "Circular";
    font-size: 1vw;
    font-weight: normal;
    text-align: right;
    width: 100%;
    color: ${props=>props.color};
`

export default function FrefurnishBox()
{
    const {theme, setTheme} = useTheme();

    return <>
        <Link href="https://www.github.com/saihajvir/frefurnish">
            <Cont
                bgcolor={comp_themes[theme].box_color}
                color={comp_themes[theme].box_text_color}
            >
                <ImageCont>
                    <Image src="/frefurnish-iphone.png"/>
                </ImageCont>
                <InfoCont>
                    <Title color={comp_themes[theme].box_text_color} >
                        Frefurnish
                    </Title>
                    <Info color={comp_themes[theme].box_text_color}>
                        Front End Development <br/>
                        Back End Development <br/>
                        UX/UI Design
                    </Info>
                </InfoCont>
            </Cont>
        </Link>
    </>
}