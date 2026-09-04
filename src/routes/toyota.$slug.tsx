import { createFileRoute, notFound } from "@tanstack/react-router";
import { CarDetail } from "@/components/car-detail";
import { carBySlug } from "@/lib/cars";

export const Route = createFileRoute("/toyota/$slug")({
  loader: ({ params }) => {
    const car = carBySlug(params.slug);
    if (!car || car.brand !== "toyota") throw notFound();
    return { car };
  },
  component: ToyotaModel,
});

function ToyotaModel() {
  const { car } = Route.useLoaderData();
  return <CarDetail car={car} />;
}
