/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const IntCont = styled.div`
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
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;

  border: solid;
  border-width: 1px;
  margin: 2px;
`;

export default function Intelligence({ int, mod }) {
  return (
    <IntCont>
      <ModifierCont>{int}</ModifierCont>
      <ProfCont>
        <div>
          Saving Throw:
          {mod}
        </div>
        <div>
          Arcana:
          {mod}
        </div>
        <div>
          History:
          {mod}
        </div>
        <div>
          Investigation:
          {mod}
        </div>
        <div>
          Nature:
          {mod}
        </div>
        <div>
          Religion:
          {mod}
        </div>
      </ProfCont>
    </IntCont>
  );
}
