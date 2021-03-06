import React, { Component } from 'react'
// import avatar from './8biticon.jpg'
import { 
    // Avatar, 
    AboutContainer, 
    Text, 
    FilmLink, 
} from './About.styles'

class About extends Component {

    componentDidMount() {
        this.props.updateIsAboutPage(true)
        this.props.updateIsContactPage(false)
        this.props.updateIsCV(false)
    }

    render() {
        return(
            <AboutContainer>
                {/* <Avatar src={avatar} /> */}
                <Text>
                    <p>Gareth Ng is a front-end developer who specializes in React.js.</p>
                    <p>He previously worked in the film industry as a camera assistant and <FilmLink href='https://gcn12.github.io/film-portfolio/films'>cinematographer</FilmLink>.</p>
                </Text>
            </AboutContainer>
        )
    }
}

export default About