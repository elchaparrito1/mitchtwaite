import styled from "styled-components";

export const Row = styled.div`
    &::after {
        content: "";
        clear: both;
        display: table;
    }
    
`;

function getWidthString(span) {
    if (!span) return;

    let width = span / 12 * 100;
    return `width ${width}%;`;
}

export const Column = styled.div`
    float: left;
    margin-bottom: ${props => props.skill ? "65px" : "0"};
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
    background-color: #edeae7;
    display: table;
    margin: 10vh 0 10vh 0;
    text-align: center;
    width: 100%;
`;

export const ChildDiv = styled.div`
    display: table-cell;
    vertical-align: middle;
    width: 50%;
`;

export const Text = styled.h1`
    color: ${props => props.skill ? "#003366" : "black"};
    font-family: "Lato", Helvetica, sans-serif;
    font-size: ${props => props.header ? "3em" : "2em"};
    margin: 0 auto;
    
    text-align: center;
    width: 50%;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        font-size: ${props => props.header ? "2em" : "1.5em"};
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        font-size: ${props => props.header ? "2.5em" : "2em"};
    }

`;

export const Icon = styled.img`
    height: ${props => props.chevron ? "50px" : "100px;"};
    margin: 10px 0 10px 0;
    width: ${props => props.chevron ? "50px" : "100px;"};

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        height: ${props => props.chevron ? "30px" : "90px;"};
        width: ${props => props.chevron ? "30px" : "90px;"};
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        height: ${props => props.chevron ? "40px" : "100px;"};
        width: ${props => props.chevron ? "40px" : "100px;"};
    }
`;

