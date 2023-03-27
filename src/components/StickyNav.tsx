import styles from "@/components/StickyNav.module.css";

export function StickyNav(): JSX.Element {
  return (
    <section>
      <h2>sticky nav</h2>
      <div className={styles.wrapperAbove}>
        <div className={styles.wrapper}>
          <div className={styles.navWrap}>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <p className={styles.content}>Content here.</p>
          <p className={styles.endContent}>
            {"<"}end{"/>"}
          </p>
        </div>
      </div>
    </section>
  );
}
