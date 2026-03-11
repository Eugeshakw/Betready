import styled from 'styled-components';
import { TopBar } from './TopBar';
import { Header } from './Header';

const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Navigation = () => (
  <NavigationWrapper>
    <TopBar />
    <Header />
  </NavigationWrapper>
);
