// Libs
import { useState } from "react";
import styled from "styled-components";

// Local
import Header from "@/soleAndAnkle/components/Header";
import ShoeIndex from "@/soleAndAnkle/components/ShoeIndex";

export default function Page(): JSX.Element {
  const [sortID, setSortID] = useState("newest");

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortID={sortID} setSortID={setSortID} />
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 64px 32px;
`;
