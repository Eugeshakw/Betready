/* eslint-disable no-unused-vars */
import styled from "styled-components";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { LeagueNavBar } from "../TopEvents/LeagueNavBar/LeagueNavBar.jsx";
import { LayoutWrapper, ContentWrapper } from "./PageLayout.jsx";
import { mockUser } from "../ProfileSettings/mockUser.data.js";

import ProfileLayout from "../ProfileSettings/ProfileLayout";
import ProfileSidebar from "../ProfileSettings/ProfileSidebar";
import ProfileContent from "../ProfileSettings/ProfileContent";

const ProfileSettings = () => {
  return (
    <LayoutWrapper>
      <TopBar />
      <Header />
      <LeagueNavBar />

      <ContentWrapper>
        <Sidebar />
        <ProfileLayout>
          <ProfileSidebar user={mockUser} />
          <ProfileContent />
        </ProfileLayout>
      </ContentWrapper>

      <Footer />
    </LayoutWrapper>
  );
};

export default ProfileSettings;
