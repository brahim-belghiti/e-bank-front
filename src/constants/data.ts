import { TCustomerLinks } from "@/types/customer.type";

const CUSTOMER_DASH_LINKS: TCustomerLinks[] = [
  {
    title: "tableu de bord",
    href: "/dashboard",
    icon: "dashboard"
  },
  {
    title: "Nouveau virement",
    href: "/transactions/add",
    icon:"add"
  },
];



export {CUSTOMER_DASH_LINKS};