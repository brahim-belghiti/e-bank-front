import { cn } from "@/lib/utils";
import { CUSTOMER_DASH_LINKS } from "@/constants/data";
import { DashboardMenu } from "@/components/navigation/DashboardMenu";

const Sidebar = () => {
  return (
    <aside className={cn(`relative hidden h-screen border-r pt-16 lg:block w-72`)}>
          <nav className="space-y-4 py-4 px-3">
            {CUSTOMER_DASH_LINKS.length > 0 && <DashboardMenu items={CUSTOMER_DASH_LINKS} />}
          </nav>
    </aside>
  );
};

export default Sidebar;
