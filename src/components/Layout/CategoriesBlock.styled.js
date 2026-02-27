export const CategoryVerticalDivider = styled.span`
  position: absolute;
  right: 36px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #dbe6db;
  border-radius: 1px;
  display: block;
`;
export const CategoryName = styled.span`
  flex: 1;
  color: #222;
`;
export const CategoryItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #b7c9b7;
  font-size: 16px;
  font-family: Roboto, Arial, sans-serif;
  color: #00251D;
  background: #fff;
  cursor: pointer;
  &:hover {
    background: #e6f2e2;
  }
`;
export const CategoryIcon = styled.span`
  font-size: 18px;
  margin-right: 8px;
`;
export const CategoryCount = styled.span`
  color: #388e1f;
  font-weight: 700;
  margin-left: 8px;
`;
export const CategoriesTabs = styled.div`
  display: flex;
  width: 100%;
`;


export const CategoriesRow = styled.div`
  display: flex;
  align-items: center;
  background: #c2d9c2;
  padding: 4px 8px;
  
  font-size: 15px;
  font-weight: 700;
`;

export const CategoriesRowIcon = styled.span`
  margin-left: 12px;
  margin-right: 4px;
`;

export const CategoriesRowCount = styled.span`
  color: #388e1f;
  font-weight: 700;
  margin-left: 4px;
`;
import styled from 'styled-components';

export const CategoriesBlock = styled.div`
  
  background: #e6f2e2;
  border-radius: 8px;
  
  font-family: Roboto, Arial, sans-serif;
`;

export const CategoriesHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-size: 15px;
  
`;

export const CategoriesSection = styled.section`
  
`;

export const CategoriesTitle = styled.div`
  color: #00251D;
  font-family: Roboto, Arial, sans-serif;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  font-weight: 400;
  background: #b7c9b7;
  padding: 8px 12px;
  border-radius: 0;
  margin: 0;
  border-bottom: 1px solid #b7c9b7;
`;

export const CategoriesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 12px;
`;

export const CategoriesTab = styled.div`
  flex: 1;
  text-align: center;
  font-weight: 700;
  font-size: 15px;
  padding: 8px 0;
  background: ${props => props.$active ? '#357a22' : '#093c2f'};
  color: ${props => props.$active ? '#fff' : '#99B1AC'};
  border-radius: ${props => props.$left ? '0 10px 0 0' : props.$right ? '10px 0 0 0' : '10px 10px 0 0'};
  ${props => props.$left && 'border-top-left-radius: 0 !important;'}
  cursor: pointer;
  position: relative;
  & span {
    position: relative;
    z-index: 1;
  }
  /* Удалено подчеркивание для LIVE вкладки */
`;
  


export const CategoryArrow = styled.span`
  font-size: 12px;
  color: #388e1f;
  margin-left: 8px;
`;
