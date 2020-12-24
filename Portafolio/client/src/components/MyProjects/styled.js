import styled from 'styled-components';

export const Row = styled.div`
    &::after {
        content: '';
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
    ${({ xs }) => (xs ? getWidthString(xs) : 'width: 100%')};

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
    background-color: #bfbfbf;
    display: table;
    margin: 10vh 0 10vh 0;
    text-align: center;
    width: 100%;
    opacity: 2;
    padding: 10vh 0 15vh 0;
`;

export const ChildDiv = styled.div`
    display: table-cell;
    vertical-align: middle;
    width: 50%;
`;

export const Text = styled.h1`
    color: black;
    font-family: 'Lato', Helvetica, sans-serif;
    font-size: ${props => props.header ? '3em' : '2.2em'};
    margin: 0 auto;
    text-align: center;
    width: 50%;
    margin-top: ${props => props.header ? '50px' : '30px'};

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        font-size: ${props => props.header ? '2em' : '1.4em'};
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        font-size: ${props => props.header ? '2.5em' : '1.4em'};
        
    }
    
`;

export const Boxtext = styled(Text)`
    margin-top: 20px;
    font-size: 1.5em;
`;

export const P = styled.p`
    font-family: 'Lato', Helvetica, sans-serif;
    margin: 5px;
`;

export const A = styled.a`
    color: #003366; 
    display: inline-block;
    margin: 0 5px 5px 5px;
    padding: 5px;
    
    :hover {
        cursor: pointer;
        color: #003366;
        opacity: 0.5;
    }

`;

export const List = styled.tr`
    background-color: none;
    list-style-type: none;

    &:hover ${A} {
        opacity: 1;
    }

    &:hover ${A}:hover {
        opacity: 0.5;
    }
`;

export const Icon = styled.img`
    height: 50px;
    margin: 10px 0 45px 0;
    width: 50px;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        width: 30px;
        height: 30px;
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        width: 40px;
        height: 40px;
    }
`;

