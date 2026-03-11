import styled from "styled-components";
import { TopBar } from "./TopBar";
import { Sidebar } from "./Sidebar";
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

export const PageLayout = ({ children }) => (
  <LayoutWrapper>
    <ContentWrapper>
      <Sidebar />
      {children}
      <RightSidebar />
    </ContentWrapper>
  </LayoutWrapper>
);
