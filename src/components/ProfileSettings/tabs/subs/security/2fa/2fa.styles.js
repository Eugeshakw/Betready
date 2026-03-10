import styled from "styled-components";

export const SettingsSection = styled.section`
  border-bottom: 1px solid #397617; /* Твоя зелена рамка */
  padding: 20px 0px;
  margin-top: 10px; /* Відстань між блоками */
  align-items: center;

  display: grid;
  flex-direction: column;
  gap: 15px;

  &:last-of-type {
    border-bottom: none;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const NumberedCircle = styled.div`
  width: 40px;
  height: 40px;

  border-radius: 8px;
  border: 1px solid #99b1ac;

  background-color: #99b1ac80;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #00251d; /* Беремо темно-зелений колір з твого макета */
  font-weight: 700; /* Жирний */
  font-size: 20px; /* Розмір цифри */
`;

export const StepWrapper = styled.div`
  display: flex;
  align-items: center; /* Центрує цифру і тексти по одній горизонтальній лінії */
  gap: 8px; /* 🟢 Ті самі 8px відступу, які ти просив */
`;

export const StepTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px; /* Відстань між головним текстом і описом */
`;

export const StepTitle = styled.h3`
  font-size: 20px;
  color: #00251d;
  font-weight: 700;
  margin: 0;
`;

export const StepDescription = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin: 0;
`;

export const StoreBadgesWrapper = styled.div`
  display: flex;
  gap: 12px; /* Відстань між двома іконками */
  //   margin-top: 16px; /* Відступ від верхнього тексту до іконок */
  margin-bottom: 10px;
`;

export const CodeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px; /* Можеш налаштувати ширину під макет */
  border: 1px solid #397617;
  border-radius: 8px;
  padding: 0 16px;
  background-color: transparent;
  height: 70px;
  box-sizing: border-box;
`;

export const CodeIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  flex-shrink: 0;

  svg {
    width: 20px;
    height: 20px;
    fill: #397617;
  }
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 36px;
  background-color: #397617;
  margin-right: 8px;
  flex-shrink: 0;
`;

export const CodeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 2px;
`;

export const CodeLabel = styled.span`
  font-size: 12px;
  font-weight: 400;
`;

export const CodeValue = styled.span`
  font-size: 16px; /* Трохи більший для коду */
  color: #00251d;
  font-weight: 400;
  letter-spacing: 1px; /* Щоб код краще читався */
`;

export const CopyButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-left: 12px;
  transition: transform 0.2s;

  svg {
    width: 20px;
    height: 20px;
    fill: #397617;
  }

  &:active {
    transform: scale(0.9); /* Ефект натискання */
  }
`;

export const OTPContainer = styled(CodeContainer)`
  height: 70px;
  max-width: 600px;
`;

export const OTPInputWrapper = styled.div`
  display: flex;
  gap: 8px; /* Відстань між цифрами */
  margin-top: 4px;
`;

export const DigitInput = styled.input`
  width: 32px;
  border: none;
  background: transparent;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  color: #00251d;
  outline: none;

  &:focus {
    border-color: #397617;
    /* При фокусі placeholder зазвичай зникає сам, або можна додати: */
    &::placeholder {
      opacity: 0;
    }
  }
  &::placeholder {
    // color: #397617;
    opacity: 1; /* Щоб колір був яскравим */
    font-size: 16px;
    line-height: 1;
    /* Трохи піднімемо дефіс, щоб він був ідеально по центру */
    transform: translateY(-2px);
  }

  /* Прибираємо стрілочки "вгору/вниз" у браузерах */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
