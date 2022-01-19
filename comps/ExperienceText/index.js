import styled from "styled-components";
import { useTheme } from "../../utils/provider"
import { themes } from "../../utils/variables";
import { comp_themes } from "../../utils/variables";

const ExpCont = styled.div`
`
const ExpText = styled.span`
  font-family: 'Circular';
  font-style: ${props=>props.fontStyle};
  font-weight: ${props=>props.fontWeight};
  font-size: 1.2vw;
  color: ${props=>props.color};
`
export default function ExperienceText({
    fontWeight="normal",
    role_text="default",
    place_text="Place Text Here",
    date_text="Default Dates"
})
{
    const {theme, setTheme} = useTheme();

    return <>
        <ExpCont>
            <ExpText fontStyle="italic" color={comp_themes[theme].text_color}>
                {role_text} &nbsp;
            </ExpText>
            <ExpText fontStyle="normal" color={comp_themes[theme].text_color}>
                {place_text}
            </ExpText>
                <br/>
            <ExpText fontStyle="italic" fontWeight="300" color={comp_themes[theme].text_color}>
                {date_text}
            </ExpText>
        </ExpCont>
    </>
}