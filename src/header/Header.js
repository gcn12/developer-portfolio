import React from 'react'
import { Link } from 'react-router-dom'
import './Underline.css'
import { 
    LogoSubtitle,
    LogoTitle, 
    Options,
    OptionsContainer,
    UL,
} from './Header.styles'
 
const Header = (props) => {
    return (
        <UL id='header-container'>
            <div className='flex'> 
                <li>
                    <Link to='/developer-portfolio/' style={{textDecoration: 'none'}}>
                        <LogoTitle>GARETH NG</LogoTitle>
                    </Link>
                </li>
                <OptionsContainer id='options-container'>
                    <li>
                    <Link to='/developer-portfolio/about'>
                        <Options className={`underline ${props.isAboutPage ? 'underline2' : null}`}>ABOUT</Options>
                        </Link>
                    </li>
                    <li>
                        <Link to='/developer-portfolio/contact'><Options className={`underline ${props.isContactPage ? 'underline2' : null}`}>CONTACT</Options></Link>
                    </li>
                    <li>
                        <Link to='/developer-portfolio/cv'><Options className={`underline ${props.isCV ? 'underline2' : null}`}>CV</Options></Link>
                    </li>
                </OptionsContainer>
            </div>
            <LogoSubtitle>WEB DEVELOPER</LogoSubtitle>
        </UL>
    )
}

export default Header