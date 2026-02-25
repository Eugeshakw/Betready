import styled from 'styled-components';

const HeaderWrapper = styled.header`
  color: #fff;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  justify-content: space-between;
  border-bottom: 2px solid #00251D;
  background: #013C2F;
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  background: #205c2b;
  border-radius: 16px;
  padding: 6px 18px 6px 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  
  .menu-item {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 12px;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s;
    font-size: 1.08rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    &:hover {
      background: #205c2b;
    }
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
`;





const UserBlock = styled.div`
  background: #205c2b;
  color: #fff;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.95rem;
`;

export const Header = () => (
  <HeaderWrapper>
    <Menu>
      <span className="menu-item"><span className="menu-icon">🏆</span>TOP-EVENTS<span className="menu-arrow">▼</span></span>
      <span className="menu-item">SPORTS<span className="menu-arrow">▼</span></span>
      <span className="menu-item">LIVE<span className="menu-arrow">▼</span></span>
      <span className="menu-item">GAMES<span className="menu-arrow">▼</span></span>
      <span className="menu-item">CASINO<span className="menu-arrow">▼</span></span>
      <span className="menu-item">LIVE CASINO<span className="menu-arrow">▼</span></span>
      <span className="menu-item">ESPORTS<span className="menu-arrow">▼</span></span>
      <span className="menu-item">PROMO<span className="menu-arrow">▼</span></span>
      <span className="menu-item">MORE<span className="menu-arrow">▼</span></span>
      <UserBlock>21</UserBlock>
    </Menu>
  </HeaderWrapper>
);
