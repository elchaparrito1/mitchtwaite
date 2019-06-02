import styled from "styled-components";

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    color: #edeae7;
  }
`;

export const PhantomWrapper = styled.div`
    display: block;
    height: 100%;
    width: 100%;
`;
