import React, { useState, useRef, useEffect } from "react";

import GlobeIcon from "../../../../../../assets/svg/profile/Globe.svg";
import ChevronIcon from "../../../../../../assets/svg/profile/Forward.svg";

import * as Elems from "./bank.styles.js";
import { VerticalLine } from "../../security/2fa/2fa.styles.js";

const CustomSelect = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0] || null); // За замовчуванням беремо перший
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    // Тут можна додати onChange(option), якщо треба передавати дані вище
  };

  return (
    <Elems.SelectWrapper ref={selectRef}>
      <Elems.SelectHeader
        style={{ gap: "6px" }}
        $isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Elems.IconWrapper>
          <GlobeIcon />
        </Elems.IconWrapper>
        <VerticalLine style={{ marginRight: "0px", height: "26px" }} />
        <Elems.SelectedText>
          {selected ? selected.label : options[0].label}
        </Elems.SelectedText>
        <Elems.ChevronWrapper $isOpen={isOpen}>
          <ChevronIcon />
        </Elems.ChevronWrapper>
      </Elems.SelectHeader>

      {/* Випадаючий список */}
      {isOpen && (
        <Elems.DropdownList>
          {options.map((option) => (
            <Elems.DropdownItem
              key={option.value}
              $isActive={selected?.value === option.value}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </Elems.DropdownItem>
          ))}
        </Elems.DropdownList>
      )}
    </Elems.SelectWrapper>
  );
};

export default CustomSelect;
