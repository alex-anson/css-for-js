// Libs
import styled from "styled-components";

// Local
import { COLORS } from "@/compositions/workshopMod3-miniComponentLib/constants";

import { VisuallyHidden } from "@/actualComponents/VisuallyHidden";
import Icon from "@/compositions/workshopMod3-miniComponentLib/Icon/Icon";

interface Props {
  label: string;
  icon: React.ReactNode;
  width: number;
  size: "small" | "large";
  placeholder: string;
}

export default function IconInput(props: Props): JSX.Element {
  return <div>TODO:</div>;
}
