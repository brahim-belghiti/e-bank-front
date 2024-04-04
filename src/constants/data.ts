import { TCustomerLinks } from "@/types/customer.type";
import { TAgentLinks } from "@/types/agent.types";

const CUSTOMER_DASH_LINKS: TCustomerLinks[] = [
  {
    title: "tableu de bord",
    href: "/dashboard",
    icon: "dashboard",
  },
  {
    title: "Nouveau virement",
    href: "/transactions/add",
    icon: "add",
  },
];

const AGENT_DASH_LINKS: TAgentLinks[] = [
  {
    title: "tableu de bord",
    href: "/agent/dashboard",
    icon: "dashboard",
  },
  {
    title: "Ajouter nouveau client",
    href: "agent/customers/add",
    icon: "add",
  },
  {
    title: "Ajouter un nouveau compte bancaire",
    href: "agent/accounts/add",
    icon: "add",
  },
];

export { CUSTOMER_DASH_LINKS, AGENT_DASH_LINKS };
