import React, { useState } from "react";
import styled from "styled-components";

import ProfileIcon from "../../../assets/svg/profile/Profile.svg";
import EmailIcon from "../../../assets/svg/profile/Email.svg";
import PhoneIcon from "../../../assets/svg/profile/Phone.svg";
import BirthDateIcon from "../../../assets/svg/profile/Birth Date.svg";
import GenderIcon from "../../../assets/svg/profile/Gender.svg";
import CountryIcon from "../../../assets/svg/profile/Country.svg";
import CityIcon from "../../../assets/svg/profile/City Buildings.svg";
import PcIcon from "../../../assets/svg/profile/iMac.svg";
import IPhoneIcon from "../../../assets/svg/profile/iPhone SE.svg";

import { Avatar } from "../ProfileSidebar.jsx";

const AccountSettingsWrapper = styled.div``;

const VerificationBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(176, 200, 162, 0.5); /* Легкий зеленуватий фон */
  border: 1px solid rgba(57, 118, 23, 1);
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 20px; /* Відстань до таблиці знизу */
  margin-top: 20px;
  width: 100%;
`;

const BannerLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  svg {
    width: 24px;
    height: 24px;
    fill: #397617; /* Колір іконки */
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const BannerText = styled.span`
  color: #00251d;
  font-weight: 700;
  font-size: 16px;
`;

const MemberInfoText = styled.span`
  color: #00251d;
  font-weight: 400;
  font-size: 12px;
`;

export const VerifyButton = styled.button`
  background-color: #397617;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 10px 24px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  color: #333;
  //border-bottom: 2px solid #eee;
  padding-bottom: 8px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-bottom: 30px;
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid #397617;
  overflow: hidden;

  table-layout: fixed;

  th,
  td {
    padding: 12px 10px;
    border-bottom: 1px solid #397617;
    text-align: left; /* Базове вирівнювання по лівому краю для першої колонки */
    word-wrap: break-word;
    vertical-align: middle;
  }

  /* 🟢 МАГІЯ ТУТ: Якщо це таблиця історії, вирівнюємо всі колонки, КРІМ першої, ПО ЦЕНТРУ */
  ${(props) =>
    (props.$isHistory || props.$isMethods) &&
    `
    th:not(:first-child),
    td:not(:first-child) {
      text-align: center;
    }
    td {
      font-weight: 700;
    }
  `}

  /* 🟢 А якщо це перша таблиця (Інфо), вирівнюємо її другу колонку ПО ПРАВОМУ краю */
  ${(props) =>
    !props.$isHistory &&
    !props.$isMethods &&
    `
    td:last-child {
      text-align: right;
    }
  `}

  /* Ширина та шрифт ПЕРШОЇ колонки */
  th:first-child {
    padding-left: 20px;
    width: 50%;
    font-weight: 400;
    font-size: 12px;
  }

  td:first-child {
    padding-left: 20px;
    width: 50%;
    font-weight: 700;
    font-size: 16px;
  }

  /* Шрифт ОСТАННЬОЇ колонки (для обох таблиць) */
  td:last-child {
    color: #00251d;
    font-weight: 700;
    font-size: 16px;
  }

  /* Стиль для шапки (th) */
  th {
    height: auto;
    background-color: rgba(57, 118, 23, 0.1);
    color: #00251d;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 12px;
    padding: 8px 10px;
  }

  /* Прибираємо лінію в найнижчого рядка */
  tr:last-child td {
    border-bottom: none;
  }
`;
export const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }
`;

const GenderButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end; /* Вирівнюємо по правому краю, як і весь текст у цій колонці */
`;
const GenderButton = styled.button`
  background-color: ${(props) =>
    props.$isActive ? "rgba(153, 177, 172, 1)" : "rgba(57, 118, 23, 1)"};

  color: ${(props) => (props.$isActive ? "#00251d" : "#ffffff")};

  border: none;
  border-radius: 8px;
  padding: 6px 24px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 24px;
  // height: 40px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  border: 1px solid rgba(153, 177, 172, 1);
  /* 🟢 Розумні кольори залежно від статусу */
  background-color: ${(props) =>
    props.$status?.toLowerCase() === "active"
      ? "rgba(57, 118, 23, 0.15)"
      : "rgba(153, 177, 172, 0.5)"};

  color: ${(props) =>
    props.$status?.toLowerCase() === "active" ? "#397617" : "#6a7c78"};
`;

const AccountSettings = ({ user, loginHistory }) => {
  const [activeGender, setActiveGender] = useState(
    user?.personalInfo?.gender || "Mr."
  );
  const fieldIcons = {
    username: <ProfileIcon />,
    firstName: <ProfileIcon />,
    lastName: <ProfileIcon />,
    email: <EmailIcon />,
    phone: <PhoneIcon />,
    dateOfBirth: <BirthDateIcon />,
    gender: <GenderIcon />,
    country: <CountryIcon />,
    city: <CityIcon />,
  };
  const accountInfoTableData =
    user && user.personalInfo
      ? Object.entries(user.personalInfo)
          .filter(([key]) => key !== "avatarUrl")
          .map(([key, value]) => {
            let fieldName = key.charAt(0).toUpperCase() + key.slice(1);
            if (key === "firstName") fieldName = "First Name";
            if (key === "lastName") fieldName = "Last Name";
            if (key === "dateOfBirth") fieldName = "Date of Birth";
            if (key === "phone") fieldName = "Phone";

            // Додаємо іконку у фінальний об'єкт
            return { field: fieldName, value: value, icon: fieldIcons[key] };
          })
      : [];

  return (
    <AccountSettingsWrapper>
      <VerificationBanner>
        <BannerLeft>
          {/* Тимчасова SVG іконка щита, потім заміниш на свою */}
          <Avatar src={user.personalInfo.avatarUrl} alt="User Avatar" />
          <TextContainer>
            <BannerText>Info</BannerText>
            <MemberInfoText>Member Info</MemberInfoText>
          </TextContainer>
        </BannerLeft>
        <VerifyButton>Update</VerifyButton>
      </VerificationBanner>
      <SectionTitle>Account Information</SectionTitle>
      <Table>
        <tbody>
          {accountInfoTableData.map((item, index) => (
            <tr key={index}>
              <td>
                {/* 🟢 Виводимо іконку та текст у флекс-контейнері */}
                <FieldWrapper>
                  {item.icon}
                  {item.field}
                </FieldWrapper>
              </td>
              <td>
                {item.field === "Gender" ? (
                  <GenderButtonsWrapper>
                    <GenderButton
                      $isActive={activeGender === "Mrs."}
                      onClick={() => setActiveGender("Mrs.")}
                    >
                      Mrs.
                    </GenderButton>
                    <GenderButton
                      $isActive={activeGender === "Mr."}
                      onClick={() => setActiveGender("Mr.")}
                    >
                      Mr.
                    </GenderButton>
                  </GenderButtonsWrapper>
                ) : (
                  item.value
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <SectionTitle>Login History</SectionTitle>
      <Table $isHistory>
        <thead>
          <tr>
            <th>Device</th>
            <th>IP Address</th>
            <th>Browser</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loginHistory.map((item, index) => (
            <tr key={index}>
              <td>
                <FieldWrapper>
                  {item.type == "PC" ? <PcIcon /> : <IPhoneIcon />}
                  {item.device}
                </FieldWrapper>
              </td>
              <td>{item.ip}</td>
              <td>{item.browser}</td>
              <td>{item.country}</td>
              <td>
                <StatusBadge $status={item.status}>{item.status}</StatusBadge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </AccountSettingsWrapper>
  );
};

export default AccountSettings;
