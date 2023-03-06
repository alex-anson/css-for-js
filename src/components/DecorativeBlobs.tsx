// Libs
import Image from "next/image";

// Local
import styles from "@/components/DecorativeBlobs.module.css";
// SVGs
import svg1 from "../../public/decorative-blobs/blue-blob.svg";
import svg2 from "../../public/decorative-blobs/green-blob.svg";
import svg3 from "../../public/decorative-blobs/purple-blob.svg";
import svg4 from "../../public/decorative-blobs/yellow-blob.svg";

export function DecorativeBlobs(): JSX.Element {
  return (
    <section>
      <h2>decorative blobs</h2>
      <div className={styles.wrapper}>
        <Image
          src={svg1}
          alt="decorative blob with a linear gradient from purple to neon green"
          className={`${styles.blob} ${styles.blue}`}
        />
        <Image
          src={svg2}
          alt="decorative blob with a linear gradient from light green to yellow"
          className={`${styles.blob} ${styles.green}`}
        />
        <Image
          src={svg3}
          alt="decorative blob with a linear gradient from purple to pink"
          className={`${styles.blob} ${styles.purple}`}
        />
        <Image
          src={svg4}
          alt="decorative blob with a linear gradient from bright yellow to light orange"
          className={`${styles.blob} ${styles.yellow}`}
        />
        <div className={styles.card}>
          <p>
            🧡 Hello <span>&#123; CSS &#125;</span> World 🧡
          </p>
        </div>
      </div>
    </section>
  );
}
