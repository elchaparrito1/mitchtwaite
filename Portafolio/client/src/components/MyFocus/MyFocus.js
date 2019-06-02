import React from "react";
import { 
    Container, 
    Row, 
    Column, 
    Text, 
    ChildDiv,
    Icon
} from "./styled";
import img from "../../images/chevron.png";
import responsiveImg from "../../images/responsive.gif";

const MyFocus = () => {
    return (
    <div>
        <Container>
            <ChildDiv>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Text header><b>My Focus</b></Text>
                    </Column>
                </Row>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Icon src={img} alt="icon separator"/>
                    </Column>
                </Row>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Text body>I'm an aspiring software developer. I have a passion for problem solving, responsive front-end design, and careful logic.</Text>
                    </Column>
                </Row>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Icon giphy src={responsiveImg} alt="giphy" />
                    </Column>
                </Row>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Text body>Take a quick look below at some projects I've worked on. I've also listed my skills and tech in which I'm most interested.</Text>
                    </Column>
                </Row>
            </ChildDiv>
        </Container>
        
    </div>
    )
}

export default MyFocus;