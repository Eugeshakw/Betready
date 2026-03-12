import PaymentFilters from "./transactions/FilteredButtons.jsx";
import * as Elems from "./transactions/transaction.styles.js";
import TableMethods from "./transactions/TablesMethods.jsx";
import { FormTitle } from "../security/AccountSecurity.jsx";

import ClockIcon from "../../../../../assets/svg/profile/Clock.svg";

import { mockWidthrawMethods } from "../../../mocks/mockBanks.data.js";

const WidthTransactions = () => {
  return (
    <>
      <Elems.ToolbarWrapper>
        <PaymentFilters
          buttons={[
            "All Groups",
            "Instant Transaction",
            "Bank Transfer Methods",
            "Papara",
          ]}
          $isWidthdraw={true}
        />

        <Elems.AllMethodsButton>
          <ClockIcon></ClockIcon>
          Transaction History
        </Elems.AllMethodsButton>
      </Elems.ToolbarWrapper>
      {Object.values(mockWidthrawMethods).map((item, index) => {
        return (
          <>
            <FormTitle style={{ marginBottom: 16 }}>
              {index == 0
                ? "Suggested Quick Methods Withdraw"
                : index == 1
                ? "Bank Transfer Methods - Withdrawal Methods"
                : "Papara Withdraw Methods"}
            </FormTitle>
            <TableMethods key={index} methods={item} />
          </>
        );
      })}
    </>
  );
};

export default WidthTransactions;
