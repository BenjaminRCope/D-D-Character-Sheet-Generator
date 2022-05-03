/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
// import styled from 'styled-components';

export default function StrengthSelector({
  selected, standardArray, str, handleChange,
}) {
  if (selected === 1) {
    return (
      <div>{str}</div>
    );
  }
  return (
    <select onChange={(event) => { handleChange(event); }}>
      {standardArray.map((number, key) => <option value={number} key={key}>{number}</option>)}
    </select>
  );
}
