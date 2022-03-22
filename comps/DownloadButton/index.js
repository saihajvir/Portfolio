import styled from "styled-components";
import { useTheme } from "../../utils/provider";
import { comp_themes } from "../../utils/variables";

import { motion } from "framer-motion";

export default function DownloadButton()
{
    const {theme, setTheme} = useTheme();

    return <>
        <a href="/resume.pdf" download>
            <ButtonCont
                bordercolor={comp_themes[theme].border_color}
                color={comp_themes[theme].border_color}

                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                whileHover={{
                    scale: 1.1
                }}
                whileTap={{ scale: 0.9 }}
            >
                Download Resume
            </ButtonCont>
        </a>
    </>
}

const ButtonCont = styled(motion.button)`
    width: 60vw;
    height: 10vh;
    border: ${props=>props.bordercolor} solid 3px;
    color: ${props=>props.color};
    border-radius: 15px;
    max-width: 1000px;
    background-color: #00000000;
    font-family: 'Circular';
    font-size: 16px;
    :hover {
        cursor: pointer;
    }
`
