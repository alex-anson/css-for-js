import styles from "@/atoms/HorizontalLine.module.css";

export function HorizontalLine(props: {
  styles?: Record<string, string | number>;
}) {
  return <hr className={styles.horizontal_line} style={{ ...props.styles }} />;
}
