/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const PDFButton = styled.button`
  position: fixed;
  top: 85px;
  right: 15px;
  height: 50px;
  width: 100px;
  background-color: black;
  color: white;
`;

export default function SaveToPDFButton({ saveCharacterInfo, showSave }) {
  if (showSave) {
    return (
      <PDFButton onClick={(event) => { saveCharacterInfo(event); }}>Save Character</PDFButton>
    );
  }
}
