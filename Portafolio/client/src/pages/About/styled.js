import styled from "styled-components";

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    color: #edeae7;
  }
`;

export const Row = styled.div`
    &::after {
        content: "";
        clear: both;
        display: table;
    }
    margin: 35px;
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

export const PhantomWrapper = styled.div`
    display: block;
    height: 100%;
    width: 100%;
`;

export const Text = styled.h1`
    color: black;
    font-family: "Lato", Helvetica, sans-serif;
    font-size: ${props => props.bod ? "1.6em" : "2.5em"};
    margin: 0 auto;
    text-align: center;
    width: 50%;

    @media only screen and (max-width: 320px) {
        font-size: ${props => props.bod ? "1.2em" : "1.8em"};
        width: 90%
    }

    @media only screen and (min-width: 321px) and (max-width: 767px) {
        font-size: ${props => props.bod ? "1.3em" : "1.8em"};
        width: 90%
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        font-size: ${props => props.bod ? "1.5em" : "2.3em"};
        width: 90%
    }

    @media only screen and (min-width: 1025px) and (max-width: 1300px) {
    
    }
    
`;

export const Container = styled.div`
    background-color: #bfbfbf;
    display: table;
    margin: 10vh 0 10vh 0;
    text-align: center;
    width: 100%;
    opacity: 2;
`;

export const Icon = styled.img`
    height: 20px;
    width: 20px;

    :hover {
        cursor: pointer;
    }
`;