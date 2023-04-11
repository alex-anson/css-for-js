// Libs
import styled from "styled-components";

// Local
import { COLORS } from "@/compositions/workshopMod3-miniComponentLib/constants";
import { VisuallyHidden } from "@/actualComponents/VisuallyHidden";
import Icon, { IconTypes } from "./Icon";

const iconSize = 24;

interface Props {
  label: string;
  icon: IconTypes;
  width: number;
  size: "small" | "large";
  placeholder: string;
  /** used as `htmlFor` on the label element, and as `id` on the input element. */
  accessibilityText: string;
}

export default function InputTextWithIcon(props: Props): JSX.Element {
  function TheIcon() {
    return (
      <Icon id={props.icon} size={props.size === "small" ? "18px" : "24px"} />
    );
  }

  return (
    <CenterContents>
      <label htmlFor={props.accessibilityText}>{props.label}</label>
      <Group>
        <TheIcon />
        <TextInput type="text" placeholder={props.placeholder} />
      </Group>
    </CenterContents>
  );
}

const CenterContents = styled.div`
  width: fit-content;
  max-width: 90%;
  /* position: relative; */

  margin: 0 auto;
  /* display: grid;
  gap: 10px; */

  label {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

const Group = styled.div`
  display: flex;
  /* TODO: this is where i left off */
`;

const TextInput = styled.input`
  border: none;
  border-bottom: 1px solid ${COLORS.gray700};
  background-color: transparent;
  outline-offset: 3px;
`;
