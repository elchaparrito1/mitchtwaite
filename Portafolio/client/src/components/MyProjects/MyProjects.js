import React from "react";
import Bounce from "react-reveal/Bounce";
import { 
    Container, 
    Row, 
    Column, 
    Text,
    Boxtext, 
    ChildDiv,
    Icon,
    P,
    A
} from "./styled";
import img from "../../images/chevron.png";
import crawlerImg from "../../images/puppeteer.png";
import tatuImg from "../../images/tatu.png";
import hugoImg from "../../images/Hugo-LP.png";
import pfnImg from "../../images/PFN.png";
import "./flexcard.css";

class MyProjects extends React.Component {

    state = {
        cards: [
            {
                img: pfnImg,
                title: "Pace News",
                descrip: "Pace Football News is designed as a news aggregator website. The great thing about this site is the use of the JAMstack philosophy. Using a WordPress CMS, content is easily uploaded by the client to their WordPress environment. Then this content is fed through to the uniquely neumorphic frontend - built using NextJS for server-side rendering - to allow for a perfectly scalable/configurable/very-fast user experience.",
                linkOne: "https://www.pacefootballnews.com/",
                linkTwo: "https://github.com/elchaparrito1/PFN/tree/master/pfn"
            },
            {
                img: hugoImg,
                title: "Hugo-LP Forum",
                descrip: "Hugo-LP is an application built using MERN stack technologies. Namely Mongo DB, Express js, React js, and Node js. The client wanted a simple, yet modern-looking website that would be easy for prospective customers to navigate; find important information; or sign up for future forums. What I love about this site is the look and feel, but also the simple use of React and Javascript logic to meet the client's needs.",
                linkOne: "https://www.hugo-lpf.com/",
                linkTwo: "https://github.com/elchaparrito1/Hugo-LP-Forum"
            },
            {
                img: crawlerImg,
                title: "News Crawler",
                descrip: "In connection with the Pace News application, my client also wanted a quicker way to search news on the carefully chosen websites from which news is curated. The crawler(s) utilizes Google's Puppeteer to visit the selected websites from the client's list to scrape the desired news articles, which are then sent via nodemailer with a handlebars template to the client for review and use in the WP CMS. It is also important to follow each website's scraping policies, so a node package is used, which dynamically checks if the specified url is allowed for scraping.",
            },
            {
                img: tatuImg,
                title: "Tatu",
                descrip: "This is a multi-user app built with the MERN stack (MongoDB, ExpressJS, NodeJS, ReactJS) with mobile first design. My part: CSS design on each page, built all front end components for the Home page, and modal functionality, built back end routes/controllers for the forgot password functionality. Technology used: React, React Router, Express, Express Session, bcrypt, NodeJS, MongoDB, Axios, APIs, React-Materialize and Google Fonts and Icons.",
                linkOne: "https://tatuappv2.herokuapp.com/",
                linkTwo: "https://github.com/penajtokyo/tatu"
            }
        ]
    }

    renderCards = () => {
        return this.state.cards.map((card, index) => {
            return (
            <Column key ={index} lg="3" md="3" sm="6" xs="12">
                <Bounce bottom>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                              <img className="flip-card-image" src={card.img} alt="Avatar" />
                              <Text>{card.title}</Text>
                            </div>
                            {
                              (card.title === "News Crawler") 
                                ?
                                <div className="flip-card-back">
                                    <Boxtext>Description</Boxtext>
                                        <P>{card.descrip}</P> 
                                </div>
                                :
                                <div className="flip-card-back">
                                    <Boxtext>Description</Boxtext>
                                        <P>{card.descrip}</P> 
                                    <Boxtext>Links</Boxtext>
                                    <A href={card.linkOne} target="_blank"><strong>DEPLOYED APP</strong></A>
                                    <A href={card.linkTwo} target="_blank"><strong>SOURCE CODE</strong></A>
                                </div>
                            }
                            
                        </div>
                    </div>
                </Bounce>
            </Column>
            )
        })
    }

    render() {
    return (
    <div>
        <Container>
            <ChildDiv>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Text header><b>My Projects</b></Text>
                    </Column>
                </Row>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Icon src={img} alt="icon separator"/>
                    </Column>
                </Row>
                <Row>
                    {this.renderCards()}
                </Row>
            </ChildDiv>
        </Container>
        
    </div>
    )
  };
};

export default MyProjects;