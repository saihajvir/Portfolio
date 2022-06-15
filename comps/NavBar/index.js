import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import { useTheme } from "../../utils/provider";
import { themes } from "../../utils/variables";
import { comp_themes } from "../../utils/variables";

import ThemeButton from "../ThemeButton";
import ToggleSwitch from "../ToggleSwitch";
import HamburgerMenuIcon from "../HamburgerMenuIcon";

export default function NavBar({
    onHambClick=()=>{}
})
{
    const {theme, setTheme} = useTheme();
    const [isToggled, setIsToggled] = useState(false);

    const Toggle = () => {
        setTheme(theme === 'dark' ? 'default' : 'dark');
        setIsToggled(!isToggled);
        console.log(isToggled, "toggle")
    }
    
    return <>
        <NavCont bgcolor={themes[theme].body}>
            <InnerCont>
            <LeftCont>
              <MenuItem color={comp_themes[theme].text_color} style={{margin: 0}}><Link href="/">saihajvir.com</Link></MenuItem>
            </LeftCont>
            <RightCont>
                <MenuItemCont>                
                    <MenuItem color={comp_themes[theme].text_color}><Link href="/#development">Development</Link></MenuItem>
                    <MenuItem color={comp_themes[theme].text_color}><Link href="/#resume">Resume</Link></MenuItem>
                    <MenuItem color={comp_themes[theme].text_color}><Link href="/#about">About</Link></MenuItem>
                    <MenuItem color={comp_themes[theme].text_color}><Link href="/#contact">Contact</Link></MenuItem>
                    <MenuItem color={comp_themes[theme].text_color}><Link href="/case_study">Case Study</Link></MenuItem>
                    <MenuItem color={comp_themes[theme].text_color}><Link href="https://github.com/saihajvir/">GitHub</Link></MenuItem>
                    <MenuItem color={comp_themes[theme].text_color}><Link href="https://www.linkedin.com/in/saihajvir-gill-2b4271230">LinkedIn</Link></MenuItem>
                    <ToggleSwitch
                        lineBgColor={isToggled === true ? "#EFE6DD": "#1F2933" }
                        onSwitchClick={Toggle}
                    />
                </MenuItemCont>
            <HamburgerMenuIcon onHambClick={onHambClick}/>
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
    transition: 1s;
`
const InnerCont = styled.div`
    display: flex;
    width: 60vw;
    
    @media screen and (max-width: 700px)
    {
        width: 80vw;
    }
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

const MenuItemCont = styled.div`
    display: flex;
    @media screen and (max-width: 1200px)
    {
        display: none;
    }
`
const MenuItem = styled.div`
    white-space: nowrap;
    margin-left: 1vw;
    margin-right: 1vw;
    color: ${props=>props.color};
`
