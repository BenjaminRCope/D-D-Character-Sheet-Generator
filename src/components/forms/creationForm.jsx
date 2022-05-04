/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
// import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import StatSelector from './statSelector.jsx';

const SubmitButton = styled.input`
  margin-right: 0;
  height: 20px;
  width: 100px;
`;

const Dropdown = styled.select`
  width: 25%;
`;

const TextField = styled.input`
  width: 25%;
`;

const PromptContainer = styled.form`
  border: dotted;
  margin: 15px;
`;

export default function CreationForm({ submitHandler }) {
  const url = 'https://www.dnd5eapi.co/api/';

  const [formState, setFormState] = useState(1);
  const [charName, setCharName] = useState('');
  const [charClass, setCharClass] = useState('Barbarian');
  const [charRace, setCharRace] = useState('Dragonborn');
  const [charBackground, setCharBackground] = useState('Acolyte');
  const [charArchetype, setCharArchetype] = useState('');
  const [charAlign, setCharAlign] = useState('Lawful Good');
  const [charStats, setCharStats] = useState({});

  const [classList, setClassList] = useState([]);
  const [raceList, setRaceList] = useState([]);
  const [backgroundList, setBackgroundList] = useState([]);
  const [archList, setArchList] = useState([]);

  useEffect(() => {
    axios.get(`${url}classes`)
      .then((result) => {
        const data = result.data.results;
        const classes = [];

        data.forEach((profession) => classes.push(profession.name));

        setClassList(classes);
      })
      .catch((err) => console.log(err));

    axios.get(`${url}races`)
      .then((result) => {
        const data = result.data.results;
        const races = [];

        data.forEach((race) => races.push(race.name));
        setRaceList(races);
      })
      .catch((err) => console.log(err));

    axios.get(`${url}backgrounds`)
      .then((result) => {
        const data = result.data.results;
        const backgrounds = [];

        data.forEach((background) => backgrounds.push(background.name));
        setBackgroundList(backgrounds);
      })
      .catch((err) => console.log(err));
  }, []);

  const requestArchetypes = () => {
    axios.get(`${url}classes/${charClass.toLowerCase()}/subclasses/`)
      .then((result) => {
        const data = result.data.results;
        const archetypes = [];

        data.forEach((subclass) => archetypes.push(subclass.name));
        setArchList(archetypes);
        setCharArchetype(archetypes[0]);
      })
      .catch((err) => console.log(err));
  };

  const handlePageTurn = (event) => {
    if (formState === 2) {
      requestArchetypes();
    }
    event.preventDefault();
    const newPage = formState + 1;
    setFormState(newPage);
  };

  const compileCharacter = (event) => {
    event.preventDefault();

    const charInfo = {
      charName,
      charClass,
      charRace,
      charBackground,
      charArchetype,
      charAlign,
      charStats,
    };

    submitHandler(charInfo);
  };

  const compileStats = (event, stats) => {
    const statBlock = {
      str: stats[0],
      dex: stats[1],
      con: stats[2],
      int: stats[3],
      wis: stats[4],
      cha: stats[5],
    };
    setCharStats(statBlock);
    handlePageTurn(event);
  };

  if (formState === 1) {
    return (
      <PromptContainer onSubmit={(event) => { handlePageTurn(event); }}>
        <div>
          Character Name:
          <TextField type="text" onChange={(event) => { setCharName(event.target.value); }} />
        </div>
        <SubmitButton type="submit" value="Submit" />
      </PromptContainer>
    );
  } if (formState === 2) {
    return (
      <PromptContainer onSubmit={(event) => { handlePageTurn(event); }}>
        <div>
          Class:
          <Dropdown name="Class" onChange={(event) => { setCharClass(event.target.value); }}>
            {classList.map((profession, key) => (
              <option value={profession} key={key}>{profession}</option>))}
          </Dropdown>
        </div>
        <div>
          Race:
          <Dropdown name="Race" onChange={(event) => { setCharRace(event.target.value); }}>
            {raceList.map((race, key) => <option value={race} key={key}>{race}</option>)}
          </Dropdown>
        </div>
        <div>
          Background:
          <Dropdown name="Background" onChange={(event) => { setCharBackground(event.target.value); }}>
            {backgroundList.map((bg, key) => <option value={bg} key={key}>{bg}</option>)}
          </Dropdown>
        </div>
        <SubmitButton type="submit" value="Submit" />
      </PromptContainer>
    );
  } if (formState === 3) {
    return (
      <div>
        <StatSelector submitHandler={compileStats} />
      </div>
    );
  } if (formState === 4) {
    return (
      <PromptContainer onSubmit={(event) => { handlePageTurn(event); }}>
        <div>
          Archetype:
          <Dropdown onChange={(event) => { setCharArchetype(event.target.value); }}>
            {archList.map((archetype, key) => (
              <option value={archetype} key={key}>{archetype}</option>))}
          </Dropdown>
        </div>
        <div>
          Alignment
          <Dropdown onChange={(event) => { setCharAlign(event.target.value); }}>
            <option value="Lawful Good">Lawful Good</option>
            <option value="Neutral Good">Neutral Good</option>
            <option value="Chaotic Good">Chaotic Good</option>
            <option value="Lawful Good">Lawful Good</option>
            <option value="True Neutral">True Neutral</option>
            <option value="Chaotic Neutral">Chaotic Neutral</option>
            <option value="Lawful Evil">Lawful Evil</option>
            <option value="Neutral Evil">Neutral Evil</option>
            <option value="Chaotic Evil">Chaotic Evil</option>
            <option value="Who Cares About Alignment">Who Cares About Alignment</option>
          </Dropdown>
        </div>
        <SubmitButton type="submit" value="Submit" />
      </PromptContainer>
    );
  } if (formState === 5) {
    return (
      <div>
        <h3>Preview</h3>
        <div>
          Character Name:
          {charName}
        </div>
        <div>
          Class:
          {charClass}
        </div>
        <div>
          Archetype:
          {charArchetype}
        </div>
        <div>
          Race:
          {charRace}
        </div>
        <div>
          Background:
          {charBackground}
        </div>
        <div>
          Alignment:
          {charAlign}
        </div>
        <SubmitButton type="button" value="Generate Character Sheet" style={{ width: '200px' }} onClick={(event) => { compileCharacter(event); }} />
      </div>
    );
  }
}
