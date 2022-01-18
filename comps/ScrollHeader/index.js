import styled from "styled-components";
import { useTheme } from "../../utils/provider"
import { comp_themes } from "../../utils/variables";

const Text = styled.span`
    font-size: 6vw;
    font-family: 'Circular';
    font-weight: bold;
    font-style: italic;
    color: #00000000;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${props=>props.color};
    margin: 0 10px 0 10px;
`
const TextCont = styled.div`
    display: flex;
    justify-content: space-evenly;
`

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