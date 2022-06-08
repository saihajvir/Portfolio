import Link from "next/link";
import styled from "styled-components";
import { useTheme } from "../../utils/provider"
import { comp_themes } from "../../utils/variables";
import { motion } from "framer-motion";


export default function FrefurnishBox({
    onClick=()=>{}
})
{
    const {theme, setTheme} = useTheme();

    return <>
        <Cont
            bgcolor={comp_themes[theme].box_color}
            color={comp_themes[theme].box_text_color}
            whileHover={{ scale: 1.05, background: "linear-gradient(300deg, #EEAB93, #92A8F8)" }}
            whileTap={{ scale: 0.9 }}
            onClick={onClick}
        >
            <ImageCont>
                <Image src="/frefurnish-iphone.png" />
            </ImageCont>
            <InfoCont>
                <Title color={comp_themes[theme].box_text_color} >
                    Frefurnish
                </Title>
                <Info color={comp_themes[theme].box_text_color}>
                    Lead Developer <br />
                    Front End Development <br />
                    Back End Development <br />
                    UX/UI Design
                </Info>
            </InfoCont>
        </Cont>
    </>
}


const Cont = styled(motion.div)`
    display: flex;
    width: 450px;
    height: 450px;
    border-radius: 25px;
    background-color: ${props=>props.bgcolor};
    margin: 5px;
    position: relative;
    :hover {
        cursor: pointer;
    }
    @media (max-width:1540px) {
        width: 100%;
        height: 40vh;
        padding: 10px;
    }
    @media screen and (max-width: 980px)
    {
        justify-content: center;
        align-items: center;
    }
`
const ImageCont = styled.div`
    display: flex;
    flex: 1;
    @media screen and (max-width: 980px)
    {
        display: none;
    }
`
const InfoCont = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 10px 20px 0 0;
    position: absolute;
    right: 0;
    @media screen and (max-width: 980px)
    {
        padding: 0;
        position: relative;
    }
`
const Image = styled.img`
    width: 280px;
    height: auto;
    object-fit: contain;
    left: -10px;
    position: relative;
    @media screen and (max-width: 980px)
    {
        display: none;
    }
`
const Title = styled.span`
    font-family: "Circular";
    font-size: 48px;
    font-weight: bold;
    font-style: normal;
    text-align: right;
    width: 100%;
    color: ${props=>props.color};
    @media screen and (max-width: 980px)
    {
        text-align: center;
    }
`
const Info = styled.span`
    font-family: "Circular";
    font-size: 16px;
    font-weight: normal;
    text-align: right;
    width: 100%;
    color: ${props=>props.color};
    @media screen and (max-width: 980px)
    {
        text-align: center;
    }
`

