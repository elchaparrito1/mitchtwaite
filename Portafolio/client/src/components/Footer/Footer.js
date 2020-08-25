import React from "react";
import API from "../../utils/API";
import { 
    Foot, 
    Text, 
    Row, 
    Column, 
    Links, 
    Icon,
    Table
} from "./styled";
import EmailModal from "../Modals/EmailModal";
import imgLinked from "../../images/linkedin.png";
import imgGmail from "../../images/contact.png";
import imgFacebook from "../../images/facebook.png";
import imgGithub from "../../images/github.png";



class Footer extends React.Component {

    state = {
        isOpen: false,
        email: "",
        name: "",
        message: "",
        sent: ""
    };

    componentDidMount() {
        window.scrollTo(0, 0);
      }

    componentWillUnmount() {
        window.scrollTo(0, 0);
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
                  } else if (response.data === "error") {
                    this.setState({
                        sent: "error occurred; email not sent"
                    });
                } 
              })
              .catch(error => {
                  console.log(error.data);
              });
        };
    };

    render() {
        const zStyle = this.props.isChatOpen ? {zIndex: "-1"} : {};
        return (
            <Foot style={zStyle}>
                <EmailModal 
                    handleModal={this.handleModal} 
                    isOpen={this.state.isOpen}
                    handleChange={this.handleChange}
                    sendEmail={this.sendEmail}
                    sent={this.state.sent}
                />
                    <Row connect>
                        <Column lg="12" md="12" sm="12" xs="12">
                                <Text>Connect with me</Text>
                        </Column>
                    </Row>
                    <Row>
                        <Table>
                            <tbody>
                                <tr>
                                    <th><Icon onClick={this.handleModal} connect src={imgGmail} alt="icon separator"/></th>
                                    <th><a href="https://www.linkedin.com/in/mitchell-waite-18b445a3/" rel="noopener noreferrer" target="_blank"><Icon src={imgLinked} alt="icon separator"/></a></th>
                                    <th><a href="https://github.com/elchaparrito1" rel="noopener noreferrer" target="_blank"><Icon src={imgGithub} alt="icon separator"/></a></th>
                                    <th><a href="https://www.facebook.com/mitchell.t.waite" rel="noopener noreferrer" target="_blank"><Icon src={imgFacebook} alt="icon separator"/></a></th>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                    <Row>
                        <Table linkers>
                            <tbody>
                                <tr>
                                    <th><Links to="/">Home</Links></th>
                                    <th><Links to="/resume">Resume</Links></th>
                                    <th><Links to="/about" >About</Links></th>
                                    <th><Links to="/contact">Contact</Links></th>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                    <Row copyright>
                        <Column copyright lg="12" md="12" sm="12" xs="12">
                            <Text copyright> © 2020 Mitchell Waite. All rights reserved.</Text>
                        </Column>
                    </Row>
            </Foot>
        )
    };
};

export default Footer;