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
    margin-bottom: ${props => props.myname ? "100px" : "20px"};
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

// export const Parallax = styled.div`
//     background-attachment: fixed;
//     background-color: black;
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: center;
//     overflow: hidden;
//     overflow-y: auto;
//     min-height: 500px;
//     height: 100vh;
//     z-index: -1;
// `;

export const ParentDiv = styled.div`
    display: table;
    height: 100vh;
    width: 100%;
    font-family: Roboto+Slab, Helvetica, sans-serif;
    position: absolute;
    top: 0;
`;

export const ChildDiv = styled.div`
    display: table-cell;
    vertical-align: middle;
`;

export const Header = styled.h1`
    color: black;
    
    font-size: ${props => props.primary ? "3em" : "5.5em"};
    margin-bottom: 50px;
    text-align: center;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        font-size: ${props => props.primary ? "1.8em" : "2.8em"};
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        font-size: ${props => props.primary ? "4em" : "6em"};
    }
    
`;

export const Text = styled.p`
    color: black;
    font-family: Roboto+Slab, Helvetica, sans-serif;
    font-size: 2.6em;
    text-align: center;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        font-size: 1.5em;
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        font-size: 3em;
    }

`;

export const Line = styled.hr`
    width: 1px;
    display: block;
    height: 1px;
    border: 0;
    border-top: 2px solid #003366;
    padding: 0;
  
    -webkit-animation: increase 3s;
    -moz-animation:    increase 3s; 
    -o-animation:      increase 3s; 
    animation:         increase 3s; 
    animation-fill-mode: forwards;

    @keyframes increase {
        100% {
            width: 40%;
        }

    }

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        @keyframes increase {
            100% {
                width: 80%;
            }
        }
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        @keyframes increase {
            100% {
                width: 70%;
            }
        }
    }
    
`;