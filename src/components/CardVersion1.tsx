import styles from "@/components/CardVersion1.module.css";
import mww from "@/css-utils/max-width-wrapper.module.css";

export function CardVersion1(): JSX.Element {
  return (
    <section>
      <div className={mww.maxWidthWrapper}>
        <div className={styles.card}>
          <h4>Another card</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            reiciendis maiores repudiandae assumenda molestias nihil accusamus
            cum delectus, magni libero nam corrupti rem omnis ad id? Quasi nam
            voluptates consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            ipsa qui quia aperiam incidunt, modi repellendus explicabo impedit,
            ex exercitationem itaque tempore consequatur dolores nam,
            consectetur reprehenderit quod vitae. Vitae.
          </p>
        </div>
      </div>
    </section>
  );
}
