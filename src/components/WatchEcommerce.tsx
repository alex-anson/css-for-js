// Libs
import Image from "next/image";

// Local
import styles from "@/components/WatchEcommerce.module.css";
import mww from "@/css-utils/maxWidthWrapper.module.css";

// Media
import watchImg from "../../public/watch-rachit-tank.jpg";

export function WatchEcommerce(): JSX.Element {
  return (
    <section>
      <h2>watch ecommerce</h2>
      <div className={mww.maxWidthWrapper}>
        <article className={styles.article}>
          <div className={styles.productPhoto}>
            <Image src={watchImg} alt="Product photo of a minimal watch" />
          </div>
          <div className={styles.flag}>New and Improved!</div>
          <h3>
            Novus Watch <span className={styles.subtitle}>Series IV</span>
          </h3>
          <p>
            The pinnacle of fashion and tech. This wearable piece is an homage
            to gilded palaces and minimal regalia, combining nouveau-deco and
            brutalism influences in a compact, Swiss-made watch.
          </p>
        </article>
      </div>
    </section>
  );
}
