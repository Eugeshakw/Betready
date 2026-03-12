import React from "react";
import styled from "styled-components";

import PaymentFilters from "./subs/deposit/transactions/FilteredButtons.jsx";
import VipRanksBlock from "./vip/RanksBlock.jsx";

export const VipTabWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center; /* 🟢 Головна магія: центрує всі блоки по горизонталі */
  text-align: center; /* 🟢 Центрує текст всередині блоків (заголовки, описи) */

  width: 100%;
  max-width: 1200px; /* Обмежуємо ширину, щоб на величезних моніторах контент не розповзався */
  margin: 0 auto; /* Центрує саму обгортку по середині екрана */

  padding: 40px 20px; /* Відступи від країв екрана (верх/низ 40px, боки 20px) */
  gap: 40px; /* 🟢 Відстань між 4 основними блоками (навігація, медалі, текст, прогрес-бар) */
`;

// const t
const Vip = () => {
  return (
    <section aria-labelledby="vip-title">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <PaymentFilters
          $isVip={true}
          buttons={[
            "VIP Progress",
            "Advantages",
            "Bonuses",
            "Support",
            "VIP Leaderboard",
          ]}
        ></PaymentFilters>
      </div>
      <VipRanksBlock />
      <h1>Welcome to Betrady Vip Club</h1>
    </section>
  );
};

export default Vip;
