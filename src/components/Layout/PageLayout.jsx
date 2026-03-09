import styled from "styled-components";
import { TopBar } from "./TopBar";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";
import Footer from "./Footer";
import RightSidebar from "./RightSidebar";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-left: 8px;
  padding-right: 8px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const PageLayout = () => (
  <LayoutWrapper>
    <TopBar />
    <Header />
    <ContentWrapper>
      <Sidebar />
      <MainContent />
      <RightSidebar />
    </ContentWrapper>
    <Footer />
  </LayoutWrapper>
);
