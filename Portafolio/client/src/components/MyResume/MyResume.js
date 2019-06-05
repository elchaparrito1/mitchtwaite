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
                title: "Regulatory Affairs Supervisor",
                company: "USANA Health Sciences Inc.:",
                timeline: "2015 – Present",
                description: "I work to ensure that project direction is followed, and deadlines are met. It is a fast-paced environment that requires reacting to constant change and dealing with many other departments. More importantly, I supervise the work of others to help them meet their goals and grow in experience and ability."
            },
            {
                title: "Program Associate Intern",
                company: "Utah Council for Citizen Diplomacy:",
                timeline: "Apr 2015 – Aug 2015",
                description: "I organized programs for visiting diplomats to the State of Utah. My largest project was to organize a program on cybersecurity for officials visiting from Eastern European nations. We met with local representatives at the State Capitol who work to ensure proper security measures are taken to protect individuals’ private information."
            },
            {
                title: "Foreign Service Institute Portuguese and Spanish Administrator",
                company: "U.S. Department of State:",
                timeline: "Sep 2014 – Nov 2014",
                description: "I worked on an internal application to help add audio files to a single page on the Institute’s training website. I worked with the development team to get the right files compressed and added to the server. I then utilized HTML and CSS to provide the layout and style of the page for diplomats to navigate and use audio files. I had to obtain a security clearance in order to access the institute’s internal system."
            },
            {
                title: "Quality Control Inspector, International Customer Service Representative",
                company: "USANA Health Sciences Inc.:",
                timeline: "Oct 2008 – Dec 2013",
                description: "I worked for over two years as a Quality Control Inspector sampling and testing raw materials for the company. My primary project during this tenure was implementing the software of a new device the company had purchased for sampling raw materials. I had to create many arrays of scans per raw material and cache the data into the database in order to achieve more consistent testing of raw materials. This was accomplished and led to heightened accuracy in identifying the materials arriving in house."
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
        if (window.pageYOffset > 2000 && window.innerWidth > 993) {
            this.setState({
                position: "relative",
                top: "1875px"
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
                                    <A href="https://drive.google.com/file/d/1brbiZ_k6rp1KVuwePjV6TmFaC9aO-eEl/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{color: "#003366"}}>
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
                            Dedicated and creative software developer with a passion for customized solutions, and responsive design. 
                            Strong communicator and eager learner who can provide quality support in HTML5, CSS3, JavaScript, ReactJS, 
                            NodeJS, i.e., good front-end design and logic, with a touch of backend understanding and knowledge.
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
                                    <Li>Materialize</Li>
                                    <Li>Bootstrap</Li>
                                    <Li>CSS-in-JS</Li>
                                    <Li>JavaScript</Li>
                                    <Li>ReactJS</Li>
                                    <Li>JQuery</Li>
                                    <Li>NodeJS</Li>
                                    <Li>ExpressJS</Li>
                                    <Li>MongoDB</Li>
                                    <Li>Mongoose</Li>
                                    <Li>NPM</Li>
                                    <Li>JSON</Li>
                                    <Li>RESTful API</Li>
                                    <Li>Axios</Li>
                                    <Li>Github</Li>
                                </ul>
                        </Column>
                        <Column lg="4" md="4" sm="6" xs="6">
                            <P style={{textAlign: "center"}}>EXPERIENCE WITH</P>
                                <ul>
                                    <Li>Redux</Li>
                                    <Li>Handlebars</Li>
                                    <Li>Firebase</Li>
                                    <Li>MySQL</Li>
                                    <Li>Sequelize</Li>
                                    <Li>AJAX</Li>
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



