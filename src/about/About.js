import React from 'react'
import avatar from './8biticon.jpg'
import { Avatar, AboutContainer, Text } from './About.styles'

const About = () => {
    return(
        <AboutContainer>
            <Avatar src={avatar} />
            <Text>
            Gareth Ng is a front-end developer who specializes in React.js. 
            </Text>
        </AboutContainer>
    )
}

export default About