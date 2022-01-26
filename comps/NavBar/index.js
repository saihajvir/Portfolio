import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import { useTheme } from "../../utils/provider";
import { themes } from "../../utils/variables";
import { comp_themes } from "../../utils/variables";

import ThemeButton from "../ThemeButton";
import ToggleSwitch from "../ToggleSwitch";

const NavCont = styled.div`
    display: flex;
    width: 60vw;
    height: 50px;
    position: fixed;
    top: 0;
    background-color: ${props=>props.bgcolor};
    font-family: 'Circular';
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
            <LeftCont
                color={comp_themes[theme].text_color}
            >
                <Link href="/">saihajvir.com</Link>
            </LeftCont>
            <RightCont>
                <MenuItem color={comp_themes[theme].text_color}><Link href="/#work">Work</Link></MenuItem>
                <MenuItem color={comp_themes[theme].text_color}><Link href="/#resume">Resume</Link></MenuItem>
                <MenuItem color={comp_themes[theme].text_color}><Link href="/#about">About</Link></MenuItem>
                <MenuItem color={comp_themes[theme].text_color}><Link href="/#contact">Contact</Link></MenuItem>
                <MenuItem color={comp_themes[theme].text_color}><Link href="https://github.com/saihajvir/">GitHub</Link></MenuItem>
                {/* <ThemeButton
                    buttonText={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    onSwitchClick={()=>setTheme(theme === 'dark' ? 'default' : 'dark')}
                /> */}
                <ToggleSwitch
                    lineBgColor={isToggled === true ? "#1F2933" : "#EFE6DD"}
                    onSwitchClick={Toggle}
                />
            </RightCont>
        </NavCont>
    </>
}