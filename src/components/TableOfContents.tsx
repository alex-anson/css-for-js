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
        &#10033; if you are on a device that&rsquo;s less than 640 pixels wide,
        you won&rsquo;t be able to appreciate the effect, as the layout changes
        on small screens.
        <br />
        <span>
          (to see the effect: click anywhere on this paragraph, then press tab
          on your keyboard.)
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
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            quisquam quos ut a id facere quo aliquid, culpa autem omnis, ad
            explicabo unde temporibus reiciendis at eaque. Sit, placeat
            voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <a href="">Autem</a> possimus, mollitia labore fuga, vero ducimus
            beatae aliquam dignissimos pariatur error, eius sequi tempora ipsam
            ad. Fugit totam provident illum fuga...
          </p>
          <LocalSecondaryBtn size="small">Read more</LocalSecondaryBtn>
          <h3 id="heading-two">Second Excerpt</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            vel ad harum debitis possimus fuga ipsam, eligendi non odit aut eos
            tenetur quaerat quod! Lorem ipsum dolor, sit amet{" "}
            <a href="">consectetur adipisicing elit</a>. Eligendi illum quidem
            culpa voluptatum voluptatem fuga sunt ipsum adipisci illo ut, quod
            consequatur maxime deserunt eveniet odit possimus iusto vitae
            tempore?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur optio ipsam in, veniam quas nam pariatur repellat odio
            porro maiores odit dolorem ipsa velit? Distinctio dolorum obcaecati
            earum voluptatibus quibusdam...
          </p>
          <LocalSecondaryBtn size="small">Read more</LocalSecondaryBtn>
          <h3 id="heading-three">Third Excerpt</h3>
          <p>
            <a href="">Lorem ipsum</a> dolor sit amet consectetur adipisicing
            elit. Sed at voluptates eveniet itaque vero dolorum provident quidem
            accusamus. <a href="">Nulla nobis</a> natus quos facilis. Nobis
            deserunt, minima porro aut quis qui.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sint
            esse dignissimos expedita perspiciatis, ea sequi quaerat
            voluptatibus nihil, sed veritatis asperiores nostrum necessitatibus
            alias eaque? Alias iusto saepe officia. Lorem ipsum dolor,{" "}
            <a href="">sit amet</a> consectetur adipisicing elit. Doloribus quis
            eaque quasi nemo reprehenderit illo adipisci omnis sequi. Rem
            deleniti quo temporibus reiciendis amet, laborum modi eos nemo
            voluptatum similique...
          </p>
          <LocalSecondaryBtn size="small">Read more</LocalSecondaryBtn>
          <form>
            <h3>Join the newsletter!</h3>
            <GroupInputAndButton>
              <Relative>
                <InputTextWithIcon
                  maxWidth={200}
                  size="small"
                  icon="at-sign"
                  accessibilityText="Enter your email here"
                  label="Email"
                  htmlForAndID="tableOfContentsExample"
                  placeholder="your-email@example.com"
                />
              </Relative>
              <LocalGhostButton
                size="small"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
              >
                Subscribe
              </LocalGhostButton>
            </GroupInputAndButton>
          </form>
        </Contents>
      </Wrapper>
    </section>
  );
}

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

  & a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid currentColor;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--shadow-primaryLightest);
    }
  }

  @media only screen and (max-width: 640px) {
    flex-direction: column;
  }
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

  @media only screen and (max-width: 640px) {
    margin-left: initial;
    width: fit-content;
    align-self: flex-end;
    margin-top: -36px;
  }
  @media only screen and (max-width: 400px) {
    margin-bottom: 10px;
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
    max-width: fit-content;
  }
  & p:first-of-type {
    font-weight: 500;
    display: inline;
    background-color: var(--shadow-primaryLightest);
  }
  /* because the first paragraph is inline, it won't register the margin. need to 
  do this little extra thing. */
  & p:nth-of-type(2) {
    margin-top: 12px;
  }
  & p:not(:last-child) {
    margin-bottom: 12px;
  }
`;

const LocalSecondaryBtn = styled(SecondaryButton)`
  margin-bottom: 64px;
  margin-top: 16px;
`;

const GroupInputAndButton = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    margin-top: 32px;
  }
`;

const Relative = styled.div`
  /* so the input's icon goes where it should */
  position: relative;
`;

const LocalGhostButton = styled(GhostButton)`
  /* optical alignment */
  margin-top: 2px;
`;
