"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";

export function Nav({ children }: { children: ReactNode }) {
  return (
    <nav className="md:px-4 max-lg:px-6 bg-gray-50 text-primary-foreground py-4">
      <div className="max-w-6xl m-auto flex justify-between items-center">{children}</div>
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
