import { useState } from "react";
import * as Elems from "./transaction.styles.js";
import ChevronIcon from "../../../../../../assets/svg/profile/Forward.svg";

const PaymentFilters = ({ $isWidthdraw }) => {
  const categories = $isWidthdraw
    ? ["All Groups", "Instant Transaction", "Bank Transfer Methods", "Papara"]
    : [
        "All Groups",
        "Instant Transaction",
        "Bank Transfer Methods",
        "Virtual Wallet",
        "Other",
      ];
  const [activeCategory, setActiveCategory] = useState("All Groups");

  return (
    <Elems.FilterWrapper>
      {categories.map((category) => (
        <Elems.FilterButton
          key={category}
          $isActive={activeCategory === category}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </Elems.FilterButton>
      ))}
      {!$isWidthdraw && (
        <ChevronIcon style={{ transform: "rotate(180deg)" }}></ChevronIcon>
      )}
    </Elems.FilterWrapper>
  );
};

export default PaymentFilters;
