import React, { useState } from "react";

import { ToolbarWrapper } from "./subs/deposit/transactions/transaction.styles.js";
import { VerifyButton } from "./AccountSettings.jsx";
import PaymentFilters from "./subs/deposit/transactions/FilteredButtons.jsx";
import { BonusSearchInput, BonusSearchWrapper } from "./OfferBonuses.jsx";

import SearchIcon from "../../../assets/svg/profile/Search.svg";

const Tournaments = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <ToolbarWrapper style={{ marginTop: 0 }}>
        <PaymentFilters
          buttons={["All Tournaments", "Participated", "Completed"]}
          $isTournaments={true}
        ></PaymentFilters>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <BonusSearchWrapper>
            <SearchIcon />
            <BonusSearchInput
              placeholder="Search for a tournament"
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
    </>
  );
};

export default Tournaments;
