import React from 'react';
import Footer from '../../components/Footer/Footer';
import ParallaxComponent from '../../components/ParallaxComponent/ParallaxComponent';
import MyInterests from '../../components/MyInterests/MyInterests';
import MyTravels from '../../components/MyTravels/MyTravels';
import MyHobbies from '../../components/MyHobbies/MyHobbies';
// import MyVideo from '../../components/MyVideo/MyVideo';
import img from '../../images/abstract-background.jpg';
import emoji from '../../images/wink.png';
import { 
    PhantomWrapper,
    Row,
    Column,
    Text,
    Container,
    Icon
} from './styled';


export default function About() {
    return (
        <PhantomWrapper>
            <ParallaxComponent
                img={img}
                heading=""
                main="Who am I?"
                subHeading="Learn more below" 
                />
            <MyInterests />
            <MyTravels />
            <MyHobbies />
                <Container>
                    <Row>
                        <Column lg="12" md="12" sm="12" xs="12">
                            <Text>What else...</Text>
                        </Column>
                    </Row>
                    <Row>
                        <Column lg="12" md="12" sm="12" xs="12">
                            <Text bod>
                               I'm a sucker for the humanities (hence my degree in history). It has shaped 
                               much of how I think and communicate with others. One of my favorite papers I 
                               wrote can be found <a href="https://www.academia.edu/9569784/The_History_and_Development_of_Islamic_Law" 
                               style={{color: "#003366"}} rel="noopener noreferrer" target="_blank"> here</a>. 
                               Take a look, but only if you're interested in reading about Islamic Jurisprudence<Icon src={emoji} alt="emoji"/>.
                            </Text>
                        </Column>
                    </Row>
                </Container>
            <Footer/>
        </PhantomWrapper>
    )
};