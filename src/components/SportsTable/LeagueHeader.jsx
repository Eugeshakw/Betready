


import React from "react";
import ForwardIcon from "./ForwardIcon";
import styled from "styled-components";

const LeagueHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #a3bfa3;
  font-weight: bold;
  font-size: 16px;
  padding: 8px 16px;
`;
const LeagueEmptySpan = styled.span`
    /* width: 100%; */
    height: 16px;
    display: block;
    color: #00251D;
    text-align: center;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const LeagueExtraBlock = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 37px;
`;

const LeagueExtraItem = styled.div`
  display: flex;
  align-items: center;
  
  gap: 45px;
`;

const LeagueExtraSpan = styled.span`
  
  
  color: #00251D;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
 
`;

const LeagueExtraText = styled.p`
  margin: 0;
  text-align: center;
  
  
  font-weight: normal;
  margin-bottom: 4px !important;

  color: #00251D;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
`;

const ForwardIconBlock = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding-left: 6px;
  padding-right: 6px; 
  background: #397617;
  border: none;
  cursor: pointer;
`;

const LeagueExtraContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  
`;
const LeagueInfoBlock = styled.div`
  display: flex;
  align-items: center;
`;
const LeagueIcon = styled.span`
  display: flex;
  align-items: center;
  
`;

const LeagueName = styled.span`
  margin-right: 16px;
`;

const HeaderCell = styled.div`
  flex: 1;
  text-align: center;
  color: #1a3c2f;
  font-size: 13px;
  /* min-width: 70px;
  max-width: 90px; */
  padding: 0 4px;
  box-sizing: border-box;
`;

const LeagueHeader = ({ icon, countryIcon, name, columns }) => (
  <LeagueHeaderWrapper>
    <LeagueInfoBlock>
      <LeagueIcon>{icon}</LeagueIcon>
      <LeagueIcon>{countryIcon}</LeagueIcon>
      <LeagueName>{name}</LeagueName>
    </LeagueInfoBlock>
    <LeagueExtraBlock>
      <LeagueExtraItem>
        <LeagueExtraSpan>1</LeagueExtraSpan>
        <LeagueExtraContent>
          <LeagueExtraText>
            Team
            Wins
          </LeagueExtraText>
          <ForwardIconBlock>
            <ForwardIcon />
          </ForwardIconBlock>
        </LeagueExtraContent>
        <LeagueExtraSpan>2</LeagueExtraSpan>
      </LeagueExtraItem>
      <LeagueExtraItem>
        <LeagueExtraSpan>O</LeagueExtraSpan>
        <LeagueExtraContent>
          <LeagueExtraText>
            Total
          </LeagueExtraText>
          <ForwardIconBlock>
            <ForwardIcon />
          </ForwardIconBlock>
        </LeagueExtraContent>
        <LeagueExtraSpan>U</LeagueExtraSpan>
      </LeagueExtraItem>
      <LeagueExtraItem>
        <LeagueExtraSpan>1</LeagueExtraSpan>
        <LeagueExtraContent>
          <LeagueExtraText>
            Handicap
          </LeagueExtraText>
          <ForwardIconBlock>
            <ForwardIcon />
          </ForwardIconBlock>
        </LeagueExtraContent>
        <LeagueExtraSpan>2</LeagueExtraSpan>
      </LeagueExtraItem>
      <LeagueExtraItem>
        <LeagueExtraSpan>O</LeagueExtraSpan>
        <LeagueExtraContent>
          <LeagueExtraText>
            IT1
          </LeagueExtraText>
          <ForwardIconBlock>
            <ForwardIcon />
          </ForwardIconBlock>
        </LeagueExtraContent>
        <LeagueExtraSpan>U</LeagueExtraSpan>
      </LeagueExtraItem>
  
      
        <LeagueEmptySpan>+5</LeagueEmptySpan>
      
    </LeagueExtraBlock>
    {columns && columns.map((col, idx) => (
      <HeaderCell key={idx}>{col}</HeaderCell>
    ))}
  </LeagueHeaderWrapper>
);

export default LeagueHeader;
