import React, {useState} from 'react';
import API from '../../utils/API';
import ReactDOM from 'react-dom';
import {
    Row, 
    Column, 
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalFooter, 
    ModalBody, 
    Close, 
    Button,
    TextArea,
    Label,
    Input,
    P
} from './styled';


export default function EmailModal(props) {
    const [emailInfo, setEmailInfo] = useState({
        email: '',
        name: '',
        message: ''
    })
    const [sent, setSent] = useState('');

    const handleChange = (e) => {
        setEmailInfo({
            ...emailInfo,
            [e.target.name]: e.target.value})
    };

    const validateEmail = () => {
        const email = emailInfo.email;
        // eslint-disable-next-line
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    };

    const sendEmail = (event) => {
        event.preventDefault();
        const emailObj = {
            name: emailInfo.name,
            email: emailInfo.email,
            message: emailInfo.message
        }
  
        if (!validateEmail(emailInfo.email)) {
            setSent('invalid email');
        } else if (emailInfo.name === '' || emailInfo.email === '' || emailInfo.message === '') {
            setSent('missing information');
        } else { 
            setSent('sending');
            API.sendMessage(emailObj)
              .then(response => {
                //   console.log(response.data);
                  if (response.data === 'email sent') {
                      setSent('email sent');
                      setEmailInfo({email: '', name: '', message: ''});
                    //   setTimeout(props.handleModal, 3000);
                  } else if (response.data === 'error') {
                    setSent('error occurred; email not sent');
                } 
              })
              .catch(error => {
                  console.log(error.data);
              });
        };
    };

    const closeModal = () => {
        setEmailInfo({email: '', name: '', message: ''});
        setSent('');
        props.handleModal();
    }

    const { isOpen } = props;

    if(!isOpen) {
        return null;
    }

    return ReactDOM.createPortal (
    <Modal>
        <ModalContent>
            <ModalHeader>
                <Close onClick={closeModal} className="close">&times;</Close>
                    </ModalHeader>
                        <ModalBody>
                            <form>
                              <Label>Email</Label>
                              <Input
                                id="email"
                                name="email" 
                                type="text" 
                                placeholder="Your email.."
                                value={emailInfo.email}
                                autoComplete="off"
                                onChange={handleChange}
                                />
                              <Label>Name</Label>
                              <Input 
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your name.."
                                value={emailInfo.name}
                                autoComplete="off"
                                onChange={handleChange}
                                />
                              <Label>Message</Label>
                              <TextArea 
                                id="message"
                                name="message" 
                                placeholder="Write something.."
                                value={emailInfo.message}
                                onChange={handleChange}
                                />
                            </form>
                        </ModalBody>
                    <ModalFooter>       
                {sent === "sending" && (
                    <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <P>Sending...</P>
                    </Column>
                </Row>)}
                {sent === "email sent" && (
                    <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <P>Message Sent!</P>
                    </Column>
                </Row>)}
                {sent === "invalid email" && (
                    <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <P error >Please enter a valid email address</P>
                    </Column>
                </Row>)}
                {sent === "missing information" && (
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <P error >Please fill in all fields</P>
                    </Column>
                </Row>)}
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Button onClick={sendEmail}>Send</Button>
                    </Column>
                </Row>
            </ModalFooter>
        </ModalContent>
    </Modal>,
    document.querySelector('#modal')
    )
};