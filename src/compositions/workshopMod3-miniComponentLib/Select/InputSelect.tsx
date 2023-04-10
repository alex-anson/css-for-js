// Libs
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

// Local
import { COLORS } from "../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./InputSelect.helpers";

const iconSize = 24;
const ogOption = "Pick your player";

interface Props {
  label: string;
  /** used as `htmlFor` on the label element, and as `id` on the select element. */
  accessibilityText: string;
  options: string[];
}

export default function InputSelect(props: Props): JSX.Element {
  const [displayedValue, setDisplayedValue] = useState(ogOption);

  function handleChange(ev: ChangeEvent<HTMLSelectElement>) {
    const newValue = getDisplayedValue({
      value: ev.target.value,
      options: props.options,
    });
    setDisplayedValue(newValue);
  }

  return (
    <CenterContents>
      <label htmlFor={props.accessibilityText}>{props.label}</label>
      <NativeSelect
        id={props.accessibilityText}
        name="select-element-name"
        onChange={handleChange}
      >
        <option value="" disabled>
          {ogOption}
        </option>
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{ "--size": iconSize + "px" }}>
          <Icon id="chevron-down" size={iconSize + "px"} />
        </IconWrapper>
      </PresentationalBit>
    </CenterContents>
  );
}

const CenterContents = styled.div`
  width: fit-content;
  max-width: 90%;
  position: relative;

  margin: 0 auto;
  display: grid;
  gap: 10px;

  label {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

const NativeSelect = styled.select`
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;

  grid-row: 2;
`;

const PresentationalBit = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;
  line-height: 1.2;

  /* 
  div + button

  + is the adjacent sibling combinator. won't work if there's anything between div & button
  (~ is the general sibling combinator) 
 */
  ${NativeSelect}:focus + & {
    outline: 2px solid #212121;
    /* outline: if -webkit-focus-ring-color is found to be invalid by whatever browser, 
it'll fall back to the first one */
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

interface IconWrapperProps {
  readonly style: Record<string, string>;
}
const IconWrapper = styled.div<IconWrapperProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  /* allows user to click the chevron - from their perspective. just allowing that click to pass through */
  pointer-events: none;

  grid-row: 2;
`;
