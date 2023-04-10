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
// 8 because there's 4px of "padding" on the left & right
const widthInnerBarLG = 370 - 8;
// 24 - 8 because of the "padding"
const heightInnerBarLG = 16;

export default function ProgressBar(props: Props): JSX.Element {
  const percentageComplete = props.value;
  /**
   * not a ratio, but i dunno what to name this. it's the non-percent version ...
   * i.e. 50% becomes 185. (because 50% of 370 is 185.)
   */
  const ratioComplete = (percentageComplete * totalBarWidth) / 100;
  const ratioCompleteLG = (percentageComplete * widthInnerBarLG) / 100;

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
        <WrappingSVG style={styles} size={props.size}>
          {/* For the large ProgressRectangle: need to use clipPath to mimic border 
          radius. Don't want the right side to have a border radius until it has 
          reached 100%. */}
          <defs>
            <clipPath id="round-corner">
              <rect
                x="4"
                y="4"
                width={widthInnerBarLG}
                height={heightInnerBarLG}
                rx="4"
                ry="4"
              />
            </clipPath>
          </defs>

          <BaseRectangle
            stroke="none"
            style={styles}
            size={props.size}
            // Avoid typescript warning by specifying rx here.
            rx={styles["--borderRadius"]}
          />
          <ProgressRectangle
            stroke="none"
            width={props.size === "lg" ? ratioCompleteLG : ratioComplete}
            style={styles}
            size={props.size}
            x={props.size === "lg" ? 4 : 0}
            y={props.size === "lg" ? 4 : 0}
            clipPath={props.size === "lg" ? "url(#round-corner)" : ""}
          />
        </WrappingSVG>
      </TheProgressBar>

      <VisuallyHidden
        screenReaderText={`Current progress: ${percentageComplete}%`}
      />
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
`;

const totalBarWidthWithUnit = totalBarWidth + "px";

const WrappingSVG = styled.svg<ProgressBarSCProps>`
  width: ${totalBarWidthWithUnit};
  height: var(--height);
  border-radius: var(--borderRadius);
  overflow: hidden;
`;

const BaseRectangle = styled.rect<ProgressBarSCProps>`
  width: ${totalBarWidthWithUnit};
  height: var(--height);
  fill: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  /* Gives typescript warning - "unknown property" */
  /* rx: var(--borderRadius); */
`;

const ProgressRectangle = styled.rect<ProgressBarSCProps>`
  fill: ${COLORS.primary};
  height: ${(props) =>
    props.size === "lg" ? heightInnerBarLG + "px" : "var(--height)"};
`;
