import React, { useState } from 'react';
import styled from 'styled-components';

const LiveStreamBlockWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #013C2F;
  padding: 0 18px;
  height: 48px;
  box-sizing: border-box;
  gap: 16px;
  border-right: 2px solid #00251D;
`;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Toggle = styled.button`
  width: 48px;
  height: 24px;
  background: #B0C8A2;
  border: none;
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  transition: background 0.2s;
`;

const ToggleCircle = styled.div`
  width: 24px;
  height: 24px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: ${props => props.active ? '24px' : '0'};
  transition: left 0.2s;
`;

const LiveText = styled.span`
  color: #fff;
  font-family: Roboto, Arial, sans-serif;
  font-size: 20px;
  font-weight: 700;
`;

export const LiveStreamBlock = () => {
  const [active, setActive] = useState(false);

  return (
    <LiveStreamBlockWrapper>
      <ToggleWrapper>
        <Toggle onClick={() => setActive(!active)}>
          <ToggleCircle active={active} />
        </Toggle>
      </ToggleWrapper>
      <LiveText>With live streams</LiveText>
    </LiveStreamBlockWrapper>
  );
};
