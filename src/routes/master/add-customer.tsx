import { createFileRoute } from "@tanstack/react-router";
import { AddCustomerView } from "../../pages/AddCustomer"; //

export const Route = createFileRoute("/master/add-customer")({
  component: AddCustomerView, //
  head: () => ({
    meta: [{ title: "Add Customer · Resources WMS" }],
  }),
});
