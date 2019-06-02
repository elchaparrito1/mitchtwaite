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
    background-color: #edeae7;
    display: table;
    margin: 0 0 10vh 0;
    text-align: center;
    width: 100%;
    opacity: 2;

    @media only screen and (max-width: 320px) {
        display: block;
    }

    @media only screen and (min-width: 321px) and (max-width: 767px) {
        display: block;
    }

    @media only screen and (min-width: 767px) and (max-width: 1023px) {
        
    }

    @media only screen and (min-width: 1024px) and (max-width: 1300px) {
    
    }
`;

export const PhantomWrapper = styled.div`
    display: block;
    height: 100%;
    width: 100%;
`;

export const Video = styled.video`
    width: 580px;
    height: 400px;
    display: block;
    margin: 0 auto;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    background-color: rgba(0,0,0,.87);

    :focus {
        border: 0;
        outline: none;
    }

    :active {
        border: 0;
        outline: none;
    }

    @media only screen and (max-width: 320px) {
        width: 100%;
        height: 100%;
        
    }

    @media only screen and (min-width: 321px) and (max-width: 767px) {
        width: 100%;
        height: 100%;
    }

    @media only screen and (min-width: 767px) and (max-width: 1023px) {
        
    }

    @media only screen and (min-width: 1024px) and (max-width: 1300px) {
    
    }
`;

export const Img = styled.img`
    width: 65px;
    height: 65px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    margin-bottom: 15px;
    
    @media only screen and (max-width: 320px) {
        width: 40px;
        height: 40px;
    }

    @media only screen and (min-width: 321px) and (max-width: 767px) {
        width: 40px;
        height: 40px;
    }

    @media only screen and (min-width: 767px) and (max-width: 1023px) {
        width: 45px;
        height: 45px;
    }

    @media only screen and (min-width: 1024px) and (max-width: 1300px) {
        width: 45px;
        height: 45px;
    }
`;

export const Text = styled.h1`
    color: black;
    font-family: "Lato", Helvetica, sans-serif;
    font-size: 2.5em;
    margin: 0 auto;
    text-align: center;
    width: 50%;
    
    @media only screen and (max-width: 320px) {
        font-size: 1.5em;
        width: 90%;
    }

    @media only screen and (min-width: 321px) and (max-width: 767px) {
        font-size: 1.5em;
        width: 90%;
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        font-size: 2.3em;
        width: 90%;
    }

    @media only screen and (min-width: 1024px) and (max-width: 1300px) {
       
    }
`;