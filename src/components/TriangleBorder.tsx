import styles from "@/components/TriangleBorder.module.css";
import mww from "@/css-utils/MaxWidthWrapper.module.css";

interface Props {
  children?: {
    content: string /** TODO: accept a string or a reactnode. pass in the card version one or the maxwidthwrapper component */;
  };
}

export function TriangleBorder(props: Props): JSX.Element {
  return (
    <section>
      <h2 style={{ marginTop: "20px", marginBottom: "50px" }}>
        triangle border
      </h2>
      <div className={mww.maxWidthWrapper}>
        <div className={styles.box}>
          <div className={`${styles.triangle} ${styles.one}`}></div>
          <div className={`${styles.triangle} ${styles.two}`}></div>
          <div className={`${styles.triangle} ${styles.three}`}></div>
          <div className={`${styles.triangle} ${styles.four}`}></div>

          {props.children?.content && (
            <div className={styles.wrapContent}>
              <p>{props.children.content}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
