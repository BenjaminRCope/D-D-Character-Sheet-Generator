/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import styled from 'styled-components';
import React, { useState } from 'react';

import StrengthSelector from './statSelectors/strSelector.jsx';

const AvailableStats = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
`;

const Stat = styled.div`
  margin: 10px;
`;

export default function StatSelector({ submitHandler }) {
  const [standardArray, setStandardArray] = useState([15, 14, 13, 12, 10, 8]);
  const [str, setStr] = useState(undefined);
  const [dex, setDex] = useState(14);
  const [con, setCon] = useState(13);
  const [int, setInt] = useState(12);
  const [wis, setWis] = useState(10);
  const [cha, setCha] = useState(8);

  const [selectionMatrix, setSelectionMatrix] = useState([0, 0, 0, 0, 0, 0]);

  const removeValue = (value) => {
    const newArr = [];
    for (let i = 0; i < standardArray.length; i += 1) {
      if (standardArray[i] !== Number(value)) {
        newArr.push(standardArray[i]);
      }
    }
    setStandardArray(newArr);
  };

  const handleSelectStr = (event) => {
    setStr(event.target.value);
    removeValue(event.target.value);

    const newMatrix = selectionMatrix;
    newMatrix[0] = 1;

    setSelectionMatrix(newMatrix);
  };

  const handleSelectDex = (event) => {
    setDex(event.target.value);
    removeValue(event.target.value);
  };

  const handleSelectCon = (event) => {
    setCon(event.target.value);
    removeValue(event.target.value);
  };

  const handleSelectInt = (event) => {
    setInt(event.target.value);
    removeValue(event.target.value);
  };

  const handleSelectWis = (event) => {
    setWis(event.target.value);
    removeValue(event.target.value);
  };

  const handleSelectCha = (event) => {
    setCha(event.target.value);
    removeValue(event.target.value);
  };

  return (
    <form onSubmit={(event) => { submitHandler(event, [str, dex, con, int, wis, cha]); }}>
      <div>Available Stats </div>
      <AvailableStats>
        {standardArray.map((number, key) => <Stat key={key}>{number}</Stat>)}
      </AvailableStats>
      {/* <AvailableStats>{standardArray}</AvailableStats> */}
      <div>Strength</div>
      <StrengthSelector
        selected={selectionMatrix[0]}
        standardArray={standardArray}
        str={str}
        handleChange={handleSelectStr}
      />
      <div>Dexterity</div>
      <select onChange={(event) => { handleSelectDex(event); }}>
        {standardArray.map((number, key) => <option value={number} key={key}>{number}</option>)}
      </select>
      <div>Constitution</div>
      <select onChange={(event) => { handleSelectCon(event); }}>
        {standardArray.map((number, key) => <option value={number} key={key}>{number}</option>)}
      </select>
      <div>Intelligence</div>
      <select onChange={(event) => { handleSelectInt(event); }}>
        {standardArray.map((number, key) => <option value={number} key={key}>{number}</option>)}
      </select>
      <div>Wisdom</div>
      <select onChange={(event) => { handleSelectWis(event); }}>
        {standardArray.map((number, key) => <option value={number} key={key}>{number}</option>)}
      </select>
      <div>Charisma</div>
      <select onChange={(event) => { handleSelectCha(event); }}>
        {standardArray.map((number, key) => <option value={number} key={key}>{number}</option>)}
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
}
