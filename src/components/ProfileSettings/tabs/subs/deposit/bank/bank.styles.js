import styled from "styled-components";

export const BankWrapper = styled.section`
  padding-top: 20px;
  gap: 16px;
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 450px;
`;

export const SelectHeader = styled.div`
  display: flex;
  align-items: center;
  height: 50px; /* Висота поля */
  padding: 0 16px;
  border: 1px solid #397617;
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s;

  /* Легка підсвітка при відкритті */
  border-color: ${(props) => (props.$isOpen ? "#99b1ac" : "#397617")};
  box-shadow: ${(props) => (props.$isOpen ? "0 0 0 1px #99b1ac" : "none")};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 20px;
    height: 20px;
    fill: #397617;
  }
`;

export const SelectedText = styled.span`
  flex-grow: 1;
  font-size: 16px;
  color: #00251d;
  font-weight: 700;
  text-align: left;
`;

export const ChevronWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  /* 🟢 Стрілочка крутиться при відкритті */
  transform: ${(props) => (props.$isOpen ? "rotate(-90deg)" : "rotate(90deg)")};

  svg {
    width: 16px;
    height: 16px;
    fill: #397617;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: calc(100% + 4px); /* Відступ 4px від поля */
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto; /* Скрол, якщо елементів багато */
  background-color: #ffffff;
  border: 1px solid #99b1ac;
  border-radius: 8px;
  padding: 8px 0;
  margin: 0;
  list-style: none;
  z-index: 10;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const DropdownItem = styled.li`
  padding: 10px 16px;
  font-size: 16px;
  color: #00251d;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(
      153,
      177,
      172,
      0.3
    ); /* Легкий зелений фон при наведенні */
  }

  /* Виділяємо активний елемент */
  background-color: ${(props) =>
    props.$isActive ? "rgba(57, 118, 23, 0.1)" : "transparent"};
  font-weight: ${(props) => (props.$isActive ? "700" : "400")};
`;

export const CardButton = styled.button`
  position: relative;
  width: 320px;
  height: 120px;
  border-radius: 12px;
  border: 1px solid rgba(57, 118, 23, 1);
  cursor: pointer;

  /* 🟢 МАГІЯ ТУТ: Робимо вертикальну колонку і центруємо */
  display: flex;
  flex-direction: column; /* Ставимо елементи один під одним */
  align-items: center; /* Центруємо по горизонталі */
  justify-content: center; /* Центруємо по вертикалі */
  gap: 8px; /* 🟢 Відстань рівно 8px між іконкою та текстом */

  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background-color: rgba(176, 200, 162, 0.5);

  &:active {
    transform: translateY(0);
  }
`;

export const PlusIconWrapper = styled.div`
  /* 🔴 Прибрали position: absolute, top і right */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    // fill: #ffffff;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* 🟢 Змінили flex-start на center, щоб текст теж був ідеально по центру */
  align-items: center;
  /* 🔴 Прибрали margin-left: 16px, щоб текст не з'їжджав вправо */
  gap: 4px;
`;

export const Subtitle = styled.span`
  font-size: 14px;
  font-weight: 400;
`;
