import styled from "styled-components";
import { useState, useEffect } from "react";
import { useTheme } from "../../utils/provider";
import { themes, comp_themes } from "../../utils/variables";
import Link from "next/link";
import ToggleSwitch from "../ToggleSwitch";

export default function HamburgerMenu({
    onMenuItemClick=()=>{}
})
{
    const {theme, setTheme} = useTheme();

    const [isToggled, setIsToggled] = useState(false);

    const Toggle = () => {
        setTheme(theme === 'dark' ? 'default' : 'dark');
        setIsToggled(!isToggled);
        console.log(isToggled, "toggle")
    }
    

    return<>
        <MenuBackground 
            bgcolor={themes[theme].body}
        >
            <MenuItem>
                <ToggleSwitch
                    lineBgColor={isToggled === true ? "#EFE6DD": "#1F2933" }
                    onSwitchClick={Toggle}
                />
            </MenuItem>
            <MenuItem onClick={onMenuItemClick} color={comp_themes[theme].text_color}><Link href="/#development">Development</Link></MenuItem>
            <MenuItem onClick={onMenuItemClick} color={comp_themes[theme].text_color}><Link href="/#resume">Resume</Link></MenuItem>
            <MenuItem onClick={onMenuItemClick} color={comp_themes[theme].text_color}><Link href="/#about">About</Link></MenuItem>
            <MenuItem onClick={onMenuItemClick} color={comp_themes[theme].text_color}><Link href="/#contact">Contact</Link></MenuItem>
            <MenuItem onClick={onMenuItemClick} color={comp_themes[theme].text_color}><Link href="https://github.com/saihajvir/">GitHub</Link></MenuItem>
            <MenuItem onClick={onMenuItemClick} color={comp_themes[theme].text_color}><Link href="https://www.linkedin.com/in/saihajvir-gill-2b4271230">LinkedIn</Link></MenuItem>
        </MenuBackground>
    </>
}

const MenuBackground = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({bgcolor}) => bgcolor};
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    transition: 1s;
    z-index: 10;

    @media screen and (min-width: 1200px)
    {
        display: none;
    }

`

const MenuItem = styled.div`
    margin: 4%;
    color: ${props=>props.color};
`

