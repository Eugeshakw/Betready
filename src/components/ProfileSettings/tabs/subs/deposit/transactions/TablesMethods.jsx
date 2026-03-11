/* eslint-disable no-unused-vars */
import {
  Table,
  FieldWrapper,
  VerifyButton,
} from "../../../AccountSettings.jsx";
import SearchIcon from "../../../../../../assets/svg/profile/Search.svg";
import * as Elems from "./transaction.styles.js";

const TableMethods = ({ methods }) => {
  console.log(methods);
  return (
    <Table $isHistory>
      <thead>
        <tr>
          <th>
            {/* 🟢 Наш новий інпут замість тексту */}
            <Elems.SearchHeaderWrapper>
              <SearchIcon />
              <Elems.SearchHeaderInput placeholder="Search" />
            </Elems.SearchHeaderWrapper>
          </th>
          <th>Duration</th>
          <th>Min. Deposit</th>
          <th>Max. Deposit</th>
          <th>Select</th>
        </tr>
      </thead>
      <tbody>
        {methods.map((item, index) => {
          let Icon = item.icon;
          return (
            <tr key={item.id}>
              <td>
                <FieldWrapper>
                  <Icon style={{ width: 32, height: 32 }} />
                  {item.label}
                </FieldWrapper>
              </td>

              <td>{item.info.duration}</td>
              <td>{item.info.minDep}</td>
              <td>{item.info.maxDep}</td>
              <td>
                <VerifyButton style={{ padding: "8px, 20px" }}>
                  Select
                </VerifyButton>{" "}
                {/* Краще використовувати справжню кнопку, ніж <> */}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableMethods;
