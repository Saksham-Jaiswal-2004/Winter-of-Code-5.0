"use client";
import { useEffect, useState } from "react";

const JumbleText = ({ text, id }: { text: string; id: string }) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval: NodeJS.Timeout | null = null;
    let iteration = 0;

    const element = document.getElementById(id);
    if (!element) return;

    interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((letter: string, index: number) => {
            if (text[index] === " ") return " ";
            if (index < iteration) return text[index];
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        if (interval) clearInterval(interval);
        setDisplayText(text);
      }

      iteration += 1 / 3;
    }, 30);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [text, id]);

  return <div id={id}>{displayText}</div>;
};

export default JumbleText;
