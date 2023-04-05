// Libs
import {
  Cog8ToothIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

// Local
import { VisuallyHidden } from "@/actualComponents/VisuallyHidden";
import styles from "@/components/VisuallyHiddenExample.module.css";

export function VisuallyHiddenExample(): JSX.Element {
  return (
    <section>
      <h2>visually hidden</h2>
      <div className={styles.wrapper}>
        <button className={styles.button}>
          {/* #dcdcdc is var(--color-light) */}
          <QuestionMarkCircleIcon height={32} color="#dcdcdc" />
          <VisuallyHidden screenReaderText="Get help" />
        </button>
        <button className={styles.button}>
          <Cog8ToothIcon height={32} color="#dcdcdc" />
          <VisuallyHidden screenReaderText="Access settings" />
        </button>
      </div>
    </section>
  );
}
