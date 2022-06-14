import styled from "styled-components";
import { useState, useEffect } from "react";
import { useTheme } from "../../utils/provider";
import { themes, comp_themes } from "../../utils/variables";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";

export default function HamburgerMenuIcon({
    onHambClick=()=>{}
}) {
    const {theme, setTheme} = useTheme();


    return <>
        <HamburgerIcon 
            onClick={onHambClick}
        >
            <HiMenu 
                style={{
                    width:25, 
                    height:25, 
                    color: comp_themes[theme].text_color
                }}
            />
        </HamburgerIcon>

    </>
}


const HamburgerIcon = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    :hover {
        cursor: pointer;
    }

    @media screen and (min-width: 1200px) 
    {
        display: none;
    }
`

