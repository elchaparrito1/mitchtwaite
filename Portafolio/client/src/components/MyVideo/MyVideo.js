import React from "react";
import Bounce from "react-reveal/Bounce";
import mov from "../../videos/payaso.MOV";
import arrow from "../../images/arrow.png";
import { 
    Row,
    Column,
    Container,
    Img,
    Video,
    Text
} from "./styled";

class MyVideo extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Text>Really though, I'm really just a kid at heart</Text>
                    </Column>
                </Row>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                            <Bounce left>
                                <Img src={arrow} alt="arrow"/>
                            </Bounce>
                    </Column>
                </Row>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Video controls>
                            <source src={mov} type="video/mp4"/>
                            <source src={mov} type="video/ogg"/>
                        </Video>
                    </Column>
                </Row>
            </Container>
        );
    };
};

export default MyVideo;