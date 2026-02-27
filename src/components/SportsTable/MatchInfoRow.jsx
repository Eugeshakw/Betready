
import React from "react";
import styled from "styled-components";
import StarIcon from "./StarIcon";
import ProfileIcon from "./ProfileIcon";
import PinIcon from "./PinIcon";

const MatchRow = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #c8d6c8;
  background: #fff;
  font-size: 14px;
  width: 100%;
  padding: 8px 16px;
`;

const MatchMain = styled.div`
    
    width: 100%;
    
`;
const FooterBlock = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #00251D;
  font-weight: 500;
    border: 1px solid #b7cdb0;
  background: #fff;
    margin-left: 0;
    padding-right: 8px;
    padding-left: 8px;

  text-decoration: underline;
`;
const TeamInfo = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  
`;

const TeamName = styled.p`
  margin-left: 32px;
  font-size: 16px;
`;

const Score = styled.span`
  font-weight: bold;
  font-size: 18px;
  margin-left: auto;
  margin-right: 8px;
`;

const IconLeft = styled.div`
 
  
`;
const StyledScoreBlock = styled.div`
display: flex;
align-items: center;
margin-left: auto;
gap: 0;
`;

const ScoreDivider = styled.div`
 width: 2px;
height: 24px;
background: #b7cdb0;
margin: 0 8px;
`;
const StarIconStyled = styled(StarIcon)`
  width: 24px;
  height: 24px;
  color: #39d617;
`;

const MatchFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  font-size: 12px;
  color: #1a3c2f;
  gap: 8px;
`;

const GlobalMatchWrapper = styled.div`
  width: 100%;
  display: flex;
  
`;

const OddsButtonsBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  gap: 8px;
  background-color: #fff;
  border: 1px solid #b7cdb0;
`;

const OddsButton = styled.button`
  background: #b7cdb0;
  padding: 4px 13px;
  border: none;
  border-radius: 16px;
 color: #00251D;
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MatchInfoRow = ({ match }) => (
  <GlobalMatchWrapper>
    <MatchRow>
      <MatchMain>
        <TeamInfo>
          <IconLeft>
            <ProfileIcon style={{width: 24, height: 24}} />
          </IconLeft>
          <TeamName>{match.teams[0]}</TeamName>
            <StyledScoreBlock>
              <Score>{match.scores[0]}</Score>
              <ScoreDivider />
              <Score>{match.scores[0]}</Score>
            </StyledScoreBlock>
            
            
          
          
        </TeamInfo>
      <TeamInfo>
          <IconLeft>
            <StarIconStyled />
          </IconLeft>
          <TeamName>{match.teams[1]}</TeamName>
          
            <StyledScoreBlock>
              <Score>{match.scores[0]}</Score>
              <ScoreDivider />
              <Score>{match.scores[0]}</Score>
            </StyledScoreBlock>
          
          
        </TeamInfo>
        </MatchMain>
      <MatchFooter>
        <span>12:03 / Break / Including Overtime</span>
        <PinIcon style={{width: 20, height: 20}} />
        <ProfileIcon style={{width: 20, height: 20}} />
        <StarIcon style={{width: 20, height: 20, color: '#39d617'}} />
        {/* Здесь можно добавить другие SVG-иконки */}
      </MatchFooter>
    </MatchRow>
    <div style={{display: 'flex', alignItems: 'stretch'}}>
      <OddsButtonsBlock>
        {match.odds && match.odds.map((odd, idx) => (
          <OddsButton key={idx}>{odd}</OddsButton>
        ))}
      </OddsButtonsBlock>
      <OddsButtonsBlock>
        {match.odds && match.odds.map((odd, idx) => (
          <OddsButton key={idx}>{odd}</OddsButton>
        ))}
      </OddsButtonsBlock>
      <OddsButtonsBlock>
        {match.odds && match.odds.map((odd, idx) => (
          <OddsButton key={idx}>{odd}</OddsButton>
        ))}
      </OddsButtonsBlock>
      <OddsButtonsBlock>
        {match.odds && match.odds.map((odd, idx) => (
          <OddsButton key={idx}>{odd}</OddsButton>
        ))}
      </OddsButtonsBlock>
      <FooterBlock>{match.footer}</FooterBlock>
    </div>
     
  </GlobalMatchWrapper>
);

export default MatchInfoRow;
