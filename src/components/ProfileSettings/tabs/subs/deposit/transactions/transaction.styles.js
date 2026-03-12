import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #397617;
  border-radius: 8px;
  ${(props) =>
    !props.$isHistory &&
    `
    margin-top: 20px;
    margin-bottom: ${props.$isVip ? "10px" : "24px"};
  `}
  flex-wrap: wrap;
  padding: 6px;
`;

export const FilterButton = styled.button`
  background-color: ${(props) => (props.$isActive ? "#397617" : "transparent")};
  color: ${(props) => (props.$isActive ? "#ffffff" : "#00251D")};

  /* 🟢 МАГІЯ ТУТ: Явно кажемо браузеру прибрати всі стандартні рамки */
  border: none;

  border-radius: 6px;
  padding: ${(props) => (!props.$isHistory ? `10px 16px` : "8px 12px")};
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  ${(props) => !props.$isHistory && `white-space: nowrap`}

  &:hover {
    background-color: ${(props) =>
      props.$isActive ? "#397617" : "rgba(57, 118, 23, 0.1)"};
    opacity: ${(props) => (props.$isActive ? 0.85 : 1)};
  }
`;

export const ToolbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Розштовхує елементи по краях */
  width: 100%;
  ${(props) =>
    !props.$isHistory &&
    `
    flex-wrap: wrap; 
    gap: 16px; /* Відстань між фільтрами та датами, якщо вони стануть у два рядки */
  `}
`;

export const AllMethodsButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: rgba(153, 177, 172, 0.5);
  border: 1px solid rgba(153, 177, 172, 1);
  border-radius: 8px;
  color: rgba(153, 177, 172, 1);
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  padding: 10px 16px 10px 16px;
  transition: opacity 0.2s ease;
  white-space: nowrap; /* Щоб текст кнопки ніколи не переносився */

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0; /* Щоб іконка ніколи не сплющувалась */
    fill: currentColor;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const SearchHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; /* Відстань рівно 8px між іконкою та інпутом */

  svg {
    width: 16px;
    height: 16px;
    fill: #6a7c78; /* Колір іконки лупи */
    flex-shrink: 0;
  }
`;

// 🟢 А от сам інпут тепер має рамку, фон і розміри
export const SearchHeaderInput = styled.input`
  height: 25px; /* Точна висота за твоїми вимогами */
  border-radius: 8px; /* Радіус 8px */

  background-color: rgba(
    153,
    177,
    172,
    1
  ); /* Білий фон (можеш змінити на transparent, якщо треба) */

  border: none;
  padding: 0 8px; /* Внутрішні відступи, щоб текст не прилипав до рамки */
  width: 180px; /* Ширина самого поля вводу */

  outline: none;
  font-size: 12px;
  color: #00251d;
  box-sizing: border-box; /* Гарантує, що висота буде рівно 20px разом з рамкою */

  /* Відміняємо uppercase від тегу <th> */
  text-transform: none;

  &::placeholder {
    color: rgba(0, 37, 29, 1);
  }
`;
