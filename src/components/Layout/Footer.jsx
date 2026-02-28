import styled from 'styled-components';
import ForwardGreen from '../../assets/svg/ForwardGreen';
import AppleIcon from '../../assets/svg/AppleIcon';
import UnicodePadIcon from '../../assets/svg/UnicodePadIcon';
import AppsIcon from '../../assets/svg/AppsIcon';
import footerimg1 from  "../../assets/images/footer/footerimg1.png";
import footerimg2 from  "../../assets/images/footer/footerimg2.png";
import footerimg3 from  "../../assets/images/footer/footerimg3.png";
import footerimg4 from  "../../assets/images/footer/footerimg4.png";
import footerimg5 from  "../../assets/images/footer/footerimg5.png";
import footerimg6 from  "../../assets/images/footer/footerimg6.png";
import footerimg7 from  "../../assets/images/footer/footerimg7.png";
import footerimg8 from  "../../assets/images/footer/footerimg8.png";
import footerimg9 from  "../../assets/images/footer/footerimg9.png";
import footerimg10 from  "../../assets/images/footer/footerimg10.png";
import footerimg11 from  "../../assets/images/footer/footerimg11.png";
import footerimg12 from  "../../assets/images/footer/footerimg12.png";
import TrophyIcon from '../../assets/images/footer/TrophyIcon.jsx';
import HeadsetIcon from '../../assets/svg/HeadsetIcon.jsx';
import GameControllerIcon from '../../assets/images/footer/GameControllerIcon.jsx';
import infotextimg from  "../../assets/images/footer/infotextimg.png";
import InstagramIcon from '../../assets/svg/InstagramIcon.jsx';
import TelegramIcon from '../../assets/svg/TelegramIcon.jsx';
const FooterWrapper = styled.footer`
  
  color: #fff;
  padding: 0;
  text-align: center;
  font-family: Roboto, Arial, sans-serif;
`;

const FooterSection = styled.div`
  background: #397617;
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  
  margin-bottom: 8px;
  text-align: left;
  padding-left: 20px;
`;

const FooterSectionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
  background: #397617;
  padding: 24px 32px 16px 20px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const FooterTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 8px;
`;


const PartnersRow = styled.div`
  display: flex;
  align-items: flex-start; 
  background: #397617;
  padding: 16px 20px;
  border-radius: 8px;
  margin-bottom: 8px;
  flex-direction: column;
`;

const PartnerLogoWrapper = styled.div`
  background: #B0C8A2;
  border-radius: 8px;
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const InfoText = styled.div`
  border-radius:8px;
  color: #fff;
  background: #397617;
  text-align: left;
  padding: 20px 8px;
  color: #FFF;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
`;

const FooterBottom = styled.div`
  display: flex;
  
  gap: 8px;
  
  color: #fff;
  font-size: 12px;
  
  
`;

const RightFooterBlock = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Divider = styled.div`
  width: 2px;
  height: 32px;
  background: #174c1b;
  margin-right: 16px;
  border-radius: 2px;
`;

const ArrowBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #397617;
  border-radius: 0 8px 8px 0;
  width: 48px;
  height: 48px;
  position: relative;
`;

const ArrowDivider = styled.div`
 position: absolute;
    left: -2px;
    /* top: 8px; */
    width: 2px;
    height: 100%;
    background: #00251D;
    border-radius: 2px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  transition: color 0.2s;
  &:hover {
    color: #b0c8a2;
    text-decoration: underline;
  }
`;
const PartnerLogosFlex = styled.div`
        display: flex;
        gap: 8px;
