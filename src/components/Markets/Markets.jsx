import React from "react";
import styled from "styled-components";
import MarketBlock from "./MarketBlock";


const MarketsWrapper = styled.div`
  width: 100%;
  background: #fff;
  padding: 8px;
  border-radius: 0 0 4px 8px;
  margin-bottom: 32px;
`;

const ColumnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// Пример данных для групп маркетов
const marketGroups = [
  {
    title: "1X2",
    options: [
      { name: "W1", odds: 4.4 },
      { name: "X", odds: 3.82 },
      { name: "W2", odds: 1.725 }
    ]
  },
  {
    title: "Double Chance",
    options: [
      { name: "1X", odds: 2.056 },
      { name: "12", odds: 1.245 },
      { name: "12", odds: 1.245 },
      
    ]
  },
  
  {
    title: "Both Teams to Score",
    options: [
      { name: "Yes", odds: 2.168 },
      { name: "No", odds: 1.646 }
    ]
  },
  {
    title: "1X2 + Each Team To Score",
    options: [
      { name: "1X", odds: 2.056 },
      { name: "12", odds: 1.245 },
      { name: "12", odds: 1.245 },
      { name: "12", odds: 1.245 },
      { name: "12", odds: 1.245 },
      { name: "2X", odds: 1.192 }
    ]
  },
  {
    title: "Total",
    options: [
      { name: "Over 0.5", odds: 1.06 },
      { name: "Under 0.5", odds: 8 },
      { name: "Over 1", odds: 1.1 },
      { name: "Under 1", odds: 6.9 },
      { name: "Over 1.5", odds: 1.31 },
      { name: "Under 1.5", odds: 3.25 },
      { name: "Over 2", odds: 1.625 },
      { name: "Under 2", odds: 2 },
      { name: "Over 2.5", odds: 2.21 },
      { name: "Under 2.5", odds: 1.665 },
      { name: "Over 3", odds: 3.3 },
      { name: "Under 3", odds: 1.336 },
      { name: "Over 3.5", odds: 3.425 },
      { name: "Under 3.5", odds: 1.288 },
      { name: "Over 4.5", odds: 6.84 },
      { name: "Under 4.5", odds: 1.085 },
      { name: "Over 5.5", odds: 10.6 },
      { name: "Under 5.5", odds: 1.025 }
    ]
  },
  {
    title: "Asian Total",
    options: [
      { name: "Over 0.5", odds: 1.06 },
      { name: "Under 0.5", odds: 8 },
      { name: "Over 1", odds: 1.1 },
      { name: "Under 1", odds: 6.9 },
      { name: "Over 1.5", odds: 1.31 },
      { name: "Under 1.5", odds: 3.25 },
      { name: "Over 2", odds: 1.625 },
      { name: "Under 2", odds: 2 },
      { name: "Over 2.5", odds: 2.21 },
      { name: "Under 2.5", odds: 1.665 },
      { name: "Over 3", odds: 3.3 },
      { name: "Under 3", odds: 1.336 },
    ]
  },
  {
    title: "Asian Total",
    options: [
      { name: "1 (+0.25)", odds: 4.38 },
      { name: "2 (+0.25)", odds: 1.19 },
      { name: "1 (+0.75)", odds: 1.888 },
      { name: "2 (+0.75)", odds: 1.51 },
      { name: "1 (+1.25)", odds: 2 },
      { name: "2 (+1.25)", odds: 2.48 },
      { name: "1 (+1.75)", odds: 1.304 },
      { name: "2 (+1.75)", odds: 3.485 },
      { name: "1 (+2.25)", odds: 1.144 },
      { name: "2 (+2.25)", odds: 5.57 },
      { name: "1 (+2.75)", odds: 1.07 },
      { name: "2 (+2.75)", odds: 8.5 }
    ]
  },
  {
    title: "Handicap",
    options: [
      { name: "1 (-0.5)", odds: 1.08 },
      { name: "2 (+0.5)", odds: 1.045 },
      { name: "1 (0)", odds: 3.41 },
      { name: "2 (0)", odds: 1.29 },
      { name: "1 (+1)", odds: 1.645 },
      { name: "2 (-1)", odds: 2.25 },
      { name: "1 (+1.25)", odds: 1.435 },
      { name: "2 (-1.25)", odds: 2.81 },
      { name: "1 (+1.5)", odds: 1.17 },
      { name: "2 (-1.5)", odds: 2.25 },
      { name: "1 (+2.5)", odds: 1.02 },
      { name: "2 (-3.5)", odds: 11.4 }
    ]
  }
];

const Markets = () => {
  const leftGroups = marketGroups.filter((_, idx) => idx % 2 === 0);
  const rightGroups = marketGroups.filter((_, idx) => idx % 2 === 1);

  const getColumns = (title) => {
    if (["Total", "Asian Handicap", "Handicap"].includes(title)) return 2;
    return 3;
  };

  return (
    <MarketsWrapper>
      <ColumnsWrapper>
        <Column>
          {leftGroups.map((group) => (
            <MarketBlock
              key={group.title}
              title={group.title}
              options={group.options}
              columns={getColumns(group.title)}
            />
          ))}
        </Column>
        <Column>
          {rightGroups.map((group) => (
            <MarketBlock
              key={group.title}
              title={group.title}
              options={group.options}
              columns={getColumns(group.title)}
            />
          ))}
        </Column>
      </ColumnsWrapper>
    </MarketsWrapper>
  );
};

export default Markets;
