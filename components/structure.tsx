'use client';

import { Inter, Chakra_Petch } from "next/font/google";
import localfont from "next/font/local";
import "../app/globals.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


const inter = Inter({ subsets: ["latin"] });
const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-chakra"
});

const kleemax = localfont({
  src: [{
    path: "../public/fonts/kleemaxdemo.ttf",
    weight: "400"
  }],
  variable: "--font-kleemax"
})

var textScale: () => void;

export default function Structure({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Text scaling function
    const setFontSizeForTextScaleElements = () => {
      const elements = document.querySelectorAll<HTMLElement>('[class*="text-scale"]');

      elements.forEach(element => {
        const parentElement = element.parentElement;
        if (!parentElement) return;

        const parentWidth = parentElement.clientWidth;
        const className = Array.from(element.classList).find(cls =>
          cls.startsWith('text-scale')
        );

        const scaleNumberMatch =
          className?.match(/text-scale-(\d+(\.\d+)?)-?(\d+(\.\d+)?)?/);

        if (scaleNumberMatch) {
          const scaleNumber = parseFloat(scaleNumberMatch[1]);
          const additionalScale = scaleNumberMatch[3]
            ? parseFloat(scaleNumberMatch[3])
            : 0;

          const fontSize = parentWidth * scaleNumber / 1000 + additionalScale;
          element.style.fontSize = `${fontSize}px`;
        }
      });
    };

    textScale = setFontSizeForTextScaleElements;

    // Initial calculation
    setFontSizeForTextScaleElements();

    // Event listeners
    window.addEventListener('resize', setFontSizeForTextScaleElements);

    const onLoadHandler = () => setFontSizeForTextScaleElements();
    window.addEventListener('load', onLoadHandler);

    // Recalculate after a short delay to ensure DOM is ready
    const timeout = setTimeout(() => {
      setFontSizeForTextScaleElements();
    }, 100);

    // Additional timeout for slower renders
    const timeout2 = setTimeout(() => {
      setFontSizeForTextScaleElements();
    }, 300);

    // MutationObserver to detect DOM changes
    const observer = new MutationObserver(() => {
      setFontSizeForTextScaleElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener('resize', setFontSizeForTextScaleElements);
      window.removeEventListener('load', onLoadHandler);
      clearTimeout(timeout);
      clearTimeout(timeout2);
      observer.disconnect();
    };

  }, [pathname]); // Re-run when pathname changes

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
