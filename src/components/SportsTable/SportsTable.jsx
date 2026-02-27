import React from "react";
import styled from "styled-components";
import LeagueHeader from "./LeagueHeader";
import USAIcon from "../../assets/svg/USAIcon.jsx";
import BasketballIcon from "../../assets/svg/BasketballIcon.jsx";
import SoccerBallIcon from "../../assets/svg/SoccerBallIcon.jsx";
import MatchInfoRow from "./MatchInfoRow";

const TableWrapper = styled.div`
  width: 100%;
  background: #e3e9e3;
  overflow: hidden;
`;


const MatchRow = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #c8d6c8;
  background: #fff;
  font-size: 14px;
  padding: 8px 16px;
`;

const MatchMain = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const TeamInfo = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;
`;

const TeamName = styled.span`
  margin-left: 32px;
  font-size: 16px;
`;

const Score = styled.span`
  font-weight: bold;
  font-size: 18px;
  margin-left: auto;
  margin-right: 8px;
`;

const IconLeft = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;



const MatchFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  font-size: 12px;
  color: #1a3c2f;
  gap: 8px;
`;

const TeamCell = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`;

const ScoreCell = styled.div`
  width: 40px;
  text-align: center;
`;

const OddsCell = styled.div`
  flex: 1;
  text-align: center;
  background: #e3e9e3;
  border-radius: 4px;
  margin: 0 2px;
  padding: 4px 0;
`;

const TableFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  background: #1a3c2f;
  color: #fff;
  font-weight: bold;
  padding: 8px 16px;
`;

const leagues = [
  {
    name: "NBA",
    icon: <BasketballIcon />,
    countryIcon: <USAIcon />,
    matches: [
      {
        teams: ["Chicago Bulls", "Los Angeles Clippers"],
        scores: [25, 30],
        odds: [2.12, "-", 1.72],
        footer: "+364"
      },
      {
        teams: ["Houston Rockets", "San Antonio Spurs"],
        scores: [8, 8],
        odds: [2.12, "-", 1.72],
        footer: "+217"
      },
      {
        teams: ["Philadelphia 76ers", "Phoenix Suns"],
        scores: [25, 30],
        odds: [2.12, "-", 1.72],
        footer: "+183"
      }
    ]
  },
  {
    name: "Premier League",
    icon: <SoccerBallIcon />,
    countryIcon: null,
    matches: [
      {
        teams: ["Man Utd", "Arsenal"],
        scores: [1, 1],
        odds: [2.12, 1.72, 1.95, 1.85],
        footer: "+364"
      },
      {
        teams: ["Westham", "Liverpool"],
        scores: [0, 0],
        odds: [1.536, 2.496, 2.45, 1.63],
        footer: "+217"
      },
      {
        teams: ["Chelsea", "Everton"],
        scores: [3, 1],
        odds: [2.12, 1.72, 2.65, 1.95],
        footer: "+183"
      }
    ]
  }
];

const SportsTable = () => (
  <TableWrapper>
    {leagues.map((league, idx) => (
      <div key={idx}>
        <LeagueHeader
          name={league.name}
          icon={league.icon}
          countryIcon={league.countryIcon}
        />
        
        {league.matches.map((match, mIdx) => (
          <MatchInfoRow key={mIdx} match={match} />
        ))}
        {/* <TableFooter>{league.matches[league.matches.length - 1].footer}</TableFooter> */}
      </div>
    ))}
  </TableWrapper>
);

export default SportsTable;

