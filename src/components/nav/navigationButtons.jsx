/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;

  margin-top: 150px;
`;

const Button = styled.button`
  height: 100px;
  width: 30%;

  margin-top: 20px;
  margin-left: 35%;
  margin-right: 35%;
`;

export default function Navigation({ onCreateCharacterClick, onViewCharacterClick }) {
  return (
    <ButtonContainer>
      <Button onClick={onCreateCharacterClick}>Create Character</Button>
      <Button onClick={onViewCharacterClick}>View Characters</Button>
    </ButtonContainer>
  );
}