`;

const StyledImgWrapper = styled.div`
      border-radius: 8px;
      
      min-height: 67px;
      padding: 20px 10px;
      background-color: #397617;;
      
      display: flex;
      align-items: center;
      justify-content: flex-end;
    `;

    const InfoTextWrapper = styled.div`
        display: flex;
      gap: 8px;
    margin-bottom: 8px;
    width: 100%;
    
    `;

const SupportServiceWrapper = styled.div`
        display: flex;
        align-items: center;
        padding: 26px 68px;
        gap: 8px;
        background-color: #397617;
        border-radius: 8px;
      `;

      const SupportIconBlock = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
      `;

      const SupportTextBlock = styled.div`
      display: flex;
      flex-direction: column;
      gap: 2px;
      align-items: flex-start;
        .support-title {
          color: #FFF;
          font-family: Roboto;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
        .support-phone {
          color: #B0C8A2;
          font-family: Roboto;
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
      `;
const FooterCopyrightBlock = styled.div`
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        width: 100%;
        color: #FFF;
        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-align: left;
        padding: 35px 20px;
        background-color: #397617;;
        line-height: 1.4;
      `;
const SocialIconsBlock = styled.div`
        display: flex;
        align-items: center;
        gap: 4px;
        background: #397617;
        border-radius: 8px;
        padding: 8px 24px;
        
      `;
