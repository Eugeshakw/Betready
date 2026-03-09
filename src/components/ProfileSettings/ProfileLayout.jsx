import React, { useState } from "react";
import styled from "styled-components";
import ProfileSidebar from "./ProfileSidebar";
import ProfileContent from "./ProfileContent";
import ProfileIcon from "../../assets/svg/profile/Profile.svg";
import SecurityIcon from "../../assets/svg/profile/Protect.svg";
import DepIcon from "../../assets/svg/profile/Stack of Money.svg";
import BetsIcon from "../../assets/svg/profile/Roulette.svg";
import HistoryIcon from "../../assets/svg/profile/Medical History.svg";
import OfferAndBonusesIcon from "../../assets/svg/profile/Wedding Gift.svg";
import TournamentIcon from "../../assets/svg/profile/Trophy.svg";
import VipIcon from "../../assets/svg/profile/Recent Celebrity.svg";
import BellIcon from "../../assets/svg/profile/Bell.svg";
import LogoutIcon from "../../assets/svg/profile/Shutdown.svg";
import OtherIcon from "../../assets/svg/profile/View More.svg";

import { mockUser } from "../ProfileSettings/mockUser.data.js";

export const ProfileLayoutWrapper = styled.div`
  background-color: #397617;
  // padding: 20px;
  border-radius: 8px;
  display: flex;
  width: 100%;
  margin-bottom: 171px;
`;

export const ProfileInnerWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 22px;
  padding-bottom: 22px;
  padding-left: 20px;
  padding-right: 20px;
`;

const ProfileLayout = () => {
  const navItems = [
    { id: "account-settings", icon: ProfileIcon, text: "Account Settings" },
    { id: "account-security", icon: SecurityIcon, text: "Account Security" },
    { id: "deposit", icon: DepIcon, text: "Deposit" },
    { id: "bets", icon: BetsIcon, text: "Bets" },
    { id: "history", icon: HistoryIcon, text: "History" },
    {
      id: "offers-bonuses",
      icon: OfferAndBonusesIcon,
      text: "Offers & Bonuses",
    },
    { id: "tournaments", icon: TournamentIcon, text: "Tournaments" },
    { id: "vip-club", icon: VipIcon, text: "VIP Club" },
    { id: "messages", icon: BellIcon, text: "Messages" },
    { id: "other", icon: OtherIcon, text: "Other" },
    { id: "logout", icon: LogoutIcon, text: "Logout" },
  ];

  const [activeTabId, setActiveTabId] = useState(navItems[0].id);

  const handleTabClick = (id) => {
    setActiveTabId(id);
  };

  const activeTab = navItems.find((item) => item.id === activeTabId);

  return (
    <ProfileLayoutWrapper>
      <ProfileInnerWrapper>
        <ProfileSidebar
          navItems={navItems}
          activeTabId={activeTabId}
          onTabClick={handleTabClick}
          user={mockUser}
        />
        <ProfileContent activeTab={activeTab} user={mockUser} />
      </ProfileInnerWrapper>
    </ProfileLayoutWrapper>
  );
};

export default ProfileLayout;
