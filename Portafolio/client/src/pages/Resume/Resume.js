import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { PhantomWrapper } from './styled';
import MyResume from '../../components/MyResume/MyResume';


class Resume extends React.Component {

    constructor(props) {
        super(props)
        this.footerRef = React.createRef();
        this.state = {
            measurement: ''
        }
    }
    
    componentDidMount() {
        let measurement = this.footerRef.current.offsetTop;
        // console.log(`Measurement: ${measurement}`)
        this.setState({
            measurement: measurement
        })
    }
    
    render() {
        return (
            <PhantomWrapper>
                <Navbar/>
                    <MyResume 
                    measurement={this.state.measurement}
                    />
                    <div ref={this.footerRef}>
                        <Footer/>
                    </div>
            </PhantomWrapper>
        )
    }
};

export default Resume;