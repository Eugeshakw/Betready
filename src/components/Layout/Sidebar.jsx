import {
  CategoriesBlock,
  CategoriesHeader,
  CategoriesTabs,
  CategoriesTab,
  CategoriesRow,
  CategoriesRowIcon,
  CategoriesRowCount,
  CategoriesSection,
  CategoriesTitle,
  CategoriesList,
  CategoryItem,
  CategoryIcon,
  CategoryName,
  CategoryCount,
  CategoryArrow,
  CategoryVerticalDivider
} from './CategoriesBlock.styled';
import styled from 'styled-components';
import StarIcon from '../../assets/svg/StarIcon';
import PuckIcon from '../../assets/svg/PuckIcon';
import StarGreen from '../../assets/svg/StarGreen';
import Profile from '../../assets/svg/Profile';
import DownCheckIcon from '../../assets/svg/DownCheckIcon';
import ForwardGreen from '../../assets/svg/ForwardGreen';
import FacebookLikeIcon from '../../assets/svg/FacebookLikeIcon';
import TrophyIcon from '../../assets/svg/TrophyIcon';
import WarrantyIcon from '../../assets/svg/WarrantyIcon';
import EarthGlobeIcon from '../../assets/svg/EarthGlobeIcon';
import YouTubeIcon from '../../assets/svg/YouTubeIcon';
import SoccerBallIcon from '../../assets/svg/SoccerBallIcon';
import TennisBallIcon from '../../assets/svg/TennisBallIcon';
import BasketballIcon from '../../assets/svg/BasketballIcon';
import VolleyballIcon from '../../assets/svg/VolleyballIcon';
import PingPongIcon from '../../assets/svg/PingPongIcon';
import CricketIcon from '../../assets/svg/CricketIcon';
import PSControllerIcon from '../../assets/svg/PSControllerIcon';
import ForwardBlackIcon from '../../assets/svg/ForwardBlackIcon';


const SidebarWrapper = styled.aside`
  
  color: #fff;
  width: 258px;
  min-height: 100vh;
  padding-right: 8px;
  box-sizing: border-box;
`;

const CollapseButton = styled.button`
      background: #013C2F;
      
      border: none;
      border-radius: 8px;
      padding-top: 8px;
      padding-bottom: 8px;
      font-family: Roboto;
      margin-bottom: 8px;
      width: 100%;
      color: #99B1AC;
      font-family: Roboto;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      cursor: pointer;
      transition: background 0.2s;
      &:hover {
        background: #024b3b;
        
      }
    `;


const ThumbIcon = FacebookLikeIcon;
// TrophyIcon теперь импортируется как SVG
const GamepadIcon = () => <span style={{marginRight: 8}}>🕹️</span>;


const SectionButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  background: #388e1f;
  color: #FFF;
  font-family: Roboto;
  font-size: 16px;
  
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  border-radius: 10px;
  padding: 7px;
  margin-bottom: 2px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #2e7031;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  
`;

const VerticalDivider = styled.span`
  position: absolute;
  right: 44px;
  top: 50%;
  width: 2px;
  height: 100%;
  background: #184d1c;
  transform: translateY(-50%);
  border-radius: 0;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: rgba(255,255,255,0.15);
  margin: 16px 0;
  border-radius: 2px;
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  color: #fff;
`;

const Arrow = styled.span`
  font-size: 1.1em;
  cursor: pointer;
  user-select: none;
  

  &:hover {
    opacity: 1;
  }
`;

// Семантические стили для блока NHL
const NHLSection = styled.section`
  background: #fff;
  border-radius: 10px;
  border: 1px solid #388e1f;
  overflow: hidden;
  margin-top: 0;
  margin-bottom: 0;
  font-family: inherit;
`;
const NHLHeader = styled.header`
  background: #388e1f;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px;
  font-weight: 700;
  font-size: 1rem;
  
`;
const NHLTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
`;
const NHLContent = styled.main`
  padding: 8px;
  background: #fff;
`;
const NHLRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 16px;
  color: #222;
`;
const NHLTeamsList = styled.ul`
  
  margin-bottom: 6px;
  padding: 0;
  list-style: none;
