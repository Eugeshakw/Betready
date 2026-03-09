import styled from "styled-components";
import { HomeIcon } from "../../assets/svg/HomeIcon"; // Using HomeIcon as a placeholder

const NavItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 20px 7px 20px;
  margin-left: -20px;
  margin-right: -20px;
  cursor: pointer;
  background-color: ${(props) => (props.$isActive ? 'rgba(255, 255, 255, 0.5)' : 'transparent')};

  &:hover {
    background-color: #a0b793;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  margin-right: 10px; /* Space between icon and text */
`;

const NavText = styled.p`
  color: #00251d;
  font-weight: 700;
  font-size: 16px;
`;

const ItemSeparator = styled.hr`
  border: none;
  height: 1px;
  background-color: #397617;
  margin: 0 -20px; /* Extend to full width and remove vertical gaps */
`;

const ProfileSidebarNavItem = ({ icon: Icon, text, isLast, isActive, onClick }) => {
  return (
    <>
      <NavItemWrapper onClick={onClick} $isActive={isActive}>
        <IconWrapper>
          {Icon && <Icon width="18" height="18" />}
        </IconWrapper>
        <NavText>{text}</NavText>
      </NavItemWrapper>
      {!isLast && <ItemSeparator />}
    </>
  );
};


export default ProfileSidebarNavItem;