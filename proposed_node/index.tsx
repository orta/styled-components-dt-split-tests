// Node only
process.argv

// DOM
document.querySelector

import styled from "styled-components";

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
`;

export const Component = () => (
  <div>
    <Button
      href="https://github.com/styled-components/styled-components"
      target="_blank"
      rel="noopener"
    >
      GitHub
    </Button>
    <Button href="/docs">Documentation</Button>
  </div>
);

import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import {ThemeProvider} from "styled-components";
// import App from './App';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

const A =   () => <ThemeProvider theme={{}}>
        <Component />
    </ThemeProvider>
