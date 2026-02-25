import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: #174c1b;
  color: #fff;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  justify-content: space-between;
  border-bottom: 2px solid #205c2b;
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  
  .menu-item {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
      background: #205c2b;
    }
  }
  .menu-icon {
    font-size: 1rem;
    margin-right: 2px;
  }
  .menu-arrow {
    font-size: 0.8rem;
    margin-left: 2px;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Btn = styled.button`
  background: #8fd14f;
  color: #174c1b;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  padding: 6px 14px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #a6e36a;
  }
`;

const BtnLogin = styled(Btn)`
  background: #205c2b;
  color: #fff;
  border: 1px solid #8fd14f;
  &:hover {
    background: #174c1b;
  }
`;

const LangCurrency = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background: #205c2b;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 0.9rem;
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
    <Actions>
      <LangCurrency>
        <span>🌐</span>
        <span>EN</span>
        <span>|</span>
        <span>USD</span>
        <span className="menu-arrow">▼</span>
      </LangCurrency>
      <Btn>REGISTRATION</Btn>
      <BtnLogin>LOG IN</BtnLogin>
    </Actions>
  </HeaderWrapper>
);
