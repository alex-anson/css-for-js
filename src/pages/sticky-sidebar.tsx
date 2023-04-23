// Libs
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

// Media
import nina1 from "../../public/nina/bean1.jpeg";
import nina2 from "../../public/nina/bean2.jpg";
import nina3 from "../../public/nina/bean3.jpg";
import nina4 from "../../public/nina/bean4.jpg";

export default function Page(): JSX.Element {
  return (
    <Wrapper>
      <BackButton href="/module-four#sticky">
        <BBDiv>
          <BBText>&larr;back</BBText>
        </BBDiv>
      </BackButton>
      <Nav>
        <h2>Navigation</h2>
        <ul>
          <li>Section One</li>
          <li>Section Two</li>
        </ul>
      </Nav>
      <Main>
        <p>
          This container contains random pictures of nina to increase its
          height.
        </p>
        <LocalImage
          alt="rottweiler sitting outside"
          src={nina1}
          width={300}
          height={300}
        />
        <p>Normally, a blog post would exist in this container.</p>
        <LocalImage
          alt="baby rott with curious eyes"
          src={nina2}
          width={300}
          height={400}
        />
        <p>
          This container contains random pictures of nina to increase its
          height.
        </p>
        <LocalImage
          alt="baby rott with happy eyes"
          src={nina3}
          width={300}
          height={292}
        />
        <p>Normally, a blog post would exist in this container.</p>
        <LocalImage
          alt="rottweiler enjoying the snow and woods"
          src={nina4}
          width={300}
          height={225}
        />
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: var(--color-light);
  font-weight: 600;

  display: flex;
`;

const Nav = styled.nav`
  padding: 16px;
  padding-left: 0;
  padding-top: 8px;
  margin-left: 16px;
  margin-top: 16px;
  position: sticky;
  top: 16px;
  background-color: #181818;
  box-shadow: 0px 1px 4px #000;

  /* magic sauce ✨ */
  align-self: start;
`;

const Main = styled.main`
  padding: 16px;
  flex: 1;
`;

const LocalImage = styled(Image)`
  display: block;
  height: auto;
  width: 100%;
  max-width: 400px;
  margin: 16px 0 64px;
`;

const BackButton = styled(Link)`
  position: fixed;
  top: 112px;
  right: 12px;
  text-decoration: none;
`;

const BBDiv = styled.div`
  /* so it doesn't run full width */
  display: inline-block;
  padding: 8px 12px;
  border: 1px solid hsl(0, 0%, 25%);
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

const BBText = styled.p`
  font-size: ${20 / 16}rem;
  text-transform: uppercase;
  letter-spacing: 0.8px;
`;
