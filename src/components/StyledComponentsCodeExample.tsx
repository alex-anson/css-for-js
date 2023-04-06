import styles from "@/components/StyledComponentsCodeExample.module.css";

const content = `
function LoginForm({ handleSubmit }) {
  return (
    <Wrapper onSubmit={handleSubmit}>
      <Label>
        Email:
        <TextInput
          type="email"
          placeholder="me@you.com"
        />
      </Label>
      <Label>
        Password:
        <TextInput type="password" />
      </Label>
      <SubmitButton type="submit">
        Log In
      </SubmitButton>
    </Wrapper>
  );
}

const Wrapper = styled.form\`
  width: max-content;
  margin: 16px auto;
  border: 1px dotted silver;
  padding: 26px 32px 32px;
  border-radius: 2px;
\`;

const Label = styled.label\`
  display: block;
  margin-bottom: 16px;
\`;

const TextInput = styled.input\`
  display: block;
  width: 175px;
  border: 1px solid black;
  border-bottom-width: 2px;
  padding: 6px 8px;
  margin-top: 4px;
  border-radius: 2px 2px 3px 3px;
  
  &:focus {
    outline: 3px auto blue;
    outline-offset: 2px;
    border-color: transparent;
  }
\`;

const SubmitButton = styled.button\`
  display: block;
  margin-top: 40px;
  width: 100%;
  background: black;
  color: white;
  padding: 8px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 3px;
  
  &:focus {
    outline: 3px auto blue;
    background: blue;
    outline-offset: 2px;
  }
\`;

render(
  <LoginForm
    handleSubmit={(ev) => {
      ev.preventDefault();
      alert("Submitted!");
    }}
  />
);
`;

export function StyledComponentsCodeExample(): JSX.Element {
  return (
    <section>
      <h2>styled-components code example</h2>
      <div className={styles.widthWrap}>
        <pre className={styles.codeBlock}>
          <code>{content}</code>
        </pre>
        <kbd className={styles.lang}>JSX</kbd>
      </div>
    </section>
  );
}
