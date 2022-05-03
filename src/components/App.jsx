/* eslint-disable no-console */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import TopBanner from './topBanner/banner';

import Bios from './characterBios/bios';
import Stats from './characterStats/stats';
import Misc from './characterMisc/misc';

import CreationForm from './forms/creationForm';

import Navigation from './nav/navigationButtons';
import SaveToPDFButton from './nav/saveToPDFbutton';

import Archive from './archive/archive';

const PageFrame = styled.div`
  padding: 10px;
`;

const ComponentsFrame = styled.div`
  display: grid;
  grid-template-rows: 1fr 6fr;

  padding: 10px;
  min-height: 900px;

  border: solid;
  border-width: 1px;
  border-radius: 10px;
`;

const BottomContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

export default function App() {
  const [pageState, setPageState] = useState('buttons');
  const [biosInfo, setBiosInfo] = useState({});
  const [statsInfo, setStatsInfo] = useState({});
  const [miscInfo, setMiscInfo] = useState({});
  const [currentChar, setCurrentChar] = useState({});
  const [showSave, setShowSave] = useState(true);

  const onStoredCharSelect = (name) => {
    const queryName = name.name;

    axios.get('/getCharByName', { params: { queryName } })
      .then((char) => {
        const charInfo = char.data[0];
        setShowSave(false);
        setBiosInfo({
          name: charInfo.charName,
          class: charInfo.charClass,
          background: charInfo.charBackground,
          archetype: charInfo.charArchetype,
          race: charInfo.charRace,
          alignment: charInfo.charAlign,
        });
        setStatsInfo({
          stats: charInfo.stats,
        });
        setMiscInfo({
          dex: charInfo.stats.dex,
          race: charInfo.charRace,
          con: charInfo.stats.con,
          class: charInfo.charClass,
        });
      })
      .then(() => setPageState('display'))
      .catch((err) => console.log(err));
  };

  const onHomeClick = () => {
    setPageState('buttons');
  };

  const onCreateCharacterClick = () => {
    setPageState('create');
  };

  const onViewCharacterClick = () => {
    setPageState('archive');
  };

  const generateCharacterSheet = (charInfo) => {
    setShowSave(true);
    setCurrentChar(charInfo);
    setBiosInfo({
      name: charInfo.charName,
      class: charInfo.charClass,
      background: charInfo.charBackground,
      archetype: charInfo.charArchetype,
      race: charInfo.charRace,
      alignment: charInfo.charAlign,
    });
    setStatsInfo({
      stats: charInfo.charStats,
    });
    setMiscInfo({
      dex: charInfo.charStats.dex,
      race: charInfo.charRace,
      con: charInfo.charStats.con,
      class: charInfo.charClass,
    });
    setPageState('display');
  };

  const saveCharacterInfo = (event) => {
    event.preventDefault();

    axios.post('/createCharacter', { currentChar })
      .then(() => console.log('posted'))
      .catch((err) => console.log(err));

    // setPageState('buttons');
  };

  if (pageState === 'buttons') {
    return (
      <div>
        <TopBanner onHomeClick={onHomeClick} />
        <Navigation
          onCreateCharacterClick={onCreateCharacterClick}
          onViewCharacterClick={onViewCharacterClick}
        />
      </div>
    );
  } if (pageState === 'display') {
    return (
      <div>
        <TopBanner onHomeClick={onHomeClick} />
        <SaveToPDFButton saveCharacterInfo={saveCharacterInfo} showSave={showSave} />
        <PageFrame>
          <ComponentsFrame>
            <Bios info={biosInfo} />
            <BottomContainer>
              <Stats info={statsInfo} />
              <Misc info={miscInfo} />
            </BottomContainer>
          </ComponentsFrame>
        </PageFrame>
      </div>
    );
  } if (pageState === 'create') {
    return (
      <div>
        <TopBanner onHomeClick={onHomeClick} />
        <CreationForm submitHandler={generateCharacterSheet} />
      </div>
    );
  } if (pageState === 'archive') {
    return (
      <div>
        <TopBanner onHomeClick={onHomeClick} />
        <Archive onStoredCharSelect={onStoredCharSelect} />
      </div>
    );
  }
}
