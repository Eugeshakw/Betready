import { useState } from "react";
import * as Elems from "./transaction.styles.js";
import ChevronIcon from "../../../../../../assets/svg/profile/Forward.svg";

const PaymentFilters = ({
  buttons,
  $isHistory,
  $isWidthdraw,
  $isBonuses,
  $isTournaments,
  $isVip,
}) => {
  const categories = buttons;
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <Elems.FilterWrapper $isHistory={$isHistory} $isVip={$isVip}>
      {categories.map((category) => (
        <Elems.FilterButton
          key={category}
          $isActive={activeCategory === category}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </Elems.FilterButton>
      ))}
      {!$isWidthdraw &&
        !$isHistory &&
        !$isBonuses &&
        !$isBonuses &&
        !$isTournaments &&
        !$isVip && <ChevronIcon style={{ transform: "rotate(180deg)" }} />}
    </Elems.FilterWrapper>
  );
};

export default PaymentFilters;
