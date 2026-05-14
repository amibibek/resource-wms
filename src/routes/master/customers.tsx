import { createFileRoute } from "@tanstack/react-router";
import { CustomerMasterView } from "../../pages/CustomerMaster";

export const Route = createFileRoute("/master/customers")({
  component: CustomerMasterView,
  head: () => ({
    meta: [{ title: "Customer Master · Resources WMS" }],
  }),
});
