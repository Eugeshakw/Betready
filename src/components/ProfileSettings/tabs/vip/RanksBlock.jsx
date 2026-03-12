import React from "react";
import * as Elems from "./vip.styles.js";

import BronzeIcon from "../../../../assets/svg/vip/1_BRONZE.svg";
import SilverIcon from "../../../../assets/svg/vip/2_SILVER.svg";
import GoldIcon from "../../../../assets/svg/vip/3_GOLD.svg";
import DiamondIcon from "../../../../assets/svg/vip/4_DIAMOND.svg";
import PlatinumIcon from "../../../../assets/svg/vip/5_PLATINUM.svg";

const VipRanksBlock = () => {
  // Масив з нашими рангами
  const ranks = [
    { name: "Bronze", icon: <BronzeIcon /> }, // Заміни <span>🥉</span> на <BronzeIcon />
    { name: "Silver", icon: <SilverIcon /> },
    { name: "Platinum", icon: <PlatinumIcon />, isMain: true }, // 🟢 Це наша центральна велика іконка
    { name: "Gold", icon: <GoldIcon /> },
    { name: "Diamond", icon: <DiamondIcon /> },
  ];

  return (
    <Elems.RanksContainer>
      {ranks.map((rank) => (
        // Передаємо пропс $isMain, щоб стилі знали, що цей елемент треба збільшити
        <Elems.RankItem key={rank.name} $isMain={rank.isMain}>
          {rank.icon}

          {/* Передаємо $isMain і в текст, щоб намалювати зелену лінію під Platinum (як у Figma) */}
          <Elems.RankLabel $isMain={rank.isMain}>{rank.name}</Elems.RankLabel>
        </Elems.RankItem>
      ))}
    </Elems.RanksContainer>
  );
};

export default VipRanksBlock;
