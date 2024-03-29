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
      <CenterContents>
        <InputTextWithIcon
          size="small"
          label="Find the thing"
          placeholder="Search..."
          icon="search"
          htmlForAndID="searchbox_one"
          accessibilityText="Search for the things with this input"
        />
      </CenterContents>
      <br style={{ marginTop: "20px" }} />
      <CenterContents>
        <InputTextWithIcon
          size="large"
          label="Find the thing"
          placeholder="Search..."
          icon="search"
          htmlForAndID="searchbox_two"
          accessibilityText="Search all records relating to .. something cool"
        />
      </CenterContents>
      <br style={{ marginTop: "20px" }} />
      <CenterContents>
        <InputTextWithIcon
          size="large"
          label="Enter your email"
          placeholder="your@email..."
          icon="at-sign"
          htmlForAndID="emailinput"
          accessibilityText="Enter your email address here"
        />
      </CenterContents>
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

const CenterContents = styled.div`
  width: fit-content;
  max-width: 90%;
  margin: 0 auto;

  position: relative;
`;
