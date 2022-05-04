/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const DexCont = styled.div`
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
  grid-template-rows: 1fr 1fr 1fr 1fr;

  border: solid;
  border-width: 1px;
  margin: 2px;
`;

export default function Dexterity({ dex, mod }) {
  return (
    <DexCont>
      <ModifierCont>{dex}</ModifierCont>
      <ProfCont>
        <div>
          Saving Throw:
          {mod}
        </div>
        <div>
          Acrobatics:
          {mod}
        </div>
        <div>
          Sleight of Hand:
          {mod}
        </div>
        <div>
          Stealth:
          {mod}
        </div>
      </ProfCont>
    </DexCont>
  );
}
