import React from 'react'
import instagram from './instagram.png'
import github from './github.png'
import './Footer.css'
import { Instagram, 
    Github, 
    FooterContainer, 
    FooterDiv,
} from './Footer.styles'


const Footer = () => {
    return(
        <FooterContainer>
            <FooterDiv>
                <a href="https://www.github.com/gcn12">
                    <Github src={github} alt='github logo'/>
                </a>
                <a href="https://www.instagram.com/gareth.ng">
                    <Instagram src={instagram} alt='instagram logo' />
                </a>
            </FooterDiv>
        </FooterContainer>
    )
}

export default Footer