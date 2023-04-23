// Libs
import styled from "styled-components";

// Local
import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

export default function ShoeGrid(): JSX.Element {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeCard key={shoe.slug} {...shoe} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
