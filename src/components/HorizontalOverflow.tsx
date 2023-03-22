// Libs
import Image from "next/image";

// Local
import styles from "@/components/HorizontalOverflow.module.css";

// Media
import catOne from "../../public/cats/cat1.jpeg";
import catTwo from "../../public/cats/cat2.jpeg";
import catThree from "../../public/cats/cat3.jpeg";
import catFour from "../../public/cats/cat4.jpeg";

export function HorizontalOverflow(): JSX.Element {
  return (
    <section>
      <h2>horizontal overflow</h2>
      <div className={styles.wrapperAbove}>
        <div className={styles.wrapper}>
          <Image src={catOne} alt="Cat licking itself" />
          <Image alt="Curious cat with bright blue background" src={catTwo} />
          <Image
            alt="Majestic white cat with piercing blue eyes"
            src={catThree}
          />
          <Image alt="The grumpiest cat you've ever seen" src={catFour} />
        </div>
      </div>
    </section>
  );
}
