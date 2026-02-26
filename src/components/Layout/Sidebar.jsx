import styled from 'styled-components';
import StarIcon from '../../assets/svg/StarIcon';
import DownCheckIcon from '../../assets/svg/DownCheckIcon';
import FacebookLikeIcon from '../../assets/svg/FacebookLikeIcon';
import TrophyIcon from '../../assets/svg/TrophyIcon';
import WarrantyIcon from '../../assets/svg/WarrantyIcon';
const SidebarWrapper = styled.aside`
  
  color: #fff;
  width: 240px;
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
    <div style={{
      background: '#fff',
      borderRadius: 10,
      border: '1px solid #388e1f',
      overflow: 'hidden',
      marginTop: 0,
      
      marginBottom: 0,
      fontFamily: 'inherit',
      
    }}>
      {/* Header */}
      <div style={{
        background: '#388e1f',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '7px',
        fontWeight: 700,
        fontSize: '1rem',
        
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}>
        <span style={{display: 'flex', alignItems: 'center', gap: 6}}>
          <WarrantyIcon />
          Top Games
        </span>
        <span style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <span style={{cursor: 'pointer', fontSize: 18}}>&lt;</span>
          <span style={{fontSize: 14}}>1/5</span>
          <span style={{cursor: 'pointer', fontSize: 18}}>&gt;</span>
        </span>
      </div>
      {/* Content */}
      <div style={{padding: '12px 14px 10px 14px', background: '#fff'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 16, color: '#222'}}>
          <span style={{fontSize: 20}}>🏒</span>
          NHL
          <span style={{marginLeft: 'auto', color: '#388e1f', fontSize: 18, cursor: 'pointer'}}>☆</span>
        </div>
        <div style={{fontSize: 12, color: '#888', margin: '2px 0 8px 28px'}}>
          Intermission, 40 minutes / Chicago Blackhawks in Possession
        </div>
        <div style={{marginLeft: 28, marginBottom: 6}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 500, fontSize: 14, marginBottom: 2}}>
            <span style={{display: 'flex', alignItems: 'center', gap: 4}}>
              <span style={{fontSize: 16}}>👤</span> Carolina Hurricanes
            </span>
            <span style={{fontWeight: 700, fontSize: 16}}>2</span>
          </div>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 500, fontSize: 14}}>
            <span style={{display: 'flex', alignItems: 'center', gap: 4}}>
              <span style={{fontSize: 16}}>👤</span> Chicago Blackhawks
            </span>
            <span style={{fontWeight: 700, fontSize: 16}}>2</span>
          </div>
        </div>
        <div style={{color: '#388e1f', fontWeight: 500, fontSize: 14, marginLeft: 28, marginBottom: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4}}>
          Detailed score <span style={{fontSize: 14}}>&#9660;</span>
        </div>
        <div style={{display: 'flex', gap: 6, marginLeft: 28}}>
          <div style={{background: '#e6f4ea', color: '#388e1f', borderRadius: 6, padding: '2px 8px', fontWeight: 700, fontSize: 13}}>W1</div>
          <div style={{background: '#f5f5f5', color: '#222', borderRadius: 6, padding: '2px 8px', fontWeight: 700, fontSize: 13}}>4.21</div>
          <div style={{background: '#e6f4ea', color: '#388e1f', borderRadius: 6, padding: '2px 8px', fontWeight: 700, fontSize: 13}}>X</div>
          <div style={{background: '#f5f5f5', color: '#222', borderRadius: 6, padding: '2px 8px', fontWeight: 700, fontSize: 13}}>2.9</div>
          <div style={{background: '#e6f4ea', color: '#388e1f', borderRadius: 6, padding: '2px 8px', fontWeight: 700, fontSize: 13}}>W2</div>
          <div style={{background: '#f5f5f5', color: '#222', borderRadius: 6, padding: '2px 8px', fontWeight: 700, fontSize: 13}}>4.21</div>
        </div>
      </div>
    </div>
  </SidebarWrapper>
);
