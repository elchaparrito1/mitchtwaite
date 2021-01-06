import React, { useState, useEffect } from 'react';
import {
    work,
    comfortSkills,
    otherSkills
} from './info'
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
} from './styled';
import imgProfile from '../../images/profile.png';
import imgPrint from '../../images/printer.png';
import Flip from 'react-reveal/Flip';
import PDF from '../../documents/Resume MTW.pdf'


export default function MyResume(props) {
   
    const [position, setPos] = useState('');
    const [top, setTop] = useState('');
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);   
        }
    });

    const handleScroll = () =>  {
        if (window.scrollY > props.measurement - window.innerHeight && window.innerWidth > 993) {
            setPos('relative');
            setTop(props.measurement - window.innerHeight + 'px')
        } else {
            setPos('');
            setTop('');
        }
    };

    const renderWork = () => {
        return work.map((job, index) => {
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

    return (
        <Container>
            <Row>
                <Column container style={{marginBottom: "82px"}} lg="3" md="3" sm="12" xs="12">
                    <MyContainer style={{position: position, top: top}}>
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
                                    <A
                                        href={PDF} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        style={{color: "#003366"}}>
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
                            I'm a dedicated software developer who is passionate about learning, and becoming better at my craft each
                            and everyday. I come with experience, but will always seek to learn from others. Above all else, I'm 
                            committed to learn/do whatever is needed to help the team or company succeed in tech.
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
                                    {comfortSkills.map((skill) => {
                                        return (
                                            <Li key={skill.toString()}>
                                                {skill}
                                            </Li>
                                        )
                                    })}
                                </ul>
                        </Column>
                        <Column lg="4" md="4" sm="6" xs="6">
                            <P style={{textAlign: "left"}}>EXPERIENCE WITH</P>
                                <ul>
                                    {otherSkills.map((skill) => {
                                        return (
                                            <Li key={skill.toString()}>
                                                {skill}
                                            </Li>
                                        )
                                    })}
                                </ul>
                        </Column>
                    </Row>
                    <Row break>
                        <Column lg="4" md="4" sm="12" xs="12">
                            <TextHeader>Work Experience</TextHeader>
                        </Column>
                        <Column lg="8" md="8" sm="12" xs="12">
                            {renderWork()}
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



