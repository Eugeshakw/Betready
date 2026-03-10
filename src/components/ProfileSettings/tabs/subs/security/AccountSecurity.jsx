import React, { useState } from "react";
import styled from "styled-components";

import EyeIcon from "../../../../../assets/svg/profile/Eye.svg";
import KeyIcon from "../../../../../assets/svg/profile/Key.svg";
import DoneIcon from "../../../../../assets/svg/profile/Done.svg";

export const Content = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  border-bottom: 1px solid #397617;
`;

export const TextInner = styled.div`
  max-width: 600px;
  font-size: 16px;
  font-weight: 400;

  /* margin: 0 auto; */
`;

const FormWrapper = styled.div`
  margin-top: 20px;
  max-width: 600px;
`;

const FormTitle = styled.h3`
  font-size: 20px;
  color: #00251d;
  margin-bottom: 24px;
  font-weight: 700;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #397617;
  border-radius: 8px;
  padding: 0 16px; /* Відступи всередині інпута */
  background-color: transparent;
  box-sizing: border-box;
  height: 75px;

  &:focus-within {
    border-width: 2px;
    padding: 9px 15px; /* Компенсуємо 1px рамки, щоб текст не стрибав */
  }
`;

const LeftIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  margin-right: 8px;
  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
  }
`;
const LineIndicator = styled.div`
  width: 1px;
  height: 36px;
  background-color: #397617;
  border-radius: 2px;
  margin-right: 12px;
`;

// 🟢 Обгортка для Label та Input, щоб вони стояли один під одним
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Займає весь доступний простір */
  gap: 4px; /* Відстань між назвою і самим паролем */
`;

const Label = styled.label`
  font-size: 12px; /* Робимо трохи меншим, бо воно тепер всередині */
  font-weight: 400;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  font-size: 14px;
  color: #00251d;
  font-weight: 600; /* Пароль виглядає краще жирнішим */
  outline: none;
  padding: 0;

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
  }
`;

const EyeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-left: 12px; /* Відступ від тексту до ока */

  svg {
    width: 20px;
    height: 20px;
    fill: #6a7c78;
    transition: fill 0.2s;
  }

  &:hover svg {
    fill: #397617;
  }
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const HintRow = styled.div`
  display: flex;
  justify-content: space-between; /* Розштовхує текст вліво, а індикатор вправо */
  align-items: center; /* Вирівнює їх по одній горизонтальній лінії */
  width: 100%;
  margin-top: 2px; /* Відступ від інпута */
`;

const HintText = styled.span`
  font-size: 10px;
  font-weight: 400;
  font-style: italic;
  color: #6a7c78;
  margin-left: 42px; /* 16px padding + 18px icon + 8px margin */
`;

const ErrorIndicator = styled.div`
  width: 40px;
  height: 4px;
  background-color: #a30a35;
  flex-shrink: 0;

  margin-right: 6px;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center; /* Вирівнює текст та іконку по вертикалі по центру */
  justify-content: center; /* Центрує весь контент у кнопці */
  gap: 8px; /* Відстань між текстом та іконкою */
  background-color: #397617;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 14px 24px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.2s ease;
  margin-top: 30px;
  height: 55px;
  width: 100%; /* Додано для зручності форми */

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor; /* Іконка буде білою, як текст */
  }

  &:hover {
    opacity: 0.85;
  }
`;

const AccountSettings = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showVerify, setShowVerify] = useState(false);

  return (
    <>
      <Content>
        <TextInner>
          Your new password cannot be the same as your previous one and, for
          your security, it must contain at least one uppercase letter and one
          lowercase letter.
        </TextInner>
      </Content>
      <FormWrapper>
        <FormTitle>Edit Your Password</FormTitle>
        <Form onSubmit={(e) => e.preventDefault()}>
          {/* 1. Поточний пароль */}
          <InputContainer>
            <LeftIconWrapper>
              <KeyIcon />
            </LeftIconWrapper>
            <LineIndicator />
            <TextWrapper>
              <Label>Current Password</Label>
              <Input
                type={showCurrent ? "text" : "password"}
                placeholder="Enter current password"
              />
            </TextWrapper>
            <EyeButton
              type="button"
              onClick={() => setShowCurrent(!showCurrent)}
            >
              <EyeIcon />
            </EyeButton>
          </InputContainer>

          <FieldGroup>
            <InputContainer>
              <LeftIconWrapper>
                <KeyIcon />
              </LeftIconWrapper>
              <LineIndicator />
              <TextWrapper>
                <Label>New Password</Label>
                <Input
                  type={showNew ? "text" : "password"}
                  placeholder="Enter new password"
                />
              </TextWrapper>
              <EyeButton type="button" onClick={() => setShowNew(!showNew)}>
                <EyeIcon />
              </EyeButton>
            </InputContainer>
            <HintRow>
              <HintText>Password must be between 6 and 24 characters</HintText>
              <ErrorIndicator />
            </HintRow>
          </FieldGroup>

          <InputContainer>
            <LeftIconWrapper>
              <KeyIcon />
            </LeftIconWrapper>
            <LineIndicator />
            <TextWrapper>
              <Label>Verify Password</Label>
              <Input
                type={showVerify ? "text" : "password"}
                placeholder="Repeat new password"
              />
            </TextWrapper>
            <EyeButton type="button" onClick={() => setShowVerify(!showVerify)}>
              <EyeIcon />
            </EyeButton>
          </InputContainer>

          <SubmitButton type="submit">
            Save Changes <DoneIcon />
          </SubmitButton>
        </Form>
      </FormWrapper>
    </>
  );
};

export default AccountSettings;
