import React from 'react';
import Bounce from 'react-reveal/Bounce';
import { 
    Container,
    Column,
    ChildDiv,
    Row,
    Text,
    Icon
} from './styled';
import { images } from './imgs';
import imgChevron from '../../images/chevron.png';


export default function Skills() {

    const renderSkills = () => {
        return images.map((image) => {
            return (
                <Column skill key={image.name} lg="3" md="3" sm="6" xs="6">
                    <Bounce bottom>
                        <Icon skill src={image.img} alt="icon separator"/>
                    </Bounce>
                    <Bounce bottom>
                        <Text skill>{image.name}</Text>
                    </Bounce>
                </Column>
            )
        });
    }

    return (
        <Container>
            <ChildDiv>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Text header><b>My Skills</b></Text>
                    </Column>
                </Row>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Icon chevron src={imgChevron} alt="separator"/>
                    </Column>
                </Row>
                <Row>
                    {renderSkills()}
                </Row>
            </ChildDiv>
        </Container>
    )
};
