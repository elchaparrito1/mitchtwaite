import React, { Component } from "react";
import {
    MyContainer,
    Container, 
    Column, 
    Row, 
    Text, 
    TextHeader,
    P, 
    Li,
    Th,
    Photo,
    Icon,
    A
} from "./styled";
import imgProfile from "../../images/profile.png";
import imgPrint from "../../images/printer.png";
import Flip from "react-reveal/Flip";


class MyResume extends Component {
   
        state = {
            work: [
                {
                    title: "Software Developer",
                    company: "Foursteps",
                    timeline: "Jun 2019 - Nov 2019",
                    description: "I work as a React developer to help the company with migrating the code stack from Flask to ReactJS. With a large amount of legacy code, my responsibilities include a careful review of the old code to determine how best it can be converted over to ReactJS, using best React practices. I then style the converted code utilizing CSS-in-JS principles."
                },
                {
                    title: "Manager of Regulatory Affairs",
                    company: "USANA Health Sciences Inc.:",
                    timeline: "2015 – Present",
                    description: "I work to ensure that project direction is followed, and deadlines are met. It is a fast-paced environment that requires reacting to constant change and dealing with many other departments. More importantly, I supervise the work of others to help them meet their goals and grow in experience and ability."
                },
                {
                    title: "Foreign Service Institute Portuguese and Spanish Administrator",
                    company: "U.S. Department of State:",
                    timeline: "Sep 2014 – Nov 2014",
                    description: "I worked on an internal application to help add audio files to a single page on the Institute’s training website. I worked with the development team to get the right files compressed and added to the server. I then utilized HTML and CSS to provide the layout and style of the page for diplomats to navigate and use audio files. I had to obtain a security clearance in order to access the institute’s internal system."
                },
                
            ],
            position: "",
            top: ""
        }


    componentDidMount = () => {
        window.addEventListener("scroll", this.handleScroll);
    };
    
    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.handleScroll);
    };
    
    handleScroll = () =>  {
        console.log(window.scrollY, this.props.measurement - window.innerHeight)
        if (window.scrollY > this.props.measurement - window.innerHeight && window.innerWidth > 993) {
            this.setState({
                position: "relative",
                top: this.props.measurement - window.innerHeight + "px"
            });
        } else {
            this.setState({
                position: "",
                top: ""
            });
        }
    };

    renderWork = () => {
        return this.state.work.map((job, index) => {
            return (
            <div key={index}>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <P heading>{job.title}</P>
                    </Column>
                </Row>
                <Row>
                    <Column lg="9" md="9" sm="12" xs="12">
                        <P heading>{job.company}</P>
                    </Column>
                    <Column lg="3" md="3" sm="12" xs="12">
                        <P heading timeline><i>{job.timeline}</i></P>
                    </Column>
                </Row>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <P indent>{job.description}</P>
                    </Column>
                </Row>
                <br/>
                <br/>
            </div>
            );
        });
    }

