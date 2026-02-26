import styled from 'styled-components';

const CategoryMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: #205c2b;
  padding: 8px 16px;
  border-radius: 12px;
  margin-top: 12px;
`;

const CategoryItem = styled.button`
  background: #397617;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 6px 18px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #63d92b;
    color: #00251d;
  }
`;

export const CategoryMenu = () => (
  <CategoryMenuWrapper>
    <CategoryItem>TOP-EVENTS</CategoryItem>
    <CategoryItem>EPL</CategoryItem>
    <CategoryItem>Premier League</CategoryItem>
    <CategoryItem>La Liga</CategoryItem>
    <CategoryItem>Euro League</CategoryItem>
    <CategoryItem>NBA</CategoryItem>
    <CategoryItem>NHL</CategoryItem>
    {/* Добавь остальные категории по макету */}
  </CategoryMenuWrapper>
);
