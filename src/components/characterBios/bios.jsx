/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Name from './name.jsx';
import Bio from './bio.jsx';

const BiosCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;

  padding: 10px;
  margin: 2px;

  border: solid;
  border-width: 1px;
`;

export default function Bios({ info }) {
  return (
    <BiosCont>
      <Name name={info.name} />
      <Bio info={info} />
    </BiosCont>
  );
}
