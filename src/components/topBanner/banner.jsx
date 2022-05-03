/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const BannerBar = styled.div`
  background-color: black;
  height: 75px;

  text-align: right;
`;

const HomeButton = styled.div`
  color: white;
  position: absolute;
  left: 25px;
  top: 25px;
`;

const Icon = styled.img`
  width: 75px;
  height: 75px;
`;

export default function TopBanner({ onHomeClick }) {
  return (
    <BannerBar>
      <HomeButton onClick={onHomeClick}>Home</HomeButton>
      <Icon src="https://i.pinimg.com/564x/a7/27/6a/a7276a00b478e0636d932cf8c4e0d88f.jpg" alt="icon" />
    </BannerBar>
  );
}
