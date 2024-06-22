import { DashboardMenu } from "@/components/navigation/DashboardMenu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TDAshLinks } from "@/types/dashboard.types";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import logo1 from "../../assets/logo1.png";
import { Link } from "@tanstack/react-router";

type TSidebarProps = {
  linkItems: TDAshLinks[];
};

export function MobileSidebar({ linkItems }: TSidebarProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="!px-0">
          <Link to="/">
            <img src={logo1} alt="company logo" className="w-8 h-auto ml-4 top-4" />
          </Link>
          <nav className="w-full space-y-4 py-12 px-3">
            {linkItems.length > 0 && <DashboardMenu items={linkItems} setOpen={setOpen} />}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
