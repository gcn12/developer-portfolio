import React from 'react'
import { Link } from 'react-router-dom'
import './Underline.css'
import { 
    HeaderContainer,
    // About,
    LogoContainer,
    LogoSubtitle,
    LogoTitle, 
    // Contact,
    OptionsContainer,
    Options,
    // Underline,
} from './Header.styles'
 
const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                    <Link to='/developer-portfolio/' style={{textDecoration: 'none'}}>
                        <LogoTitle>GARETH NG</LogoTitle>
                    </Link>
                <LogoSubtitle>WEB DEVELOPER</LogoSubtitle>
            </LogoContainer>
            <OptionsContainer>
                {/* <Underline> */}
                    <Link to='/developer-portfolio/about'><Options className='test'>ABOUT</Options></Link>
                {/* </Underline> */}
                {/* <Underline> */}
                    <Link to='/developer-portfolio/contact'><Options className='test'>CONTACT</Options></Link>
                {/* </Underline> */}
            </OptionsContainer>
        </HeaderContainer>
    )
}

export default Header