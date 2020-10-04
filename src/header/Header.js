import React from 'react'
import { 
    HeaderContainer,
    About,
    Logo, 
    Contact 
} from './Header.styles'

const Header = () => {
    return (
        <HeaderContainer>
            <Logo>Gareth Ng</Logo>
            <About>About</About>
            <Contact>Contact</Contact>
        </HeaderContainer>
    )
}

export default Header