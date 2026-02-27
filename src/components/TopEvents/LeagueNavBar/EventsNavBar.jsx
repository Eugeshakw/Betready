
import { TrophyNavIcon } from '../../../assets/svg/TrophyNavIcon';
      
import React from 'react';
import { HomeIcon } from '../../../assets/svg/HomeIcon';
import { ForwardRightIcon } from '../../../assets/svg/ForwardRightIcon';
import { SoccerBallNavIcon } from '../../../assets/svg/SoccerBallNavIcon';
import styled from 'styled-components';
import { SearchIcon } from '../../../assets/svg/SearchIcon';



const NavBarWrapper = styled.div`
  width: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  margin-bottom: 2px;
  min-height: 36px;
  box-sizing: border-box;
`;

const NavIcons = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px 0 0 0;
    background: #397617;
  height: 36px;
  padding: 8px 6px;
  margin-right: 2px;
     
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  background: #397617;
  border-radius: 0 8px 0 0;
  flex: 1;
  padding-right: 8px;
  
`;
const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 32px;
  width: 32px;
  border-radius: 6px;
  transition: background 0.2s;
  &:hover {
    background: rgba(255,255,255,0.07);
  }
`;


const NavItem = styled.div`
  color: #B0C8A2;
  font-family: Roboto, Arial, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0 12px;
  height: 36px;
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: 0.85;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const NavSearch = styled.input`
  background: #013C2F;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  padding: 6px 36px 6px 12px;
  outline: none;
  width: 160px;
`;

const SearchIconStyled = styled(SearchIcon)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const EventsNavBar = () => (
  <NavBarWrapper>
    <NavIcons>
      <IconButton>
        <HomeIcon width={20} height={20} />
        <ForwardRightIcon width={20} height={20} />
      </IconButton>
      <IconButton>
        <SoccerBallNavIcon width={20} height={20} />
        <ForwardRightIcon width={20} height={20} />
      </IconButton>
      <IconButton>
        <TrophyNavIcon width={20} height={20} />
        <ForwardRightIcon width={20} height={20} />
      </IconButton>
    </NavIcons>
    <NavMenu>
      <NavItem>Matches</NavItem>
      <NavItem>Recommended</NavItem>
      <NavItem>Upcoming events</NavItem>
      <NavItem>1st period</NavItem>
      <NavItem>2nd period</NavItem>
      <SearchWrapper>
        <NavSearch placeholder="Search by match" />
        <SearchIconStyled width={20} height={20} />
      </SearchWrapper>
    </NavMenu>
  </NavBarWrapper>
);
