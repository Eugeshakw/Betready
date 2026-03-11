import CustomSelect from "./bank/CustomSelect.jsx";
import CustomButton from "./bank/CustomButton.jsx";

import { BankWrapper } from "./bank/bank.styles.js";
import { mockOptions } from "../../../mocks/mockBanks.data.js";

import { FormTitle } from "../security/AccountSecurity.jsx";

const Bank = () => {
  return (
    <>
      <BankWrapper>
        <FormTitle style={{ marginBottom: 16 }}>
          Select Payment Account
        </FormTitle>
        <CustomSelect options={mockOptions} />
      </BankWrapper>
      <BankWrapper>
        <FormTitle style={{ marginBottom: 16 }}>My Bank Account</FormTitle>
      </BankWrapper>
      <CustomButton></CustomButton>
    </>
  );
};

export default Bank;
