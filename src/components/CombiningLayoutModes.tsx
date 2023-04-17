import styled from "styled-components";

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export default function CombiningLayoutModes(): JSX.Element {
  return (
    <section>
      <h2>combining layout modes</h2>
      <Wrapper>
        <GrowingColumn>
          <h1>Growing Column</h1>
          <p>
            This column will grow very tall indeed, whilst the adjacent one will
            be clamped to whatever height this one rests at!
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </GrowingColumn>

        <LettersColumn>
          <p>Here is a list of all the letters in the English language:</p>
          <ol>
            {letters.map((letter) => (
              <li key={letter}>Item {letter}</li>
            ))}
          </ol>
        </LettersColumn>
      </Wrapper>
    </section>
  );
}

const Wrapper = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  display: flex;
  gap: 32px;
  border: 3px solid var(--color-primary);
  background-color: var(--color-light);

  & h1,
  p,
  li {
    margin-bottom: 16px;
  }

  /* magic starts here */
  overflow-y: scroll;
  position: relative;
`;

const BaseColumn = styled.div`
  flex: 1;
  padding: 16px;
`;

const GrowingColumn = styled(BaseColumn)`
  position: sticky;
  top: 0;
  right: 0;
`;

const LettersColumn = styled(BaseColumn)`
  height: 0px;
`;
