import styled from "styled-components";
import { useTheme } from "../../utils/provider"
import { comp_themes } from "../../utils/variables";

const Button = styled.button`
    width: 100px;
    height: 30px;
    background-color: ${props=>props.bgcolor};
    color: ${props=>props.color};
    border-radius: 10px;
    border: none;

`

export default function ThemeButton({
    buttonText="default",
    onSwitchClick=()=>{}
})
{
    const {theme, setTheme} = useTheme();

    return <>
        <Button
            onClick={onSwitchClick}
            bgcolor={comp_themes[theme].button_bg}
            color={comp_themes[theme].button_text_color}
        >
            {buttonText}
        </Button>
    </>
}