

import React from "react";
import styled from "styled-components";

const LeagueHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #a3bfa3;
  font-weight: bold;
  font-size: 16px;
  padding: 8px 16px;
`;

const LeagueExtraBlock = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
`;
const LeagueInfoBlock = styled.div`
  display: flex;
  align-items: center;
`;
const LeagueIcon = styled.span`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

const LeagueName = styled.span`
  margin-right: 16px;
`;

const HeaderCell = styled.div`
  flex: 1;
  text-align: center;
  color: #1a3c2f;
  font-size: 13px;
  min-width: 70px;
  max-width: 90px;
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
      
    </LeagueExtraBlock>
    {columns && columns.map((col, idx) => (
      <HeaderCell key={idx}>{col}</HeaderCell>
    ))}
  </LeagueHeaderWrapper>
);

export default LeagueHeader;
