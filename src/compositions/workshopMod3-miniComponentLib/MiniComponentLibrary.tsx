import ProgressBar from "./ProgressBar";

export default function MiniComponentLibrary(): JSX.Element {
  return (
    <section style={{ backgroundColor: "#dcdcdc", padding: "" }}>
      <h1
        style={{
          marginLeft: "16px",
          marginBottom: "24px",
          color: "#222",
        }}
      >
        {"->"} workshop three: mini component library
      </h1>
      <ProgressBar value={50} size="lg" labelText="Loading - Large" />
      <ProgressBar value={90.5} size="md" labelText="Loading - Medium" />
      <ProgressBar value={100} size="sm" labelText="Loading - Small" />
    </section>
  );
}
