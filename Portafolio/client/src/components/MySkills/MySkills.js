import React, { Component } from "react";
import Bounce from "react-reveal/Bounce";
import { 
    Container,
    Column,
    ChildDiv,
    Row,
    Text,
    Icon
} from "./styled";

import imgChevron from "../../images/chevron.png";
import imgCSS from "../../images/css-3.png";
import imgHTML from "../../images/html-5.png";
import imgJS from "../../images/javascript.png";
import imgReact from "../../images/react.png";
import imgNode from "../../images/node.png";
import imgExpress from "../../images/express.svg";
import imgMongo from "../../images/mongodb.png";
import imgWP from "../../images/wordpress.png";
import imgJAM from "../../images/jam.png";
import imghbs from "../../images/hbs.png";
import imgstyed from "../../images/styled-components.png";
import imgNextjs from "../../images/nextjs.png";

class Skills extends Component {

    state = {
        showModal: false,
        images: [
            
            {
                img: imgJS,
                name: "JavaScript"
            },
            {
                img: imgReact,
                name: "ReactJS"
            },
            {
                img: imgNextjs,
                name: "Next JS"
            },
            {
                img: imgNode,
                name: "NodeJS"
            },
            {
                img: imgWP,
                name: "WordPress"
            },
            {
                img: imgJAM,
                name: "JAMstack"
            },
            {
                img: imghbs,
                name: "Handlebars"
            },
            {
                img: imgstyed,
                name: "CSS-in-JS"
            },
            {
                img: imgExpress,
                name: "ExpressJS"
            },
             {
                img: imgMongo,
                name: "MongoDB"
            },
            {
                img: imgHTML,
                name: "HTML5"
            },
            {
                img: imgCSS,
                name: "CSS3"
            },
        ]
    }

    renderSkills = () => {
        return this.state.images.map((image, index) => {
            return (
                <Column skill key={index} lg="3" md="3" sm="6" xs="6">
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

    render() {
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
                        {this.renderSkills()}
                    </Row>
                </ChildDiv>
            </Container>
    )
};

}

export default Skills;