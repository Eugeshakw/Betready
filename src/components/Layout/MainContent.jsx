import styled from 'styled-components'
import Baner from '../../assets/images/Baner.png';
import { GameSlider } from '../GameSlider';
import { TopEventsSlider } from '../TopEventsSlider';
import { EventsNavBar } from '../TopEvents/LeagueNavBar/EventsNavBar';
import { CategoryNavBar } from '../TopEvents/CategoryNavBar/CategoryNavBar';
import MarketsNavigation from '../MarketsNavigation/MarketsNavigation';
import Markets from '../Markets/Markets';
import SportsTable from '../SportsTable/SportsTable';
import AccumulatorBlock from '../AccumulatorBlock';

const MainWrapper = styled.main`
	flex: 1;
	
	min-height: 100vh;
	
`

const SliderBanner = () => (
  
  <div
    style={{
      width: '100%',
      margin: '0 auto 24px auto',
      borderRadius: 16,
      overflow: 'hidden',
      background: '#222',
      boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
      position: 'relative',
      minHeight: 220,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
	  marginBottom: 8
    }}
  >
    <img
      src={Baner}
      alt="Slider Example"
      style={{ width: '100%', height: '220px', objectFit: 'cover' }}
    />
    <div
      style={{
        position: 'absolute',
        left: 32,
        top: 32,
        color: '#fff',
        fontSize: 32,
        fontWeight: 700,
        textShadow: '0 2px 8px rgba(0,0,0,0.25)'
      }}
    >
      NBA WIN SHOT<br />
      <span style={{ fontSize: 18, fontWeight: 400 }}>
        The season of big matches is your season of big wins!
      </span>
      <br />
      <button
        style={{
          marginTop: 16,
          background: '#63D92B',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          padding: '8px 20px',
          fontWeight: 700,
          fontSize: 16,
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
        }}
      >
        FIND OUT MORE
      </button>
    </div>
  </div>
)

export const MainContent = () => {
  // Пример данных для первого блока
  const events1 = [
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

  // Пример данных для второго блока
  const events2 = [
    {
      id: 1,
      teams: 'Minnesota Frost (Women) vs Montreal Victorie (Women)',
      date: '22/01 01:00',
      tournament: 'PHWL. Women',
      market: 'Total Over 1.5',
      odds: '1.664'
    },
    {
      id: 2,
      teams: 'Avai vs Chapecoense',
      date: '22/01 14:00',
      tournament: 'Brazil. Campeonato Catarinense',
      market: 'Handicap (1)',
      odds: '1.87'
    },
    {
      id: 3,
      teams: 'Deportivo Malacateco vs Deportivo Marquense',
      date: '22/01 17:00',
      tournament: 'Guatemala. Liga Nacional',
      market: '1X2',
      odds: '1.995'
    }
  ];

  return (
    <MainWrapper>
      <SliderBanner />
      <GameSlider />
      <TopEventsSlider />
      <EventsNavBar />
      <CategoryNavBar />
      <SportsTable />
      <MarketsNavigation/>
      <Markets />
      <div style={{display: 'flex', gap: 16, alignItems: 'flex-start'}}>
        <AccumulatorBlock
          title="Accumulator Of The Day"
          events={events1}
          bonus={"1.1"}
          totalOdds={"7.433"}
        />
        <AccumulatorBlock
          title="Live Accumulator Of The Day"
          events={events2}
          bonus={"1.1"}
          totalOdds={"7.433"}
        />
      </div>
      
    </MainWrapper>
  );
}
