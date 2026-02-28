import React from "react";
import styled from "styled-components";

const GroupWrapper = styled.div`
  background: #B0C8A2;
  border-radius: 8px;
  margin-bottom: 16px;
  padding-top: 8px;
  padding-left: 2px;
  padding-right: 2px;
  padding-bottom: 2px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const GroupHeader = styled.div`
  background: #B0C8A2;
  color: #00251D;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
  margin-top: 8px;
  
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  
`;

const Option = styled.button`
  background: #fff;
  border-radius: 4px;
  border: none;
  justify-content: space-between;
  padding: 6px 12px;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  display: flex;
  
  align-items: center;
  color: #00251D;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  &:hover {
    background: #E6F4D9;
  }
`;

const Odds = styled.span`
  font-weight: bold;
  margin-left: 6px;
  color: #00251D;
`;

const MarketGroup = ({ title, options }) => (
  <GroupWrapper>
    <GroupHeader>{title}</GroupHeader>
    <OptionsGrid>
      {options.map((opt, idx) => (
        <Option key={idx} type="button">
          {opt.name}
          <Odds>{opt.odds}</Odds>
        </Option>
      ))}
    </OptionsGrid>
  </GroupWrapper>
);

export default MarketGroup;
