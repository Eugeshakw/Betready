import React from "react";
import styled from "styled-components";
import CloseIcon from "../assets/svg/CloseIcon";
import { ForwardRightIcon } from "../assets/svg/ForwardRightIcon";

const BlockWrapper = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  padding: 0;
  width: 100%;
  margin-bottom: 24px;
  
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
`;

const EventRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 0;
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
  border-right: 1px solid #bbb;
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
  gap: 6px;
  color: #1a3c2f;
  font-size: 13px;
  margin-top: 2px;
`;

const MarketBlock = styled.div`
  color: #1a3c2f;
  font-size: 13px;
  margin-top: 8px;
  text-align: right;
`;

const OddsBlock = styled.div`
  background: #B0C8A2;
  color: #1a3c2f;
  font-weight: 700;
  font-size: 18px;
  border-radius: 8px;
  padding: 8px 18px;
  min-width: 60px;
  text-align: center;
  align-self: flex-start;
  margin-left: 12px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  font-size: 15px;
  color: #1a3c2f;
`;

const AddButton = styled.button`
  width: 100%;
  background: #6ed36e;
  color: #fff;
  font-weight: bold;
  font-size: 17px;
  border: none;
  border-radius: 0 0 8px 8px;
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
          <EventRow key={ev.id || idx}>
            <EventDate>
              <span>{ev.date.split(' ')[0]}</span>
              <span style={{fontWeight:400, fontSize:12, marginTop:2}}>{ev.date.split(' ')[1]}</span>
            </EventDate>
            <TeamsBlock>
              <TeamRow>
                {/* Здесь можно вставить иконку игрока */}
                <span role="img" aria-label="user" style={{color:'#B0C8A2'}}>👤</span>
                {ev.teams.split(' vs ')[0]}
              </TeamRow>
              <TeamRow>
                <span role="img" aria-label="user" style={{color:'#B0C8A2'}}>👤</span>
                {ev.teams.split(' vs ')[1]}
              </TeamRow>
              <TournamentBlock>
                {/* Здесь можно вставить иконку турнира */}
                <span role="img" aria-label="tournament" style={{color:'#1a3c2f'}}>🖊️</span>
                {ev.tournament}
              </TournamentBlock>
            </TeamsBlock>
            <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end', flex:1}}>
              <OddsBlock>{ev.odds}</OddsBlock>
              <MarketBlock>{ev.market}</MarketBlock>
            </div>
          </EventRow>
        ))}
      </EventsList>
      <InfoRow>
        <span>BONUS from 1xBet</span>
        <span style={{fontWeight:700}}>{usedBonus}</span>
      </InfoRow>
      <InfoRow>
        <span>Overall odds</span>
        <span style={{fontWeight:700}}>{usedTotalOdds}</span>
      </InfoRow>
      <AddButton>ADD TO BET SLIP</AddButton>
    </BlockWrapper>
  );
};

export default AccumulatorBlock;
