// Libs
import styled from "styled-components";

// Local
import { COLORS } from "./constants";

interface Props {
  label: string;
  /** used as `htmlFor` on the label element, and as `id` on the select element. */
  accessibilityText: string;
  options: string[];
}

export default function InputSelect(props: Props): JSX.Element {
  return (
    <CenterContents>
      <label htmlFor={props.accessibilityText}>{props.label}</label>
      <MySelectElement id={props.accessibilityText} name="select-element-name">
        <option value="" disabled>
          Pick your player
        </option>
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </MySelectElement>
    </CenterContents>
  );
}

const CenterContents = styled.div`
  margin: 0 auto;
  max-width: fit-content;

  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  label {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

const MySelectElement = styled.select`
  appearance: none;
  color: ${COLORS.gray700};
  background: ${COLORS.transparentGray15};
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(0deg 0% 40%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>');
  background-position: calc(100% - 0.5rem) center;
  background-repeat: no-repeat;

  padding: 16px 12px;
  padding-right: 36px;
  line-height: 1.2;
  border: none;
  border-radius: 8px;

  &:hover {
    color: ${COLORS.black};
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>');
  }
`;
