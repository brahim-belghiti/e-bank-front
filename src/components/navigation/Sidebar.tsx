import { cn } from "@/lib/utils";
import { DashboardMenu } from "@/components/navigation/DashboardMenu";
import { TDAshLinks } from "@/types/dashboard.types";

type TSidebarProps = {
  linkItems: TDAshLinks[];
};
const Sidebar = ({ linkItems }: TSidebarProps) => {
  return (
    <aside className={cn(`relative hidden h-screen border-r pt-16 lg:block w-72`)}>
      <nav className="space-y-4 py-4 px-3">
        {linkItems.length > 0 && <DashboardMenu items={linkItems} />}
      </nav>
    </aside>
  );
};

export default Sidebar;
