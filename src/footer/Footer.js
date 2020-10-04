import React from 'react'
import instagram from './instagram.png'
import github from './github.png'
import { Instagram, Github, FooterContainer} from './Footer.styles'


const Footer = () => {
    return(
        <FooterContainer>
            <a href="https://www.instagram.com/gareth.ng">
                <Instagram src={instagram} alt='instagram logo' />
            </a>
            <a href="https://www.github.com/gcn12">
                <Github src={github} alt='github logo'/>
            </a>
        </FooterContainer>
    )
}

export default Footer