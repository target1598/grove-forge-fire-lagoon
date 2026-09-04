import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ChevronLeft, d as ArrowLeft, s as ChevronRight, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as whatsappHref, c as BODY_LABEL, f as colorsForTrim, g as spinSrc, h as frameCount, l as BRAND_LABEL, o as Button, p as defaultFrame, s as useLanguage } from "./router-C7q2OnTC.mjs";
import { t as LeadForm } from "./lead-form-B7VI7qjT.mjs";
import { t as Badge } from "./badge-DyYcZ1fH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/car-detail-Cjc4GrDJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CarSpin({ slug, paintId, alt }) {
	const { lang, dir } = useLanguage();
	const total = frameCount(slug, paintId);
	const [frame, setFrame] = (0, import_react.useState)(() => defaultFrame(slug, paintId));
	const dragging = (0, import_react.useRef)(false);
	const lastX = (0, import_react.useRef)(0);
	const acc = (0, import_react.useRef)(0);
	const frames = (0, import_react.useMemo)(() => Array.from({ length: total }, (_, i) => i + 1), [
		total,
		slug,
		paintId
	]);
	(0, import_react.useEffect)(() => {
		setFrame(defaultFrame(slug, paintId));
	}, [slug]);
	(0, import_react.useEffect)(() => {
		const n = frameCount(slug, paintId);
		setFrame((f) => (f - 1 + n) % n + 1);
	}, [
		slug,
		paintId,
		total
	]);
	function step(dirStep) {
		const n = frameCount(slug, paintId);
		setFrame((f) => (f - 1 + dirStep + n * 16) % n + 1);
	}
	function onPointerDown(e) {
		dragging.current = true;
		lastX.current = e.clientX;
		acc.current = 0;
		e.currentTarget.setPointerCapture(e.pointerId);
	}
	function onPointerMove(e) {
		if (!dragging.current) return;
		const dx = e.clientX - lastX.current;
		lastX.current = e.clientX;
		acc.current += dx;
		const n = frameCount(slug, paintId);
		const tick = n >= 30 ? 6 : n >= 18 ? 8 : 14;
		const jump = Math.abs(dx) > 24 ? 2 : 1;
		while (acc.current <= -tick) {
			acc.current += tick;
			step(jump);
		}
		while (acc.current >= tick) {
			acc.current -= tick;
			step(-jump);
		}
	}
	function onPointerUp(e) {
		dragging.current = false;
		try {
			e.currentTarget.releasePointerCapture(e.pointerId);
		} catch {}
	}
	function onWheel(e) {
		if (Math.abs(e.deltaX) + Math.abs(e.deltaY) < 2) return;
		e.preventDefault();
		const jump = Math.abs(e.deltaX) + Math.abs(e.deltaY) > 40 ? 2 : 1;
		step((e.deltaX + e.deltaY > 0 ? 1 : -1) * jump);
	}
	const hint = lang === "he" ? "גררו כדי לסובב" : "Drag to rotate";
	const Prev = dir === "rtl" ? ChevronRight : ChevronLeft;
	const Next = dir === "rtl" ? ChevronLeft : ChevronRight;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative text-studio-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-[16/9] w-full cursor-grab overflow-hidden touch-none select-none active:cursor-grabbing sm:aspect-[2/1]",
				onPointerDown,
				onPointerMove,
				onPointerUp,
				onPointerCancel: onPointerUp,
				onWheel,
				onDragStart: (e) => e.preventDefault(),
				role: "img",
				"aria-label": `${alt}. ${hint}`,
				children: frames.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: spinSrc(slug, paintId, n, 1e3),
					alt: "",
					draggable: false,
					referrerPolicy: "no-referrer",
					className: "pointer-events-none absolute inset-0 size-full object-contain object-center",
					style: { opacity: n === frame ? 1 : 0 }
				}, `${slug}-${paintId}-${n}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": lang === "he" ? "סובב שמאלה" : "Rotate left",
				onClick: () => step(-2),
				className: "absolute start-1 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-studio-fg/15 bg-studio text-studio-fg shadow-sm hover:bg-studio-fg/5 sm:start-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prev, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": lang === "he" ? "סובב ימינה" : "Rotate right",
				onClick: () => step(2),
				className: "absolute end-1 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-studio-fg/15 bg-studio text-studio-fg shadow-sm hover:bg-studio-fg/5 sm:end-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Next, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "pointer-events-none absolute inset-x-0 bottom-3 text-center text-[11px] font-medium uppercase tracking-[0.22em] text-studio-fg/55",
				children: hint
			})
		]
	});
}
function CarDetail({ car }) {
	const { lang, t, dir } = useLanguage();
	const Back = dir === "rtl" ? ArrowRight : ArrowLeft;
	const [trimId, setTrimId] = (0, import_react.useState)(car.defaultTrim);
	const [colorId, setColorId] = (0, import_react.useState)(car.defaultColor);
	const trim = car.trims.find((item) => item.id === trimId) ?? car.trims[0];
	const availableColors = (0, import_react.useMemo)(() => colorsForTrim(car, trim.id), [car, trim.id]);
	const color = availableColors.find((item) => item.id === colorId) ?? availableColors[0];
	function onTrim(next) {
		setTrimId(next);
		const nextColors = colorsForTrim(car, next);
		if (!nextColors.some((item) => item.id === colorId)) setColorId(nextColors[0]?.id ?? car.defaultColor);
	}
	const specs = trim?.specs?.length ? trim.specs : car.specs;
	const highlights = trim?.highlights?.length ? trim.highlights : car.highlights;
	const hybrid = trim?.hybrid ?? car.hybrid;
	const plugin = trim?.plugin ?? car.plugin;
	const seats = trim?.seats ?? car.seats;
	const wa = whatsappHref(lang === "he" ? `שלום, אשמח לקבל הצעת מחיר ל${car.name.he} ${trim.name.he} בצבע ${color.name.he}` : `Hi, I would like a quote for the ${car.year} ${car.name.en} ${trim.name.en} in ${color.name.en}`);
	const showTrims = car.trims.length > 1;
	const showColors = availableColors.length > 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative bg-studio text-studio-fg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl px-5 pt-4 sm:px-8 sm:pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: car.brand === "toyota" ? "/toyota" : "/honda",
					className: "inline-flex w-fit items-center gap-2 text-sm text-studio-fg/70 hover:text-studio-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Back, { className: "size-4" }), t.car.back]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarSpin, {
					slug: car.slug,
					paintId: color.id,
					alt: `${car.name[lang]} — ${color.name[lang]}`
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b border-rule bg-paper text-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-8 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: car.year }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: BRAND_LABEL[car.brand][lang] }),
							plugin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: t.car.plugin }) : hybrid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Hybrid" }) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: t.car.fromUs }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: [
								BODY_LABEL[car.body][lang],
								" · ",
								seats
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl",
						children: car.name[lang]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-lg text-quiet",
						children: [
							trim.name[lang],
							" · ",
							color.name[lang]
						]
					}),
					showTrims ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-medium uppercase tracking-[0.18em] text-quiet",
								children: t.car.trim
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex gap-2 overflow-x-auto pb-1",
								children: car.trims.map((item) => {
									const active = item.id === trim.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => onTrim(item.id),
										className: `shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${active ? "border-brand bg-brand text-accent-foreground" : "border-rule bg-mist text-ink hover:border-ink/40"}`,
										children: item.name[lang]
									}, item.id);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-2xl text-sm text-quiet",
								children: trim.blurb[lang]
							})
						]
					}) : null,
					showColors ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-medium uppercase tracking-[0.18em] text-quiet",
							children: t.car.color
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap items-start gap-3",
							children: availableColors.map((item) => {
								const active = item.id === color.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setColorId(item.id),
									className: "group flex w-16 flex-col items-center gap-2",
									"aria-label": item.name[lang],
									"aria-pressed": active,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `size-10 rounded-full border-2 shadow-[inset_0_-8px_12px_rgba(0,0,0,0.25)] ${active ? "border-ink" : "border-ink/15 group-hover:border-ink/40"}`,
										style: { background: item.hex }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `text-center text-[10px] leading-tight ${active ? "text-ink" : "text-quiet"}`,
										children: item.name[lang]
									})]
								}, item.id);
							})
						})]
					}) : null
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg text-muted",
					children: car.tagline[lang]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 leading-relaxed text-fg/90",
					children: car.description[lang]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-8 grid gap-3 sm:grid-cols-2",
					children: specs.map((spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-rule bg-paper px-5 py-4 text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[11px] font-medium uppercase tracking-[0.16em] text-quiet",
							children: spec.label[lang]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-sm font-medium",
							children: spec.value[lang]
						})]
					}, spec.label.en))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-10 font-display text-2xl font-medium",
					children: t.car.highlights
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted",
					children: highlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-brand" }), item[lang]]
					}, item.en))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "h-fit rounded-xl border border-rule bg-paper p-6 text-ink",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium",
						children: t.car.quoteTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 mb-6 text-sm text-quiet",
						children: t.car.quoteBody
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: wa,
								target: "_blank",
								rel: "noreferrer",
								children: t.whatsapp
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "paper",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:0778053655",
								children: t.call
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, { defaultModel: car.name[lang] })
				]
			})]
		})
	] });
}
//#endregion
export { CarDetail as t };
