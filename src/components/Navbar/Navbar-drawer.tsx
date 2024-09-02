import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import LocalSwitcher from "../Local-switcher";
import { Button } from "../ui/button";
import { NavLink } from "./Navbar-detail";

export default function NavbarDrawer() {
  const t = useTranslations("navbar");

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/#tours", label: t("tour") },
    { href: "/#about", label: t("about") },
    { href: "/#contacts", label: t("contact") },
    { href: "tel:+998998278899", label: "+998 (99) 827 88 99" },
  ];
  return (
    <div className="lg:hidden">
      <Drawer>
        <DrawerTrigger className="p-2 active:bg-gray-200 transition-all rounded-full">
          <Menu color="#333" />
        </DrawerTrigger>
        <DrawerContent className="px-4">
          <div className="pt-4 flex flex-col">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <DrawerFooter>
            <LocalSwitcher />
            <Button className="bg-blue-700 hover:bg-blue-800 transition-all">
              Leave a request
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
