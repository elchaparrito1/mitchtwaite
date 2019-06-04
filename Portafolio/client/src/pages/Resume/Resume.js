import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { PhantomWrapper } from "./styled";
import MyResume from "../../components/MyResume/MyResume";


class Resume extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
    return (
        <PhantomWrapper>
            <Navbar/>
                <MyResume/>
            <Footer/>
        </PhantomWrapper>
     )
    }
};

export default Resume;