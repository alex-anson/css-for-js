// Libs
import styled from "styled-components";

// Local
import { COLORS } from "./constants";

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
/* SECTION: STYLES */ // TODO: get roboto
/* -------------- */
const Base = styled.button<StyledComponentProps>`
  display: block;
  text-transform: uppercase;
  font-weight: 500;

  font-size: ${(props) => props.size === "small" && "16px"};
  font-size: ${(props) => props.size === "medium" && "18px"};
  font-size: ${(props) => props.size === "large" && "21px"};

  padding: ${(props) => props.size === "small" && "8px 16px"};
  padding: ${(props) => props.size === "medium" && "16px 24px"};
  padding: ${(props) => props.size === "large" && "20px 36px"};

  border-radius: ${(props) => props.size === "small" && "2px"};
  border-radius: ${(props) => props.size === "medium" && "2px"};
  border-radius: ${(props) => props.size === "large" && "4px"};
`;

// typescript requires a little extra typing for "custom props" => https://styled-components.com/docs/api#using-custom-props
interface StyledComponentProps {
  readonly size: string;
}

const PrimaryButton = styled(Base)<StyledComponentProps>`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
`;

const SecondaryButton = styled(Base)<StyledComponentProps>`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
`;

const GhostButton = styled(Base)<StyledComponentProps>`
  color: ${COLORS.transparentGray75};
`;
