// Libs
import styled, { StyledComponentPropsWithRef } from "styled-components";
import { Roboto } from "next/font/google";
import React from "react";

// Local
import { COLORS } from "./constants";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });

type Ref = HTMLButtonElement;
type Props = {
  variant: "fill" | "outline" | "ghost";
  size: "small" | "medium" | "large";
  children: string;
} & React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef<Ref, Props>(function Button(
  { variant, size, children, ...props },
  ref
): JSX.Element {
  switch (variant) {
    case "fill":
      return (
        <PrimaryButton size={size} ref={ref} {...props}>
          {children}
        </PrimaryButton>
      );
    case "outline":
      return (
        <SecondaryButton size={size} ref={ref} {...props}>
          {children}
        </SecondaryButton>
      );
    case "ghost":
      return (
        <GhostButton size={size} ref={ref} {...props}>
          {children}
        </GhostButton>
      );
    default:
      // This is how typescript keeps "future you" safe. 🥰🥰🥰
      const _exhaustivenessCheck: never = variant;
      return _exhaustivenessCheck;
  }
});
export default Button;

/* -------------- */
/* SECTION: STYLES */
/* -------------- */
// typescript requires a little extra typing for "custom props" => https://styled-components.com/docs/api#using-custom-props
type MyBtnSCProps = {
  readonly size: string;
} & StyledComponentPropsWithRef<"button">;

export const BaseButton = styled.button<MyBtnSCProps>`
  display: block;
  text-transform: uppercase;
  font-weight: 500;
  font-family: ${roboto.style.fontFamily};
  outline-offset: 3px;
  transition: color 0.2s, background-color 0.2s;
  cursor: pointer;
  border: 2px solid transparent;

  /* the focus color for the ghost button is different - BUT composed styles (aka, using the styled ƒn - i.e. "styled(Base)") will always win in terms of specificity. */
  &:focus {
    outline: 2px solid ${COLORS.primary};
  }

  /* refactored to NOT use the 'var()' method, could not figure out how to get BaseButton typed correctly. */
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

export const PrimaryButton = styled(BaseButton)<MyBtnSCProps>`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`;

const SecondaryButton = styled(BaseButton)<MyBtnSCProps>`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid ${COLORS.primary};

  &:hover {
    background-color: ${COLORS.offwhite};
  }
`;

const GhostButton = styled(BaseButton)`
  color: ${COLORS.gray};
  background-color: transparent;

  &:hover {
    color: ${COLORS.black};
    background-color: ${COLORS.transparentGray15};
  }

  &:focus {
    outline: 2px solid ${COLORS.transparentGray75};
  }
`;
