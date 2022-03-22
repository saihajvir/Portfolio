import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import { useTheme } from "../../utils/provider";
import { themes } from "../../utils/variables";
import { comp_themes } from "../../utils/variables";

import ThemeButton from "../ThemeButton";
import ToggleSwitch from "../ToggleSwitch";

export default function NavBar()
{
    const {theme, setTheme} = useTheme();
    const [isToggled, setIsToggled] = useState(false);

    const Toggle = () => {
        setTheme(theme === 'dark' ? 'default' : 'dark');
        setIsToggled(!isToggled);
    }
    
    return <>
        <NavCont bgcolor={themes[theme].body}>
            <InnerCont>
            <LeftCont>
              <MenuItem color={comp_themes[theme].text_color} style={{margin: 0}}><Link href="/">saihajvir.com</Link></MenuItem>
            </LeftCont>
            <RightCont>
                <MenuItem color={comp_themes[theme].text_color}><Link href="/#development">Development</Link></MenuItem>
                <MenuItem color={comp_themes[theme].text_color}><Link href="/#resume">Resume</Link></MenuItem>
                <MenuItem color={comp_themes[theme].text_color}><Link href="/#about">About</Link></MenuItem>
                <MenuItem color={comp_themes[theme].text_color}><Link href="/#contact">Contact</Link></MenuItem>
                <MenuItem color={comp_themes[theme].text_color}><Link href="https://github.com/saihajvir/">GitHub</Link></MenuItem>
                <MenuItem color={comp_themes[theme].text_color}><Link href="https://www.linkedin.com/in/saihajvir-gill-2b4271230">LinkedIn</Link></MenuItem>
                {/* <ThemeButton
                    buttonText={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    onSwitchClick={()=>setTheme(theme === 'dark' ? 'default' : 'dark')}
                /> */}
                <ToggleSwitch
                    lineBgColor={isToggled === true ? "#1F2933" : "#EFE6DD"}
                    onSwitchClick={Toggle}
                />
            </RightCont>
            </InnerCont>
        </NavCont>
    </>
}

const NavCont = styled.div`
    display: flex;
    width: 100vw;
    height: 60px;
    position: fixed;
    top: 0;
    background-color: ${props=>props.bgcolor};
    font-family: 'Circular';
    z-index: 1000;
    justify-content: center;
`
const InnerCont = styled.div`
    display: flex;
    width: 60vw;
`
const LeftCont = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    color: ${props=>props.color};

`
const RightCont = styled.div`
    display: flex;
    flex: 2;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    color: ${props=>props.color};
`
