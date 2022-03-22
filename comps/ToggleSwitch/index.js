import { useState } from "react"
import styled from "styled-components"
import { useTheme } from "../../utils/provider"
import { comp_themes } from "../../utils/variables"

const SwitchUI = styled.input`
      -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  width: 60px;
  height: 8px;
  background: ${props=>props.lineBgColor};
  border-radius: 5px;
  position: relative;
  outline: 0;
  cursor: pointer;

  :before, :after {
      position: absolute;
      content: "";
      -webkit-transition: all .25s;
      transition: all .25s;
  }

  :before {
    width: 15px;
    height: 15px;
    background: #EFE6DD;
    border: 5px solid ${props=>props.borderColor};
    border-radius: 50%;
    top: 50%;
    left: 0;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
  }

  :after {
    width: 5px;
    height: 5px;
    background: #1F2933;
    border-radius: 50%;
    top: 50%;
    left: 10px;
    -webkit-transform: scale(1) translateY(-50%);
            transform: scale(1) translateY(-50%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }

  :checked:before {
    left: calc(100% - 25px);
  }

  :checked:after {
    left: 75px;
  -webkit-transform: scale(0);
          transform: scale(0);
  }

`

export default function ToggleSwitch({
    onSwitchClick=()=>{},
    lineBgColor
})
{
    const {theme, setTheme} = useTheme();
    const [isToggled, setIsToggled] = useState(false);
    
        return <>
                <SwitchUI
                  lineBgColor={lineBgColor}
                  borderColor={comp_themes[theme].switch_border_color}
                  type="checkbox"
                  onClick={onSwitchClick}
                />
        </>
}