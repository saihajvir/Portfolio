import Link from "next/link";
import styled from "styled-components";
import { useTheme } from "../../utils/provider"
import { comp_themes } from "../../utils/variables";
import { motion } from "framer-motion";

export default function EcoutureBox({
    onClick=()=>{}
})
{
    const {theme, setTheme} = useTheme();

    return <>
        <Cont
            bgcolor={comp_themes[theme].box_color}
            color={comp_themes[theme].box_text_color}
            whileHover={{ scale: 1.05, background: "linear-gradient(300deg, #51B27E, #3884FF)" }}
            whileTap={{ scale: 0.9 }}
            onClick={onClick}
        >
            <InfoCont>
                <Title color={comp_themes[theme].box_text_color} >
                    Ecouture
                </Title>
                <Info color={comp_themes[theme].box_text_color}>
                    Front End Development <br />
                    UX/UI Design
                </Info>
            </InfoCont>
            <ImageCont>
                <Image src="/ecouture-iphone.png" />
            </ImageCont>
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
`
const ImageCont = styled.div`
    display: flex;
    flex: 1;
`
const InfoCont = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 10px 0 0 20px;
    position: relative;
    left: 0;
`
const Image = styled.img`
    width: 180px;
    height: auto;
    object-fit: contain;
    margin: 30px 0 30px 0;
`
const Title = styled.span`
    font-family: "Circular";
    font-size: 48px;
    font-weight: bold;
    font-style: normal;
    text-align: left;
    width: 100%;
    color: ${props=>props.color};
`
const Info = styled.span`
    font-family: "Circular";
    font-size: 16px;
    font-weight: normal;
    text-align: left;
    width: 100%;
    color: ${props=>props.color};
`
