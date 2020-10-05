import React from 'react'
import emailjs from 'emailjs-com'
import apiKeys from './apikeys'
import {
    EmailContainer,
    EmailInput,
    EmailTextarea,
    EmailButton,
    Form,
} from './Email.styles'

const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_xfb4n3g', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    document.getElementById('form-name').value=''
    document.getElementById('form-email').value=''
    document.getElementById('form-message').value=''
}

const Email = () => {
    return(
    <Form className="contact-form" onSubmit={sendEmail}>
        <EmailContainer>
            <label>Name</label>
            <EmailInput id='form-name' type="text" name="from_name" />
            <label>Email</label>
            <EmailInput id='form-email' type="email" name="reply_to" />
            <label>Message</label>
            <EmailTextarea id='form-message' name="message" />
            <EmailButton type="submit" >Send</EmailButton>
        </EmailContainer>
    </Form>
    )
}

export default Email