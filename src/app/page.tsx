"use client";
import Link from "next/link";
import { GeistProvider, CssBaseline } from "@geist-ui/core";
import Main from "./pages/main";
import { useState } from "react";

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
      <div className="page-content">
        <CssBaseline />
        <Main />
      </div>
    </GeistProvider>
  );
}
