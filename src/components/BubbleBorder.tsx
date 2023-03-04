import styles from "@/components/BubbleBorder.module.css";
import mww from "@/css-utils/maxWidthWrapper.module.css";

export function BubbleBorder(): JSX.Element {
  return (
    <section>
      <h2 style={{ marginTop: "20px", marginBottom: "50px" }}>bubble border</h2>
      <div className={mww.maxWidthWrapper}>
        <div className={styles.box}>
          <div className={`${styles.circle} ${styles.big}`}></div>
          <div className={`${styles.circle} ${styles.medium}`}></div>
          <div className={`${styles.circle} ${styles.small}`}></div>
        </div>
      </div>
    </section>
  );
}
