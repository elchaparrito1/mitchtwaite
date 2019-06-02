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

export const Modal = styled.div`
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
    margin: 10% auto;
    width: 50%;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
    animation-name: modalopen;
    animation-duration: var(--modal-duration);

    @media only screen and (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
    }
`;

export const ModalHeader = styled.div`
    background: white;
    padding: 15px;
    color: black;
`;

export const ModalFooter = styled.div`
    background: white;
    padding: 10px;
    color: black;
    text-align: center;
`;

export const ModalBody = styled.div`
    padding: 10px 20px;
    background: #fff;
`;

export const Close = styled.span`
    color: #ccc;
    float: right;
    font-size: 30px;
    color: black;
    cursor: pointer;

    :hover, focus {
        color: #003366;
    }
`;

export const Button = styled.button`
    border: none;
    background-color: none;
    color: black;
    cursor: pointer;
    float: right;
    font-family: "Lato", Helvetica, sans-serif;

    :hover {
        color: #003366;
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

//For the EmailModal code
export const Container = styled.div`
    border-radius: 5px;
`;

export const Input = styled.input`
    font-family: "Lato", Helvetica, sans-serif;
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    
    :focus {
        border-color: #003366;
        outline: 0 none;
    }

`;

export const TextArea = styled.textarea`
    font-family: "Lato", Helvetica, sans-serif;
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    height: 200px; 

    :focus {
        border-color: #003366;
        outline: 0 none;
    }
`;

export const Label = styled.label`
    font-family: "Lato", Helvetica, sans-serif;
`;

export const P = styled.p`
    font-family: "Lato", Helvetica, sans-serif;
    font-size: 20px;
    color: ${props => props.error ? "red" : "black"}
`;