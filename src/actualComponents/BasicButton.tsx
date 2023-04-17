// Libs
import Link from "next/link";
import styled from "styled-components";

interface Props {
  destination: string;
  text: string;
}

export default function BasicButton(props: Props): JSX.Element {
  return (
    <Link href={props.destination}>
      <Contain>{props.text}</Contain>
    </Link>
  );
}

const Contain = styled.div`
  /* so clickable portion doesn't run full screen width */
  display: inline-block;
  border: 1px solid hsl(0, 0%, 25%);
  /* seems more optically aligned with less padding on left than on the right */
  padding: 12px 16px 12px 12px;
  border-radius: ${12 / 16}rem;
  color: var(--color-primaryLight);
  background-color: rgba(34, 34, 34, 0.96);
  transition: all 0.2s;
  font-weight: 500;

  &:hover {
    border-color: hsl(0, 0%, 40%);
    background-color: rgba(25, 25, 25, 0.96);
  }
`;
