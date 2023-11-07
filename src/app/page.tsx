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
      <div id="main" className="page-content">
        <CssBaseline />
        <Main switchTheme={switchTheme} />
      </div>
    </GeistProvider>
  );
}
