/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ArchivedCharacterList = styled.div`
  margin: auto;
  width: 50%;
  padding: 10px;
  text-align: center;
`;

const ArchivedCharacter = styled.button`
  width: 50%;
  height: 50px;
`;

export default function Archive({ onStoredCharSelect }) {
  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    axios.get('/getAllCharacters')
      .then((result) => {
        const names = [];
        result.data.forEach((char) => {
          if (char.name) {
            names.push(char.name);
          }
        });
        setNameList(names);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ArchivedCharacterList>
      {nameList.map((name, key) => (
        <ArchivedCharacter type="button" value={name} key={key} onClick={() => { onStoredCharSelect({ name }); }}>
          {name}
        </ArchivedCharacter>
      ))}
    </ArchivedCharacterList>
  );
}
