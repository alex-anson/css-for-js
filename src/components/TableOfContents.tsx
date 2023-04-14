import { GhostButton, SecondaryButton } from "@/compositions/buttonModule3";
import InputTextWithIcon from "@/compositions/workshopMod3-miniComponentLib/InputTextWithIcon";
import styled from "styled-components";

export default function TableOfContents(): JSX.Element {
  return (
    <section>
      <h2>table of contents</h2>
      <Note>
        this example component features a properly-tabbable “page” &mdash; focus
        begins with the table of contents.
        <br />
        <span>
          (click anywhere on this paragraph, then press tab on your keyboard.)
        </span>
      </Note>
      <Wrapper>
        <TOCBox>
          <nav>
            <NavHeading>Table of Contents</NavHeading>
            <ul>
              <li>
                <a href="#heading-one">First Post Excerpt</a>
              </li>
              <li>
                <a href="#heading-two">Second Post Excerpt</a>
              </li>
              <li>
                <a href="#heading-three">Third Post Excerpt</a>
              </li>
            </ul>
          </nav>
        </TOCBox>
        <Contents>
          <h3 id="heading-one">First Excerpt</h3>
          <p>
            Imagine if these were real blog post excerpts, and this was real
            content. It would be bad for accessibility if the user needed to tab
            through all of the content to reach the table of contents.
          </p>
          <LocalSecondaryBtn size="small">Read more</LocalSecondaryBtn>
          <h3 id="heading-two">Second Excerpt</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            vel ad harum debitis possimus fuga ipsam, eligendi non odit aut eos
            tenetur quaerat quod! <a href="">Not really a link</a>. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Eligendi illum quidem
            culpa voluptatum voluptatem fuga sunt ipsum adipisci illo ut, quod
            consequatur maxime deserunt eveniet odit possimus iusto vitae
            tempore?
          </p>
          <LocalSecondaryBtn size="small">Read more</LocalSecondaryBtn>
          <h3 id="heading-three">Third Excerpt</h3>
          <p>
            <a href="">Lorem ipsum</a> dolor sit amet consectetur adipisicing
            elit. Sed at voluptates eveniet itaque vero dolorum provident quidem
            accusamus. <a href="">Nulla nobis</a> natus quos facilis. Nobis
            deserunt, minima porro aut quis qui.
          </p>
          <LocalSecondaryBtn size="small">Read more</LocalSecondaryBtn>
          <form>
            <h3>Join the newsletter!</h3>
            <InputTextWithIcon
              size="small"
              icon="at-sign"
              accessibilityText="Enter your email here"
              label="Email"
              htmlForAndID="tableOfContentsExample"
              placeholder="your-email@example.com"
            />
            <GhostButton size="small">Subscribe</GhostButton>
          </form>
        </Contents>
      </Wrapper>
    </section>
  );
}
// TODO: style @ lower screen widths

const Note = styled.p`
  color: var(--color-primaryLightest);
  font-weight: 500;
  margin: auto 20px 40px;
  max-width: 550px;
  font-size: ${18 / 16}rem;

  & span {
    font-size: ${16 / 16}rem;
  }
`;

const Wrapper = styled.div`
  background-color: var(--color-light);
  color: var(--color-mainBG);
  margin-left: 20px;
  margin-right: 20px;
  padding: 16px;

  display: flex;
  flex-direction: row-reverse;
`;

const TOCBox = styled.aside`
  margin-left: 16px;

  & nav {
    background: #eee;
    padding: 10px 12px;
  }
  & ul {
    list-style-type: none;
    padding-left: 16px;
  }
  & li {
    padding: 8px 0;
  }
  & a {
    color: black;
    text-decoration: none;
    border-bottom: 1px solid;
  }
`;

const NavHeading = styled.h3`
  font-size: 1rem;
  text-transform: uppercase;
  color: #555;
  letter-spacing: 2px;
  font-weight: 400;
`;

const Contents = styled.div`
  flex: 1;

  & h3 {
    margin-bottom: 16px;
  }
  & form {
    padding: 32px;
    border: 1px dotted;
  }
  & input {
    max-width: 200px;
  }
  & p:first-of-type {
    /* font-size: ${18 / 16}rem; */
    font-weight: 500;
    display: inline;
    background-color: var(--shadow-primaryLightest);
    /* background-color: hsl(333deg 40% 60% / 0.3); */
  }
`;

const LocalSecondaryBtn = styled(SecondaryButton)`
  margin-bottom: 64px;
  margin-top: 16px;
`;
