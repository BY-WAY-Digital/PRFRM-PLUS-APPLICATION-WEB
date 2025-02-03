"use client";

import { cn } from "@/lib/utils";
import {
  Dumbbell,
  House,
  MessageCircle,
  UsersRound,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const routes = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <House size={18} />,
    isActive: true,
  },
  {
    label: "My workouts",
    href: "/workout",
    icon: <Dumbbell size={18} />,
    isActive: false,
  },
  {
    label: "My meals",
    href: "/meals",
    icon: <UtensilsCrossed size={18} />,
    isActive: false,
  },
  {
    label: "Community",
    href: "/community",
    icon: <UsersRound size={18} />,
    isActive: false,
  },
  {
    label: "Messages",
    href: "/messages",
    icon: <MessageCircle size={18} />,
    isActive: false,
  },
];

export default function Navigation() {
  const pathName = usePathname();

  routes.forEach((route) => {
    route.isActive = pathName === route.href;
  });
  return (
    <ul className="flex flex-col">
      {routes.map((route) => {
        return (
          <Link key={route.href} href={route.href}>
            <div
              className={cn(
                "flex items-center flow-row gap-2.5 p-2.5 rounded-md font-medium hover:text-primary hover:bg-[#d2cafe]  transition text-neutral-500",
                route.isActive &&
                  "shadow-sm bg-primary-purple hover:opacity-100 text-white"
              )}
            >
              {route.icon}
              <span className="text-xl">{route.label}</span>
            </div>
          </Link>
        );
      })}
    </ul>
  );
}
