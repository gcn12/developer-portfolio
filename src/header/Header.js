import React from 'react'
import { Link } from 'react-router-dom'
import { 
    HeaderContainer,
    About,
    LogoContainer,
    LogoSubtitle,
    LogoTitle, 
    Contact,
} from './Header.styles'

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <LogoTitle>
                    <Link to='/developer-portfolio/' style={{textDecoration: 'none'}}>GARETH NG</Link>
                </LogoTitle>
                <LogoSubtitle>WEB DEVELOPER</LogoSubtitle>
            </LogoContainer>
            <About>
                <Link to='/developer-portfolio/about' style={{textDecoration: 'none'}}>ABOUT</Link>
            </About>
            <Contact><Link to='/developer-portfolio/contact' style={{textDecoration: 'none'}}>CONTACT</Link></Contact>
        </HeaderContainer>
    )
}

export default Header