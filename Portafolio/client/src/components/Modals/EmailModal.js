import React from "react";
import ReactDOM from "react-dom";
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
} from "./styled";


class EmailModal extends React.Component {

    render() {
        const { isOpen } = this.props;
        const { sent } = this.props;

        if(!isOpen) {
            return null;
        }

        return ReactDOM.createPortal (
        <Modal>
            <ModalContent>
                <ModalHeader>
                    <Close onClick={this.props.handleModal} className="close">&times;</Close>
                        </ModalHeader>
                            <ModalBody>
                                <form>
                                  <Label>Email</Label>
                                  <Input
                                    id="email" 
                                    type="text" 
                                    placeholder="Your email.."
                                    value={this.props.email}
                                    autoComplete="off"
                                    onChange={this.props.handleChange("email")}
                                    />
                                  <Label>Name</Label>
                                  <Input 
                                    id="name"
                                    type="text"
                                    placeholder="Your name.."
                                    value={this.props.name}
                                    autoComplete="off"
                                    onChange={this.props.handleChange("name")}
                                    />
                                  <Label>Message</Label>
                                  <TextArea 
                                    id="message"
                                    name="Message" 
                                    placeholder="Write something.."
                                    value={this.props.message}
                                    onChange={this.props.handleChange("message")}
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
                            <Button onClick={this.props.sendEmail}>Send</Button>
                        </Column>
                    </Row>
                </ModalFooter>
            </ModalContent>
        </Modal>,
        document.querySelector("#modal")
    )
  };
};

export default EmailModal;