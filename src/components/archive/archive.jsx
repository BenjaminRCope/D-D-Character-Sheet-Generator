import React from 'react';
import axios from 'axios';

const dbTest = () => {
  axios.get('/getCharacter')
    .then((result) => console.log(result.data))
    .catch((err) => console.log(err));
};

export default function Archive() {
  return (
    <div>
      <div>archive</div>
      <button type="button" onClick={(event) => { dbTest(event); }}>click</button>
    </div>
  );
}
