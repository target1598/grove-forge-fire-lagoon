import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as ArrowLeft, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { c as BODY_LABEL, s as useLanguage, u as carImage } from "./router-C7q2OnTC.mjs";
import { t as Badge } from "./badge-DyYcZ1fH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/car-card-BzTrsCOZ.js
var import_jsx_runtime = require_jsx_runtime();
function CarCard({ car }) {
	const { lang, t, dir } = useLanguage();
	const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: car.brand === "toyota" ? "/toyota/$slug" : "/honda/$slug",
		params: { slug: car.slug },
		className: "group flex flex-col overflow-hidden rounded-xl bg-paper text-ink shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(225,6,0,0.55)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[16/10] overflow-hidden bg-studio",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: carImage(car),
				alt: car.name[lang],
				referrerPolicy: "no-referrer",
				className: "size-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 top-0 flex justify-between p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					className: "border-transparent bg-ink/80 text-paper",
					children: car.year
				}), car.plugin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					className: "border-transparent bg-ink/80 text-paper",
					children: "PHEV"
				}) : car.hybrid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					className: "border-transparent bg-ink/80 text-paper",
					children: "Hybrid"
				}) : null]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-2 p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[11px] font-medium uppercase tracking-[0.18em] text-quiet",
					children: [
						BODY_LABEL[car.body][lang],
						" · ",
						car.seats,
						" ",
						lang === "he" ? "מקומות" : "seats"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-medium leading-snug",
					children: car.name[lang]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-quiet",
					children: car.tagline[lang]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-auto inline-flex items-center gap-1 pt-3 text-sm font-medium text-ink",
					children: [t.details, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { className: "size-4" })]
				})
			]
		})]
	});
}
//#endregion
export { CarCard as t };
