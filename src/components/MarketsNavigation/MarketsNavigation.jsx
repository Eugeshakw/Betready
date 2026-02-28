import React from "react";
import styled from "styled-components";
import { SearchIcon } from "../../assets/svg/SearchIcon";


const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #397617;
  color: #fff;
  font-size: 13px;
  font-family: Roboto, Arial, sans-serif;
  
  min-height: 32px;
`;

const NavItem = styled.div`
  padding: 0 8px;
  height: 36px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 400;
  &.active {
    background: #245c13;
    font-weight: bold;
    border-radius: 2px;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  margin-left: auto;
  display: flex;
  align-items: center;
  padding-right: 8px;
`;

const NavSearch = styled.input`
  background: #013C2F;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  padding: 6px 36px 6px 12px;
  outline: none;
  width: 160px;
`;

const SearchButton = styled.button`
  height: 24px;
  width: 24px;
  background: #003c1d;
  border: none;
  border-radius: 4px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SearchIconStyled = styled(SearchIcon)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  pointer-events: none;
`;



const navItems = [
  { label: "All markets", count: 439, active: true },
  { label: "Total", count: 91 },
  { label: "Handicap", count: 18 },
  { label: "Popular", count: 123 },
  { label: "Goals", count: 43 },
  { label: "Intervals", count: 22 },
  { label: "Asian markets", count: 42 },
];

const MarketsNavigation = () => (
  <NavWrapper>
    {navItems.map((item, idx) => (
      <NavItem key={idx} className={item.active ? "active" : ""}>
        {item.label} {item.count ? `(${item.count})` : ""}
      </NavItem>
    ))}
    <SearchWrapper>
      <NavSearch placeholder="Search by market" />
      <SearchIconStyled width={20} height={20} />
    </SearchWrapper>
  </NavWrapper>
);

export default MarketsNavigation;
