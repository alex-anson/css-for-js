// Libs
import styled from "styled-components";

// Local
import { COLORS } from "@/compositions/workshopMod3-miniComponentLib/constants";
import { VisuallyHidden } from "@/actualComponents/VisuallyHidden";
import Icon, { IconTypes } from "./Icon";

const iconSmall = 18 / 16 + "rem";
const iconLarge = 24 / 16 + "rem";
const fontSmall = 14 / 16 + "rem";
const fontLarge = 18 / 16 + "rem";

interface Props {
  label: string;
  icon: IconTypes;
  /** Provide value in pixels. Defaults to 250 if not provided. */
  width?: number;
  size: "small" | "large";
  placeholder: string;
  /**
   * Used as `htmlFor` on the label element (which wraps the icon), and as `id`
   * on the input element.
   */
  accessibilityText: string;
}

export default function InputTextWithIcon(props: Props): JSX.Element {
  const width = props.width ?? 250;

  const iconSize = props.size === "small" ? iconSmall : iconLarge;
  const fontSize = props.size === "small" ? fontSmall : fontLarge;
  const padding = props.size === "small" ? "1.7rem" : "2rem";
  const underlineSize = props.size === "small" ? "1px" : "2px";

  return (
    <CenterContents>
      <Wrapper style={{ "--width": width + "px" }}>
        <IconWrapper
          style={{ "--iconSize": iconSize }}
          htmlFor={props.accessibilityText}
        >
          <Icon id={props.icon} size={iconSize} />
        </IconWrapper>
        <TextInput
          type="text"
          placeholder={props.placeholder}
          id={props.accessibilityText}
          style={{
            "--width": width + "px",
            "--fontSize": fontSize,
            "--padding": padding,
            "--underlineSize": underlineSize,
          }}
        />
      </Wrapper>
    </CenterContents>
  );
}

const CenterContents = styled.div`
  width: fit-content;
  max-width: 90%;
  margin: 0 auto;

  position: relative;
`;

interface SCProps {
  readonly style: Record<string, string>;
}

const Wrapper = styled.div<SCProps>`
  width: var(--width);
`;

const IconWrapper = styled.label<SCProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: var(--iconSize);
  height: var(--iconSize);

  color: ${COLORS.gray700};
`;

const TextInput = styled.input<SCProps>`
  border: none;
  border-bottom: var(--underlineSize) solid ${COLORS.black};
  background-color: transparent;
  outline-offset: 3px;
  padding-left: var(--padding);
  width: var(--width);
  color: ${COLORS.gray700};
  font-weight: 700;
  font-size: var(--fontSize);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;
