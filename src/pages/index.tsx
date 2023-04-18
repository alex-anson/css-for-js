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
  /* min-height: 100%; */
  /* height: 100%; */
  padding-top: 60px;

  display: grid;
  justify-items: center;
  gap: ${32 / 16}rem;

  @media only screen and (min-width: 420px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: ${64 / 16}rem;
  }

  @media only screen and (min-width: 767px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;
