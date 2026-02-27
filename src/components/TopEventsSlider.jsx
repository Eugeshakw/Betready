import React from 'react';
import styled from 'styled-components';

const TopEventsSliderWrapper = styled.div`
  width: 100%;
  margin: 0 auto 24px auto;
  display: flex;
  gap: 8px;
  overflow-x: auto;
  align-items: center;
`;

const TopEventsLabel = styled.div`
  background: #093c2b;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  padding: 12px 18px;
  border-radius: 8px 0 0 8px;
  min-width: 120px;
  display: flex;
  align-items: center;
`;

const TopEventCard = styled.div`
  background: #3a7c2b;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border-radius: 8px;
  min-width: 120px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
`;

const TopEventImage = styled.div`
  width: 32px;
  height: 32px;
  background: #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: #3a7c2b;
`;

const TopEventActive = styled(TopEventCard)`
  border: 2px solid #00bfff;
  background: #093c2b;
`;

const topEvents = [
  { label: 'EPL', img: 'E' },
  { label: 'Premier League', img: 'P' },
  { label: 'LA LIGA', img: 'L' },
  { label: 'LaLiga', img: 'A' },
  { label: 'EURO LEAGUE', img: 'U' },
  { label: 'EuroLeague', img: 'E' },
  { label: 'NBA', img: 'N' },
  { label: 'NBA', img: 'B' },
  { label: 'NHL', img: 'H', active: true },
];

export const TopEventsSlider = () => (
  <TopEventsSliderWrapper>
    <TopEventsLabel>TOP-EVENTS</TopEventsLabel>
    {topEvents.map((event, idx) => (
      event.active ? (
        <TopEventActive key={idx}>
          <TopEventImage>{event.img}</TopEventImage>
          {event.label}
        </TopEventActive>
      ) : (
        <TopEventCard key={idx}>
          <TopEventImage>{event.img}</TopEventImage>
          {event.label}
        </TopEventCard>
      )
    ))}
  </TopEventsSliderWrapper>
);
