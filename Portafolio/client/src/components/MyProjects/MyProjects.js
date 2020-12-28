import React from 'react';
import Bounce from 'react-reveal/Bounce';
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
} from './styled';
import img from '../../images/chevron.png';
import crawlerImg from '../../images/puppeteer.png';
import soonImg from '../../images/soon.png';
import hugoImg from '../../images/Hugo-LP.png';
import pfnImg from '../../images/PFN.png';
import './flexcard.css';

export default function MyProjects() { 

    const cards = [
            {
                img: soonImg,
                title: 'Soon',
                descrip: 'Soon is an exciting startup whose landing page is built using React with Typescript. My primary tasks with the landing page have included my use of React knowledge to fix front-end bugs that were causing issues, and implementing technical optimizations to improve SEO.',
                linkOne: 'https://soon.app/',
            },
            {
                img: pfnImg,
                title: 'PFN',
                descrip: 'Pace Football News is designed as a news aggregator website. This site was built with the JAMstack philosphy in mind. Using a WordPress CMS, content is easily uploaded by the client to their WordPress environment. Then this content is fed through to the uniquely neumorphic frontend - built using NextJS for server-side rendering - to allow for a perfectly scalable/configurable/very-fast user experience.',
                linkOne: 'https://www.pacefootballnews.com/',
            },
            {
                img: hugoImg,
                title: 'Hugo-LP Forum',
                descrip: "Hugo-LP is an application built using MERN stack technologies. Namely Mongo DB, Express js, React js, and Node js. The client wanted a simple, yet modern-looking website that would be easy for prospective customers to navigate; find important information; or sign up for future forums.",
                linkOne: 'https://www.hugo-lpf.com/',
            },
            {
                img: crawlerImg,
                title: 'News Crawler',
                descrip: "The Pace Football News creator also wanted a quicker way to search news and curate news from a list of preferred sites. The crawlers utilize Google's Puppeteer to visit the creator's list of sites to scrape the desired news articles, which are then sent via nodemailer with a handlebars template to an assigned email address. It is also important to follow each website's scraping policies, so a node package is used to dynamically check Robots.txt files.",
            }
        ];

    const renderCards = () => {
        return cards.map((card, index) => {
            return (
            <Column key={index} lg="3" md="3" sm="6" xs="12">
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
                                </div>
                            }  
                        </div>
                    </div>
                </Bounce>
            </Column>
            )
        })
    }

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
                        {renderCards()}
                    </Row>
                </ChildDiv>
            </Container>
        </div>
    )
};