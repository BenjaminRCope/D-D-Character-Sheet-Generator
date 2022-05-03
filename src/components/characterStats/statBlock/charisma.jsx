/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const CharCont = styled.div`
  display: grid;
  grid-template-columns:1fr 2fr;
`;

const ModifierCont = styled.div`
  border: solid;
  border-width: 1px;
  margin: 2px;
`;

const ProfCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  border: solid;
  border-width: 1px;
  margin: 2px;
`;

export default function Charisma({ cha, mod }) {
  return (
    <CharCont>
      <ModifierCont>{cha}</ModifierCont>
      <ProfCont>
        Saving Throw:
        {mod}
        Deception:
        {mod}
        Intimidation:
        {mod}
        Performance:
        {mod}
        Persuasion:
        {mod}
      </ProfCont>
    </CharCont>
  );
}
