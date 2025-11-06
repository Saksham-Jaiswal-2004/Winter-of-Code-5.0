"use client";
import Image from "next/image";
import Register from "@/components/onboarding";
import AboutUs from "@/components/about";
import Script from "next/script";
import FAQPage from "@/components/faq";
import Timeline from "@/components/timeline";
import Organisations from "@/components/organisations";
import Sponsors from "@/components/sponsors";
import Partners from "@/components/partners";
import Projects from "@/components/projects";
import Team from "@/components/team";
import Carousel from "@/components/carousel";
import Snowfall from "react-snowfall";
import { useEffect, useState } from "react";

export default function Home() {
  const [snowflakes, setSnowflakes] = useState<HTMLCanvasElement[] | null>(null);

  useEffect(() => {
    // This runs only in the browser
    const snowflakeImages = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return [];

      const size = 30;
      canvas.width = size;
      canvas.height = size;

      ctx.font = `${size}px Arial`;
      ctx.textAlign = "center";
      ctx.shadowColor = "#ffffff";
      ctx.fillStyle = "#ffffff";
      ctx.textBaseline = "middle";
      ctx.fillText("❄️", size / 2, size / 2);

      return [canvas];
    };

    setSnowflakes(snowflakeImages());
  }, []);

  return (
    <main>
      {snowflakes && (
        <Snowfall
          snowflakeCount={80}
          speed={[1, 1.5]}
          wind={[1, 1]}
          images={snowflakes}
          radius={[6, 10]}
          color="#ffffff"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 1000,
          }}
        />
      )}

      <Register />
      <AboutUs />
      <Timeline />
      <Organisations />
      <Sponsors />
    </main>
  );
}
