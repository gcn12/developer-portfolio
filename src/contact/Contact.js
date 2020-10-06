import React, { Component } from 'react'
import Email from '../email/Email'
import { ContactContainer, NoCopy, EmailText } from './Contact.styles'

class Contact extends Component {
    componentDidMount() {
        this.props.updateIsContactPage(true)
        this.props.updateIsAboutPage(false)
        this.props.updateIsCV(false)
    }

    render(){
        return(
            <div>
                <ContactContainer>
                    <NoCopy>e:</NoCopy>
                    <EmailText>
                    garethcng@gmail.com
                    </EmailText>
                </ContactContainer>
                <Email />
            </div>
        )
    }
}

export default Contact