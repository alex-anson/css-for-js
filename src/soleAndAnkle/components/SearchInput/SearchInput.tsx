// Libs
import styled from "styled-components";

// Local
import { COLORS } from "@/soleAndAnkle/constants";
import { VisuallyHidden } from "@/actualComponents/VisuallyHidden";
import Icon from "../Icon";

interface Props {
  delegated?: any;
}

export default function SearchInput(props: Props): JSX.Element {
  return (
    <Label>
      <VisuallyHidden screenReaderText="Search" />
      <Input {...props.delegated} placeholder="Search…" />
      <WrapIcon>
        <Icon id="search" size={16} color="hsl(190deg, 5%, 80%)" />
      </WrapIcon>
    </Label>
  );
}

const Label = styled.label`
  position: relative;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  border-bottom: 1px solid ${COLORS.gray[300]};
  padding-left: 24px;
  font-size: 0.875rem;
  color: ${COLORS.gray[100]};
  outline-offset: 4px;

  &::placeholder {
    color: ${COLORS.gray[500]};
  }
`;

const WrapIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: 16px;
  height: 16px;
`;
