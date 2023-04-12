import styled from "styled-components";

export default function FlexboxFacebook(): JSX.Element {
  return (
    <section>
      <h2>flexbox - facebook layout</h2>
      <Wrapper>
        <Nav></Nav>
        <MainContent></MainContent>
        <Aside></Aside>
      </Wrapper>
    </section>
  );
}

const Wrapper = styled.div`
  height: 250px;
  display: flex;
`;

const Nav = styled.nav`
  border: 3px solid hsl(240deg 100% 50%);
  background: hsl(240deg 100% 50% / 0.2);

  flex: 0 999999 250px;
  min-width: 150px;
  max-width: 250px;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const MainContent = styled.div`
  border: 3px solid hsl(300deg 75% 60%);
  background: hsl(300deg 75% 60% / 0.2);

  flex: 1 1 500px;
`;

const Aside = styled.aside`
  border: 3px solid hsl(125deg 75% 45%);
  background: hsl(125deg 75% 45% / 0.2);

  flex: 0 999999 250px;
  min-width: 150px;
  max-width: 250px;
`;
