/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const NameCont = styled.div`
  border: solid;
  border-width: 1px;

  margin: 2px;
`;

const NameDisplay = styled.div`
  position: absolute;
  font-size: 30px;
`;

const NameCaption = styled.div`
  position: absolute;
  top: 195px;
  left: 357px;
  font-size: 15px;
`;

export default function Name({ name }) {
  return (
    <NameCont>
      <NameCaption>Name</NameCaption>
      <NameDisplay>{name}</NameDisplay>
    </NameCont>
  );
}
