import React, {useState} from 'react';
import { 
    Foot, 
    Text, 
    Row, 
    Column, 
    Links, 
    Icon,
    Table
} from './styled';
import EmailModal from '../../components/Modals/EmailModal';
import imgLinked from '../../images/linkedin.png';
import imgGmail from '../../images/contact.png';
import imgFacebook from '../../images/facebook.png';
import imgGithub from '../../images/github.png';



export default function Footer() {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleModal = () => {
        (!isOpen) ? setIsOpen(true) : setIsOpen(false);
    };

    return (
        <Foot>
            <EmailModal 
                handleModal={handleModal} 
                isOpen={isOpen}
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
                                <th><Icon onClick={handleModal} connect src={imgGmail} alt="icon separator"/></th>
                                <th><a href="https://www.linkedin.com/in/mitch-waite-6b10681ba" rel="noopener noreferrer" target="_blank"><Icon src={imgLinked} alt="icon separator"/></a></th>
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