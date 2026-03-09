import styled from "styled-components";

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

const ProfileContent = ({ activeTab }) => {
  if (!activeTab) {
    return (
      <ContentWrapper>
        <p>This is where the tab content will be displayed.</p>
      </ContentWrapper>
    );
  }

  const IconComponent = activeTab.icon;

  return (
    <ContentWrapper>
      <TabHeader>
        {IconComponent && (
          <ActiveTabIcon>
            <IconComponent />
          </ActiveTabIcon>
        )}
        {activeTab.text && <ActiveTabText>{activeTab.text}</ActiveTabText>}
      </TabHeader>
    </ContentWrapper>
  );
};

export default ProfileContent;
