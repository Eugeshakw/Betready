import React, { useState } from "react";
import styled from "styled-components";

import { ToolbarWrapper } from "./subs/deposit/transactions/transaction.styles.js";
import { VerifyButton } from "./AccountSettings.jsx";
import PaymentFilters from "./subs/deposit/transactions/FilteredButtons.jsx";
import SearchIcon from "../../../assets/svg/profile/Search.svg";

export const SearchBlockContainer = styled.div`
  display: flex;
  align-items: stretch; /* Щоб кнопка тягнулася на ту саму висоту, що й інпут */
  gap: 8px; /* Відстань рівно 8px між інпутом і кнопкою */
  width: 100%;
  margin-bottom: 24px; /* Відступ до наступних елементів (таблиці) */
`;

// 🟢 2. Обгортка, яка виглядає як сам інпут
export const BonusSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px; /* Відстань між іконкою лупи та текстом */
  max-width: 390px;
  padding: 0 16px;
  /* 🟢 Фіксуємо висоту і кажемо браузеру не розтягувати блок за межі цих 50px */
  height: 50px;
  box-sizing: border-box;
  border: 1px solid #397617; /* Зелена рамка */
  border-radius: 8px;
  background-color: #ffffff;
  flex-grow: 1; /* Змушує інпут зайняти весь вільний простір зліва від кнопки */

  height: 50px;
  svg {
    width: 20px;
    height: 20px;
    fill: #00251d; /* Колір іконки */
    flex-shrink: 0;
  }
`;

// 🟢 3. Саме поле вводу (прозоре, без рамок)
export const BonusSearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size: 16px;
  color: #00251d;
  font-family: inherit;

  &::placeholder {
    color: #00251d; /* Темний колір плейсхолдера як на скріні */
    font-weight: 400;
  }
`;

const ResultContent = styled.div`
  padding: 40px;
`;
const Bonuses = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <ToolbarWrapper style={{ marginTop: 0 }}>
        <PaymentFilters
          buttons={["Available", "Active", "Inactive"]}
          $isBonuses={true}
        ></PaymentFilters>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <BonusSearchWrapper>
            <SearchIcon />
            <BonusSearchInput
              placeholder="Bonus search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </BonusSearchWrapper>
          <VerifyButton
            style={{
              padding: "0 20px" /* 🟢 Правильний CSS синтаксис (без ком) */,
              height:
                "50px" /* 🟢 Робимо висоту таку ж, як у BonusSearchWrapper (50px) */,
              fontSize: "16px",
              margin: 0 /* Скидаємо зайві відступи, якщо вони є у VerifyButton */,
            }}
          >
            Search
          </VerifyButton>
        </div>
      </ToolbarWrapper>
      <ResultContent>No Results</ResultContent>
    </>
  );
};

export default Bonuses;
