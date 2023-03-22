import styles from "@/components/CardVersion3.module.css";
import mww from "@/css-utils/MaxWidthWrapper.module.css";

export function CardVersion3(): JSX.Element {
  return (
    <section>
      <h2>overflow clip</h2>
      <div className={styles.wrapperAbove}>
        <div className={`${mww.maxWidthWrapper} ${styles.wrap}`}>
          <div className={styles.card}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              reiciendis maiores repudiandae assumenda molestias nihil accusamus
              cum delectus, magni libero nam corrupti rem omnis ad id?
            </p>
            <p>Quasi nam voluptates consectetur.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              ipsa qui quia aperiam incidunt.
            </p>
            <div className={`${styles.flourish} ${styles.one}`}></div>
            <div className={`${styles.flourish} ${styles.two}`}></div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}
