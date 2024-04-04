import Header from "@/components/Header";
import Sidebar from "@/components/navigation/Sidebar";
import { Outlet } from "@tanstack/react-router";

const Layout = () => {
  return (
    <main className="w-full h-full flex">
      <Header />
      <Sidebar />
      <section className="h-full w-full">
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
