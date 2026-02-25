import styled from 'styled-components';
import logoTop from '../../assets/images/logoTop.png';
import giftIcon from '../../assets/images/Gift.png';
import Ticket from '../../assets/images/Ticket.png';
import Dollar from '../../assets/images/Dollar.png';
import Setting from '../../assets/images/Settings.png'

const TopBarWrapper = styled.div`
  background: #00251d;;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 16px 12px 8px;
  font-size: 0.92rem;
  box-sizing: border-box; 
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
  gap: 8px;
`;

const IconBtn = styled.button`
  background: #397617;
  color: #8fd14f;
  border: none;
  border-radius: 8px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  
  cursor: pointer;
`;

const RegistrationBtn = styled.button`
    border-radius: 8px;
    width: 130px;
    height: 32px;
    font-weight: 400;
    background: #63d92b;
    color: #fff;
    border: none;
    /* font-weight: bold; */
    font-weight: 400;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
`;

const LoginBtn = styled.button`
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    border-radius: 8px;
    width: 76px;
    height: 32px;
    background: #397617;
    color: #fff;
    border: none;
    cursor: pointer;
`;

const StatusBlock = styled.div`
 display: flex;
  align-items: center;
  background: #397617;
  border-radius: 8px;
  height: 32px;
  
`;

const Divider = styled.div`
  width: 2px;
  height: 40px;
  background: #020502;
`;

const StatusBtn = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Flag = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 6px;
`;

export const TopBar = () => (
  <TopBarWrapper>
    <Logo>
      <img src={logoTop} alt="Logo" style={{ height: 22, marginRight: 8 }} />
      {/* Можно добавить текст рядом с логотипом, если нужно */}
    </Logo>
    <RightBlock>
      <IconBtn title="Menu">
        <img src={giftIcon} alt="Gift"/>
      </IconBtn>
      <IconBtn title="Settings">
        <img src={Ticket} alt="Ticket"/>
      </IconBtn>
      <IconBtn title="Notifications">
        <img src={Dollar} alt="Dollar"/>
      </IconBtn>
      <RegistrationBtn>REGISTRATION</RegistrationBtn>
      <LoginBtn>LOG IN</LoginBtn>
      <StatusBlock>
      <StatusBtn>
        <img src={Setting} alt="Settings" />
        <span style={{ marginLeft: 4, display: 'flex', alignItems: 'center' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </StatusBtn>
      <Divider />
      <StatusBtn>
        {/* <Flag src={flagEn} alt="EN" /> */}
        EN / 00:09
        <span style={{ marginLeft: 4, display: 'flex', alignItems: 'center' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </StatusBtn>
    </StatusBlock>
      {/* Можно добавить другие иконки/кнопки по макету */}
    </RightBlock>
  </TopBarWrapper>
);
