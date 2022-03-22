import Link from "next/link";
import styled from "styled-components";
import { useTheme } from "../../utils/provider"
import { comp_themes } from "../../utils/variables";
import { motion } from "framer-motion";

const Cont = styled(motion.div)`
    display: flex;
    width: calc(150px + 30%);
    border-radius: 25px;
    background-color: ${props=>props.bgcolor};
    margin: 5px;
    :hover {
        cursor: pointer;
    }
    :after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
    @media (max-width:1400px) {
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
    padding: 10px 20px 0 0;
`
const Image = styled.img`
    width: 130%;
    height: auto;
    object-fit: contain;
`
const Title = styled.span`
    font-family: "Circular";
    font-size: calc(12px + 2vw);
    font-weight: bold;
    font-style: normal;
    text-align: right;
    width: 100%;
    color: ${props=>props.color};
`
const Info = styled.span`
    font-family: "Circular";
    font-size: calc(12px + 0.3vw);
    font-weight: normal;
    text-align: right;
    width: 100%;
    color: ${props=>props.color};
`

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