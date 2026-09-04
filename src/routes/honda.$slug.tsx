import { createFileRoute, notFound } from "@tanstack/react-router";
import { CarDetail } from "@/components/car-detail";
import { carBySlug } from "@/lib/cars";

export const Route = createFileRoute("/honda/$slug")({
  loader: ({ params }) => {
    const car = carBySlug(params.slug);
    if (!car || car.brand !== "honda") throw notFound();
    return { car };
  },
  component: HondaModel,
});

function HondaModel() {
  const { car } = Route.useLoaderData();
  return <CarDetail car={car} />;
}
