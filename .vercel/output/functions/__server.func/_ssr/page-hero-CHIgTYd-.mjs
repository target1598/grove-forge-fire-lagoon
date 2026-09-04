import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-CHIgTYd-.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ kicker, title, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-border bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-medium uppercase tracking-[0.22em] text-brand",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl",
					children: title
				}),
				sub ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-base text-muted sm:text-lg",
					children: sub
				}) : null
			]
		})
	});
}
function Section({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20 ${className}`,
		children
	});
}
//#endregion
export { Section as n, PageHero as t };
