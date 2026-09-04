import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as COMPANY, s as useLanguage } from "./router-C7q2OnTC.mjs";
import { n as Section, t as PageHero } from "./page-hero-CHIgTYd-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-wsOYeb7E.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	const { t, lang } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: t.aboutKicker,
			title: t.aboutTitle
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[1.2fr_0.8fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-5 text-base leading-relaxed text-muted",
				children: t.aboutBody.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "h-fit rounded-xl border border-rule bg-paper p-6 text-ink",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium uppercase tracking-[0.18em] text-quiet",
						children: t.aboutTeaser
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-quiet",
						children: t.aboutTeaserBody
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-medium",
						children: lang === "he" ? COMPANY.addressHe : COMPANY.addressEn
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-quiet",
						children: lang === "he" ? COMPANY.hoursHe : COMPANY.hoursEn
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: COMPANY.phoneTel,
						className: "mt-4 inline-block text-brand",
						children: COMPANY.phoneDisplay
					})
				]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper text-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:grid-cols-3 sm:px-8 sm:py-20",
				children: t.values.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-rule bg-mist p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-medium",
						children: v.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-quiet",
						children: v.d
					})]
				}, v.t))
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
