import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as useLanguage } from "./router-C7q2OnTC.mjs";
import { n as Section, t as PageHero } from "./page-hero-CHIgTYd-.mjs";
import { t as LeadForm } from "./lead-form-B7VI7qjT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leasing-Cok8W-OF.js
var import_jsx_runtime = require_jsx_runtime();
function LeasingPage() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: t.leaseKicker,
			title: t.leaseTitle,
			sub: t.leaseSub
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: t.leaseItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-rule bg-paper p-6 text-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-medium",
					children: item.t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-quiet",
					children: item.d
				})]
			}, item.t))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper text-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-xl px-5 py-16 sm:px-8 sm:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-rule bg-mist p-6 sm:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium",
						children: t.formTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {})
					})]
				})
			})
		})
	] });
}
//#endregion
export { LeasingPage as component };
