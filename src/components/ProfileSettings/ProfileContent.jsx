import styled from "styled-components";

import AccountSettings from "./tabs/subs/security/AccountSettings";
import AccountSecurity from "./tabs/subs/security/AccountSecurity";
import TwoFa from "./tabs/subs/security/2fa/2fa.jsx";

import HideIcon from "../../assets/svg/profile/Invisible.svg";

const ContentWrapper = styled.main`
  background-color: #ffffff;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 0 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TabHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 9px;
  padding-top: 18px;
  padding-bottom: 20px;

  margin-left: -20px;
  margin-right: -20px;

  padding-left: 20px;
  padding-right: 20px;

  border-bottom: 1px solid #397617;
`;

const ActiveTabIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  & svg {
    width: 32px;
    height: 32px;
  }
`;

const ActiveTabText = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #00251d;
  margin: 0;
  /* Add underline style for active tab */
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const HideButton = styled.button`
  /* 1. Змінюємо на flex, щоб запрацював gap */
  display: flex;

  /* 2. Вирівнюємо іконку та текст по вертикалі (щоб були на одній лінії) */
  align-items: center;
  justify-content: center;

  /* 3. Тепер цей gap працюватиме */
  gap: 8px;

  background-color: rgba(153, 177, 172, 1);
  color: #00251d;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-weight: 400;
  font-size: 12px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }

  & svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
    /* Прибираємо можливі зовнішні відступи іконки, щоб не псувати центрування */
    display: block;
  }
`;

const ProfileContent = ({ activeTab, user }) => {
  if (!activeTab) {
    return (
      <ContentWrapper>
        <p>This is where the tab content will be displayed.</p>
      </ContentWrapper>
    );
  }

  const IconComponent = activeTab.icon;

  console.log(activeTab);
  return (
    <ContentWrapper>
      <TabHeader>
        <HeaderLeft>
          {IconComponent && (
            <ActiveTabIcon>
              <IconComponent />
            </ActiveTabIcon>
          )}
          {activeTab.text && <ActiveTabText>{activeTab.text}</ActiveTabText>}
        </HeaderLeft>
        {activeTab.id === "account-settings" && (
          <HideButton>
            <HideIcon />
            Hide
          </HideButton>
        )}
      </TabHeader>

      <div>
        {activeTab.id === "account-settings" && <AccountSettings user={user} />}
        {/* Add conditional rendering for other tabs here */}
        {activeTab.id === "account-change-password" && <AccountSecurity />}
        {activeTab.id === "account-2fa" && <TwoFa />}
      </div>
    </ContentWrapper>
  );
};

export default ProfileContent;
