import styled from "styled-components";

// 🟢 1. Головний контейнер (тримає всі 5 рангів у ряд)
export const RanksContainer = styled.div`
  display: flex;
  /* 🟢 Змінили на center. Тепер велика центральна іконка 
     природно виштовхне свій текст нижче за інші! */
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  margin: 20px 0;
`;

// 🟢 2. Окрема колонка для одного рангу (Іконка зверху, текст знизу)
export const RankItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  svg {
    width: ${(props) => (props.$isMain ? "120px" : "60px")};
    height: auto;
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }

  /* 🟢 Робимо першу і останню іконку меншими (по 50px) */
  &:first-child svg {
    width: 45px;
  }
  &:last-child svg {
    width: 65px;
  }

  &:hover svg {
    transform: scale(1.05);
  }
`;

// 🟢 3. Стиль для тексту (підпису) під іконкою
export const RankLabel = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #00251d;

  /* 🟢 Додаємо relative, щоб лінія знала, до чого їй "прив'язуватись" */
  position: relative;

  ${(props) =>
    props.$isMain &&
    `
    margin-top: 15px; 

    /* 🟢 МАГІЯ ТУТ: Малюємо кастомну лінію, яка довша за слово */
    &::after {
      content: "";
      position: absolute;
      left: 50%; /* Ставимо по центру */
      transform: translateX(-50%); /* Рівняємо ідеально посередині слова */
      
      bottom: -25px; /* 🟢 Наскільки низько опустити лінію під текстом */
      width: 300%;   /* 🟢 Довжина лінії (150% від ширини слова, можна задати і в px, напр. 80px) */
      height: 1px;   /* Товщина лінії */
      
      background-color: #397617; /* Зелений колір */
    }
  `}
`;
