import React, { Component } from 'react'
import avatar from './8biticon.jpg'
import { Avatar, AboutContainer, Text } from './About.styles'

class About extends Component {

    componentDidMount() {
        this.props.updateIsAboutPage(true)
        this.props.updateIsContactPage(false)
    }

    render() {
        return(
            <AboutContainer>
                <Avatar src={avatar} />
                <Text>
                Gareth Ng is a front-end developer who specializes in React.js. 
                </Text>
            </AboutContainer>
        )
    }
}

export default About