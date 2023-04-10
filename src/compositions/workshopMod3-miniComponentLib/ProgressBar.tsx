// Libs
import styled from "styled-components";

// Local
import { COLORS } from "./constants";
import { VisuallyHidden } from "@/actualComponents/VisuallyHidden";

type VaryingProperties = "--height" | "--borderRadius";

type ProgressBarSizes = {
  sm: Record<VaryingProperties, string>;
  md: Record<VaryingProperties, string>;
  lg: Record<VaryingProperties, string>;
};

const PROGRESS_BAR_SIZES: ProgressBarSizes = {
  sm: { "--height": "8px", "--borderRadius": "4px" },
  md: { "--height": "12px", "--borderRadius": "4px" },
  lg: { "--height": "24px", "--borderRadius": "8px" },
} as const;

interface Props {
  /** Percentage complete */
  value: number;
  size: "sm" | "md" | "lg";
  labelText: string;
}

const totalBarWidth = 370;
export default function ProgressBar(props: Props): JSX.Element {
  const percentageComplete = props.value;
  const ratioComplete = (props.value * totalBarWidth) / 100;

  const styles = PROGRESS_BAR_SIZES[props.size];
  return (
    <Wrapper>
      <span id="progress_label">{props.labelText}:</span>

      <TheProgressBar
        role="progressbar"
        aria-labelledby="progress_label"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentageComplete}
        style={styles}
        size={props.size}
      >
        <WrappingSVG style={styles} size={props.size} rx={8} fill="red">
          <BaseRectangle
            stroke="none"
            style={styles}
            size={props.size}
            // Avoid typescript warning by specifying rx here.
            rx={styles["--borderRadius"]}
          />
          <ProgressRectangle
            stroke="none"
            width={ratioComplete}
            style={styles}
            size={props.size}
          />
        </WrappingSVG>
      </TheProgressBar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: fit-content;
`;

interface ProgressBarSCProps {
  readonly style: Record<VaryingProperties, string>;
  readonly size: string;
}
const TheProgressBar = styled.span<ProgressBarSCProps>`
  display: block;
  position: relative;
  /* selected the svg & both rect elements here to reduce duplication. (DRY) */
  svg,
  rect {
    /* display: block; */
    height: var(--height);
  }
`;

const totalBarWidthWithUnit = totalBarWidth + "px";
const WrappingSVG = styled.svg<ProgressBarSCProps>`
  width: ${totalBarWidthWithUnit};
  overflow: hidden;
`;

const BaseRectangle = styled.rect<ProgressBarSCProps>`
  width: ${totalBarWidthWithUnit};
  fill: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  /* Gives typescript warning - "unknown property" */
  /* rx: var(--borderRadius); */
`;

const ProgressRectangle = styled.rect<ProgressBarSCProps>`
  fill: ${COLORS.primary};
  padding: ${(props) =>
    props.size === "lg" && "200px"}; // DEBUG: & change value back
`;
