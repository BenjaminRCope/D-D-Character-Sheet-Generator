/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
// import axios from 'axios';

const FeaturesContainer = styled.div`
  border: solid;
  border-width: 1px;

  margin: 8px;
`;

export default function Features({ features }) {
  return (
    <FeaturesContainer>
      {features.map((feature, key) => <div value={feature} key={key}>{feature}</div>)}
    </FeaturesContainer>
  );
}
