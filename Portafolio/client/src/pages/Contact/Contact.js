import React from 'react';
import { PhantomWrapper } from './styled';
import Footer from '../../components/Footer/Footer';
import MyContacts from '../../components/MyContacts/MyContact';
import img from '../../images/google.jpg';
import ParallaxComponent from '../../components/ParallaxComponent/ParallaxComponent';


export default function Contact() {
    return (
        <PhantomWrapper>
            <ParallaxComponent 
                img={img}
                heading="Need to reach me?"
                main="Drop me a line"
                subHeading="See contact options below" 
                />
                <MyContacts />
            <Footer />
        </PhantomWrapper>
    )
};