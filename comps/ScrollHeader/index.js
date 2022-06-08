import styled from "styled-components";
import { useTheme } from "../../utils/provider"
import { comp_themes } from "../../utils/variables";

export default function ScrollHeader({
    scrollText="default"
})
{
    const {theme, setTheme} = useTheme();

    return <>
        <TextCont>
            <Text color={comp_themes[theme].text_color}>
                {scrollText}
            </Text>
        </TextCont>
    </>
}


const Text = styled.span`
    font-size: 100px;
    font-family: 'Circular';
    font-weight: bold;
    font-style: italic;
    color: #00000000;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${props=>props.color};
    margin: 0 10px 0 10px;

    @media screen and (max-width: 980px)
    {
        font-size: calc(48px + 2vw);
    }
`
const TextCont = styled.div`
    display: flex;
    justify-content: space-evenly;
`
