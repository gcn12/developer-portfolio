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
        name: '',
        message: '',
        allFields: true,
        isSent: false,
    }

    sendEmail = (e) => {
        e.preventDefault();
        if(this.state.email.length>0 && this.state.name.length>0 && this.state.message.length>0){
            emailjs.sendForm('service_xfb4n3g', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            document.getElementById('form-name').value=''
            document.getElementById('form-email').value=''
            document.getElementById('form-message').value=''
            this.setState({
                allFields: true,
                message: '',
                email: '',
                name: '',
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

    updateName = (e) => {
        this.setState({
            name: e.target.value
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
                <label>Name</label>
                <EmailInput onChange={this.updateName} value={this.state.name} id='form-name' type="text" name="from_name" />
                <br></br>
                <label>Email</label>
                <EmailInput onChange={this.updateEmail} value={this.state.email} id='form-email' type="email" name="reply_to" />
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