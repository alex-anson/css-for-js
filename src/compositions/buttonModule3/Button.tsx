// Libs
import styled from "styled-components";
import { Roboto } from "next/font/google";

// Local
import { COLORS } from "./constants";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });

type PropertiesType =
  | "--fontSize"
  | "--padding"
  | "--borderRadius"
  | "--lineHeight";

type SizesType = {
  small: Record<PropertiesType, string | number>;
  medium: Record<PropertiesType, string | number>;
  large: Record<PropertiesType, string | number>;
};

const SIZES: SizesType = {
  small: {
    "--fontSize": "1rem",
    "--padding": "8px 16px",
    "--borderRadius": "2px",
    "--lineHeight": 1.125,
  },
  medium: {
    "--fontSize": "1.125rem",
    "--padding": "16px 24px",
    "--borderRadius": "2px",
    "--lineHeight": 1.17,
  },
  large: {
    "--fontSize": "1.32rem",
    "--padding": "20px 36px",
    "--borderRadius": "4px",
    "--lineHeight": 1.17,
  },
} as const;

interface Props {
  variant: "fill" | "outline" | "ghost";
  size: "small" | "medium" | "large";
  children: string;
}

export function Button(props: Props): JSX.Element {
  const styles = SIZES[props.size];

  switch (props.variant) {
    case "fill":
      return <PrimaryButton style={styles}>{props.children}</PrimaryButton>;
    case "outline":
      return <SecondaryButton style={styles}>{props.children}</SecondaryButton>;
    case "ghost":
      return <GhostButton style={styles}>{props.children}</GhostButton>;
    default:
      // This is how typescript keeps "future you" safe. 🥰🥰🥰
      const _exhaustivenessCheck: never = props.variant;
      return _exhaustivenessCheck;
  }
}

/* -------------- */
/* SECTION: STYLES */
/* -------------- */
// typescript requires a little extra typing for "custom props" => https://styled-components.com/docs/api#using-custom-props
interface StyledComponentProps {
  // any of the sizes will work here.
  readonly style: SizesType["small"];
}

const Base = styled.button<StyledComponentProps>`
  /* should technically be display: block, but i wanted to center the buttons in this case. */
  display: inline-block;
  text-transform: uppercase;
  font-weight: 500;
  font-family: ${roboto.style.fontFamily};
  outline-offset: 3px;
  transition: color 0.2s, background-color 0.2s;
  cursor: pointer;

  font-size: var(--fontSize);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  line-height: var(--lineHeight);
`;

const PrimaryButton = styled(Base)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  border: 2px solid transparent;

  &:hover {
    background-color: ${COLORS.primaryLight};
  }

  &:focus {
    outline: 2px solid ${COLORS.primary};
  }
`;

const SecondaryButton = styled(Base)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid ${COLORS.primary};

  &:hover {
    background-color: ${COLORS.offwhite};
  }

  &:focus {
    outline: 2px solid ${COLORS.primary};
  }
`;

const GhostButton = styled(Base)`
  color: ${COLORS.gray};
  background-color: transparent;
  border: 2px solid transparent;

  &:hover {
    color: ${COLORS.black};
    background-color: ${COLORS.transparentGray15};
  }

  &:focus {
    outline: 2px solid ${COLORS.transparentGray75};
  }
`;
