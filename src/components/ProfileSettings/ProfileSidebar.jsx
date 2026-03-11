import React from "react";
import styled from "styled-components";
import ProfileSidebarNavItem from "./ProfileSidebarNavItem";

const SidebarWrapper = styled.aside`
  background-color: #b0c8a2;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 18px 20px;
  width: 300px;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #00251d;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Nickname = styled.p`
  font-weight: 700;
  font-size: 12px;
`;

const Balance = styled.p`
  font-weight: 700;
  font-size: 16px;
`;

export const Separator = styled.hr`
  border: none;
  height: 1px;
  background-color: #397617;
  margin-top: 20px;
  margin-bottom: 0;
  margin-left: -20px;
  margin-right: -20px;
`;

const ProfileSidebar = ({ user, navItems, activeTabId, onTabClick }) => {
  user = user.mockUser;
  return (
    <SidebarWrapper>
      {user && (
        <>
          <UserInfoWrapper>
            <Avatar src={user.personalInfo.avatarUrl} alt="User Avatar" />
            <TextWrapper>
              <Nickname>{user.personalInfo.username}</Nickname>
              <Balance>{`${user.balances.realMoney} ${user.balances.currency}`}</Balance>
            </TextWrapper>
          </UserInfoWrapper>
          <Separator />
        </>
      )}
      <div>
        {navItems.map((item, index) => (
          <ProfileSidebarNavItem
            key={item.id}
            icon={item.icon}
            text={item.text}
            isLast={index === navItems.length - 1}
            isActive={item.id === activeTabId}
            onClick={() => onTabClick(item.id)}
            group={item.group}
            activeTabId={activeTabId}
            onSubTabClick={onTabClick}
          />
        ))}
      </div>
    </SidebarWrapper>
  );
};

export default ProfileSidebar;
