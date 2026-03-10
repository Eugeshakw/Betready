import CopyIcon from "../../../../../../assets/svg/profile/Copy.svg"; // Імпортуй свою іконку
import QrLittleIcon from "../../../../../../assets/svg/profile/Qr Code little.svg";
import OTPIcon from "../../../../../../assets/svg/profile/Web Apps.svg";

import * as Elems from "./2fa.styles.js";

import { useState } from "react";

const TwoFaCodeField = ({ code = "JBSWY3DPEHPK3PXP" }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!"); // Можна замінити на гарний toast
  };

  return (
    <Elems.CodeContainer>
      <Elems.CodeIconWrapper>
        <QrLittleIcon />
      </Elems.CodeIconWrapper>

      <Elems.VerticalLine />

      <Elems.CodeTextWrapper>
        <Elems.CodeLabel>Copy the code</Elems.CodeLabel>
        <Elems.CodeValue>{code}</Elems.CodeValue>
      </Elems.CodeTextWrapper>

      <Elems.CopyButton onClick={handleCopy} title="Copy code">
        <CopyIcon />
      </Elems.CopyButton>
    </Elems.CodeContainer>
  );
};

const TwoFaOtpField = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }
  };

  return (
    <Elems.OTPContainer>
      <Elems.CodeIconWrapper>
        <OTPIcon />
      </Elems.CodeIconWrapper>

      <Elems.VerticalLine />

      <Elems.CodeTextWrapper>
        <Elems.CodeLabel>Verification Code</Elems.CodeLabel>

        <Elems.OTPInputWrapper>
          {otp.map((data, index) => (
            <Elems.DigitInput
              key={index}
              type="text"
              maxLength="1"
              value={data}
              placeholder="—"
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          ))}
        </Elems.OTPInputWrapper>
      </Elems.CodeTextWrapper>
    </Elems.OTPContainer>
  );
};
export { TwoFaCodeField, TwoFaOtpField };
