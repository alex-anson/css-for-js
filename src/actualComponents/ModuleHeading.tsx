// Libs
import styled from "styled-components";

interface Props {
  heading: string;
  description?: string;
}

export default function ModuleHeading(props: Props): JSX.Element {
  return (
    <Wrapper>
      <Heading>{props.heading}</Heading>
      {props.description && <Description>{props.description}</Description>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: fit-content;
  text-align: center;

  margin: 0 auto 48px;
  & h1,
  span {
    margin-left: 16px;
    margin-right: 16px;
  }
  /* ^ because i can't center it AND have 16px mx on the same element */
`;

const Heading = styled.h1`
  color: var(--color-light);
  font-size: ${44 / 16}rem;
  font-weight: 300;
  letter-spacing: 0.2px;
  line-height: 1.2;
`;

const Description = styled.span`
  color: var(--color-primary);
  font-size: ${32 / 16}rem;
  line-height: 1.2;
`;
