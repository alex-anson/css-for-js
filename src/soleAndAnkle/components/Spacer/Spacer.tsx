import styled from "styled-components";

interface DimensionProps {
  axis: "horizontal" | "vertical";
  size: number;
}

function getHeight(props: DimensionProps) {
  return props.axis === "horizontal" ? 1 : props.size;
}
function getWidth(props: DimensionProps) {
  return props.axis === "vertical" ? 1 : props.size;
}

const Spacer = styled.span`
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;
`;

export default Spacer;
