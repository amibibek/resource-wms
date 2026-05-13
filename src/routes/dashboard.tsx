import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "../pages/Dashboard";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
  head: () => ({
    meta: [
      { title: "Dashboard · Resources WMS" },
      { name: "description", content: "Pallet warehouse management system dashboard" },
    ],
  }),
});
