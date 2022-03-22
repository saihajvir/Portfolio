import { useRef, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "../../utils/provider";
import { comp_themes } from "../../utils/variables";


export default function CustomCursor() {
    const {theme, setTheme} = useTheme();
    const cursorRef = useRef(null);

    useEffect(() => {
          if (cursorRef.current == null || cursorRef == null)
               return;
          document.addEventListener('mousemove', e => {
               if (cursorRef.current == null)
                    return;
               cursorRef.current.setAttribute("style", "top: " + (e.pageY - 13) + "px; left: " + (e.pageX - 14) + "px;")
          })

          document.addEventListener('click', () => {
               if (cursorRef.current == null)
                     return;
                    cursorRef.current.classList.add("expand");
                         setTimeout(() => {
                              if (cursorRef.current == null)
                                   return;
                                        cursorRef.current.classList.remove("expand");
                         }, 500)
           })
     }, [])

    return (
          <Cursor 
               bgcolor={comp_themes[theme].text_color}
               className='cursor'
               ref={cursorRef}
          />
    )
}

const Cursor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props=>props.bgcolor};
  opacity: 50%;
  position: absolute;
  pointer-events: none;
  z-index: 10000;
`