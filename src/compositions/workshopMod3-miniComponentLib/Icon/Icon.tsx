// Libs
import styled from "styled-components";
import { Search, AtSign, ChevronDown, Icon } from "react-feather";

const icons: Record<string, Icon> = {
  search: Search,
  "at-sign": AtSign,
  "chevron-down": ChevronDown,
} as const;

export type IconTypes = "search" | "at-sign" | "chevron-down";

interface Props {
  id: IconTypes;
  /** consumer needs to provide the unit */
  size: string;
  // FIXME: get `any` out
  delegated?: any;
}

export default function Icon(props: Props): JSX.Element {
  const Icon = icons[props.id];

  return (
    <Wrapper
      style={{
        "--size": props.size,
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
