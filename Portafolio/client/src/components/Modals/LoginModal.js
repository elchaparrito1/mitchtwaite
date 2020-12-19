import React from 'react';
import ReactDOM from 'react-dom';
import {
    Row, 
    Column, 
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalFooter, 
    ModalBody, 
    Button,
    P
} from './styled';

class LoginModal extends React.Component {

    render() {
        const { isOpen } = this.props;
        const { login } = this.props;

        if(!isOpen) {
            return null;
        }

        return ReactDOM.createPortal (
        <Modal>
            <ModalContent>
                <ModalHeader>
                        </ModalHeader>
                            <ModalBody>
                            <input 
                                id="password" 
                                type="password" 
                                pattern="[0-9] {6}" 
                                value={this.props.password}
                                onChange={this.props.handleChange("password")}
                            />
                            </ModalBody>
                        <ModalFooter>
                        {login === "incorrect password" && (
                        <Row>
                        <Column lg="12" md="12" sm="12" xs="12">
                            <P>Invalid credentials</P>
                        </Column>
                        </Row>)}
                    <Row>
                        <Column lg="12" md="12" sm="12" xs="12">
                            <Button onClick={this.props.handlelogin}>Login</Button>
                        </Column>
                    </Row>
                </ModalFooter>
            </ModalContent>
        </Modal>,
        document.querySelector('#modal')
    )
  };
};

export default LoginModal;