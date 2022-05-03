/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Strength from './statBlock/strength.jsx';
import Constitution from './statBlock/constitution.jsx';
import Dexterity from './statBlock/dexterity.jsx';
import Wisdom from './statBlock/wisdom.jsx';
import Intelligence from './statBlock/intelligence.jsx';
import Charisma from './statBlock/charisma.jsx';

const StatContainer = styled.div`
  border: solid;
  border-width: 1px;
`;

const statMatrix = {
  1: -5,
  2: -4,
  3: -4,
  4: -3,
  5: -3,
  6: -2,
  7: -2,
  8: -1,
  9: -1,
  10: 0,
  11: 0,
  12: 1,
  13: 1,
  14: 2,
  15: 2,
  16: 3,
  17: 3,
  18: 4,
  19: 4,
  20: 5,
};

export default function Stats({ info }) {
  return (
    <StatContainer>
      <Strength str={info.stats.str} mod={statMatrix[info.stats.str]} />
      <Dexterity dex={info.stats.dex} mod={statMatrix[info.stats.dex]} />
      <Constitution con={info.stats.con} mod={statMatrix[info.stats.con]} />
      <Intelligence int={info.stats.int} mod={statMatrix[info.stats.int]} />
      <Wisdom wis={info.stats.wis} mod={statMatrix[info.stats.wis]} />
      <Charisma cha={info.stats.cha} mod={statMatrix[info.stats.cha]} />
    </StatContainer>
  );
}
