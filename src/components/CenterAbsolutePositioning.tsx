import styles from "@/components/CenterAbsolutePositioning.module.css";

export function CenterAbsolutePositioning(): JSX.Element {
  return (
    <section>
      <h2 style={{ marginBottom: "75px" }}>center absolute positioning</h2>
      <div className={styles.relative}>
        <div className={styles.centerAbsolutePositioning}></div>
      </div>
    </section>
  );
}
