import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/honda")({ component: HondaLayout });

function HondaLayout() {
  return <Outlet />;
}
