/* eslint-disable react/prop-types */
import React from 'react';
// import styled from 'styled-components';

export default function HP({ maxHP }) {
  return (
    <div>
      Max Hit Points:
      {' '}
      {maxHP}
    </div>
  );
}
