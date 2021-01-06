import React, {useState, useEffect} from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import {
    Row, 
    List, 
    Pages, 
    SideLinks, 
    Links, 
    Column, 
    Hamburger, 
    HamburgerPages
} from '../Navbar/styled';

import './Hamburger.css';


export default function Navbar() {
    const [isDesktop, setIsDesktop] = useState(false);
    const [nav, setNav] = useState(false);
    // const [homepage, isHomepage] = useState(false);

    useEffect(() => {
        updatePredicate();
        window.addEventListener('resize', updatePredicate);

        return () => {
            window.removeEventListener('resize', updatePredicate);
        }
    }, []);
    
    const updatePredicate = () => {
      setIsDesktop(window.innerWidth > 1024 );
    }

    const navSet = (event) => {
        event.preventDefault();
        (nav) ? setNav(false) : setNav(true);
    }

    const hamburgerChoice = () => {
        const locale = window.location.href;
        if (locale.split('/').pop() === '') {
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

    const menuChoice = () => {
        const locale = window.location.href;
        if (locale.split('/').pop() === '') {
            return (
            <List>
                <Pages contact>
                    <Fade right>
                        <Link tabIndex="3" to="/contact">
                            <Links tabIndex="3" link>
                            Contact
                            </Links>
                        </Link>
                    </Fade>
                </Pages>
                <Pages>
                    <Fade right>
                        <Link tabIndex="2" to="/about">
                            <Links tabIndex="-1" link>
                            About
                            </Links>
                        </Link>
                    </Fade>
                </Pages>
                <Pages>
                    <Fade right>
                        <Link tabIndex="1" to="/resume">
                            <Links tabIndex="-1" link>
                            Resume
                            </Links>
                        </Link>
                    </Fade>
                </Pages>
            </List>
            )
        } else {
            return (
                <List>
                <Pages contact>
                    <Fade right>
                        <Link tabIndex="4" to="/contact">
                            <Links tabIndex="-1" link>
                            Contact
                            </Links>
                        </Link>
                    </Fade>
                </Pages>
                <Pages>
                    <Fade right>
                        <Link tabIndex="3" to="/about">
                            <Links tabIndex="-1" link>
                            About
                            </Links>
                        </Link>
                    </Fade>
                </Pages>
                <Pages>
                    <Fade right>
                        <Link tabIndex="2" to="/resume">
                            <Links tabIndex="-1" link>
                            Resume
                            </Links>
                        </Link>
                    </Fade>
                </Pages>
                <Pages>
                    <Fade right>
                        <Link tabIndex="1" to="/">
                            <Links tabIndex="-1" link>
                            Home
                            </Links>
                        </Link>
                    </Fade>
                </Pages>
            </List>
            )
        }
    }

    const hamStyle = nav ? {width: '250px'} : {width: '0'};
    const navStyle = window.location.href.split('/').pop() === '' ? {} : {backgroundColor: 'black'};
    return (
          <div>
              {!isDesktop ? (
                  <div>
                      <div id="mySidenav" style={hamStyle} className="sidenav">
                          <span className="closebtn" onClick={navSet}>&times;</span>
                              {hamburgerChoice()}
                          </div>
                      <Row>
                          <Column lg="12" md="12" sm="12" xs="12">
                              <table style={{float: "left"}}>
                                  <tbody>
                                      <List>
                                          <HamburgerPages>
                                              <Fade left cascade>
                                                  <Hamburger onClick={navSet}>&#9776;</Hamburger>
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
                  (
                  <Row style={navStyle}>
                      <Column lg="12" md="12" sm="12" xs="12">
                          <table style={{float: "right"}}>
                              <tbody>
                                  {menuChoice()} 
                          </tbody>
                      </table>
                  </Column>
              </Row>
              )}
          </div>
    )
};