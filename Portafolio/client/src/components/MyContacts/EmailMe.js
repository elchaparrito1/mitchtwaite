import React from "react";
import API from "../../utils/API";
import EmailModal from "../Modals/EmailModal";
import {
    Row,
    Column,
    Box,
    Head,
    Text
} from "./styled";

class EmailMe extends React.Component {
    state = {
        isOpen: false,
        email: "",
        name: "",
        message: "",
        sent: ""
    }

    handleChange = (name) => (event) => {
        this.setState({
            [name]: event.target.value
        });
    };

    handleModal = () => {
        if(!this.state.isOpen) {
            this.setState({
                isOpen: true
            });
       } else if (this.state.isOpen) {
           this.setState({
                isOpen: false,
                email: "",
                name: "",
                message: "",
                sent: ""
           });
       }
    };

    validateEmail = () => {
        const { email } = this.state;
        // eslint-disable-next-line
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(regex.test(email));
        return regex.test(email);
    };

    sendEmail = (event) => {
        event.preventDefault();
        this.setState({
            sent: "sending"
        });
        const emailObj = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        if (this.validateEmail(this.state.email) === false) {
            this.setState({
                sent: "invalid email"
            });
        } else {
            API.sendMessage(emailObj)
              .then(response => {
                //   console.log(response.data);
                  if (response.data === "email sent") {
                      this.setState({
                          sent: "email sent"
                      });
                      setTimeout(this.handleModal, 3000);
                  } else if (response.data === "missing information") {
                      this.setState({
                          sent: "missing information"
                      });
                  }
              })
              .catch(error => {
                  console.log(error.data);
              });
            //   this.handleModal()
        };
    };

    render() {
        return (
            <div style={{margin: "10px"}}>
                <EmailModal 
                    handleModal={this.handleModal} 
                    isOpen={this.state.isOpen}
                    handleChange={this.handleChange}
                    sendEmail={this.sendEmail}
                    sent={this.state.sent}
                />
                    
                        <Box onClick={this.handleModal}>
                            <Row>
                                <Column lg="12" md="12" sm="12" xs="12">
                                    <Head>EMAIL</Head>
                                </Column>
                            </Row>
                            <br />
                            <Row>
                                <Column lg="12" md="12" sm="12" xs="12">
                                    <Text>
                                        Have a question about my website, or just want to connect and discuss a project? 
                                        Drop me a line, and I will help bring your vision to the world wide web.
                                    </Text>
                                </Column>
                            </Row>
                        </Box>
                    
            </div>
        )
    }
}

export default EmailMe;