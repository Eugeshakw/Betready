import React from "react";
import * as Elems from "./bank.styles.js";

import PlusIcon from "../../../../../../assets/svg/profile/Plus.svg";

const PaymentMethodCard = ({ onClick }) => {
  return (
    <Elems.CardButton onClick={onClick}>
      <Elems.ButtonIconWrapper>
        <PlusIcon />
      </Elems.ButtonIconWrapper>

      <Elems.TextContainer>
        <Elems.Subtitle>Add New Payment Account</Elems.Subtitle>
      </Elems.TextContainer>
    </Elems.CardButton>
  );
};

export default PaymentMethodCard;
