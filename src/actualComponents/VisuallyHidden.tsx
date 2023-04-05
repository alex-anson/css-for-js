// Libs
import { useState, useEffect } from "react";

interface Props {
  screenReaderText: string;
}

export function VisuallyHidden(props: Props): JSX.Element {
  const [forceShow, setForceShow] = useState(false);
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === "Alt") {
          setForceShow(true);
        }
      };
      const handleKeyUp = (ev: KeyboardEvent) => {
        if (ev.key === "Alt") {
          setForceShow(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return <span style={{ color: "inherit" }}>{props.screenReaderText}</span>;
  }

  return (
    <span
      style={{
        display: "inline-block",
        position: "absolute",
        overflow: "hidden",
        clip: "rect(0 0 0 0)",
        height: 1,
        width: 1,
        margin: -1,
        padding: 0,
        border: 0,
      }}
    >
      {props.screenReaderText}
    </span>
  );
}
