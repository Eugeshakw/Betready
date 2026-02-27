import React from 'react';
import styled from 'styled-components';

import img1 from '../assets/images/casinoSlider/img1.png';
import img2 from '../assets/images/casinoSlider/img2.png';
import img3 from '../assets/images/casinoSlider/img3.png';
import img4 from '../assets/images/casinoSlider/img4.png';
import img5 from '../assets/images/casinoSlider/img5.png';
import img6 from '../assets/images/casinoSlider/img6.png';
import img7 from '../assets/images/casinoSlider/img7.png';
import img8 from '../assets/images/casinoSlider/img8.png';

const GameSliderWrapper = styled.div`
  width: 100%;
  margin: 0 auto 24px auto;
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 8px;
  margin-bottom: 8px;
  
`;

const GameCard = styled.div`
  width: 100%;
  background: #143c2b;
  min-height: 126px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  position: relative;
  padding-bottom: 5px;
`;

const GameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  margin-bottom: 5px;
  
`;

const GameTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  
`;

const games = [
  { title: 'Online Casino', img: img1 },
  { title: 'Bingo', img: img2 },
  { title: 'Pogo Slots', img: img3 },
  { title: 'Blackjack', img: img4 },
  { title: 'Crystal Slots', img: img5 },
  { title: 'Mayan tomb', img: img6 },
  { title: 'Burning hot', img: img7 },
  { title: 'Crash', img: img8 },
];

export const GameSlider = () => (
  <GameSliderWrapper>
    {games.map((game, idx) => (
      <GameCard key={idx}>
        <GameImage src={game.img} alt={game.title} />
        <GameTitle>{game.title}</GameTitle>
      </GameCard>
    ))}
  </GameSliderWrapper>
);
