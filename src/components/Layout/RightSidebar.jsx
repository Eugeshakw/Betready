import React from "react";
import styled from "styled-components";
import AppsIcon from "../../assets/svg/AppsIcon";
const SidebarContainer = styled.div`
  width: 56px;
  padding-left: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  
`;

const SidebarButton = styled.button`
  margin: 8px 0;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: none;
  background: #63D92B;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #3fae2a;
  }

  &.dark,
  &[style*='#013C2F'] {
    background: #013C2F;
    transition: background 0.2s;
  }
  &.dark:hover,
  &[style*='#013C2F']:hover {
    background: #025c46;
  }

  &.vertical {
    writing-mode: vertical-rl;
    color: #FFF;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    height: auto;
    box-sizing: border-box;
    letter-spacing: unset;
  }
`;

const SidebarLabelButton = styled(SidebarButton)`
  color: #99B1AC;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  background: #013C2F;
`;

const RightSidebar = () => (
  <SidebarContainer>
    <SidebarLabelButton>{"<<"}</SidebarLabelButton>
    <SidebarButton className="vertical">REGISTRATION</SidebarButton>
    <SidebarButton className="vertical" style={{ background: "#013C2F", padding: "9px 10px" }}>Bet slip</SidebarButton>
    <SidebarButton style={{ background: "#013C2F", padding: "9px 10px" }}><AppsIcon /></SidebarButton>
  </SidebarContainer>
);

export default RightSidebar;
