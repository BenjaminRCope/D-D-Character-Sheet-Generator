/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import styled from 'styled-components';
import React, { useState } from 'react';

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: 140px 150px 150px 150px 150px 150px;
`;

const Stat = styled.div`
  display: grid;
  grid-tempate-rows: 1fr 1fr;
`;

const ButtonContainer = styled.div`
  margin: 8px;
`;

export default function StatSelector({ submitHandler }) {
  const [rolled, setRolled] = useState(false);
  const [str, setStr] = useState(undefined);
  const [dex, setDex] = useState(14);
  const [con, setCon] = useState(13);
  const [int, setInt] = useState(12);
  const [wis, setWis] = useState(10);
  const [cha, setCha] = useState(8);

  const diceRoller = () => {
    const rollResults = [];

    for (let i = 0; i < 4; i += 1) {
      const roll = Math.floor(Math.random() * 6) + 1;
      rollResults.push(roll);
    }

    rollResults.sort((a, b) => b - a).pop();
    return rollResults.reduce((sum, a) => sum + a, 0);
  };

  const rollHandler = (event) => {
    if (!rolled) setRolled(true);
    event.preventDefault();

    const listOfStats = [];
    for (let j = 0; j < 6; j += 1) {
      const stat = diceRoller();
      listOfStats.push(stat);
    }

    setStr(listOfStats[0]);
    setDex(listOfStats[1]);
    setCon(listOfStats[2]);
    setInt(listOfStats[3]);
    setWis(listOfStats[4]);
    setCha(listOfStats[5]);
  };

  if (!rolled) {
    return (
      <form>
        <input type="submit" value="Roll" onClick={(event) => { rollHandler(event); }} />
      </form>
    );
  }

  return (
    <div>
      <StatsContainer>
        <Stat>
          <div>Strength</div>
          <div>{str}</div>
        </Stat>
        <Stat>
          <div>Dexterity</div>
          <div>{dex}</div>
        </Stat>
        <Stat>
          <div>Constitution</div>
          <div>{con}</div>
        </Stat>
        <Stat>
          <div>Intelligence</div>
          <div>{int}</div>
        </Stat>
        <Stat>
          <div>Wisdom</div>
          <div>{wis}</div>
        </Stat>
        <Stat>
          <div>Charisma</div>
          <div>{cha}</div>
        </Stat>
      </StatsContainer>
      <ButtonContainer>
        <input type="submit" value="Roll Again" onClick={(event) => { rollHandler(event); }} />
        <form onSubmit={(event) => { submitHandler(event, [str, dex, con, int, wis, cha]); }}>
          <input type="submit" value="Submit" />
        </form>
      </ButtonContainer>
    </div>
  );
}
