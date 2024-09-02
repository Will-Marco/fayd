"use client";

import logo from "@/assets/logo.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import LocalSwitcher from "../Local-switcher";
import { Button } from "../ui/button";
import { Nav, NavLink } from "./Navbar-detail";
import NavbarDrawer from "./Navbar-drawer";

export default function Navbar() {
  const t = useTranslations("navbar");

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/#tours", label: t("tour") },
    { href: "/#about", label: t("about") },
    { href: "/#contacts", label: t("contact") },
    { href: "tel:+998998278899", label: "+998 (99) 827 88 99" },
  ];

  return (
    <Nav>
      <Link href={"/"}>
        <Image src={logo} alt="logo" width={150} height={30} />
      </Link>
      <div className="hidden lg:flex items-center gap-4">
        {navLinks.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
        <LocalSwitcher />
        <Button className="bg-blue-700 hover:bg-blue-800 transition-all">
          Leave a request
        </Button>
      </div>
      <NavbarDrawer />
    </Nav>
  );
}
