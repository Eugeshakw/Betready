import styled from 'styled-components'
import Baner from '../../assets/images/Baner.png';
import { GameSlider } from '../GameSlider';
import { TopEventsSlider } from '../TopEventsSlider';
const MainWrapper = styled.main`
	flex: 1;
	
	min-height: 100vh;
	
`

const SliderBanner = () => (
  // ...existing code...
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

export const MainContent = () => (
  <MainWrapper>
    <SliderBanner />
    <GameSlider />
    <TopEventsSlider />
    {/* ...остальной контент ... */}
  </MainWrapper>
)
