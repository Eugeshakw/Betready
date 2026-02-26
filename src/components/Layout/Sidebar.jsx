import styled from 'styled-components';

const SidebarWrapper = styled.aside`
  
  color: #fff;
  width: 240px;
  min-height: 100vh;
  padding-right: 8px;
  box-sizing: border-box;
`;

const CollapseButton = styled.button`
      background: #013C2F;
      color: #99B1AC;
      border: none;
      border-radius: 8px;
      padding-top: 8px;
      padding-bottom: 8px;
      font-family: Roboto;
      width: 100%;
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

export const Sidebar = () => (
  <SidebarWrapper>
    <CollapseButton type="button">{"<< Collapse block"}</CollapseButton>
    
    
    
  </SidebarWrapper>
);
