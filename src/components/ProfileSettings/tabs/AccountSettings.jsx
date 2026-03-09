import React from "react";
import styled from "styled-components";

import ProfileIcon from "../../../assets/svg/profile/Profile.svg";
import EmailIcon from "../../../assets/svg/profile/Email.svg";
import PhoneIcon from "../../../assets/svg/profile/Phone.svg";
import BirthDateIcon from "../../../assets/svg/profile/Birth Date.svg";
import GenderIcon from "../../../assets/svg/profile/Gender.svg";
import CountryIcon from "../../../assets/svg/profile/Country.svg";
import CityIcon from "../../../assets/svg/profile/City Buildings.svg";

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
  width: 100%;
`;

const BannerLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    width: 24px;
    height: 24px;
    fill: #397617; /* Колір іконки */
  }
`;

const BannerText = styled.span`
  color: #00251d;
  font-weight: 700;
  font-size: 16px;
  display: flex;
`;

const VerifyButton = styled.button`
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
  margin-bottom: 15px;
  //border-bottom: 2px solid #eee;
  padding-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-bottom: 30px;
  background-color: transparent;
  border-radius: 8px;

  border: 1px solid #397617;

  overflow: hidden;

  th,
  td {
    padding: 16px 20px;
    border-bottom: 1px solid #397617;
  }
  th:first-child,
  td:first-child {
    text-align: left;
    //color: #6a7c78;
    font-weight: 700;
    font-size: 16px;
  }

  /* Налаштування ДРУГОЇ колонки (Значення: AlexBet99, 1996-12-15) */
  th:last-child,
  td:last-child {
    text-align: right; /* Відштовхуємо значення в правий край */
    color: #00251d; /* Темний колір тексту */
    font-weight: 700; /* Жирний шрифт, як на макеті */
    font-size: 16px;
  }

  /* Стиль для самої шапки таблиці (Login History) */
  th {
    background-color: rgba(57, 118, 23, 0.1); /* Легкий зелений фон для шапки */
    color: #00251d;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 12px;
  }

  /* Прибираємо лінію в найнижчого рядка, щоб вона не накладалася на зовнішню рамку */
  tr:last-child td {
    border-bottom: none;
  }
`;
const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px; /* Відстань між іконкою і текстом */

  svg {
    width: 18px;
    height: 18px;
    fill: currentColor; /* Автоматично бере колір тексту (#6a7c78) */
  }
`;

// 1. Прибрали async і 2. Додали фігурні дужки { user }
const AccountSettings = ({ user }) => {
  // 3. Беремо дані тільки з user.personalInfo, де лежать звичайні рядки
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

  const loginHistory = [
    {
      device: "Desktop (Windows)",
      ip: "192.168.1.1",
      browser: "Chrome",
      country: "USA",
      status: "Success",
    },
    {
      device: "Mobile (Android)",
      ip: "10.0.0.5",
      browser: "Firefox",
      country: "Canada",
      status: "Success",
    },
    {
      device: "Desktop (macOS)",
      ip: "172.16.0.10",
      browser: "Safari",
      country: "USA",
      status: "Failed",
    },
  ];

  return (
    <AccountSettingsWrapper>
      <VerificationBanner>
        <BannerLeft>
          {/* Тимчасова SVG іконка щита, потім заміниш на свою */}
          <Avatar src={user.personalInfo.avatarUrl} alt="User Avatar" />
          <BannerText>Info</BannerText>
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
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <SectionTitle>Login History</SectionTitle>
      <Table>
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
              <td>{item.device}</td>
              <td>{item.ip}</td>
              <td>{item.browser}</td>
              <td>{item.country}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </AccountSettingsWrapper>
  );
};

export default AccountSettings;
