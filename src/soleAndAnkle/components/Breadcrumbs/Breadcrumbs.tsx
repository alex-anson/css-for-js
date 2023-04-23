import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

interface CrumbProps {
  href: string;
  children: React.ReactNode;
  delegated?: any;
}

export default function Breadcrumbs(props: {
  children: React.ReactNode;
}): JSX.Element {
  return <Wrapper>{props.children}</Wrapper>;
}

export function Crumb(props: CrumbProps): JSX.Element {
  return (
    <CrumbWrapper>
      <CrumbLink href={props.href} {...props.delegated}>
        {props.children}
      </CrumbLink>
    </CrumbWrapper>
  );
}

const CrumbWrapper = styled.div`
  &:not(:first-of-type) {
    margin-left: 8px;

    &::before {
      content: "/";
      margin-right: 8px;
      color: ${COLORS.gray[300]};
    }
  }
`;

const CrumbLink = styled.a`
  color: ${COLORS.gray[700]};
  text-decoration: none;

  &:hover {
    color: ${COLORS.gray[900]};
  }
`;

const Wrapper = styled.nav`
  display: flex;
  font-size: 0.875rem;
`;
