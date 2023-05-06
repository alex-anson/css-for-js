// Libs
import styled from "styled-components";

// Local
import { COLORS } from "@/soleAndAnkle/constants";

import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

export default function SuperHeader() {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput />
      <HelpLink href="/help">Help</HelpLink>
      <LocalButton>
        <Icon id="shopping-bag" size={16} color="hsl(190deg, 5%, 80%)" />
      </LocalButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};

  display: flex;
  align-items: center;
  gap: 24px;
  min-height: ${36 / 16}rem;
  padding: 4px 32px;
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

const LocalButton = styled(UnstyledButton)`
  flex-shrink: 0;
`;
