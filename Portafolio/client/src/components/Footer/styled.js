import styled from "styled-components";
import { Link } from "react-router-dom";

export const Row = styled.div`
    &::after {
        content: "";
        clear: both;
        display: table;
    }
    background-color: ${props => props.copyright ? "rgba(#bfbfbf, 0.5)" : "#bfbfbf"};
    margin: 0 0 15px 0;
    
`;

function getWidthString(span) {
    if (!span) return;

    let width = span / 12 * 100;
    return `width ${width}%;`;
}

export const Column = styled.div`
    float: left;
    ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};

    @media only screen and (min-width: 768px) {
        ${({ sm }) => sm && getWidthString(sm)};
    }

    @media only screen and (min-width: 992px) {
        ${({ md }) => md && getWidthString(md)};
    }

    @media only screen and (min-width: 1200px) {
        ${({ lg }) => lg && getWidthString(lg)};
    }

`;

export const Foot = styled.div`
    background-color: #bfbfbf;
    border-top: 1px solid #E7E7E7;
    text-align: center;
    padding: 30px;
    position: relative;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
`;

export const Text = styled.h1`
    color: #1a1a1a;
    font-family: "Lato", Helvetica, sans-serif;
    font-size: ${props => props.copyright ? "1em" : "2em"};

    @media only screen and (min-width: 320px) and (max-width: 766px) {
        font-size: ${props => props.copyright ? "1em" : "1.8em"};
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        font-size: ${props => props.copyright ? "1em" : "2em"};
    }
`;

//Note that inside of these media queries you had conditional stuff set up on the margin-left, but it was causing a warning in the console.
//Styling has been removed and seems okay, but bear in mind you might need to add it back in.
//You also had to do this in Navbar and Parallax components. A solution could be to extend styles to new style component.
export const Links =  styled(Link)`
    color: #003366;
    font-family: "Lato", Helvetica, sans-serif;
    font-size: 1.4em;

    :hover {
        color: #003366;
        opacity: 0.5;
    }

    @media only screen and (max-width: 320px) {
        font-size: 1.2em;
        margin: 0 auto;
        margin-left: 5px
    }

    @media only screen and (min-width: 321px) and (max-width: 766px) {
        font-size: 1.3em;
        margin: 0 auto;
        margin-left: 5px;
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        font-size: 1.4em;
        margin: 0 auto;
        margin-left: 5px;
    }

    
`;

export const Icon = styled.img`
    height: 30px;
    width: 30px;

    :hover {
        cursor: pointer;
    }

    @media only screen and (max-width: 320px) {
        height: 25px;
        width: 25px;
        margin-left: ${props => props.connect ? "0" : "20px"};
    }

    @media only screen and (min-width: 321px) and (max-width: 766px) {
        height: 25px;
        width: 25px;
        margin-left: ${props => props.connect ? "0" : "30px"};
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        height: 30px;
        width: 30px;
        margin-left: ${props => props.connect ? "0" : "35px"};
    }
   
`;

export const Table = styled.table`
    margin: 0 auto; 
    table-layout: fixed; 
    width: ${props => props.linkers ? "30%" : "25%"};

    @media only screen and (max-width: 320px) {
        margin: 0 auto;
        table-layout: auto;   
        width: ${props => props.linkers ? "30%" : "25%"};
    }

    @media only screen and (min-width: 321px) and (max-width: 766px) {
        margin: 0 auto;
        table-layout: auto;   
        width: ${props => props.linkers ? "30%" : "25%"};
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        margin: 0 auto;
        table-layout: auto;   
        width: ${props => props.linkers ? "30%" : "25%"};
    }
`;

