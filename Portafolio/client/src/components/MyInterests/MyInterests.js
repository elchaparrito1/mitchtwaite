import React from 'react';
import { 
    Container, 
    Row, 
    Column, 
    Text, 
    ChildDiv,
    Icon
} from './styled';
import img from '../../images/chevron.png';

const MyInterests = () => {
    return (
    <div>
        <Container>
            <ChildDiv>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Text header><b>My Interests</b></Text>
                    </Column>
                </Row>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Icon src={img} alt="icon separator"/>
                    </Column>
                </Row>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Text body>
                        Aside from a love for code, I enjoy playing soccer 
                        and basketball, skiing {"(both water and snow),"} riding my horses, laughing at classic comedies, 
                        but above all else, spending time with the fam.
                        </Text>
                    </Column>
                </Row>
            </ChildDiv>
        </Container>
        
    </div>
    )
}

export default MyInterests;