render() {
    
    return (
        <Container>
            <Row>
                <Column container style={{marginBottom: "82px"}} lg="3" md="3" sm="12" xs="12">
                    <MyContainer style={{position: this.state.position, top: this.state.top}}>
                        <Flip left>
                            <br/>
                            <Row>
                                <Column lg="12" md="12" sm="12" xs="12">
                                    <Photo src={imgProfile} alt="profile image"/>
                                </Column>
                            </Row>
                            <br/>
                            <Row>
                                <Column lg="12" md="12" sm="12" xs="12">
                                    <TextHeader container>Strengths</TextHeader>
                                </Column>
                            </Row>
                            <Row>
                                <Column lg="12" md="12" sm="12" xs="12">
                                    <table style={{margin: "0 auto"}}>
                                        <tbody>
                                            <tr>
                                                <Th>Critical thinker</Th>
                                                <Th>Problem solver</Th>
                                            </tr>
                                            <tr>
                                                <Th>Good communicator</Th>
                                                <Th>Horse trainer</Th>
                                            </tr>
                                            <tr>
                                                <Th>Team builder</Th>
                                                <Th>Spanish speaker</Th>
                                            </tr>
                                            <tr>
                                                <Th>Goal oriented</Th>
                                                <Th>Portuguese speaker</Th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Column>
                            </Row>
                            <br/>
                            <Row>
                                <Column lg="12" md="12" sm="12" xs="12">
                                    <A href="https://drive.google.com/file/d/1u7iZNtddi5N7ae8NwVoq7UqQbpA3vuJd/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{color: "#003366"}}>
                                        <Icon src={imgPrint} alt="print icon"/>
                                        Print Resume
                                    </A>
                                </Column>
                            </Row>
                        </Flip>
                    </MyContainer>
                    <Text></Text>
                </Column>
                <Column lg="9" md="9" sm="12" xs="12">
                <Row break>
                        <Column lg="4" md="4" sm="12" xs="12">
                            <TextHeader>Career Objective</TextHeader>
                        </Column>
                        <Column lg="8" md="8" sm="12" xs="12">
                            <P>
                            Dedicated and creative software developer who is passionate about customized solutions seeks the 
                            position of Software Developer in an exciting and growing industry. Coming with experience, and 
                            hoping to provide quality support in many different languages, technologies, and frameworks. 
                            Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.
                            </P>
                        </Column>
                    </Row>
                    <Row break>
                        <Column lg="4" md="4" sm="12" xs="12">
                            <TextHeader>Technical Skills</TextHeader>
                        </Column>
                        <Column lg="4" md="4" sm="6" xs="6">
                            <P style={{textAlign: "center"}}>DAY-TO-DAY COMFORT</P>
                                <ul>
                                    <Li>HTML5</Li>
                                    <Li>CSS3</Li>
                                    <Li>JavaScript</Li>
                                    <Li>ReactJS</Li>
                                    <Li>CSS-in-JS</Li>
                                    <Li>NextJS</Li>
                                    <Li>WordPress</Li>
                                    <Li>JAMstack</Li>
                                    <Li>NodeJS</Li>
                                    <Li>ExpressJS</Li>
                                    <Li>MongoDB</Li>
                                    <Li>Mongoose</Li>
                                    <Li>Handlebars</Li>
                                    <Li>NPM</Li>
                                    <Li>JSON Data</Li>
                                    <Li>RESTful API</Li>
                                    <Li>Github</Li>
                                </ul>
                        </Column>
                        <Column lg="4" md="4" sm="6" xs="6">
                            <P style={{textAlign: "left"}}>EXPERIENCE WITH</P>
                                <ul>
                                    <Li>Redux</Li>
                                    <Li>Firebase</Li>
                                    <Li>MySQL</Li>
                                    <Li>Sequelize</Li>
                                    <Li>JQuery</Li>
                                    <Li>Materialize</Li>
                                    <Li>Bootstrap</Li>
                                </ul>
                        </Column>
                    </Row>
                    <Row break>
                        <Column lg="4" md="4" sm="12" xs="12">
                            <TextHeader>Work Experience</TextHeader>
                        </Column>
                        <Column lg="8" md="8" sm="12" xs="12">
                            {this.renderWork()}
                        </Column>
                    </Row>
                    <Row>
                        <Column lg="4" md="4" sm="12" xs="12">
                            <TextHeader>Education</TextHeader>
                        </Column>
                        <Column lg="8" md="8" sm="12" xs="12">
                            <Row>
                                <Column lg="9" md="9" sm="12" xs="12">
                                    <P heading><strong>Degree</strong>: B.A., History, University of Utah:</P>
                                </Column>
                                <Column lg="3" md="3" sm="12" xs="12">
                                    <P heading><i>2011 – 2015</i></P>
                                </Column>
                            </Row>
                            <br/>
                            <Row>
                                <Column lg="9" md="9" sm="12" xs="12">
                                    <P heading><strong>Certificate</strong>: The Coding Bootcamp, University of Utah:</P>
                                </Column>
                                <Column lg="3" md="3" sm="12" xs="12">
                                    <P heading><i>2018 – 2019</i></P>
                                </Column>
                            </Row>
                        </Column>
                    </Row>
                </Column>
            </Row>
        </Container>
        );
    };
};

export default MyResume;



