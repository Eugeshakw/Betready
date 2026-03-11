/* eslint-disable no-unused-vars */
import styled from "styled-components";

import { Sidebar } from "./Sidebar";
import { LeagueNavBar } from "../TopEvents/LeagueNavBar/LeagueNavBar.jsx";
import { LayoutWrapper, ContentWrapper } from "./PageLayout.jsx";
import { mockUser } from "../ProfileSettings/mockUser.data.js";

import ProfileLayout from "../ProfileSettings/ProfileLayout";
import ProfileSidebar from "../ProfileSettings/ProfileSidebar";
import ProfileContent from "../ProfileSettings/ProfileContent";

const ProfileSettings = () => {
  return (
    <LayoutWrapper>
      <LeagueNavBar />

      <ContentWrapper>
        <Sidebar />
        <ProfileLayout>
          <ProfileSidebar user={mockUser} />
          <ProfileContent />
        </ProfileLayout>
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default ProfileSettings;
