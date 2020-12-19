import React from 'react';
import Fade from 'react-reveal/Fade';
import {
    Header, 
    Text,
    Row,
    Column,
    ParentDiv,
    ChildDiv,
    Line
} from '../ParallaxComponent/styled';
import Navbar from '../Navbar/Navbar';
import { Parallax } from 'react-parallax';


// import backVid from "../../videos/Background.mov"

const ParallaxComponent = (props) => {
    return (
        <div>
                <Parallax
                bgImage={props.img}
                
                bgImageAlt="main background"
                strength={400}
                >
                    <Navbar />
                    <ParentDiv primary>
                        <ChildDiv>
                            <Row>
                                <Column lg="12" md="12" sm="12" xs="12">
                                    <Header primary>
                                        <Fade top cascade>{props.heading}</Fade>
                                    </Header>
                                </Column>
                            </Row>
                            <Row>
                                <Column myname lg="12" md="12" sm="12" xs="12">
                                    <Header>
                                        <Fade top cascade><b>{props.main}</b></Fade>
                                    </Header>
                                <Line/>
                                </Column>
                            </Row>
                            
                            <Row>
                                <Column lg="12" md="12" sm="12" xs="12">
                                    <Text>
                                        <Fade bottom cascade><b>{props.subHeading}</b></Fade>
                                    </Text>
                                </Column>
                            </Row>
                        </ChildDiv>    
                    </ParentDiv>
                    <div style={{background: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))", height: "100vh"}}/>
                </Parallax>         
            </div>
    )
};

export default ParallaxComponent