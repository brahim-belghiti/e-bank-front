import Header from "@/components/Header";
import Sidebar from "@/components/navigation/Sidebar";
import { Outlet } from "@tanstack/react-router";
import { CUSTOMER_DASH_LINKS } from "@/constants/data";

const Layout = () => {
  return (
    <main className="w-full h-full flex">
      <Header linkItems={CUSTOMER_DASH_LINKS} />
      <Sidebar linkItems={CUSTOMER_DASH_LINKS} />
      <section className="h-full w-full">
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
