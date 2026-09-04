import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BODY_LABEL, carImage, type Car } from "@/lib/cars";
import { useLanguage } from "@/lib/language";

export function CarCard({ car }: { car: Car }) {
  const { lang, t, dir } = useLanguage();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <Link
      to={car.brand === "toyota" ? "/toyota/$slug" : "/honda/$slug"}
      params={{ slug: car.slug }}
      className="group flex flex-col overflow-hidden rounded-xl border border-rule bg-paper text-ink transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-[0_12px_32px_-18px_rgba(0,0,0,0.35)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-studio">
        <img
          src={carImage(car)}
          alt={car.name[lang]}
          referrerPolicy="no-referrer"
          className="size-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-x-0 top-0 flex justify-between p-3">
          <Badge className="border-transparent bg-ink/80 text-paper">{car.year}</Badge>
          {car.plugin ? (
            <Badge className="border-transparent bg-ink/80 text-paper">PHEV</Badge>
          ) : car.hybrid ? (
            <Badge className="border-transparent bg-ink/80 text-paper">Hybrid</Badge>
          ) : null}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-quiet">
          {BODY_LABEL[car.body][lang]} · {car.seats} {lang === "he" ? "מקומות" : "seats"}
        </p>
        <h3 className="text-xl font-medium leading-snug">{car.name[lang]}</h3>
        <p className="text-sm text-quiet">{car.tagline[lang]}</p>
        <span className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-medium text-ink">
          {t.details}
          <Arrow className="size-4" />
        </span>
      </div>
    </Link>
  );
}
