// Libs
import styled from "styled-components";
import React from "react";

// Local
import { BaseButton, PrimaryButton } from "./Button";
import { COLORS } from "./constants";

type Ref = HTMLButtonElement;
type Props = {
  /** default = primary app color scheme */
  level: "default" | "info" | "success" | "warn" | "danger";
  size: "small" | "medium" | "large";
  children: string;
} & React.ComponentPropsWithRef<"button">;

const ButtonLevels = React.forwardRef<Ref, Props>(function Button(
  { level, size, children, ...props },
  ref
): JSX.Element {
  switch (level) {
    case "default":
      return (
        <PrimaryButton size={size} ref={ref} {...props}>
          {children}
        </PrimaryButton>
      );
    case "info":
      return (
        <InfoButton size={size} ref={ref} {...props}>
          {children}
        </InfoButton>
      );
    case "success":
      return (
        <SuccessButton size={size} ref={ref} {...props}>
          {children}
        </SuccessButton>
      );
    case "warn":
      return (
        <WarnButton size={size} ref={ref} {...props}>
          {children}
        </WarnButton>
      );
    case "danger":
      return (
        <DangerButton size={size} ref={ref} {...props}>
          {children}
        </DangerButton>
      );
    default:
      // This is how typescript keeps "future you" safe. 🥰🥰🥰
      const _exhaustivenessCheck: never = level;
      return _exhaustivenessCheck;
  }
});
export default ButtonLevels;

const InfoButton = styled(BaseButton)`
  background-color: ${COLORS.info};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.infoLight};
  }
  &:focus {
    outline: 2px solid ${COLORS.infoLight};
  }
`;

const SuccessButton = styled(BaseButton)`
  background-color: ${COLORS.success};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.successLight};
  }
  &:focus {
    outline: 2px solid ${COLORS.successLight};
  }
`;

const WarnButton = styled(BaseButton)`
  background-color: ${COLORS.warn};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.warnLight};
  }
  &:focus {
    outline: 2px solid ${COLORS.warnLight};
  }
`;

const DangerButton = styled(BaseButton)`
  background-color: ${COLORS.danger};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.dangerLight};
  }
  &:focus {
    outline: 2px solid ${COLORS.dangerLight};
  }
`;
