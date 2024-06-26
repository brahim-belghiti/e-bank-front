import { Link } from "@tanstack/react-router";
import { Icons } from "@/components/Icons";
import { cn } from "@/lib/utils";
import { TDAshLinks } from "@/types/dashboard.types";
import { Dispatch, SetStateAction } from "react";

interface DashboardMenuProps {
  items: TDAshLinks[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

export function DashboardMenu({ items, setOpen }: DashboardMenuProps) {
  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        const Icon = Icons[item.icon || "arrowRight"];
        return (
          item.href && (
            <Link
              key={index}
              to={item.href}
              onClick={() => {
                if (setOpen) setOpen(false);
              }}
            >
              {({ isActive }) => {
                return (
                  <span
                    className={cn(
                      "w-full flex items-center rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
                      isActive ? "bg-primary text-accent" : "",
                    )}
                  >
                    <Icon className="mr-2 min-h-4 min-w-2 max-w-4" />
                    <span>{item.title}</span>
                  </span>
                );
              }}
            </Link>
          )
        );
      })}
    </nav>
  );
}
