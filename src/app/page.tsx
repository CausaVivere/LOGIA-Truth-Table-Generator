"use client";
import Link from "next/link";
import { GeistProvider, CssBaseline, Button } from "@geist-ui/core";
import Main from "./pages/main";
import { useState } from "react";
import { Moon, Sun } from "@geist-ui/icons";

export default function HomePage() {
  const [theme, setTheme] = useState("dark");
  const switchTheme = () => {
    setTheme((last) => (last === "dark" ? "light" : "dark"));
  };

  return (
    <GeistProvider themeType={theme}>
      <div className="background-container">
        <div className="gradient-background"></div>
        <div className="dots-overlay"></div>
      </div>
      <div className="absolute right-4 top-4 z-40">
        <Button
          // type="secondary"
          // ghost
          iconRight={theme === "dark" ? <Moon /> : <Sun />}
          px={0.6}
          auto
          onClick={() => {
            switchTheme();
          }}
        />
      </div>
      <div className="page-content">
        <CssBaseline />
        <Main />
      </div>
    </GeistProvider>
  );
}
