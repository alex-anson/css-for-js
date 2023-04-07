// Libs
import styled from "styled-components";
import { Roboto } from "next/font/google";

// Local
import { COLORS } from "./constants";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });

interface Props {
  variant: "fill" | "outline" | "ghost";
  size: "small" | "medium" | "large";
  children: string;
}

export function Button(props: Props): JSX.Element {
  switch (props.variant) {
    case "fill":
      return <PrimaryButton size={props.size}>{props.children}</PrimaryButton>;
    case "outline":
      return (
        <SecondaryButton size={props.size}>{props.children}</SecondaryButton>
      );
    case "ghost":
      return <GhostButton size={props.size}>{props.children}</GhostButton>;
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
  readonly size: string;
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

  font-size: ${(props) => props.size === "small" && "1rem"};
  font-size: ${(props) => props.size === "medium" && "1.125rem"};
  font-size: ${(props) => props.size === "large" && "1.32rem"};

  padding: ${(props) => props.size === "small" && "8px 16px"};
  padding: ${(props) => props.size === "medium" && "16px 24px"};
  padding: ${(props) => props.size === "large" && "20px 36px"};

  border-radius: ${(props) =>
    (props.size === "small" || props.size === "medium") && "2px"};
  border-radius: ${(props) => props.size === "large" && "4px"};

  line-height: ${(props) => props.size === "small" && 1.125};
  line-height: ${(props) =>
    (props.size === "medium" || props.size === "large") && 1.17};
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
