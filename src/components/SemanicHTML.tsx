import styles from "@/components/SemanticHTML.module.css";
import mww from "@/css-utils/MaxWidthWrapper.module.css";

export function SemanticHTML(): JSX.Element {
  return (
    <section>
      <h2>semantic html</h2>
      <div className={mww.maxWidthWrapper}>
        <details className={styles.faq}>
          <summary>What does “CSS” stand for?</summary>
          <div className={styles.answer}>
            <p>cool styling strategy</p> <span>... 🤦‍♀️</span>
          </div>
        </details>
      </div>
    </section>
  );
}
