"use client";

import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import Github from "./logos/GitHub";
import pkg from '@/package.json';
const VERSION = process.env.NEXT_PUBLIC_VERSION;

export const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useLayoutEffect(() => {
    const el = document.documentElement;

    if (el.classList.contains("dark")) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const toggleDark = () => {
    const el = document.documentElement;
    el.classList.toggle("dark");
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={
        "px-4 py-2 flex items-center h-14 z-50 bg-card border-b border-border"
      }
    >
      <div className="flex flex-row gap-2 items-center">
        <Image src="/logo.png" alt="logo" width={35} height={35}/>
        <h1 className="text-sm md:text-md">WePump AI</h1>
        <h1 className="text-xs bg-black text-white py-1 px-2 rounded-md">v{VERSION}</h1>
      </div>
      <div className={"ml-auto flex items-center"}>
        <Button
          onClick={() => {
            window.open(
              pkg.twitter,
              "_blank",
              "noopener noreferrer"
            );
          }}
          variant={"ghost"}
          className={"ml-auto flex items-center gap-1.5"}
        >
          <span>
            <Image src="/x.png" alt="x" width={25} height={25}/>
          </span>
        </Button>
        <Button
          onClick={() => {
            window.open(
              pkg.discord,
              "_blank",
              "noopener noreferrer"
            );
          }}
          variant={"ghost"}
          className={"ml-auto flex items-center gap-1.5"}
        >
          <span>
            <Image src="/discord.png" alt="disc" width={25} height={25}/>
          </span>
        </Button>
        <Button
          onClick={() => {
            window.open(
              pkg.github,
              "_blank",
              "noopener noreferrer"
            );
          }}
          variant={"ghost"}
          className={"ml-auto flex items-center gap-1.5"}
        >
          <span>
            <Github className={"size-5"} />
          </span>
        </Button>
      </div>
    </div>
  );
};
