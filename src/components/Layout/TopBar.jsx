import styled from 'styled-components';

const TopBarWrapper = styled.div`
  background: #205c2b;
  color: #fff;
  height: 28px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  font-size: 0.92rem;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.4rem;
  color: #8fd14f;
  letter-spacing: 1px;
`;

const RightBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const IconBtn = styled.button`
  background: #174c1b;
  color: #8fd14f;
  border: none;
  border-radius: 4px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin-right: 4px;
  cursor: pointer;
`;

export const TopBar = () => (
  <TopBarWrapper>
    <Logo>BETREADY</Logo>
    <RightBlock>
      <IconBtn title="Menu">≡</IconBtn>
      <IconBtn title="Settings">⚙️</IconBtn>
      <IconBtn title="Notifications">🔔</IconBtn>
      {/* Можно добавить другие иконки/кнопки по макету */}
    </RightBlock>
  </TopBarWrapper>
);
