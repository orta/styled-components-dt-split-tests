// RN only
import React from "react"
import styled from 'styled-components/native';

const SButton = styled.Button`
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
    <SButton
      title="Uses SC" onPress={() => ""}> GitHub
    </SButton>
  
);

import {Button} from "react-native"

export const Component2 = () => <Button title="not SC" onPress={() => ""} />