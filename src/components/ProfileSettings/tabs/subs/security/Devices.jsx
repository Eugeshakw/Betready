import React from "react";
import styled from "styled-components";

import { Table, FieldWrapper, StatusBadge } from "../../AccountSettings.jsx";
import { TextInner } from "./AccountSecurity.jsx";

import PcIcon from "../../../../../assets/svg/profile/iMac.svg";
import PhoneIcon from "../../../../../assets/svg/profile/iPhone SE.svg";

const DevicesWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Devices = ({ loginHistory }) => {
  return (
    <DevicesWrapper>
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
                  {item.type == "PC" ? <PcIcon /> : <PhoneIcon />}
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
      <TextInner style={{ maxWidth: 750, fontSize: 16 }}>
        You are viewing a list of the last devices used to log into your Bayspin
        account. If you find any suspicious login attempts, please log out of
        that device using the logout button and reset your password.
      </TextInner>
    </DevicesWrapper>
  );
};

export default Devices;
