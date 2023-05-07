import React from "react";
import styled from "styled-components";

import { WEIGHTS, COLORS } from "../../constants";

const Logo = (props?: any): JSX.Element => {
  return (
    <Link href="/">
      <Wrapper {...props}>Sole&amp;Ankle</Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[900]};
`;

const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
`;

export default Logo;
