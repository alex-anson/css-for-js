// Libs
import styled from "styled-components";

// Local
import BasicButton from "@/actualComponents/BasicButton";

export default function Home() {
  return (
    <>
      <Grid>
        <BasicButton destination="/module-one" text="module one" />
        <BasicButton destination="/module-two" text="module two" />
        <BasicButton destination="/module-three" text="module three" />
        <BasicButton destination="/module-four" text="module four" />
      </Grid>
    </>
  );
}

const Grid = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  gap: ${32 / 16}rem;

  @media only screen and (min-width: 420px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
