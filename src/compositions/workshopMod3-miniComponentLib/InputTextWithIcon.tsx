/** Notes while watching solution video
 * - his top level element is a `label` (whereas mine is the icon wrapper)
 * - he only uses the label prop within the VisuallyHidden component
 */

// Libs
import styled from "styled-components";
import { Roboto } from "next/font/google";

// Local
import { COLORS } from "@/compositions/workshopMod3-miniComponentLib/constants";
import { VisuallyHidden } from "@/actualComponents/VisuallyHidden";
import Icon, { IconTypes } from "./Icon";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

const iconSmall = 16 / 16 + "rem";
const iconLarge = 24 / 16 + "rem";
const fontSmall = 14 / 16 + "rem";
const fontLarge = 18 / 16 + "rem";
const paddingSmall = 24 / 16 + "rem";
const paddingLarge = 36 / 16 + "rem";

interface Props {
  label: string;
  icon: IconTypes;
  /** Provide value in pixels. Defaults to 250 if not provided. */
  maxWidth?: number;
  size: "small" | "large";
  placeholder: string;
  /**
   * Used as `htmlFor` on the label element (which wraps the icon), and as `id`
   * on the input element.
   */
  htmlForAndID: string;
  /** Used with the `VisuallyHidden` component */
  accessibilityText: string;
}

export default function InputTextWithIcon(props: Props): JSX.Element {
  const maxWidth = props.maxWidth ?? 250;

  const iconSize = props.size === "small" ? iconSmall : iconLarge;
  const fontSize = props.size === "small" ? fontSmall : fontLarge;
  const padding = props.size === "small" ? paddingSmall : paddingLarge;
  const underlineSize = props.size === "small" ? "1px" : "2px";

  return (
    <Wrapper style={{ "--maxWidth": maxWidth + "px" }}>
      <IconWrapper
        style={{ "--iconSize": iconSize }}
        htmlFor={props.htmlForAndID}
      >
        <Icon id={props.icon} size={iconSize} />
      </IconWrapper>
      <TextInput
        type="text"
        placeholder={props.placeholder}
        id={props.htmlForAndID}
        style={{
          "--maxWidth": maxWidth + "px",
          "--fontSize": fontSize,
          "--padding": padding,
          "--underlineSize": underlineSize,
        }}
      />
      <VisuallyHidden screenReaderText={props.accessibilityText} />
    </Wrapper>
  );
}

interface SCProps {
  readonly style: Record<string, string>;
}

const IconWrapper = styled.label<SCProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: var(--iconSize);
  height: var(--iconSize);

  transition: color 0.2s;

  color: ${COLORS.gray700};
`;

const TextInput = styled.input<SCProps>`
  border: none;
  border-bottom: var(--underlineSize) solid ${COLORS.black};
  background-color: transparent;
  outline-offset: 3px;
  padding-left: var(--padding);
  width: var(--maxWidth);
  color: ${COLORS.gray700};
  font-weight: 700;
  font-size: var(--fontSize);

  transition: color 0.2s;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline: var(--color-primary) solid 2px;
  }
`;

const Wrapper = styled.div<SCProps>`
  max-width: var(--maxWidth);
  font-family: ${roboto.style.fontFamily}, sans-serif;

  &:hover > ${IconWrapper}, &:hover > ${TextInput} {
    color: ${COLORS.black};
  }
`;
