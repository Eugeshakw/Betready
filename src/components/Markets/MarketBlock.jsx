import React from "react";
import PinIcon from "../../assets/svg/PinIcon";
import { ForwardIcon } from "./ForwardIcon";
import styled from "styled-components";

const BlockWrapper = styled.div`
  background: #B0C8A2;;
  border-radius: 8px;
  padding: 0;
  width: 100%;
  overflow: hidden;
`;

const BlockHeader = styled.div`
  background: #B0C8A2;;
  color: #00251D;
  font-weight: bold;
  font-size: 16px;
  padding: 8px 16px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BlockContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  padding: 2px;
`;

const Option = styled.button`
  background: #fff;
  border-radius: 4px;
  border: none;
  justify-content: space-between;
  padding: 6px 12px;
  flex: 1 1 calc(33.33% - 4px);
  min-width: 90px;
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
    text-align: right;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const MarketBlock = ({ title, options }) => (
  <BlockWrapper>
    <BlockHeader>
      <PinIcon width={20} height={20} style={{marginRight: 8}} />
      {title}
      <span style={{marginLeft: 'auto'}}><ForwardIcon width={18} height={18} /></span>
    </BlockHeader>
    <BlockContent>
      {options.map((opt, idx) => (
        <Option key={idx} type="button">
          {opt.name}
          <Odds>{opt.odds}</Odds>
        </Option>
      ))}
    </BlockContent>
  </BlockWrapper>
);

export default MarketBlock;
