import styled from 'styled-components';

const SidebarWrapper = styled.aside`
  background: #205c2b;
  color: #fff;
  width: 240px;
  min-height: 100vh;
  padding: 16px 0;
  box-sizing: border-box;
`;

export const Sidebar = () => (
  <SidebarWrapper>
    <div style={{padding: '0 16px', fontWeight: 'bold', marginBottom: 16}}>Menu</div>
    {/* Здесь будут пункты меню */}
    <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
      <li>Favorites</li>
      <li>Recommended</li>
      <li>Top Games</li>
      <li>All Sports</li>
      <li>Casino</li>
      <li>Promo</li>
    </ul>
  </SidebarWrapper>
);
