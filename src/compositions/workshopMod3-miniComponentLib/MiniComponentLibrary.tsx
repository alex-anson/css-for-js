// Libs
import styled from "styled-components";

// Local
import { COLORS } from "./constants";
import ProgressBar from "./ProgressBar";
import InputSelect from "./Select";
import InputTextWithIcon from "./InputTextWithIcon";
import Icon from "./Icon";

export default function MiniComponentLibrary(): JSX.Element {
  return (
    <Section>
      <HeadingH1>{"->"} workshop three: mini component library</HeadingH1>

      <HeadingH2>progress bar</HeadingH2>
      <ProgressBar value={100} size="lg" labelText="Loading - Large" />
      <br style={{ marginTop: "20px" }} />
      <ProgressBar value={95} size="md" labelText="Loading - Medium" />
      <br style={{ marginTop: "20px" }} />
      <ProgressBar value={60} size="sm" labelText="Loading - Small" />

      <HeadingH2>select</HeadingH2>
      <InputSelect
        label="it's me, a Mario..."
        accessibilityText="mini-component-lib-select"
        options={[
          "Toad 🍄",
          "Luigi 🟢",
          "Peach 👑",
          "Bowser 🐲",
          "DK 🦍",
          "random looonnng option 🙄",
        ]}
      />

      <HeadingH2>text input with icon</HeadingH2>
      <InputTextWithIcon
        size="small"
        label="Find the thing"
        placeholder="Search..."
        icon="search"
        accessibilityText="search for the thing"
      />
      <br style={{ marginTop: "20px" }} />
      <InputTextWithIcon
        size="large"
        label="Find the thing"
        placeholder="Search..."
        icon="search"
        accessibilityText="search for a different thing"
      />
      <br style={{ marginTop: "20px" }} />
      <InputTextWithIcon
        size="large"
        label="Enter your email"
        placeholder="your@email..."
        icon="at-sign"
        accessibilityText="email address input"
      />
    </Section>
  );
}

const Section = styled.section`
  background-color: #dcdcdc;
`;

const HeadingH1 = styled.h1`
  margin-left: 16px;
  margin-bottom: 24px;
  color: #222;
`;

const HeadingH2 = styled.h2`
  color: ${COLORS.primary};
  margin-top: 2rem;
`;
