import React, { Component } from 'react'
import emailjs from 'emailjs-com'
import apiKeys from './apikeys'
import {
    EmailContainer,
    EmailInput,
    EmailTextarea,
    EmailButton,
    Form,
    ErrorMessage,
    MessageSent,
} from './Email.styles'


class Email extends Component {
    state = {
        email: '',
        subject: '',
        message: '',
        allFields: true,
        isSent: false,
    }

    sendEmail = (e) => {
        e.preventDefault();
        if(this.state.email.length>0 && this.state.subject.length>0 && this.state.message.length>0){
            emailjs.sendForm('service_xfb4n3g', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            document.getElementById('form-subject').value=''
            document.getElementById('form-email').value=''
            document.getElementById('form-message').value=''
            this.setState({
                allFields: true,
                isSent: true,
                message: '',
                email: '',
                subject: '',
            })
        }else{
            this.setState({
                allFields: false
            })
        }
    }

    updateEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    updateSubject = (e) => {
        this.setState({
            subject: e.target.value
        })
    }

    updateMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    render() {
        return(
        <Form className="contact-form" onSubmit={this.sendEmail}>
            <EmailContainer>
                <br></br>
                <label>Email</label>
                <EmailInput onChange={this.updateEmail} value={this.state.email} id='form-email' type="email" name="reply_to" />
                <br></br>
                <label>Subject</label>
                <EmailInput onChange={this.updateSubject} value={this.state.subject} id='form-subject' type="text" name="subject" />
                <br></br>
                <label>Message</label>
                <EmailTextarea onChange={this.updateMessage} value={this.state.message} id='form-message' name="message" />
                <br></br>
                {this.state.allFields ? 
                    null
                    :
                    <ErrorMessage>All fields must be filled</ErrorMessage>
                }
                {this.state.isSent ? 
                <MessageSent>Message has been sent</MessageSent>
                :
                null
                }
            <EmailButton type="submit" >SEND</EmailButton>
            </EmailContainer>
        </Form>
        )
    }
}

export default Email