// Libs
import styled from "styled-components";

// Local
import { BaseButton, SIZES, PrimaryButton } from "./Button";
import { COLORS } from "./constants";

interface Props {
  /** default = primary app color scheme */
  level: "default" | "info" | "success" | "warn" | "danger";
  size: "small" | "medium" | "large";
  children: string;
}

export default function ButtonLevels(props: Props): JSX.Element {
  const styles = SIZES[props.size];

  switch (props.level) {
    case "default":
      return <PrimaryButton style={styles}>{props.children}</PrimaryButton>;
    case "info":
      return <InfoButton style={styles}>{props.children}</InfoButton>;
    case "success":
      return <SuccessButton style={styles}>{props.children}</SuccessButton>;
    case "warn":
      return <WarnButton style={styles}>{props.children}</WarnButton>;
    case "danger":
      return <DangerButton style={styles}>{props.children}</DangerButton>;
    default:
      // This is how typescript keeps "future you" safe. 🥰🥰🥰
      const _exhaustivenessCheck: never = props.level;
      return _exhaustivenessCheck;
  }
}

// I could've done this in a style similar to that which was used for the sizes 🤷‍♀️

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
