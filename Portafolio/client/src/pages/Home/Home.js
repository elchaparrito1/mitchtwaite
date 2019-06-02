import React, {Component} from "react";
import ParallaxComponent from "../../components/ParallaxComponent/ParallaxComponent";
import MyFocus from "../../components/MyFocus/MyFocus";
import MySkills from "../../components/MySkills/MySkills";
import MyProjects from "../../components/MyProjects/MyProjects";
import Footer from "../../components/Footer/Footer";
import { PhantomWrapper } from "./styled";
import img from "../../images/abstract-background.jpg";



class Home extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <PhantomWrapper>
                <ParallaxComponent 
                    img={img}
                    heading="Hello. My name is"
                    main="MITCH WAITE"
                    subHeading="I live to code."
                    />
                    <MyFocus/>
                    <MyProjects/>
                    <MySkills/>
                <Footer/>
            </PhantomWrapper>
        )
    }
}

export default Home;