import styles from "@/components/BubbleBorder.module.css";
import mww from "@/css-utils/maxWidthWrapper.module.css";

interface Props {
  children?: {
    content: React.ReactNode;
  };
}

export function BubbleBorder(props: Props): JSX.Element {
  return (
    <section>
      <h2 style={{ marginTop: "20px", marginBottom: "50px" }}>bubble border</h2>
      <div className={mww.maxWidthWrapper}>
        <div className={styles.box}>
          <div className={`${styles.circle} ${styles.big}`}></div>
          <div className={`${styles.circle} ${styles.medium}`}></div>
          <div className={`${styles.circle} ${styles.small}`}></div>

          {props.children?.content && (
            <p className={styles.content}>{props.children.content}</p>
          )}
        </div>
      </div>
    </section>
  );
}
