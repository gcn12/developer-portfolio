import React, { Component } from 'react'
import { Container, Resume } from './CV.styles'

class CV extends Component {

    componentDidMount(){
        this.props.updateIsCV(true)
        this.props.updateIsAboutPage(false)
        this.props.updateIsContactPage(false)
    }

    render() {
        return(
            <Container>
                <Resume title='resume' frameborder="0" scrolling="no"
                    width="640" height="480"
                    src="https://drive.google.com/file/d/1CWVsvhzDbl3QP_BfOvdE1ax0Pl4Ofu0J/preview">
                </Resume>
            </Container>
        )
    }
}

export default CV