import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/toyota")({ component: ToyotaLayout });

function ToyotaLayout() {
  return <Outlet />;
}
