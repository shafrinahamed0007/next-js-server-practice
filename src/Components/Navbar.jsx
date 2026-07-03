import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
         
          <Link href="/">Shakib</Link>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/hero">Hero</Link>
          </li>
          <li>
            <Link href="/tasks">Tasks</Link>
          </li>
        </ul>
        <div>
          <ThemeToggle />
        </div>
      </header>
    </nav>
  );
  {
    /* With right-aligned content */
  }
  <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
    <header className="flex h-16 items-center justify-between px-6">
      <div>Logo</div>
      <ul className="flex items-center gap-4">
        <li>
          <Button>Sign Up</Button>
        </li>
      </ul>
    </header>
  </nav>;
};

export default Navbar;
