import styled from 'styled-components';
import Spades from '../../assets/images/Spades.png';
const HeaderWrapper = styled.header`
  /* color: #fff; */
  height: 48px;
  display: flex;
  width: auto;
  align-items: center;
  /* padding: 10px 8px 10px 8px; */
  justify-content: space-between;
  border-bottom: 2px solid #00251D;
  
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  font-size: 0.95rem;
  font-weight: 500;
  background: #013C2F;
  border-radius: 16px;
  padding: 4px 18px 4px 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  
  .menu-item {
  display: flex;
  align-items: center;
  background: transparent;
  padding: 6px 4px;
  color: #fff;
  border: none;
  cursor: pointer;
  color: #FFF;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transition: background 0.3s; 
}
.menu-item:hover {
  border-radius: 8px;
  background: #99B1AC;
  
}

  .menu-icon {
    font-size: 1.25rem;
    margin-right: 6px;
    display: flex;
    align-items: center;
  }
  .menu-arrow {
    font-size: 1rem;
    margin-left: 6px;
  }
  .user-block-sp{
     color: #fff;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;





const UserBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  margin-left: 42px;
`;

export const Header = () => (
  <HeaderWrapper>
    <Menu>
      <button className="menu-item">TOP-EVENTS
        <span style={{ marginLeft: 6, display: 'flex', alignItems: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <button className="menu-item">SPORTS
        <span style={{ marginLeft: 6, display: 'flex', alignItems: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
    </button>
      <button className="menu-item">LIVE
        <span style={{ marginLeft: 6, display: 'flex', alignItems: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
  </button>
      <button className="menu-item">GAMES
        <span style={{ marginLeft: 7, display: 'flex', alignItems: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
  </button>
      <button className="menu-item">CASINO
        <span style={{ marginLeft: 6, display: 'flex', alignItems: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
  </button>
      <button className="menu-item">LIVE CASINO
        <span style={{ marginLeft: 6, display: 'flex', alignItems: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
  </button>
      <button className="menu-item">ESPORTS
        <span style={{ marginLeft: 6, display: 'flex', alignItems: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
  </button>
      <button className="menu-item">PROMO
        <span style={{ marginLeft: 6, display: 'flex', alignItems: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
  </button>
      <button className="menu-item">MORE
        <span style={{ marginLeft: 6, display: 'flex', alignItems: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
  </button>
      <UserBlock><img src={Spades} alt="Spades" /><span className='user-block-sp'>21</span></UserBlock>
    </Menu>
  </HeaderWrapper>
);
