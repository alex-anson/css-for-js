// Libs
import React from "react";
import styled from "styled-components";

// Local
import { COLORS, WEIGHTS } from "@/soleAndAnkle/constants";
import Icon from "../Icon";

interface Props {
  label: string;
  value: string;
  children: React.ReactNode;
  onChange: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select(props: Props): JSX.Element {
  const childArray = React.Children.toArray(props.children);
  // const selectedChild = childArray.find((child) => child.props.value === props.value);

  // const displayedValue = selectedChild.props.children;
  const displayedValue = "TODO:";

  return (
    <Wrapper>
      <VisibleLabel>{props.label}</VisibleLabel>

      <SelectWrapper>
        <NativeSelect {...props.onChange}>{props.children}</NativeSelect>

        <DisplayedBit>
          {displayedValue}
          <ChevronIcon id="chevron-down" size={24} color="TODO:" />
        </DisplayedBit>
      </SelectWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.label``;

const VisibleLabel = styled.span`
  color: ${COLORS.gray[700]};
  margin-right: 16px;
`;

const SelectWrapper = styled.div`
  position: relative;
`;

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const DisplayedBit = styled.span`
  display: block;
  background: ${COLORS.gray[100]};
  font-size: 1rem;
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
  padding: 12px 42px 12px 16px;
  border-radius: 8px;
  pointer-events: none;

  ${NativeSelect}:focus ~ & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const ChevronIcon = styled(Icon)`
  position: absolute;
  top: 0;
  right: 9px;
  bottom: 0;
  margin: auto;
  width: 24px;
  height: 24px;
`;
