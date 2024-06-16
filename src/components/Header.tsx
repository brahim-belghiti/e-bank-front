import { cn } from "@/lib/utils";
import { MobileSidebar } from "@/components/navigation/MobileSidebar";
import { Link } from "@tanstack/react-router";
import { UserMenu } from "@/components/navigation/UserMenu";
import logo1 from "../assets/logo1.png";
import { TCustomerLinks } from "@/types/customer.types";

type TSidebarProps = {
  linkItems: TCustomerLinks[];
};

export default function Header({ linkItems }: TSidebarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <nav className="h-14 flex items-center justify-between px-4">
        <div className="hidden lg:block">
          <Link to="/">
            <img src={logo1} alt="company logo" className="w-8 h-auto left-8 top-4" />
          </Link>
        </div>
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar linkItems={linkItems} />
        </div>

        <div className="flex items-center gap-2">
          <UserMenu />
        </div>
      </nav>
    </div>
  );
}
