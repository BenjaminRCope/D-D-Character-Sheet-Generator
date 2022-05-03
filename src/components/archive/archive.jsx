/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      {nameList.map((name, key) => (
        <button type="button" value={name} key={key} onClick={() => { onStoredCharSelect({ name }); }}>
          {name}
        </button>
      ))}
    </div>
  );
}
