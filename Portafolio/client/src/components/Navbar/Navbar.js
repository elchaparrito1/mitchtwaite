import React from "react";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
import {
    Row, 
    List, 
    Pages, 
    SideLinks, 
    Links, 
    Column, 
    Hamburger, 
    HamburgerPages
} from "../Navbar/styled";

import "./Hamburger.css";


class Navbar extends React.Component {
    state = {
        isDesktop: false,
        nav: false,
        homepage: false
    }

    componentDidMount = () => {
        // console.log(window.location.href.split("/").pop());
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
      }
    
      componentWillUnmount = () => {
        window.removeEventListener("resize", this.updatePredicate);
      }
    
      updatePredicate = () => {
        this.setState({ isDesktop: window.innerWidth > 1024 });
      }

    nav = (event) => {
        event.preventDefault();
        if(this.state.nav) {
            this.setState({
                nav: false
            });
          } else if (!this.state.nav) {
            this.setState({
                nav: true
            });
          }
    }

    hamburgerChoice = () => {
        const locale = window.location.href;
        if (locale.split("/").pop() === "") {
            return (
                <div>
                <Link to="/"><SideLinks ham-link>Home</SideLinks></Link>
                <Link to="/resume"><SideLinks ham-link >Resume</SideLinks></Link>
                <Link to="/about"><SideLinks ham-link >About</SideLinks></Link>
                <Link to="/contact"><SideLinks contact ham-link>Contact</SideLinks></Link>
                </div>
            )
        } else {
            return (
                <div>
                <Link to="/"><SideLinks ham-link >Home</SideLinks></Link>
                <Link to="/resume"><SideLinks ham-link >Resume</SideLinks></Link>
                <Link to="/about"><SideLinks ham-link >About</SideLinks></Link>
                <Link to="/contact"><SideLinks contact ham-link>Contact</SideLinks></Link>
                </div>
            )
        }
    }

    menuChoice = () => {
        const locale = window.location.href;
        if (locale.split("/").pop() === "") {
            return (
            <List>
                <Pages contact>
                    <Fade right><Link to="/contact"><Links link>Contact</Links></Link></Fade>
                </Pages>
                <Pages>
                    <Fade right><Link to="/about"><Links link>About</Links></Link></Fade>
                </Pages>
                <Pages>
                    <Fade right><Link to="/resume"><Links link>Resume</Links></Link></Fade>
                </Pages>
            </List>
            )
        } else {
            return (
                <List>
                <Pages contact>
                    <Fade right><Link to="/contact"><Links link>Contact</Links></Link></Fade>
                </Pages>
                <Pages>
                    <Fade right><Link to="/about"><Links link>About</Links></Link></Fade>
                </Pages>
                <Pages>
                    <Fade right><Link to="/resume"><Links link>Resume</Links></Link></Fade>
                </Pages>
                <Pages>
                    <Fade right><Link to="/"><Links link>Home</Links></Link></Fade>
                </Pages>
            </List>
            )
        }
    }
          

  render() {
      const isDesktop = this.state.isDesktop;
      const hamStyle = this.state.nav ? {width: "250px"} : {width: "0"};
      const navStyle = window.location.href.split("/").pop() === "" ? {} : {backgroundColor: "black"};
      return (
            <div>
                {!isDesktop ? (
                    <div>
                        <div id="mySidenav" style={hamStyle} className="sidenav">
                            <span className="closebtn" onClick={this.nav}>&times;</span>
                                {this.hamburgerChoice()}
                            </div>
                        <Row>
                            <Column lg="12" md="12" sm="12" xs="12">
                                <table style={{float: "left"}}>
                                    <tbody>
                                        <List>
                                            <HamburgerPages>
                                                <Fade left cascade>
                                                    <Hamburger onClick={this.nav}>&#9776;</Hamburger>
                                                </Fade>
                                            </HamburgerPages>
                                        </List>
                                    </tbody>
                                </table>
                            </Column>
                        </Row>
                    </div>
                    ) 
                    : 
                    (<Row style={navStyle}>
                        <Column lg="12" md="12" sm="12" xs="12">
                            <table style={{float: "right"}}>
                                <tbody>
                                    {this.menuChoice()} 
                            </tbody>
                        </table>
                    </Column>
                </Row>)}
            </div>
        )
    }
}

export default Navbar;