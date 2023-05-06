// Libs
import { useState } from "react";
import styled from "styled-components";
import { Raleway } from "next/font/google";

// Local
import Header from "@/soleAndAnkle/components/Header";
import ShoeIndex from "@/soleAndAnkle/components/ShoeIndex";

const raleway = Raleway({ subsets: ["latin"] });

export default function Page(): JSX.Element {
  const [sortID, setSortID] = useState("newest");

  return (
    <>
      <Header />
      <Main className={raleway.className}>
        <ShoeIndex sortID={sortID} setSortID={setSortID} />
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 64px 32px;
`;
