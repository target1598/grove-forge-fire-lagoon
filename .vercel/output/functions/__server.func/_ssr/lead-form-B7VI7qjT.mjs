import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as cn, a as whatsappHref, o as Button, s as useLanguage } from "./router-C7q2OnTC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lead-form-B7VI7qjT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
	ref,
	className: cn("flex h-11 w-full rounded-md border border-rule bg-mist px-3 text-sm text-ink placeholder:text-quiet", "transition-[box-shadow,border-color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className),
	...props
}));
Input.displayName = "Input";
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-sm font-medium text-ink", className),
		...props
	});
}
var Textarea = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
	ref,
	className: cn("flex min-h-28 w-full rounded-md border border-rule bg-mist px-3 py-2.5 text-sm text-ink placeholder:text-quiet", "transition-[box-shadow,border-color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className),
	...props
}));
Textarea.displayName = "Textarea";
function LeadForm({ defaultModel = "" }) {
	const { t, lang } = useLanguage();
	const [interest, setInterest] = (0, import_react.useState)("buy");
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const name = String(data.get("name") || "");
		const phone = String(data.get("phone") || "");
		const model = String(data.get("model") || defaultModel);
		const message = String(data.get("message") || "");
		const line = lang === "he" ? `שלום, אני ${name}, טלפון ${phone}. מעניין אותי ${model}. ${message}` : `Hi, I'm ${name}, phone ${phone}. Interested in ${model}. ${message}`;
		toast.success(t.form.sent);
		window.open(whatsappHref(line), "_blank", "noreferrer");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "name",
					children: t.form.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "name",
					name: "name",
					required: true,
					autoComplete: "name"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "phone",
					children: t.form.phone
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "phone",
					name: "phone",
					type: "tel",
					required: true,
					autoComplete: "tel"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "email",
					children: t.form.email
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "email",
					name: "email",
					type: "email",
					autoComplete: "email"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "model",
					children: t.form.model
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "model",
					name: "model",
					defaultValue: defaultModel
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
				className: "mb-2 text-sm font-medium text-ink",
				children: t.form.interest
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					{
						id: "buy",
						label: t.form.buy
					},
					{
						id: "finance",
						label: t.form.finance
					},
					{
						id: "lease",
						label: t.form.lease
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: `cursor-pointer rounded-full border px-3 py-1.5 text-sm ${interest === item.id ? "border-brand bg-brand text-accent-foreground" : "border-rule bg-mist text-ink"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "radio",
						name: "interest",
						value: item.id,
						className: "sr-only",
						checked: interest === item.id,
						onChange: () => setInterest(item.id)
					}), item.label]
				}, item.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "message",
					children: t.form.message
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "message",
					name: "message"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-start gap-3 text-sm text-quiet",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					required: true,
					className: "mt-1 size-4 accent-[var(--color-brand)]"
				}), t.form.consent]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				children: t.form.send
			})
		]
	});
}
//#endregion
export { LeadForm as t };
