import React, { useState } from "react";
import styled from "styled-components";

import CalendarIcon from "../../../assets/svg/profile/Calendar.svg";
import ChevronIcon from "../../../assets/svg/profile/Forward.svg";

import { VerifyButton, Table } from "./AccountSettings.jsx";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  /* Якщо треба ще додатково по 20px відступів від самого верху і низу сторінки: */
  padding: 20px 0;
`;

export const DateBlockWrapper = styled.div`
  display: flex;
  align-items: center; /* Вирівнюємо в ряд по центру */
  gap: 12px; /* Відстань між самими селекторами і кнопкою */
  //   width: 40%; /* Займає 40% ширини від PageWrapper */

  /* Якщо на мобільних екранах 40% буде замало, можна додати: */
  /* min-width: 600px; */
`;

export const TableWrapper = styled.div`
  width: 100%; /* Займає всі 100% ширини */
`;

export const DateButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${(props) =>
    !props.$isHistory
      ? `
  width: 200px;
  height: 55px;
  padding: 0 16px;
  `
      : `
  width: 150px;
  height: 48px;
  padding: 0 12px;
  `}
  background-color: #ffffff;
  border: 1px solid #397617;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #00251d;
  font-size: 16px;
  font-weight: 500;
  font-family: inherit;

  &:hover {
    background-color: rgba(57, 118, 23, 0.05);
  }

  svg {
    width: 20px;
    height: 20px;
    fill: #00251d;
    flex-shrink: 0;
  }
`;

// 🟢 НОВИЙ СТИЛЬ: Робимо інпут невидимим, але клікабельним
export const HiddenDateInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0; /* Робить інпут повністю прозорим */
  cursor: pointer;

  /* Спеціальний хак для Chrome/Safari, щоб клік працював по всій ширині кнопки */
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

const formatUIDate = (dateString) => {
  if (!dateString) return "Select Date";

  const date = new Date(dateString);
  const day = date.getDate();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

export const DateBlock = ({ $isHistory }) => {
  // 🟢 Зберігаємо дати у стандартному комп'ютерному форматі YYYY-MM-DD
  const [startDate, setStartDate] = useState("2026-02-16");
  const [endDate, setEndDate] = useState("2026-02-16");

  return (
    <DateBlockWrapper>
      <DateButton $isHistory={$isHistory}>
        {/* Візуальна частина кнопки (як у Figma) */}
        <CalendarIcon />
        <span>{formatUIDate(startDate)}</span>
        <ChevronIcon style={{ transform: "rotate(180deg)" }} />

        {/* Невидимий інпут, який лежить зверху і ловить кліки */}
        <HiddenDateInput
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </DateButton>

      <DateButton>
        <CalendarIcon />
        <span>{formatUIDate(endDate)}</span>
        <ChevronIcon style={{ transform: "rotate(180deg)" }} />

        <HiddenDateInput
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </DateButton>
      <VerifyButton
        style={{
          padding: "10px, 16px, 10px, 16px",
          height: "55px",
          fontSize: 16,
        }}
      >
        Select
      </VerifyButton>
    </DateBlockWrapper>
  );
};

const Bets = () => {
  return (
    <PageWrapper>
      <DateBlock></DateBlock>
      <Table $isHistory>
        <thead>
          <tr>
            <th>Type/ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={5} className="empty-state">
              No records found
            </td>
          </tr>
        </tbody>
      </Table>
    </PageWrapper>
  );
};

export default Bets;
