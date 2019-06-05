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

export const Button = styled.button`
    border: none;
    background-color: #f6f6f6;
    color: black;
    height: 50px;
    font-size: 1.1em
    font-family: "Lato", Helvetica, sans-serif;

    :hover {
        color: #003366;
        cursor: pointer;
    }

    :focus {
        border: 0;
        outline: none;
    }

    :active {
        border: 0;
        outline: none;
    }

    @media only screen and (min-width: 320px) and (max-width: 1024px) {
        border: none;
        color: none;
    }
`;

export const H2 = styled.h2`
    font-family: "Lato", Helvetica, sans-serif;
    font-size: 18px;
    margin-bottom: 0;
    color: white;
`;

export const ChatWidge = styled.div`
    position: fixed;
    right: 40px;
    bottom: 40px;
    width: 400px;
    border: 1px solid #ccc;
    z-index: 10;

    @media only screen and (max-width: 320px) {
        margin: 0 auto;
        width: 300px;
        left: 0;
        right: 0;
    }

    @media only screen and (min-width: 321px) and (max-width: 767px) {
        margin: 0 auto;
        width: 300px;
        left: 0;
        right: 0;
    }
`;

export const ChatHeader = styled.header`
    width: 100%;
    height: 50px;
    background-color: black;
    display: flex;
    justify-content: center;
    top: 0;
`;

export const ChatBody = styled.section`
    height: 350px;
    overflow-y: auto;
    padding: 10px;
    background: white;
`;

export const MessageInput = styled.input`
    border-radius: 0;
    font-family: "Lato", Helvetica, sans-serif;
    border: none;
    height: 50px;
    padding: 20px;
    font-size: 16px;
    background-color: #f6f6f6;
   
    float: left;

    :focus {
        outline: #003366;
    }

    :active {
        outline: #003366;
    }
`;