`;
const NHLTeam = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 2px;
`;

const NHLTeamName = styled.button`
  display: flex;
  align-items: center;
  gap: 3px;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
`;
const NHLTeamText = styled.span`
  color: #00251D;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
`;

const OddsOutcome = styled.span`
  color: #00251D;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const OddsValue = styled.span`
  color: #00251D;
  text-align: right;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const NHLScore = styled.strong`
  font-weight: 700;
  font-size: 16px;
  color: #00251D;
`;
const NHLStatus = styled.p`
  font-size: 12px;
  color: #888;
  
`;
const NHLDetails = styled.button`
  color: #388e1f;
  font-weight: 500;
  font-size: 14px;
  padding: 0px;
  margin-bottom: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
`;
const NHLOddsList = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;
const NHLOddsItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding: 6px 8px;
  background: #b7d3b2;
  color: #00251D;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
  box-sizing: border-box;
  min-width: 70px;
  gap: 6px;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #a2c6a2;
  }
`;

export const Sidebar = () => (
  <SidebarWrapper>
    <CollapseButton type="button">{"<< Collapse block"}</CollapseButton>
    
    <SectionButton style={{position: 'relative'}}>
      <div style={{display: 'flex', alignItems: 'center', flex: 1}}>
        <IconWrapper>
          <StarIcon />
        </IconWrapper>
        <span style={{marginLeft: 4}}>Favorite matches</span>
      </div>
      <VerticalDivider />
      <Arrow style={{marginLeft: 0}}><DownCheckIcon /></Arrow>
    </SectionButton>
    <SectionButton style={{position: 'relative'}}>
      <div style={{display: 'flex', alignItems: 'center', flex: 1}}>
        <IconWrapper>
          <ThumbIcon />
        </IconWrapper>
        <span style={{marginLeft: 4}}>Recommended</span>
      </div>
      <VerticalDivider />
      <Arrow style={{marginLeft: 0}}><DownCheckIcon /></Arrow>
    </SectionButton>
    <SectionButton style={{position: 'relative'}}>
      <div style={{display: 'flex', alignItems: 'center', flex: 1}}>
        <IconWrapper>
          <TrophyIcon />
        </IconWrapper>
        <span style={{marginLeft: 4}}>Top competitions</span>
      </div>
      <VerticalDivider />
      <Arrow style={{marginLeft: 0}}><DownCheckIcon /></Arrow>
    </SectionButton>
    
    {/* Нижний блок не кнопка, а отдельный контейнер */}
    <NHLSection>
      <NHLHeader>
        <NHLTitle>
          <WarrantyIcon />
          Top Games
        </NHLTitle>
        <nav aria-label="NHL pagination">
          <span style={{cursor: 'pointer', fontSize: 18}}>&lt;</span>
          <span style={{fontSize: 14}}>1/5</span>
          <span style={{cursor: 'pointer', fontSize: 18}}>&gt;</span>
        </nav>
      </NHLHeader>
      <NHLContent>
        <NHLRow>
          <PuckIcon style={{width: 20, height: 20}} />
          NHL
          <span style={{marginLeft: 'auto'}}><StarGreen style={{width: 18, height: 18, cursor: 'pointer'}} /></span>
        </NHLRow>
        <NHLStatus>
          Intermission, 40 minutes / Chicago Blackhawks in Possession
        </NHLStatus>
        <NHLTeamsList>
          <NHLTeam>
            <NHLTeamName type="button"><Profile style={{width: 16, height: 16}} /><NHLTeamText>Carolina Hurricanes</NHLTeamText></NHLTeamName>
            <NHLScore>2</NHLScore>
          </NHLTeam>
          <NHLTeam>
            <NHLTeamName type="button"><Profile style={{width: 16, height: 16}} /><NHLTeamText>Chicago Blackhawks</NHLTeamText></NHLTeamName>
            <NHLScore>2</NHLScore>
          </NHLTeam>
        </NHLTeamsList>
        <NHLDetails>
          Detailed score <ForwardGreen style={{width: 16, height: 16, verticalAlign: 'middle'}} />
        </NHLDetails>
        <NHLOddsList>
          <NHLOddsItem type="button" variant="green"><OddsOutcome>W1</OddsOutcome><OddsValue>4.21</OddsValue></NHLOddsItem>
          <NHLOddsItem type="button" variant="green"><OddsOutcome>X</OddsOutcome><OddsValue>2.9</OddsValue></NHLOddsItem>
          <NHLOddsItem type="button" variant="green"><OddsOutcome>W2</OddsOutcome><OddsValue>4.21</OddsValue></NHLOddsItem>
        </NHLOddsList>
      </NHLContent>
    </NHLSection>

    {/* Sidebar Categories Block (reference style) */}
    <CategoriesHeader>
        <CategoriesTabs>
          <CategoriesTab $active={true} $right>
            <span style={{display: 'inline-flex', alignItems: 'center'}}>
              <span style={{width: 8, height: 8, background: '#4ad14a', borderRadius: '50%', display: 'inline-block', marginRight: 6}}></span>
              LIVE
            </span>
          </CategoriesTab>
          <CategoriesTab $active={false} $left>
            SPORTS
          </CategoriesTab>
        </CategoriesTabs>
      </CategoriesHeader>
      
    <CategoriesBlock>
      
      <CategoriesRow>
        <span style={{display: 'flex', alignItems: 'center'}}>
          <span style={{
            marginRight: 2,
            color: '#00251D',
            fontFamily: 'Roboto',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal'
          }}>ALL</span>
          <span style={{
            color: '#00251D',
            fontFamily: 'Roboto',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal'
          }}>805</span>
        </span>
        <CategoriesRowIcon>
          <YouTubeIcon />
        </CategoriesRowIcon>
        <span style={{
          color: '#00251D',
          fontFamily: 'Roboto',
          fontSize: 16,
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal'
        }}>330</span>
        <span style={{marginLeft: 'auto', fontSize: 18}}>
          <EarthGlobeIcon />
        </span>
      </CategoriesRow>
      {/* ...existing code... */}
      <CategoriesSection>
        <CategoriesTitle style={{
          background: '#b7c9b7',
          
          padding: '4px 8px',
          borderRadius: '0',
          margin: 0,
        }}>Top</CategoriesTitle>
        <CategoriesList style={{background: '#fff', borderRadius: 0, margin: 0, padding: 0}}>
          <CategoryItem style={{
            display: 'flex', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #dbe6db', background: 'transparent', cursor: 'pointer', fontFamily: 'Roboto', fontSize: 18, fontWeight: 400, color: '#00251D', boxShadow: 'none', borderRadius: 0, position: 'relative'
          }}>
            <CategoryIcon style={{marginRight: 16}}><SoccerBallIcon /></CategoryIcon>
            <span style={{display: 'flex', alignItems: 'center', gap: 4, color: '#00251D'}}>
              <CategoryName style={{fontWeight: 400, fontSize: 18, color: '#00251D', marginRight: 4}}>Football</CategoryName>
              <CategoryCount style={{fontWeight: 400, fontSize: 18, color: '#00251D'}}>(25)</CategoryCount>
            </span>
              <span style={{display: 'flex', alignItems: 'center', marginLeft: 'auto'}}>
                  <CategoryVerticalDivider />
                <CategoryArrow style={{color: '#00251D', fontSize: 22, marginLeft: 16, zIndex: 1}}><ForwardBlackIcon /></CategoryArrow>
              </span>
          </CategoryItem>
          <CategoryItem style={{
            display: 'flex', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #dbe6db', background: 'transparent', cursor: 'pointer', fontFamily: 'Roboto', fontSize: 18, fontWeight: 400, color: '#00251D', boxShadow: 'none', borderRadius: 0, position: 'relative'
          }}>
            <CategoryIcon style={{marginRight: 16}}><TennisBallIcon /></CategoryIcon>
            <span style={{display: 'flex', alignItems: 'center', gap: 4, color: '#00251D'}}>
              <CategoryName style={{fontWeight: 400, fontSize: 18, color: '#00251D', marginRight: 4}}>Tennis</CategoryName>
              <CategoryCount style={{fontWeight: 400, fontSize: 18, color: '#00251D'}}>(15)</CategoryCount>
            </span>
            <span style={{display: 'flex', alignItems: 'center', marginLeft: 'auto'}}>
              <CategoryVerticalDivider />
              <CategoryArrow style={{color: '#00251D', fontSize: 22, marginLeft: 16, zIndex: 1}}><ForwardBlackIcon /></CategoryArrow>
            </span>
          </CategoryItem>
          <CategoryItem style={{
            display: 'flex', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #dbe6db', background: 'transparent', cursor: 'pointer', fontFamily: 'Roboto', fontSize: 18, fontWeight: 400, color: '#00251D', boxShadow: 'none', borderRadius: 0, position: 'relative'
          }}>
            <CategoryIcon style={{marginRight: 16}}><BasketballIcon /></CategoryIcon>
            <span style={{display: 'flex', alignItems: 'center', gap: 4, color: '#00251D'}}>
              <CategoryName style={{fontWeight: 400, fontSize: 18, color: '#00251D', marginRight: 4}}>Basketball</CategoryName>
              <CategoryCount style={{fontWeight: 400, fontSize: 18, color: '#00251D'}}>(60)</CategoryCount>
            </span>
            <span style={{display: 'flex', alignItems: 'center', marginLeft: 'auto'}}>
              <CategoryVerticalDivider />
              <CategoryArrow style={{color: '#00251D', fontSize: 22, marginLeft: 16, zIndex: 1}}><ForwardBlackIcon /></CategoryArrow>
            </span>
          </CategoryItem>
          <CategoryItem style={{
            display: 'flex', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #dbe6db', background: 'transparent', cursor: 'pointer', fontFamily: 'Roboto', fontSize: 18, fontWeight: 400, color: '#00251D', boxShadow: 'none', borderRadius: 0, position: 'relative'
          }}>
            <CategoryIcon style={{marginRight: 16}}><PuckIcon /></CategoryIcon>
            <span style={{display: 'flex', alignItems: 'center', gap: 4, color: '#00251D'}}>
              <CategoryName style={{fontWeight: 400, fontSize: 18, color: '#00251D', marginRight: 4}}>Ice Hockey</CategoryName>
              <CategoryCount style={{fontWeight: 400, fontSize: 18, color: '#00251D'}}>(13)</CategoryCount>
            </span>
            <span style={{display: 'flex', alignItems: 'center', marginLeft: 'auto'}}>
              <CategoryVerticalDivider />
              <CategoryArrow style={{color: '#00251D', fontSize: 22, marginLeft: 16, zIndex: 1}}><ForwardBlackIcon /></CategoryArrow>
            </span>
          </CategoryItem>
          <CategoryItem style={{
            display: 'flex', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #dbe6db', background: 'transparent', cursor: 'pointer', fontFamily: 'Roboto', fontSize: 18, fontWeight: 400, color: '#00251D', boxShadow: 'none', borderRadius: 0, position: 'relative'
          }}>
            <CategoryIcon style={{marginRight: 16}}><VolleyballIcon /></CategoryIcon>
            <span style={{display: 'flex', alignItems: 'center', gap: 4, color: '#00251D'}}>
              <CategoryName style={{fontWeight: 400, fontSize: 18, color: '#00251D', marginRight: 4}}>Volleyball</CategoryName>
              <CategoryCount style={{fontWeight: 400, fontSize: 18, color: '#00251D'}}>(14)</CategoryCount>
            </span>
            <span style={{display: 'flex', alignItems: 'center', marginLeft: 'auto'}}>
              <CategoryVerticalDivider />
              <CategoryArrow style={{color: '#00251D', fontSize: 22, marginLeft: 16, zIndex: 1}}><ForwardBlackIcon /></CategoryArrow>
            </span>
          </CategoryItem>
          <CategoryItem style={{
            display: 'flex', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #dbe6db', background: 'transparent', cursor: 'pointer', fontFamily: 'Roboto', fontSize: 18, fontWeight: 400, color: '#00251D', boxShadow: 'none', borderRadius: 0, position: 'relative'
          }}>
            <CategoryIcon style={{marginRight: 16}}><PingPongIcon /></CategoryIcon>
            <span style={{display: 'flex', alignItems: 'center', gap: 4, color: '#00251D'}}>
              <CategoryName style={{fontWeight: 400, fontSize: 18, color: '#00251D', marginRight: 4}}>Table Tennis</CategoryName>
              <CategoryCount style={{fontWeight: 400, fontSize: 18, color: '#00251D'}}>(19)</CategoryCount>
            </span>
            <span style={{display: 'flex', alignItems: 'center', marginLeft: 'auto'}}>
              <CategoryVerticalDivider />
              <CategoryArrow style={{color: '#00251D', fontSize: 22, marginLeft: 16, zIndex: 1}}><ForwardBlackIcon /></CategoryArrow>
            </span>
          </CategoryItem>
          <CategoryItem style={{
            display: 'flex', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #dbe6db', background: 'transparent', cursor: 'pointer', fontFamily: 'Roboto', fontSize: 18, fontWeight: 400, color: '#00251D', boxShadow: 'none', borderRadius: 0, position: 'relative'
          }}>
            <CategoryIcon style={{marginRight: 16}}><CricketIcon /></CategoryIcon>
            <span style={{display: 'flex', alignItems: 'center', gap: 4, color: '#00251D'}}>
              <CategoryName style={{fontWeight: 400, fontSize: 18, color: '#00251D', marginRight: 4}}>Cricket</CategoryName>
              <CategoryCount style={{fontWeight: 400, fontSize: 18, color: '#00251D'}}>(9)</CategoryCount>
            </span>
            <span style={{display: 'flex', alignItems: 'center', marginLeft: 'auto'}}>
              <CategoryVerticalDivider />
              <CategoryArrow style={{color: '#00251D', fontSize: 22, marginLeft: 16, zIndex: 1}}><ForwardBlackIcon /></CategoryArrow>
            </span>
          </CategoryItem>
          <CategoryItem style={{
            display: 'flex', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #dbe6db', background: 'transparent', cursor: 'pointer', fontFamily: 'Roboto', fontSize: 18, fontWeight: 400, color: '#00251D', boxShadow: 'none', borderRadius: 0, position: 'relative'
          }}>
            <CategoryIcon style={{marginRight: 16}}><PSControllerIcon /></CategoryIcon>
            <span style={{display: 'flex', alignItems: 'center', gap: 4, color: '#00251D'}}>
              <CategoryName style={{fontWeight: 400, fontSize: 18, color: '#00251D', marginRight: 4}}>Esports</CategoryName>
              <CategoryCount style={{fontWeight: 400, fontSize: 18, color: '#00251D'}}>(7)</CategoryCount>
            </span>
            <span style={{display: 'flex', alignItems: 'center', marginLeft: 'auto'}}>
              <CategoryVerticalDivider />
              <CategoryArrow style={{color: '#00251D', fontSize: 22, marginLeft: 16, zIndex: 1}}><ForwardBlackIcon /></CategoryArrow>
            </span>
          </CategoryItem>
        </CategoriesList>
      </CategoriesSection>
      <CategoriesSection>
        <CategoriesTitle>Categories from A to Z</CategoriesTitle>
        <CategoriesList>
          <CategoryItem>
            <CategoryIcon>⚾️</CategoryIcon>
            <CategoryName>Baseball</CategoryName>
            <CategoryCount>2</CategoryCount>
            <CategoryArrow>▼</CategoryArrow>
          </CategoryItem>
          <CategoryItem>
            <CategoryIcon>🏇</CategoryIcon>
            <CategoryName>Horse Racing</CategoryName>
            <CategoryCount>6</CategoryCount>
            <CategoryArrow>▼</CategoryArrow>
          </CategoryItem>
        </CategoriesList>
      </CategoriesSection>
      <CategoriesSection>
        <CategoriesTitle>1xPlay</CategoriesTitle>
        <CategoriesList>
          <CategoryItem>
            <CategoryIcon>🎲</CategoryIcon>
            <CategoryName>Baccarat</CategoryName>
            <CategoryCount>6</CategoryCount>
            <CategoryArrow>▼</CategoryArrow>
          </CategoryItem>
        </CategoriesList>
      </CategoriesSection>
    </CategoriesBlock>
  </SidebarWrapper>
);
