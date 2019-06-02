import styled from "styled-components";

export const Row = styled.div`
    &::after {
        content: "";
        clear: both;
        display: table;
    }
    margin-bottom: ${props => props.break ? "100px" : ""}

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        margin-top: 0px;
        margin-bottom: ${props => props.break ? "30px" : ""};
    }

`;

function getWidthString(span) {
    if (!span) return;

    let width = span / 12 * 100;
    return `width ${width}%;`;
}

export const Column = styled.div`
    float: left;
    margin: 0 auto;
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

export const Container = styled.div`
    display: table;
    margin: 10vh 0 10vh 0;
    text-align: center;
    width: 92%;
    opacity: 2;
    padding: 10vh 0 15vh 0;

    @media only screen and (max-width: 320px) {
        padding: 5vh 0 5vh 0;
        width: 100%;
    }

    @media only screen and (min-width: 321px) and (max-width: 766px) {
        padding: 5vh 0 5vh 0;
        width: 100%;
    }

    @media only screen and (min-width: 767px) and (max-width: 1224px) {
        padding: 0 0 5vh 0;
        width: 100%;
    }
`;

export const MyContainer = styled.div`
    height: 480px;
    left: 50px;
    position: fixed;
    top: 70px;
    width: 400px;

    -moz-box-shadow: 0 0 25px #ccc;
    -webkit-box-shadow: 0 0 25px #ccc;
    box-shadow: 0 0 25px #ccc;
    transition: color 0.25s;

    @media only screen and (max-width: 320px) {
        height: 0;
        left: 0;
        margin: 0 auto;
        position: relative;
        top: 0;
        width: 90%

        -moz-box-shadow: 0 0 0px #ccc;
        -webkit-box-shadow: 0 0 0px #ccc;
        box-shadow: 0 0 0px #ccc;
        transition: color 0.25s;
    }

    @media only screen and (min-width: 321px) and (max-width: 1224px) {
        height: 0;
        left: 0;
        margin: 0 auto;
        position: relative;
        top: 0;
        width: 90%

        -moz-box-shadow: 0 0 0px #ccc;
        -webkit-box-shadow: 0 0 0px #ccc;
        box-shadow: 0 0 0px #ccc;
        transition: color 0.25s;
    }

    @media only screen and (min-width: 1225px) and (max-width: 1530px) {
        left: 0px;
        -moz-box-shadow: 0 0 0px #ccc;
        -webkit-box-shadow: 0 0 0px #ccc;
        box-shadow: 0 0 0px #ccc;
        transition: color 0.25s;
    }
`;

export const Photo = styled.img`
    width: 180px;
    height: 200px;
    border-radius: 50%;

    @media only screen and (max-width: 320px) {
        width: 135px;
        height: 155px;
    }

    @media only screen and (min-width: 321px) and (max-width: 767px) {
        width: 135px;
        height: 155px;
    }
`;

export const Icon = styled.img`
    height: 25px;
    width: 25px;
    margin-right: 5px;

    :hover {
        cursor: pointer;
    }

    @media only screen and (max-width: 320px) {
        height: 25px;
        width: 25px;
        
    }

    @media only screen and (min-width: 321px) and (max-width: 766px) {
        height: 25px;
        width: 25px;
        
    }

    @media only screen and (min-width: 767px) and (max-width: 1224px) {
        height: 30px;
        width: 30px;
    }
   
`;

export const A = styled.a`
    color: #0000FF;
    font-family: "Lato", Helvetica, sans-serif;
    font-size: 1.5em;

    :hover {
        cursor: pointer;
        opacity: 0.5;
    }

    @media only screen and (max-width: 320px) {
        font-size: 1.1em;
    }

    @media only screen and (min-width: 321px) and (max-width: 766px) {
        font-size: 1.2em;
    }

    @media only screen and (min-width: 767px) and (max-width: 1224px) {
        font-size: 1.4em;
    }
`;

export const Li = styled.li`
    color: gray;
    font-family: "Lato", Helvetica, sans-serif;
    font-size: 1.3em;
    list-style: none;
    margin: 10px;
    text-align: left;

    @media only screen and (max-width: 320px) {
        font-size: 1em;
        margin: 0 auto;
        width: 90%;
        text-align: center;
    }

    @media only screen and (min-width: 321px) and (max-width: 766px) {
        font-size: 1em;
        margin: 0 auto;
        width: 70%;
        text-align: center;
    }

    @media only screen and (min-width: 767px) and (max-width: 1224px) {
        font-size: 1.2em;
        margin: 0 auto;
        margin-bottom: 5px;
        width: 70%;
        text-align: center;
    }
`;

export const Th = styled.th`
    font-family: "Lato", Helvetica, sans-serif;
    margin: 2px;

    @media only screen and (min-width: 767px) and (max-width: 992px) {
        font-size: 1.3em;
    }

    @media only screen and (min-width: 993px) and (max-width: 1224px) {
        font-size: 0.9em;
    }

    @media only screen and (min-width: 1225px) {
        font-size: 1.2em;
    }
`;

export const Text = styled.h1`
    color: ${props => props.header ? "gray" : "black"};
    font-family: "Lato", Helvetica, sans-serif;
    font-size: ${props => props.header ? "2.5em" : "2em"};
    margin: 0 auto;
    text-align: center;
    width: 50%;
    margin-top: ${props => props.header ? "50px" : "60px"};
`;

export const TextHeader = styled(Text)`
    font-size: 2em;

    @media only screen and (min-width: 320px) and (max-width: 766px) {
        font-size: 1.5em;
        margin-top: 0px;
    }

    @media only screen and (min-width: 767px) and (max-width: 1224px) {
        font-size: 1.7;
        margin-top: 30px;
    }

    @media only screen and (min-width: 1225px) and (max-width: 1400px) {
        font-size: 1.8em;
        margin-top: 30px;
    }
`;

export const P = styled.p`
    color: ${props => props.heading ? "black" : "gray"};
    font-family: "Lato", Helvetica, sans-serif;
    font-size: 1.5em;
    text-align: left;
    width: ${props => props.indent ? "95%" : "100%"};
    margin-left: ${props => props.indent ? "30px" : ""};
    

    @media only screen and (min-width: 320px) and (max-width: 766px) {
        font-size: ${props => props.heading ? "1.1em" : "1em"};
        width: 90%;
        text-align: "left";
        margin: 0 auto;
        
    }

    @media only screen and (min-width: 767px) and (max-width: 1224px) {
        font-size: ${props => props.heading ? "1.3em" : "1.2em"};
        width: 90%;
        text-align: "left";
        margin: 0 auto;
    }

    @media only screen and (min-width: 1225px) and (max-width: 1400px) {
        font-size: ${props => props.heading ? "1.5em" : "1.3em"};
        width: 90%;
        text-align: "left";
        margin: 0 auto;
    }
`;



