import Image from "next/image";
import styled from "styled-components";

// Media
import cat from "../../public/cats/cat1.jpeg";

export default function OverstuffedAndCentered(): JSX.Element {
  return (
    <section>
      <h2>overstuffed + centered</h2>
      <Wrapper>
        <p>This is a cat:</p>
        <LocalImage alt="cat" src={cat} />
      </Wrapper>
    </section>
  );
}

const Wrapper = styled.div`
  color: var(--color-light);
  border: 2px solid currentColor;
  margin: 16px auto;
  width: 50vw;

  display: flex;
  flex-direction: column;
`;

const LocalImage = styled(Image)`
  display: block;
  width: 300px;
  margin-top: 16px;

  /* magic sauce 🪄 */
  min-width: 300px;
  align-self: center;
`;
