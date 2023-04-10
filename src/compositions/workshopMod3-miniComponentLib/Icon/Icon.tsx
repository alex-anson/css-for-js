// Libs
import styled from "styled-components";
import { Search, AtSign, ChevronDown, Icon } from "react-feather";

const icons: Record<string, Icon> = {
  search: Search,
  "at-sign": AtSign,
  "chevron-down": ChevronDown,
} as const;

interface Props {
  id: "search" | "at-sign" | "chevron-down";
  /** provide unit in `rem` */
  size: number;
  // FIXME: get `any` out
  delegated?: any;
}

export default function Icon(props: Props): JSX.Element {
  const Icon = icons[props.id];

  return (
    <Wrapper
      style={{
        "--size": props.size + "rem",
      }}
      {...props.delegated}
    >
      <Icon color="currentColor" size={props.size} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: var(--size);
  height: var(--size);

  & > svg {
    display: block;
  }
`;
