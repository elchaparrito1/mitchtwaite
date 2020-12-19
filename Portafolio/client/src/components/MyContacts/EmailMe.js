import React, {useState} from 'react';
import EmailModal from '../Modals/EmailModal';
import {
    Row,
    Column,
    Box,
    Head,
    Text
} from './styled';

export default function EmailMe() {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleModal = () => {
        (!isOpen) ? setIsOpen(true) : setIsOpen(false);
    };

    return (
        <div style={{margin: "10px"}}>
            <EmailModal 
            handleModal={handleModal} 
            isOpen={isOpen}
        />
                
            <Box onClick={handleModal}>
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