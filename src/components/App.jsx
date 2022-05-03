import React, { useEffect } from 'react';
import axios from 'axios';

export default function App() {
  useEffect(() => {
    axios.get('/test')
      .then(() => console.log('done'))
      .catch((err) => console.log(err));
  });

  return (
    <div>hi</div>
  );
}
