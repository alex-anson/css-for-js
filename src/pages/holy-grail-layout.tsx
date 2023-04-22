import Link from "next/link";
import styled from "styled-components";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function Page(): JSX.Element {
  return (
    <Wrapper className={manrope.className}>
      <HeaderBox>Header</HeaderBox>
      <Middle>
        <NavBox>Nav</NavBox>
        <MainBox>
          <p> Main Content</p>
          <BackButton href="/module-four#hgl">
            <BBDiv>
              <BBText>&larr;back</BBText>
            </BBDiv>
          </BackButton>
        </MainBox>
        <AsideBox>Ad unit</AsideBox>
      </Middle>
      <FooterBox>Footer</FooterBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: var(--color-light);
  font-weight: 600;

  /* i definitely feel like using the Wrapper in this way is cheating. */
  display: flex;
  flex-direction: column;

  height: 100%;
`;

const Middle = styled.div`
  flex: 1 10000px;
  display: flex;
  min-height: fit-content;
`;

const HeaderBox = styled.header`
  /* remove globals.css style */
  margin-bottom: 0;

  border: 3px solid hsl(45deg 100% 50%);
  background-color: hsl(45deg 100% 50% / 0.2);
  padding: 16px;
`;

const NavBox = styled.nav`
  border: 3px solid hsl(170deg 100% 35%);
  background-color: hsl(170deg 100% 35% / 0.2);
  padding: 16px;

  flex: 1 2 300px;
`;

const MainBox = styled.main`
  border: 3px solid hsl(220deg 100% 50%);
  background-color: hsl(220deg 100% 50% / 0.2);
  padding: 16px;

  flex: 1 1 600px;

  /* flex parent to => "main content" text & back button */
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 32px;
`;

const AsideBox = styled.aside`
  border: 3px solid hsl(300deg 100% 45%);
  background-color: hsl(300deg 100% 45% / 0.2);
  padding: 16px;

  flex: 1 2 300px;
`;

const FooterBox = styled.footer`
  /* remove globals.css style */
  margin-top: 0;

  border: 3px solid hsl(350deg 100% 60%);
  background-color: hsl(350deg 100% 60% / 0.2);
  padding: 16px;
`;

const BackButton = styled(Link)`
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