const SocialBlockWrapper = styled.div`
        display: flex;
        align-items: center;
        gap: 8px;
        
      `;

      const AgeLimitBlock = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        background: #174c1b;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        border-radius: 8px;
        padding: 16px 14px;
        
        span{
          color: #FFF;
          font-family: Roboto;
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
      `;
const MobileVersionButton = styled.button`
        background: #7be021;
        color: #00251D;
        text-align: center;
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border: none;
        border-radius: 8px;
        padding: 7px 38px;
        width: 100%;
        
        cursor: pointer;
        transition: background 0.2s, color 0.2s;
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        &:hover {
          background: #6ad11c;
          color: #00251d;
        }
      `;
const FooterSocialSection = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        
      `;                        
const Footer = () => (
  <FooterWrapper>
    <FooterSection>
      <FooterSectionContent>
        <span>1XBET BETTING COMPANY - ONLINE SPORTS BETTING</span>
        <ArrowBlock>
          <ArrowDivider />
          <ForwardGreen width={20} height={20} style={{display: 'block', filter: 'grayscale(1) brightness(1.5)'}} />
        </ArrowBlock>
      </FooterSectionContent>
    </FooterSection>
    <FooterSection style={{borderBottom: 'none'}}>
      <FooterSectionContent>
        <span>POPULAR EVENTS AND SPORTS NEWS</span>
        <ArrowBlock>
          <ArrowDivider />
          <ForwardGreen width={20} height={20} style={{display: 'block', filter: 'grayscale(1) brightness(1.5)'}} />
        </ArrowBlock>
      </FooterSectionContent>
    </FooterSection>
    <FooterGrid>
      <FooterColumn>
        <FooterTitle>1XBET</FooterTitle>
        <FooterLink href="#">About us</FooterLink>
        <FooterLink href="#">Affiliate Program</FooterLink>
        <FooterLink href="#">Become an agent</FooterLink>
        <FooterLink href="#">Payment methods</FooterLink>
        <FooterLink href="#">Mobile version</FooterLink>
        <FooterLink href="#">Contacts</FooterLink>
      </FooterColumn>
      <FooterColumn>
        <FooterTitle>BETTING</FooterTitle>
        <FooterLink href="#">Sports</FooterLink>
        <FooterLink href="#">Multi-LIVE</FooterLink>
        <FooterLink href="#">Live</FooterLink>
      </FooterColumn>
      <FooterColumn>
        <FooterTitle>GAMES</FooterTitle>
        <FooterLink href="#">Casino</FooterLink>
        <FooterLink href="#">1xGames</FooterLink>
        <FooterLink href="#">Live Casino</FooterLink>
      </FooterColumn>
      <FooterColumn>
        <FooterTitle>STATISTICS</FooterTitle>
        <FooterLink href="#">Statistics</FooterLink>
        <FooterLink href="#">Results</FooterLink>
      </FooterColumn>
      <FooterColumn>
        <FooterTitle>USEFUL LINKS</FooterTitle>
        <FooterLink href="#">Terms of Service</FooterLink>
        <FooterLink href="#">Responsible Gambling</FooterLink>
        <FooterLink href="#">Dispute resolution</FooterLink>
        <FooterLink href="#">Anti-Money Laundering</FooterLink>
        <FooterLink href="#">Fairness & RNG Testing Methods</FooterLink>
        <FooterLink href="#">KYC Policies</FooterLink>
        <FooterLink href="#">Privacy & Management of Personal Data</FooterLink>
        <FooterLink href="#">Accounts, Payouts & Bonuses</FooterLink>
      </FooterColumn>
      <FooterColumn>
        <FooterTitle>APPS</FooterTitle>
        <FooterLink href="#" style={{display: 'flex', alignItems: 'center', gap: 6}}>
          <AppleIcon width={20} height={20} />
          iOS
        </FooterLink>
        <FooterLink href="#" style={{display: 'flex', alignItems: 'center', gap: 6}}>
          <UnicodePadIcon width={20} height={20} />
          Android
        </FooterLink>
        <FooterLink href="#" style={{display: 'flex', alignItems: 'center', gap: 6}}>
          <AppsIcon width={20} height={20} />
          Other apps
        </FooterLink>
      </FooterColumn>
    </FooterGrid>
    <PartnersRow>
      <p style={{
        color: '#FFF',
        fontFamily: 'Roboto',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
        marginBottom: 4,
        minWidth: 90
      }}>PARTNERS</p>
      
      <PartnerLogosFlex>
        <PartnerLogoWrapper>
          <img src={footerimg1} alt="Partner 1" style={{width: 77, height: 77, objectFit: 'contain'}} />
          <span style={{position: 'absolute', top: 8, right: 8}}><TrophyIcon width={18} height={18} /></span>
        </PartnerLogoWrapper>
        <PartnerLogoWrapper>
          <img src={footerimg2} alt="Partner 2" style={{width: 77, height: 77, objectFit: 'contain'}} />
          <span style={{position: 'absolute', top: 8, right: 8}}><TrophyIcon width={18} height={18} /></span>
        </PartnerLogoWrapper>
        <PartnerLogoWrapper>
          <img src={footerimg3} alt="Partner 3" style={{width: 77, height: 77, objectFit: 'contain'}} />
          <span style={{position: 'absolute', top: 8, right: 8}}><TrophyIcon width={18} height={18} /></span>
        </PartnerLogoWrapper>
        <PartnerLogoWrapper>
          <img src={footerimg4} alt="Partner 4" style={{width: 77, height: 77, objectFit: 'contain'}} />
          <span style={{position: 'absolute', top: 8, right: 8}}><TrophyIcon width={18} height={18} /></span>
        </PartnerLogoWrapper>
        <PartnerLogoWrapper>
          <img src={footerimg5} alt="Partner 5" style={{width: 77, height: 77, objectFit: 'contain'}} />
          <span style={{position: 'absolute', top: 8, right: 8}}><TrophyIcon width={18} height={18} /></span>
        </PartnerLogoWrapper>
        <PartnerLogoWrapper>
          <span style={{position: 'absolute', top: 8, right: 8}}><TrophyIcon width={18} height={18} /></span>
          <img src={footerimg6} alt="Partner 6" style={{width: 77, height: 77, objectFit: 'contain'}} />
        </PartnerLogoWrapper>
        <PartnerLogoWrapper>
          <span style={{position: 'absolute', top: 8, right: 8}}><GameControllerIcon width={18} height={18} /></span>
          <img src={footerimg7} alt="Partner 7" style={{width: 77, height: 77, objectFit: 'contain'}} />
        </PartnerLogoWrapper>
        <PartnerLogoWrapper>
          <span style={{position: 'absolute', top: 8, right: 8}}><GameControllerIcon width={18} height={18} /></span>
          <img src={footerimg8} alt="Partner 8" style={{width: 77, height: 77, objectFit: 'contain'}} />
        </PartnerLogoWrapper>
        <PartnerLogoWrapper>
          <span style={{position: 'absolute', top: 8, right: 8}}><GameControllerIcon width={18} height={18} /></span>
          <img src={footerimg9} alt="Partner 9" style={{width: 77, height: 77, objectFit: 'contain'}} />
        </PartnerLogoWrapper>
        <PartnerLogoWrapper>
          <span style={{position: 'absolute', top: 8, right: 8}}><GameControllerIcon width={18} height={18} /></span>
          <img src={footerimg10} alt="Partner 10" style={{width: 77, height: 77, objectFit: 'contain'}} />
        </PartnerLogoWrapper>
        <PartnerLogoWrapper>
          <span style={{position: 'absolute', top: 8, right: 8}}><GameControllerIcon width={18} height={18} /></span>
          <img src={footerimg11} alt="Partner 11" style={{width: 77, height: 77, objectFit: 'contain'}} />
        </PartnerLogoWrapper>
        <PartnerLogoWrapper>
          <span style={{position: 'absolute', top: 8, right: 8}}><GameControllerIcon width={18} height={18} /></span>
          <img src={footerimg12} alt="Partner 12" style={{width: 77, height: 77, objectFit: 'contain'}} />
        </PartnerLogoWrapper>
      </PartnerLogosFlex>
      
      
      
    </PartnersRow>
    
    <InfoTextWrapper>
      <InfoText>
        1xbet.com is operated by Caecus N.V., a company incorporated under the laws of Curaçao with Company Number 163779, registred at Chuchubiweg 17, Willemstad, Curacao, and licensed by the Curaçao Gaming Authority to offer games of chance under license number OGL/2024/1262/0493 in accordance with the National Ordinance on Games of Chance (Landsverordening op de kansspelen, P.B. 2024, no. 157). The license was granted on 07/11/2024 and its current status is active.
Payments are processed by Exidna Enterprises LTD (registration number НЕ435756, registered at Agias Zonis, 22B, Limassol, 3027, Cyprus) and Evrianassa Enterprises LTD (registration number НЕ435969, registered at Agias Zonis, 22B, Limassol, 3027, Cyprus), act as payment agents on behalf Caecus N.V.
Participation in any game is subject to the player’s acceptance of the Terms and Conditions and the Responsible Gaming Policy, which set out applicable limitations, restrictions, and safeguards. Gambling is offered for entertainment purposes only and should be undertaken responsibly. Participation is strictly prohibited for persons under the age of 18. Independent assistance for gambling-related concerns is available through Gamblers Anonymous.
      </InfoText>
      <StyledImgWrapper>
        <img src={infotextimg} width={108} height={67} alt="Info Text" />
      </StyledImgWrapper>
   
    </InfoTextWrapper>
    
    <FooterBottom>
      <FooterCopyrightBlock>
        Copyright © 2026 «1xBet».<br />
        1xBet uses cookies to ensure the best user experience. By remaining on the website, you consent to the use of your cookie files on 1xBet. Find out more
      </FooterCopyrightBlock>
      
      <SupportServiceWrapper>
        <SupportIconBlock>
          <HeadsetIcon width={45} height={45} />
        </SupportIconBlock>
        <SupportTextBlock>
          <span className="support-title">SUPPORT SERVICE</span>
          <span className="support-phone">88007777555</span>
        </SupportTextBlock>
      </SupportServiceWrapper>
      
      <FooterSocialSection>
        <SocialBlockWrapper>
          <SocialIconsBlock>
            <InstagramIcon width={42} height={42} />
            <TelegramIcon width={36} height={36} />
          </SocialIconsBlock>
          <AgeLimitBlock>
            <span>18+</span>
          </AgeLimitBlock>
        </SocialBlockWrapper>
        <MobileVersionButton type="button">MOBILE VERSION</MobileVersionButton>
      </FooterSocialSection>
      
      
      
      
      
      
    </FooterBottom>
  </FooterWrapper>
);

export default Footer;
