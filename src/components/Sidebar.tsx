import { cn } from "@/lib/utils";
import { CUSTOMER_DASH_LINKS } from "@/constants/data";
import { DashboardNav } from "@/components/DashboardNav";

const Sidebar = () => {
  return (
    <nav className={cn(`relative hidden h-screen border-r pt-16 lg:block w-72`)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {CUSTOMER_DASH_LINKS.length > 0 && <DashboardNav items={CUSTOMER_DASH_LINKS} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
