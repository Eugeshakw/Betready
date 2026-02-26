// SidebarSection.jsx
import styled from 'styled-components';

const SectionWrapper = styled.div`
  margin-bottom: 8px;
`;

const SectionHeader = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1a4d3c;
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #256b52;
  }
`;

const SectionContent = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 4px;
  padding: 12px;
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

export const SidebarSection = ({ title, icon, children, open, onToggle }) => (
  <SectionWrapper>
    <SectionHeader onClick={onToggle}>
      <span>{icon} {title}</span>
      <span>{open ? '▲' : '▼'}</span>
    </SectionHeader>
    <SectionContent open={open}>
      {children}
    </SectionContent>
  </SectionWrapper>
);