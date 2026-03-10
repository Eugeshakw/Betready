import styled from "styled-components";
import ForwardIcon from "../../assets/svg/profile/Forward.svg";
import React, { useState } from "react";

const NavItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 10px 7px 20px;
  margin-left: -20px;
  margin-right: -20px;
  cursor: pointer;
  background-color: ${(props) =>
    props.$isActive ? "rgba(255, 255, 255, 0.5)" : "transparent"};

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

  flex-grow: 1;
`;

const IconRotator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

// 🟢 Головний контейнер для плавного відкриття (трюк з grid)
const SubItemsContainer = styled.div`
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? "1fr" : "0fr")};
  transition: grid-template-rows 0.3s ease-in-out;
  margin-left: -20px;
  margin-right: -20px;
`;

// 🟢 Внутрішній контейнер, який приховує контент під час анімації
const SubItemsInner = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

// 🟢 Стиль для самого підпункту
const SubItem = styled.div`
  align-items: center;
  display: flex;
  padding: 9px 20px; /* Збільшений відступ зліва, щоб візуально бути під текстом */
  font-size: 12px; /* 🟢 Текст 12px, як ти просив */
  color: #00251d;
  cursor: pointer;
  font-weight: 700;
  background-color: ${(props) =>
    props.$isActive ? "rgba(255, 255, 255, 0.3)" : "transparent"};

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const ItemSeparator = styled.hr`
  border: none;
  height: 1px;
  background-color: #397617;
  margin: 0 -20px; /* Extend to full width and remove vertical gaps */
`;

const ProfileSidebarNavItem = ({
  icon: Icon,
  text,
  isLast,
  isActive,
  onClick,
  group,
  activeTabId,
  onSubTabClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const isChildActive = group
    ? group.some((subItem) => subItem.id === activeTabId)
    : false;
  const isHighlighted = isChildActive;

  const handleItemClick = () => {
    if (group) {
      setIsOpen(!isOpen);
    } else {
      onClick();
    }
  };
  return (
    <>
      <NavItemWrapper
        onClick={handleItemClick}
        $isActive={isActive || isHighlighted}
      >
        <IconWrapper>{Icon && <Icon width="18" height="18" />}</IconWrapper>
        <NavText>{text}</NavText>
        {group && (
          <IconRotator $isOpen={isOpen}>
            <ForwardIcon />
          </IconRotator>
        )}
      </NavItemWrapper>
      {group && (
        <SubItemsContainer $isOpen={isOpen}>
          <SubItemsInner>
            {group.map((subItem) => {
              console.log(subItem);
              const SubIcon = subItem.icon;
              return (
                <SubItem
                  key={subItem.id}
                  $isActive={activeTabId === subItem.id}
                  onClick={(e) => {
                    e.stopPropagation(); // Щоб клік не йшов вище
                    onSubTabClick(subItem.id);
                  }}
                >
                  <IconWrapper>
                    <SubIcon />
                  </IconWrapper>
                  {subItem.text}
                </SubItem>
              );
            })}
          </SubItemsInner>
        </SubItemsContainer>
      )}
      {!isLast && <ItemSeparator />}
    </>
  );
};

export default ProfileSidebarNavItem;
