"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

// Define the structure of each navigation link
interface NavLinkProps {
  title: string;
  path: string;
}

const navLinks: NavLinkProps[] = [
  { title: "Home", path: "/" },
  { title: "About", path: "/About" },
  { title: "Projects", path: "#project" },
  { title: "Contact", path: "/Contact" },
];

// Define the Navbar component
const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" legacyBehavior>
          <a className="text-2xl md:text-5xl text-white font-bold flex items-center">
            <Image src="/logo.jpg" alt="logo" width={50} height={50} className="mr-2" />
          </a>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-3 border rounded border-slate-300 text-slate-200 hover:text-white"
          >
            {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>

        {/* Desktop & Mobile Menu */}
        <div
          className={`${
            navbarOpen ? "block" : "hidden"
          } md:block md:w-auto w-full`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
