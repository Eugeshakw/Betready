import PaymentFilters from "./transactions/FilteredButtons.jsx";
import * as Elems from "./transactions/transaction.styles.js";
import TableMethods from "./transactions/TablesMethods.jsx";
import { FormTitle } from "../security/AccountSecurity.jsx";

import ClockIcon from "../../../../../assets/svg/profile/Clock.svg";

import { mockDepMethods } from "../../../mocks/mockBanks.data.js";

const DepositTransactions = () => {
  return (
    <>
      <Elems.ToolbarWrapper>
        <PaymentFilters
          buttons={[
            "All Groups",
            "Instant Transaction",
            "Bank Transfer Methods",
            "Virtual Wallet",
            "Other",
          ]}
        />

        <Elems.AllMethodsButton>
          <ClockIcon></ClockIcon>
          Deposit Withdraw History
        </Elems.AllMethodsButton>
      </Elems.ToolbarWrapper>
      {Object.values(mockDepMethods).map((item, index) => {
        return (
          <>
            <FormTitle style={{ marginBottom: 16 }}>
              {index == 0
                ? "Suggested Quick Methods - Methods"
                : index == 1
                ? "Bank Transfer Methods - Methods"
                : "Bank Transfer Methods - Methods"}
            </FormTitle>
            <TableMethods key={index} methods={item} />
          </>
        );
      })}
    </>
  );
};

export default DepositTransactions;
