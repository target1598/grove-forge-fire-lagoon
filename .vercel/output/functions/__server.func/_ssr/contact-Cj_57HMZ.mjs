import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as whatsappHref, i as COMPANY, o as Button, s as useLanguage } from "./router-C7q2OnTC.mjs";
import { n as Section, t as PageHero } from "./page-hero-CHIgTYd-.mjs";
import { t as LeadForm } from "./lead-form-B7VI7qjT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Cj_57HMZ.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const { t, lang } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: t.contactKicker,
		title: t.contactTitle,
		sub: t.contactSub
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-10 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-medium",
				children: t.showroom
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-4 space-y-1 text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: lang === "he" ? COMPANY.addressHe : COMPANY.addressEn }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: lang === "he" ? COMPANY.hoursHe : COMPANY.hoursEn }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: COMPANY.phoneTel,
						className: "text-fg hover:text-brand",
						children: COMPANY.phoneDisplay
					}) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: COMPANY.phoneTel,
						children: t.call
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "whatsapp",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: whatsappHref(t.whatsappPrefill),
						target: "_blank",
						rel: "noreferrer",
						children: t.whatsapp
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: COMPANY.maps,
				className: "mt-6 inline-block text-sm text-muted underline-offset-4 hover:text-fg hover:underline",
				children: "Google Maps"
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-rule bg-paper p-6 text-ink sm:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-medium",
				children: t.formTitle
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {})
			})]
		})]
	}) })] });
}
//#endregion
export { ContactPage as component };
