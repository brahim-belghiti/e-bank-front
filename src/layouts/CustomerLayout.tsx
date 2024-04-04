import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "@tanstack/react-router";

const Layout = () => {
  return (
    <main className="w-12/12 h-screen flex">
      <Header />
      <Sidebar />
      <section className="h-full w-full">
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
