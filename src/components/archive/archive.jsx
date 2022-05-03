/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Archive() {
  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    axios.get('/getCharacterNames')
      .then((result) => {
        setNameList(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {nameList.map((name, key) => <div value={name} key={key}>{name}</div>)}
    </div>
  );
}
