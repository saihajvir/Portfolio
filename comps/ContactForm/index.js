import emailjs from "@emailjs/browser"
import { useRef } from "react";
import styled from "styled-components";
import React from "react";
import { useTheme } from "../../utils/provider"
import { comp_themes } from "../../utils/variables";
import { motion } from "framer-motion";


export default function ContactForm()
{
    const {theme, setTheme} = useTheme();
    const form = useRef(); 
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_besa9qc', 'template_7k4kdhr', form.current, 'user_MKhTzlM2pre8cQihbE1sL')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }

    return <>

            <FormCont onSubmit={sendEmail} ref={form}>
                <FormInput 
                    bordercolor={comp_themes[theme].border_color}
                    color={comp_themes[theme].text_color}

                    type="text"
                    placeholder="Your Name"
                    name="name"
                />
                <FormInput
                    bordercolor={comp_themes[theme].border_color}
                    color={comp_themes[theme].text_color}
                    
                    type="email"
                    placeholder="Your Email"
                    name="email"
                />
                <FormInput
                    bordercolor={comp_themes[theme].border_color}
                    color={comp_themes[theme].text_color}
                    
                    type="text"
                    placeholder="Subject"
                    name="subject"
                />
                <FormText 
                    bordercolor={comp_themes[theme].border_color}
                    color={comp_themes[theme].text_color}

                    placeholder="Message"
                    name="message"
                />
                <FormButton 
                    bordercolor={comp_themes[theme].border_color}
                    color={comp_themes[theme].text_color}

                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}
                    whileHover={{scale: 1.1}}
                    whileTap={{ scale: 0.9 }}

                    type="submit" 
                    value="Send!"/>
            </FormCont>

    </>
}

//STYLED COMPONENTS
const FormCont = styled.form`
    display: flex;
    flex-direction: column;
`
const FormInput = styled.input`
    height: 40px;
    width: 60vw;
    border-radius: 10px;
    background-color: #00000000;
    border: ${props=>props.bordercolor} solid 3px;
    color: ${props=>props.color};
    padding-left: 10px;
    margin: 10px 0 10px 0;
    font-family: 'Circular';
    max-width:1000px ;

    @media screen and (max-width: 700px)
    {
        width: 80vw;
    }
`
const FormButton = styled(motion.input)`
    width: 60vw;
    height: 10vh;
    border: ${props=>props.bordercolor} solid 3px;
    color: ${props=>props.color};
    border-radius: 15px;
    background-color: #00000000;
    margin: 10px 0 10px 0;
    font-family: 'Circular';
    max-width:1000px ;
    font-size: 16px;
    :hover {
        cursor: pointer;
    }

    @media screen and (max-width: 700px)
    {
        width: 80vw;
    }
`
const FormText = styled.textarea`
    width: 60vw;
    height: 100px;
    padding-top: 10px;
    padding-left: 10px;
    border-radius: 15px;
    background-color: #00000000;
    margin: 10px 0 10px 0;
    font-family: 'Circular';
    border: ${props=>props.bordercolor} solid 3px;
    color: ${props=>props.color};
    max-width:1000px ;

    @media screen and (max-width: 700px)
    {
        width: 80vw;
    }

`
