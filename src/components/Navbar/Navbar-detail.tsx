"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";

export function Nav({ children }: { children: ReactNode }) {
  return (
    <nav className="w-full h-[5rem] md:px-4 fixed top-0 flex items-center bg-gray-50 shadow-xl text-primary-foreground z-20">
      <div className="container mx-auto px-4 flex justify-between items-center">{children}</div>
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "p-4 px-2 text-foreground border-b border-transparent hover:border-black hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground transition-all duration-500",
        pathname === props.href && "bg-background text-foreground"
      )}
    />
  );
}
