import React, { Component } from 'react'
import Email from '../email/Email'
import { ContactContainer } from './Contact.styles'

class Contact extends Component {
    componentDidMount() {
        this.props.updateIsContactPage(true)
        this.props.updateIsAboutPage(false)
        this.props.updateIsCV(false)
    }

    render(){
        return(
            <div>
                <ContactContainer>e: garethcng@gmail.com</ContactContainer>
                <Email />
            </div>
        )
    }
}

export default Contact