/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const BioCont = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;

  padding: 8px;
  margin: 2px;

  border: solid;
  border-width: 1px;

  font-size: 15px;
`;

const RowCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Class = styled.div`
  border: solid;
  border-width: 1px;

  margin: 2px;
`;

const Background = styled.div`
  border: solid;
  border-width: 1px;

  margin: 2px;
`;

const Archetype = styled.div`
  border: solid;
  border-width: 1px;

  margin: 2px;
`;

const Race = styled.div`
  border: solid;
  border-width: 1px;

  margin: 2px;
`;

const Alignment = styled.div`
  border: solid;
  border-width: 1px;

  margin: 2px;
`;

const Underlined = styled.u`
  color: red;
  font-size: 20px;
`;

const Placeholder = styled.div``;

export default function Bio({ info }) {
  return (
    <BioCont>
      <RowCont>
        <Class>
          Class
          <Underlined>{info.class}</Underlined>
        </Class>
        <Background>
          Background
          <Underlined>{info.background}</Underlined>
        </Background>
        <Archetype>
          Arch
          <Underlined>{info.archetype}</Underlined>
        </Archetype>
      </RowCont>
      <RowCont>
        <Race>
          Race
          <Underlined>{info.race}</Underlined>
        </Race>
        <Alignment>
          Align
          <Underlined>{info.alignment}</Underlined>
        </Alignment>
        <Placeholder />
      </RowCont>
    </BioCont>
  );
}
