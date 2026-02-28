
import React from "react";
import styled from "styled-components";

import CloseIcon from "../assets/svg/CloseIcon";
import { ForwardRightIcon } from "../assets/svg/ForwardRightIcon";
import Profile from "../assets/svg/Profile";
import CricketIcon from "../assets/svg/CricketIcon";

const BlockWrapper = styled.div`
  
  border-radius: 8px;
  
  padding: 0;
  width: 100%;
  margin-bottom: 24px;
  
`;

const InfoRowsWrapper = styled.div`
  
  display: flex;
  flex-direction: column;
  gap: 8px; 
`;

const TournamentMarketWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    margin-bottom: 8px;
    justify-content: space-between;
`;
const BlockHeader = styled.div`
  background: #397617;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  padding: 6px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px 8px 0 0;
`;

const EventsList = styled.div`
  padding: 8px 16px;
  background-color: #B0C8A2;
  border-radius: 0 0 8px 8px;
`;

const EventRow = styled.div`
  
  background: #fff;
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 8px 10px;
  font-size: 15px;
  color: #1a3c2f;
  box-shadow: none;
`;

const EventDate = styled.div`
  min-width: 56px;
  
  color: #1a3c2f;
  font-size: 13px;
  font-weight: 500;
  border-radius: 8px 0 0 8px;
  padding: 8px 4px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2px;
  border-right: 1px solid #B0C8A2;;
`;

const TeamsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  margin-left: 8px;
`;

const TeamRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
  font-size: 15px;
`;

const TournamentBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  color: #1a3c2f;
  font-size: 13px;
  margin-top: 2px;
`;

const MarketBlock = styled.div`
  color: #1a3c2f;
  font-size: 13px;
  
  text-align: right;
`;

const OddsBlock = styled.div`
  background: #B0C8A2;
  color: #1a3c2f;
  border-radius: 8px;
  padding: 4px 13px;
  min-width: 60px;
  color: #00251D;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
  
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 8px 16px;
  font-size: 15px;
  border-radius: 8px;
  color: #1a3c2f;
`;

const AddButton = styled.button`
  width: 100%;
  background: #63D92B;;
  color: #fff;
  font-weight: bold;
  font-size: 17px;
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  cursor: pointer;
  margin-top: 8px;
  transition: background 0.2s;
  &:hover {
    background: #3a7c3a;
  }
`;

const AccumulatorBlock = ({ title, events, bonus, totalOdds }) => {
  // Пример данных для демонстрации (если пропсы не переданы)
  const demoEvents = [
    {
      id: 1,
      teams: 'Zimbabwe U19 vs Pakistan U19',
      date: '22/01 06:30',
      tournament: 'World Cup U19 2026',
      market: 'Over Total Runs Team 2 > 3 - Over 0.5',
      odds: '2.12'
    },
    {
      id: 2,
      teams: 'Republic of Ireland U19 vs Japan U19',
      date: '22/01 09:00',
      tournament: 'World Cup U19 2026',
      market: '1st Wkt',
      odds: '1.44'
    },
    {
      id: 3,
      teams: 'West Indies U19 vs South Africa U19',
      date: '22/01 13:00',
      tournament: 'World Cup U19 2026',
      market: 'Team Wins Wkt',
      odds: '1.492'
    },
    {
      id: 4,
      teams: 'Bangladesh (Women) vs Namibia (Women)',
      date: '22/01 16:15',
      tournament: 'Women - Global Cricket',
      market: 'Over Total Runs Team 2 > 3 - Over 0.5',
      odds: '1.85'
    }
  ];

  const usedEvents = events && events.length ? events : demoEvents;
  const usedBonus = bonus || "1.1";
  const usedTotalOdds = totalOdds || "7.433";

  return (
    <BlockWrapper>
      <BlockHeader>
        <div style={{display: 'flex', alignItems: 'center', gap: 8, flex: 1}}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <ForwardRightIcon style={{transform: 'scaleX(-1)'}} width={16} height={16} />
            <span style={{fontWeight:400, fontSize:13, margin: '0 8px'}}>{`1 / ${usedEvents.length}`}</span>
            <ForwardRightIcon width={16} height={16} />
          </div>
          <span style={{
            marginLeft: 8,
            color: '#FFF',
            fontFamily: 'Roboto',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal'
          }}>{title || "Accumulator Of The Day"}</span>
        </div>
        <div style={{marginLeft: 'auto', display: 'flex', alignItems: 'center'}}>
          <button style={{background: 'none', borderLeft: '1px solid #bbb', border: 'none', cursor: 'pointer'}} aria-label="Close">
            <CloseIcon width={20} height={20} />
          </button>
        </div>
      </BlockHeader>
      <EventsList>
        
        {usedEvents.map((ev, idx) => (
          <div key={ev.id || idx}>
            <EventRow>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                <EventDate>
                  <span>{ev.date.split(' ')[0]}</span>
                  <span style={{fontWeight:400, fontSize:12, marginTop:2}}>{ev.date.split(' ')[1]}</span>
                </EventDate>
                <TeamsBlock>
                  <TeamRow>
                    {/* Иконка игрока */}
                    <Profile style={{color:'#B0C8A2'}} width={24} height={24} />
                    {ev.teams.split(' vs ')[0]}
                  </TeamRow>
                  <TeamRow>
                    <Profile style={{color:'#B0C8A2'}} width={24} height={24} />
                    {ev.teams.split(' vs ')[1]}
                  </TeamRow>
                </TeamsBlock>
                <OddsBlock>{ev.odds}</OddsBlock>
              </div>
              <TournamentBlock>
                {/* Иконка турнира */}
                <div style={{display: 'flex', alignItems: 'center', gap: 4}}>
                  <CricketIcon style={{color:'#1a3c2f'}} width={18} height={18} />
                  {ev.tournament}
                </div>
                
                <MarketBlock>{ev.market}</MarketBlock>
              </TournamentBlock>
            </EventRow>
            
          </div>
          
        ))}

        <InfoRowsWrapper>
          <InfoRow>
            <span>BONUS from 1xBet</span>
            <span style={{fontWeight:700}}>{usedBonus}</span>
          </InfoRow>
          <InfoRow>
            <span>Overall odds</span>
            <span style={{fontWeight:700}}>{usedTotalOdds}</span>
          </InfoRow>
        </InfoRowsWrapper>
        <AddButton>ADD TO BET SLIP</AddButton>
      </EventsList>
      
      
    </BlockWrapper>
  );
};

export default AccumulatorBlock;
