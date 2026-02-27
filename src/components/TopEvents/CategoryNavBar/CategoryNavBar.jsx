import React from 'react';
import {LiveStreamBlock} from './LiveStreamBlock';
import { SoccerBallNavIcon } from '../../../assets/svg/SoccerBallNavIcon';
import styled from 'styled-components';
import TennisBallCategoryIcon from './TennisBallCategoryIcon';
import PuckCategoryIcon from './PuckCategoryIcon';

import PingPongCategoryIcon from './PingPongCategoryIcon';
import CricketCategoryIcon from './CricketCategoryIcon';
import PSControllerAltCategoryIcon from './PSControllerAltCategoryIcon';
import MenuCategoryIcon from './MenuCategoryIcon';
import ForwardCategoryIcon from './ForwardCategoryIcon';
const CategoryNavBarWrapper = styled.div`
  width: 100%;
  background: #013C2F;
  display: flex;
  align-items: center;
  
  min-height: 36px;
  box-sizing: border-box;
  
`;
// Styled wrapper for icons
const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #013C2F;
  width: 16px;
  height: 16px;
  svg {
    width: 2em;
    height: 2em;
    display: block;
  }
`;
const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
  color: #B0C8A2;
  font-family: Roboto, Arial, sans-serif;
  font-size: 12px;
  font-weight: 700;
  padding: 0 8px;
  height: 36px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #013C2F;
  }
`;

const IconPlaceholder = styled.div`
  width: 20px;
  height: 20px;
  background: #013C2F;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  color: #B0C8A2;
  font-size: 16px;
`;

const categories = [
  { name: 'Football', icon: SoccerBallNavIcon},
  { name: 'Tennis', icon: TennisBallCategoryIcon },
  { name: 'Tennis', icon: TennisBallCategoryIcon },
  { name: 'Ice Hockey', icon: PuckCategoryIcon },
  { name: 'Volleyball', icon: PuckCategoryIcon },
  { name: 'Table Tennis', icon: PingPongCategoryIcon },
  { name: 'Cricket', icon: CricketCategoryIcon },
  { name: 'Esports', icon: PSControllerAltCategoryIcon },
  
];

export const CategoryNavBar = () => {
  return (
    <CategoryNavBarWrapper>
      <LiveStreamBlock />
      {categories.map((cat, idx) => (
        <CategoryItem key={idx}>
          <IconPlaceholder>
              <IconWrapper>
                {typeof cat.icon === 'string' ? cat.icon : <cat.icon />}
              </IconWrapper>
          </IconPlaceholder>
          {cat.name}
        </CategoryItem>
      ))}
      {/* Burger menu button */}
      <CategoryItem style={{ marginLeft: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <IconPlaceholder>
          <IconWrapper>
            <MenuCategoryIcon />
          </IconWrapper>
        </IconPlaceholder>      
        <IconWrapper>
          <ForwardCategoryIcon />
        </IconWrapper>
        <span style={{ width: '2px', height: '24px', background: '#B0C8A2', margin: '0 8px', borderRadius: '1px', opacity: 0.5 }} />
      </CategoryItem>
      <IconPlaceholder>
          <IconWrapper>
            <PSControllerAltCategoryIcon />
          </IconWrapper>
        </IconPlaceholder>
        <IconWrapper>
          <ForwardCategoryIcon />
        </IconWrapper>
        <span style={{ width: '2px', height: '24px', background: '#B0C8A2', margin: '0 8px', borderRadius: '1px', opacity: 0.5 }} />
    </CategoryNavBarWrapper>
  );
};
            
