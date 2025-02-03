"use client";

import { usePathname } from "next/navigation";
import { routes } from "./navigation";
import Link from "next/link";

export default function MobileSidebar() {
  const pathName = usePathname();

  routes.forEach((route) => {
    route.isActive = pathName === route.href;
  });

  return (
    <ul className="flex flex-row items-center justify-evenly w-full">
      {routes.map((route) => {
        return (
          <Link
            href={route.href}
            key={route.href}
            className="flex flex-col items-center"
          >
            {route.icon}
            <span className="text-xs">{route.label}</span>
          </Link>
        );
      })}
    </ul>
  );
}
