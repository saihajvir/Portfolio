import Link from "next/link";
import styled from "styled-components";
import { useTheme } from "../../utils/provider";
import { themes } from "../../utils/variables";
import { comp_themes } from "../../utils/variables";

import ThemeButton from "../ThemeButton";

const NavCont = styled.div`
    display: flex;
    width: 60vw;
    height: 50px;
    position: fixed;
    top: 0;
    background-color: ${props=>props.bgcolor};
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

    return <>
        <NavCont bgcolor={themes[theme].body}>
            <LeftCont
                color={comp_themes[theme].text_color}
            >
                saihaj.dev
            </LeftCont>
            <RightCont>
                <MenuItem color={comp_themes[theme].text_color}><Link href="">Work</Link></MenuItem>
                <MenuItem color={comp_themes[theme].text_color}><Link href="">Resume</Link></MenuItem>
                <MenuItem color={comp_themes[theme].text_color}><Link href="">About</Link></MenuItem>
                <MenuItem color={comp_themes[theme].text_color}><Link href="">Contact</Link></MenuItem>
                <ThemeButton
                    buttonText={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    onSwitchClick={()=>setTheme(theme === 'dark' ? 'default' : 'dark')}
                />
            </RightCont>
        </NavCont>
    </>
}