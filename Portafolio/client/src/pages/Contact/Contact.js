import React from "react";
import {PhantomWrapper} from "./styled";
import Footer from "../../components/Footer/Footer";
import MyContacts from "../../components/MyContacts/MyContact";
import img from "../../images/google.jpg";
import ParallaxComponent from "../../components/ParallaxComponent/ParallaxComponent";


class Contact extends React.Component {
    state = {
        isChatOpen: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        window.scrollTo(0, 0);
    }

    myCallback = (dataFromChild) => {
        this.setState({
            isChatOpen: dataFromChild
        });
        // console.log(this.state.isChatOpen)
    }

    render() {
        return (
            <PhantomWrapper>
                <ParallaxComponent 
                    img={img}
                    heading="Need to reach me?"
                    main="Drop me a line"
                    subHeading="See contact options below" 
                    />
                    <MyContacts callbackFromParent={this.myCallback}/>
                <Footer isChatOpen={this.state.isChatOpen}/>
            </PhantomWrapper>
         )
        }
};

export default Contact;