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
import eventImg from "../../images/event-dash.png";
import tatuImg from "../../images/tatu.png";
import crystalImg from "../../images/crystal.png";
import clickyImg from "../../images/clicky-game.png";
import "./flexcard.css";

class MyProjects extends React.Component {

    state = {
        cards: [
            {
                img: tatuImg,
                title: "Tatu",
                descrip: "This is a multi-user app built with the MERN stack (MongoDB, ExpressJS, NodeJS, ReactJS) with mobile first design. My part: CSS design on each page, built all front end components for the Home page, and modal functionality, built back end routes/controllers for the forgot password functionality. Technology used: React, React Router, Express, Express Session, bcrypt, NodeJS, MongoDB, Axios, APIs, React-Materialize and Google Fonts and Icons.",
                linkOne: "https://tatuappv2.herokuapp.com/",
                linkTwo: "https://github.com/penajtokyo/tatu"
            },
            {
                img: eventImg,
                title: "Event Dash",
                descrip: "Event Dash was made to be a one-stop shop for all events. My part: integration of Google Maps and Smarty Streets API for map functionality in the event details and with Firebase DB. Technology used: HTML5, CSS3, Materialize, Google Fonts, JavaScript/jQuery, Firebase (DB and Authentication), APIs (Smarty Streets, Google, Twitter).",
                linkOne: "https://chancyleath.com/Event-Dash/",
                linkTwo: "https://github.com/chancy23/Event-Dash"
            },
            {
                img: clickyImg,
                title: "Lord of the Click",
                descrip: "This was an application built using ReactJS. The idea behind the application is showing the power of state within ReactJS. Follow the links below to either look at the source code or play the game. If you're an aficionado of Lord of the Rings - like myself - you'll enjoy this game!",
                linkOne: "https://elchaparrito1.github.io/clicky-game/",
                linkTwo: "https://github.com/elchaparrito1/clicky-game"
            },
            {
                img: crystalImg,
                title: "Gem Magic",
                descrip: "Gem Magic is a simple click game utilizing the fundamentals of Jquery and vanilla Javascript. Clicking on a gem will add points your total score. You can win Gem Magic by matching your total score to the target number. The value of each gem is hidden until clicked upon. Choose wisely, and victory is yours!",
                linkOne: "https://elchaparrito1.github.io/unit-4-game/",
                linkTwo: "https://github.com/elchaparrito1/unit-4-game"
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
                            <div className="flip-card-back">
                              <Boxtext>Description</Boxtext>
                                <P>{card.descrip}</P> 
                              <Boxtext>Links</Boxtext>
                                <A href={card.linkOne} target="_blank"><strong>DEPLOYED APP</strong></A>
                                <A href={card.linkTwo} target="_blank"><strong>SOURCE CODE</strong></A>
                            </div>
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