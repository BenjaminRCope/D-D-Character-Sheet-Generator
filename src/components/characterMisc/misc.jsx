/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import HP from './hp.jsx';
import Features from './features.jsx';

const Container = styled.div`
  border: solid;
  border-width: 1px;
`;

const MiscContainer = styled.div`
  border: solid;
  border-width: 1px;

  margin: 8px;
`;

const AC = styled.div``;

const Initiative = styled.div``;

const Speed = styled.div``;

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

export default function Misc({ info }) {
  return (
    <Container>
      <MiscContainer>
        <AC>
          ac
          {' '}
          {10 + statMatrix[info.dex]}
        </AC>
        <Initiative>
          init
          {' '}
          {statMatrix[info.dex]}
        </Initiative>
        <Speed>speed</Speed>
        <HP />
      </MiscContainer>
      <Features />
    </Container>
  );
}
