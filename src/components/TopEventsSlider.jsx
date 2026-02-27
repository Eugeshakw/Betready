import React from 'react';
import styled from 'styled-components';

const TopEventsContainer = styled.div`
  width: 100%;
  margin: 0 auto 24px auto;
  background: #093c2b;
  border-radius: 12px;
  display: flex;
  align-items: center;
  
  overflow: hidden;
  box-sizing: border-box;
`;
  


const TopEventsSliderWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
`;

const TopEventsLabel = styled.div`
  background: #093c2b;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  
  border-radius: 8px 0 0 8px;
  min-width: 120px;
  display: flex;
  align-items: center;
`;

const TopEventCard = styled.div`
  display: flex;
  align-items: stretch;
  width: 120px;
  height: 50px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  flex-shrink: 0;
`;

const CardLeft = styled.div`
  background: #3a7c2b;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 40%;
  height: 100%;
`;

const CardRight = styled.div`
  background: #fff;
  color: #3a7c2b;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 24px;
  width: 60%;
  height: 100%;
`;

const PlaceholderImg = styled.div`
  width: 48px;
  height: 48px;
  background: #e0e0e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #bbb;
`;

// ...удалено, теперь используется PlaceholderImg

const TopEventActive = styled(TopEventCard)`
  border: 2px solid #00bfff;
`;

const topEvents = [
  { label: 'EPL', img: 'E' },
  { label: 'Premier League', img: 'P' },
  { label: 'LA LIGA', img: 'L' },
  { label: 'LaLiga', img: 'A' },
  { label: 'EURO LEAGUE', img: 'U' },
  { label: 'EuroLeague', img: 'E' },
  
];

const LeagueName = styled.span`
  color: #FFF;
  font-family: Roboto, Arial, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const TopEventsSlider = () => (
  <TopEventsContainer>
    <TopEventsLabel>TOP-EVENTS</TopEventsLabel>
    <TopEventsSliderWrapper>
      {topEvents.map((event, idx) => {
        const CardComponent = event.active ? TopEventActive : TopEventCard;
        return (
          <CardComponent key={idx}>
            <CardLeft>{event.label}</CardLeft>
            <CardRight>
              <PlaceholderImg>l</PlaceholderImg>
              <LeagueName>{event.label === 'EPL' ? 'Premier League' : event.label}</LeagueName>
            </CardRight>
          </CardComponent>
        );
      })}
    </TopEventsSliderWrapper>
  </TopEventsContainer>
);
