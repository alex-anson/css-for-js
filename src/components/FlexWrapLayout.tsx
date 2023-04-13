import styled from "styled-components";

export default function FlexWrapLayout(): JSX.Element {
  return (
    <section>
      <h2>flex-wrap layout</h2>
      <Wrapper>
        <ArticleOne></ArticleOne>
        <ArticleTwo></ArticleTwo>
        <ArticleThree></ArticleThree>
      </Wrapper>
    </section>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${16 / 16}rem;
  justify-content: center;

  margin-left: 16px;
  margin-right: 16px;
`;

const BaseArticle = styled.article`
  border-radius: ${12 / 16}rem;
  height: 200px;
  border: 3px solid;

  /* flex: 0 1 200px; */
  flex-basis: 200px;
  /* ^ flex-basis declaration is equivalent to commented out flex declaration, because the default is 'flex: 0 1 auto' */

  max-width: 200px;
`;

const ArticleOne = styled(BaseArticle)`
  border-color: hsl(335deg 80% 60%);
  background-color: hsl(335deg 90% 90% / 0.5);
`;

const ArticleTwo = styled(BaseArticle)`
  border-color: hsl(240deg 80% 60%);
  background-color: hsl(240deg 90% 90% / 0.5);
`;

const ArticleThree = styled(BaseArticle)`
  border-color: hsl(45deg 80% 60%);
  background-color: hsl(45deg 90% 90% / 0.5);
`;
