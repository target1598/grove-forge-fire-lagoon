import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as carsByBrand, s as useLanguage } from "./router-C7q2OnTC.mjs";
import { n as Section, t as PageHero } from "./page-hero-CHIgTYd-.mjs";
import { t as CarCard } from "./car-card-BzTrsCOZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/honda-D69yY3rz.js
var import_jsx_runtime = require_jsx_runtime();
function HondaPage() {
	const { t } = useLanguage();
	const cars = carsByBrand("honda");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: t.nav.honda,
		title: t.hondaTitle,
		sub: t.hondaSub
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
		children: cars.map((car) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarCard, { car }, car.slug))
	}) })] });
}
//#endregion
export { HondaPage as component };
