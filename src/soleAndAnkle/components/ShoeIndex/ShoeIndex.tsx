// Libs
import styled from "styled-components";

// Local
import { WEIGHTS } from "../../constants";

import Breadcrumbs, { Crumb } from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

interface Props {
  sortID: string;
  setSortID: (value: string) => void;
}

export default function ShoeIndex(props: Props): JSX.Element {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label="Sort"
            value={props.sortID}
            onChange={(ev) => props.setSortID(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={34} axis="vertical" />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Crumb href="/">Home</Crumb>
          <Crumb href="/sale">Sale</Crumb>
          <Crumb href="/sale/shoes">Shoes</Crumb>
        </Breadcrumbs>
        <Spacer size={42} axis="vertical" />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const LeftColumn = styled.div``;

const MainColumn = styled.div``;

const Header = styled.header``;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;
