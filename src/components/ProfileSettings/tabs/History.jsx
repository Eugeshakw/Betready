import React from "react";

import { ToolbarWrapper } from "./subs/deposit/transactions/transaction.styles.js";
import PaymentFilters from "./subs/deposit/transactions/FilteredButtons.jsx";
import { PageWrapper, DateBlock } from "./Bets.jsx";
import { Table } from "./AccountSettings.jsx";

const History = () => {
  return (
    <PageWrapper>
      <ToolbarWrapper>
        <PaymentFilters
          buttons={[
            "All Transactions",
            "Deposits",
            "Live Casion",
            "Slot",
            "Live Games",
            "Poker",
          ]}
          $isHistory={true}
        ></PaymentFilters>
        <DateBlock></DateBlock>
      </ToolbarWrapper>
      <Table $isHistory>
        <thead>
          <tr>
            <th>Type/ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={5} className="empty-state">
              No records found
            </td>
          </tr>
        </tbody>
      </Table>
    </PageWrapper>
  );
};

export default History;
