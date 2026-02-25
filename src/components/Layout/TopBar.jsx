import styled from 'styled-components';
import logoTop from '../../assets/images/logoTop.png';
import giftIcon from '../../assets/images/Gift.png';
import Ticket from '../../assets/images/Ticket.png';
import Dollar from '../../assets/images/Dollar.png';
import Setting from '../../assets/images/Settings.png';
import GreatBritain from '../../assets/images/GreatBritain.png';

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
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: #63d92b;
    transform: scale(1.1) rotate(-5deg);
    box-shadow: 0 2px 8px rgba(99, 217, 43, 0.2);
  }
`;

const RegistrationBtn = styled.button`
  border-radius: 8px;
  width: 130px;
  height: 32px;
  background: #397617;
  border: none;
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s, transform 0.2s;

  &:hover {
    background: #63d92b;
    box-shadow: 0 2px 12px rgba(99, 217, 43, 0.3);
    transform: translateY(-2px) scale(1.03);
  }
`;

const LoginBtn = styled.button`
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 8px;
  width: 76px;
  height: 32px;
  background: #397617;
  border: none;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s, transform 0.2s;

  &:hover {
    background: #63d92b;
    box-shadow: 0 2px 12px rgba(99, 217, 43, 0.2);
    transform: translateY(-2px) scale(1.05);
  }
`;

const StatusBlock = styled.div`
 display: flex;
  align-items: center;
  background: #397617;
  border-radius: 8px;
  height: 32px;
  padding-top: 7px;
  padding-bottom: 7px;
  
`;

const Divider = styled.div`
  width: 2px;
  height: 40px;
  background: #020502;
`;

const StatusBtn = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: color 0.2s, background 0.2s;

  &:hover {
    color: #8fd14f;
    background: rgba(143, 209, 79, 0.08);
    border-radius: 8px;
  }
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
        <img src={GreatBritain} alt="EN" />
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
