// Libs
import styled from "styled-components";
import { Search, Menu, ShoppingBag, ChevronDown, Icon } from "react-feather";

interface IconType {
  search: Icon;
  menu: Icon;
  "shopping-bag": Icon;
  "chevron-down": Icon;
}

const icons: IconType = {
  search: Search,
  menu: Menu,
  "shopping-bag": ShoppingBag,
  "chevron-down": ChevronDown,
};

interface Props {
  id: keyof IconType;
  color: string;
  size: number;
  delegated?: any;
}

export default function IconComponent(props: Props): JSX.Element {
  const Component = icons[props.id];

  return (
    <Wrapper {...props.delegated}>
      <Component color={props.color} size={props.size} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > svg {
    display: block;
  }
`;
