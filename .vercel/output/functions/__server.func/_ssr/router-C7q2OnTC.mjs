import { i as __toESM } from "../_runtime.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { B as notFound, _ as createFileRoute, b as useRouter, d as HeadContent, f as useRouterState, g as lazyRouteComponent, h as Outlet, m as createRouter, u as Scripts, v as createRootRoute, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Phone, o as Menu, r as TriangleAlert, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/cars-DCwc40gA.js
var TOYOTA = {
	camry: {
		year: "2026",
		series: "camry",
		grade: "nightshade",
		code: "2558",
		frames: 36,
		defaultPaint: "supersonic-red",
		byPaint: {
			"supersonic-red": {
				grade: "nightshade",
				code: "2558"
			},
			"ice-cap": {
				grade: "nightshade",
				code: "2558"
			},
			"celestial-silver": {
				grade: "xle",
				code: "2555"
			},
			"heavy-metal": {
				grade: "se",
				code: "2553"
			},
			"ocean-gem": {
				grade: "xle",
				code: "2555"
			}
		}
	},
	"grand-highlander": {
		year: "2026",
		series: "grandhighlander",
		grade: "hybridmaxplatinum",
		code: "6732",
		frames: 36,
		defaultPaint: "underground",
		byPaint: {
			underground: {
				grade: "hybridmaxplatinum",
				code: "6732"
			},
			"ice-cap": {
				grade: "le",
				code: "6700"
			},
			"celestial-silver": {
				grade: "platinum",
				code: "6712"
			},
			"wind-chill": {
				grade: "xle",
				code: "6708"
			},
			blueprint: {
				series: "grandhighlanderhybrid",
				grade: "hybridxle",
				code: "6722"
			},
			"midnight-black": {
				series: "grandhighlanderhybrid",
				grade: "hybridlimited",
				code: "6724"
			}
		}
	},
	sienna: {
		year: "2026",
		series: "sienna",
		grade: "woodlandedition",
		code: "5409",
		frames: 36,
		defaultPaint: "cypress",
		byPaint: {
			cypress: {
				grade: "woodlandedition",
				code: "5409"
			},
			"ice-cap": {
				grade: "le",
				code: "5402"
			},
			"wind-chill": {
				grade: "le",
				code: "5402"
			},
			blueprint: {
				grade: "xle",
				code: "5406"
			},
			"celestial-silver": {
				grade: "platinum",
				code: "5419"
			}
		}
	},
	"4runner": {
		year: "2026",
		series: "4runner",
		grade: "trdpro",
		code: "8634",
		frames: 36,
		defaultPaint: "ice-cap",
		byPaint: {
			"ice-cap": {
				grade: "sr5",
				code: "8664"
			},
			"supersonic-red": {
				grade: "trdsport",
				code: "8671"
			},
			"celestial-silver": {
				grade: "trdsportpremium",
				code: "8673"
			},
			"heavy-metal": {
				grade: "sr5",
				code: "8642"
			},
			"solar-octane": {
				grade: "trdpro",
				code: "8634"
			},
			"midnight-black": {
				grade: "limited",
				code: "8668"
			}
		}
	},
	"rav4-prime": {
		year: "2026",
		series: "rav4pluginhybrid",
		grade: "grsport",
		code: "4538",
		frames: 18,
		defaultPaint: "gr-sport",
		byPaint: {
			"gr-sport": {
				grade: "grsport",
				code: "4538"
			},
			"midnight-black": {
				grade: "se",
				code: "4544"
			},
			"ice-cap": {
				grade: "xse",
				code: "4550"
			},
			woodland: {
				grade: "woodland",
				code: "4537"
			}
		}
	},
	"land-cruiser": {
		year: "2027",
		series: "landcruiser",
		grade: "landcruiser",
		code: "6167",
		frames: 18,
		defaultPaint: "meteor",
		byPaint: {
			meteor: {
				grade: "landcruiser",
				code: "6167"
			},
			"heritage-blue": {
				grade: "landcruiser1958",
				code: "6165"
			},
			"sand-dune": {
				grade: "landcruiser1958",
				code: "6165"
			}
		}
	},
	sequoia: {
		year: "2026",
		series: "sequoia",
		grade: "limited",
		code: "7948",
		frames: 36,
		defaultPaint: "lunar-rock",
		byPaint: {
			"lunar-rock": {
				grade: "limited",
				code: "7948"
			},
			"midnight-black": {
				grade: "sr5",
				code: "7946"
			},
			blueprint: {
				grade: "platinum",
				code: "7951"
			},
			"celestial-silver": {
				grade: "1794edition",
				code: "7957"
			},
			"solar-octane": {
				grade: "trdpro",
				code: "7953"
			},
			"supersonic-red": {
				grade: "capstone",
				code: "7955"
			}
		}
	}
};
var HONDA = {
	odyssey: {
		family: "odyssey",
		year: "2025",
		defaultPaint: "white"
	},
	civic: {
		family: "civic",
		year: "2025",
		defaultPaint: "red"
	},
	"cr-v": {
		family: "cr-v",
		year: "2025",
		defaultPaint: "white"
	},
	accord: {
		family: "accord",
		year: "2025",
		defaultPaint: "black"
	},
	pilot: {
		family: "pilot",
		year: "2025",
		defaultPaint: "white"
	}
};
var TOYOTA_PAINT = {
	"supersonic-red": "3u5",
	"ice-cap": "040",
	"celestial-silver": "089",
	underground: "1l5",
	"heavy-metal": "1l7",
	"midnight-black": "218",
	blueprint: "8x8",
	meteor: "8x0",
	cypress: "1h5",
	"solar-octane": "796",
	"lunar-rock": "6x3",
	"wind-chill": "3t3",
	"ocean-gem": "8z3",
	"gr-sport": "2tb",
	woodland: "1m6",
	"heritage-blue": "229",
	"sand-dune": "4v8"
};
var HONDA_PAINT = {
	white: "pspc0004",
	black: "pspc0001",
	red: "pspc0034",
	silver: "pspc0012",
	blue: "pspc0062",
	gray: "pspc0016"
};
function toyotaCombo(slug, paintId) {
	const base = TOYOTA[slug];
	if (!base) return null;
	const over = base.byPaint?.[paintId];
	return {
		...base,
		series: over?.series ?? base.series,
		grade: over?.grade ?? base.grade,
		code: over?.code ?? base.code
	};
}
function toyotaUrl(slug, paintId, frame, width = 1e3) {
	const combo = toyotaCombo(slug, paintId);
	if (!combo) return "";
	const color = TOYOTA_PAINT[paintId] ?? TOYOTA_PAINT[combo.defaultPaint] ?? "040";
	const folder = combo.frames >= 30 ? `/${combo.frames}` : combo.frames === 18 ? "/18" : "";
	return `https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/${combo.year}/${combo.series}/${combo.grade}/${combo.code}/${color}${folder}/${frame}.png?fmt=png-alpha&wid=${width}&qlt=90`;
}
function hondaUrl(slug, paintId, frame, width = 1e3) {
	const spec = HONDA[slug];
	if (!spec) return "";
	const paint = HONDA_PAINT[paintId] ?? HONDA_PAINT[spec.defaultPaint];
	const angle = String((frame - 1) % 36 + 1).padStart(2, "0");
	return `https://cdn.imagin.studio/getImage?customer=img&make=honda&modelFamily=${encodeURIComponent(spec.family)}&modelYear=${spec.year}&angle=${angle}&width=${width}&zoomType=fullscreen&countryCode=US&paintId=${paint}`;
}
function frameCount(slug, _paintId) {
	if (TOYOTA[slug]) return TOYOTA[slug].frames;
	if (HONDA[slug]) return 36;
	return 1;
}
function defaultFrame(slug, paintId) {
	const n = frameCount(slug, paintId);
	if (n >= 30) return 5;
	if (n === 18) return 3;
	return 1;
}
function spinSrc(slug, paintId, frame, width = 1e3) {
	if (TOYOTA[slug]) return toyotaUrl(slug, paintId, frame, width);
	return hondaUrl(slug, paintId, frame, width);
}
function catalogSrc(slug, paintId) {
	return spinSrc(slug, paintId, defaultFrame(slug, paintId), 900);
}
var BODY_LABEL = {
	sedan: {
		he: "סדאן",
		en: "Sedan"
	},
	suv: {
		he: "רכב פנאי",
		en: "SUV"
	},
	minivan: {
		he: "מיניוואן",
		en: "Minivan"
	},
	pickup: {
		he: "טנדר",
		en: "Pickup"
	}
};
var BRAND_LABEL = {
	toyota: {
		he: "טויוטה",
		en: "Toyota"
	},
	honda: {
		he: "הונדה",
		en: "Honda"
	}
};
var P = {
	red: {
		id: "supersonic-red",
		name: {
			he: "סופרסוניק רד",
			en: "Supersonic Red"
		},
		hex: "#b5121b"
	},
	ice: {
		id: "ice-cap",
		name: {
			he: "אייס קאפ",
			en: "Ice Cap"
		},
		hex: "#f2f2f0"
	},
	silver: {
		id: "celestial-silver",
		name: {
			he: "סילבר סלסטיאל",
			en: "Celestial Silver"
		},
		hex: "#c5c7c8"
	},
	under: {
		id: "underground",
		name: {
			he: "אנדרגראונד",
			en: "Underground"
		},
		hex: "#4a4e51"
	},
	metal: {
		id: "heavy-metal",
		name: {
			he: "הבי מטאל",
			en: "Heavy Metal"
		},
		hex: "#6d6f71"
	},
	black: {
		id: "midnight-black",
		name: {
			he: "שחור מידנייט",
			en: "Midnight Black"
		},
		hex: "#1a1a1a"
	},
	blue: {
		id: "blueprint",
		name: {
			he: "בלופרינט",
			en: "Blueprint"
		},
		hex: "#2c4a6e"
	},
	meteor: {
		id: "meteor",
		name: {
			he: "מטאור שאוור",
			en: "Meteor Shower"
		},
		hex: "#5b6a75"
	},
	cypress: {
		id: "cypress",
		name: {
			he: "סייפרס",
			en: "Cypress"
		},
		hex: "#4a5a3c"
	},
	octane: {
		id: "solar-octane",
		name: {
			he: "סולר אוקטן",
			en: "Solar Octane"
		},
		hex: "#c45a12"
	},
	lunar: {
		id: "lunar-rock",
		name: {
			he: "לונר רוק",
			en: "Lunar Rock"
		},
		hex: "#8a8b83"
	},
	wind: {
		id: "wind-chill",
		name: {
			he: "ווינד צ׳יל",
			en: "Wind Chill Pearl"
		},
		hex: "#d8d6cf"
	},
	ocean: {
		id: "ocean-gem",
		name: {
			he: "אושן ג׳ם",
			en: "Ocean Gem"
		},
		hex: "#1f4f6a"
	},
	gr: {
		id: "gr-sport",
		name: {
			he: "GR ספורט",
			en: "Emotional Red II"
		},
		hex: "#9b1b2e"
	},
	wood: {
		id: "woodland",
		name: {
			he: "וודלנד",
			en: "Woodland"
		},
		hex: "#5c5a3e"
	},
	heritage: {
		id: "heritage-blue",
		name: {
			he: "הריטג׳ בלו",
			en: "Heritage Blue"
		},
		hex: "#2a3d55"
	},
	sand: {
		id: "sand-dune",
		name: {
			he: "סנד דיון",
			en: "Sand Dune"
		},
		hex: "#c4b089"
	},
	hWhite: {
		id: "white",
		name: {
			he: "לבן פנינה",
			en: "Platinum White"
		},
		hex: "#f4f4f1"
	},
	hBlack: {
		id: "black",
		name: {
			he: "שחור קריסטל",
			en: "Crystal Black"
		},
		hex: "#111111"
	},
	hRed: {
		id: "red",
		name: {
			he: "אדום ראלי",
			en: "Rallye Red"
		},
		hex: "#c1121f"
	},
	hSilver: {
		id: "silver",
		name: {
			he: "כסף",
			en: "Lunar Silver"
		},
		hex: "#c0c4c8"
	},
	hBlue: {
		id: "blue",
		name: {
			he: "כחול",
			en: "Aegean Blue"
		},
		hex: "#2a4a6e"
	},
	hGray: {
		id: "gray",
		name: {
			he: "אפור מטאלי",
			en: "Modern Steel"
		},
		hex: "#6a6e72"
	}
};
var CARS = [
	{
		slug: "camry",
		brand: "toyota",
		year: 2026,
		name: {
			he: "טויוטה קאמרי הייבריד",
			en: "Toyota Camry Hybrid"
		},
		tagline: {
			he: "סדאן היברידית שקטה, חדה וחסכונית",
			en: "A quiet, sharp, efficient hybrid sedan"
		},
		description: {
			he: "קאמרי 2026 מגיעה כהיברידית בלבד בארה״ב. חמישה מקומות, חבילת בטיחות Toyota Safety Sense, ורמות גימור מ־LE עד XSE ו־Nightshade.",
			en: "The 2026 Camry is hybrid-only in the US. Five seats, Toyota Safety Sense, and trims from LE through XSE and Nightshade."
		},
		body: "sedan",
		seats: 5,
		hybrid: true,
		featured: true,
		defaultTrim: "xse",
		defaultColor: "supersonic-red",
		colors: [
			P.red,
			P.ice,
			P.silver,
			P.metal,
			P.ocean
		],
		trims: [
			{
				id: "le",
				name: {
					he: "LE",
					en: "LE"
				},
				blurb: {
					he: "בסיס היברידי עם מסך 8״ ו־TSS.",
					en: "Hybrid base with 8\" screen and TSS."
				}
			},
			{
				id: "se",
				name: {
					he: "SE",
					en: "SE"
				},
				blurb: {
					he: "מתלים ספורטיביים וגלגלי 18״.",
					en: "Sport-tuned suspension and 18\" wheels."
				}
			},
			{
				id: "nightshade",
				name: {
					he: "Nightshade",
					en: "Nightshade"
				},
				blurb: {
					he: "חבילת שחור חיצונית על בסיס SE.",
					en: "Blacked-out exterior package on SE."
				}
			},
			{
				id: "xle",
				name: {
					he: "XLE",
					en: "XLE"
				},
				blurb: {
					he: "נוחות, עור וציוד נוסף.",
					en: "Comfort, leather and extra equipment."
				}
			},
			{
				id: "xse",
				name: {
					he: "XSE",
					en: "XSE"
				},
				blurb: {
					he: "הקצה הספורטיבי: גלגלי 19״, מתלים מכוונים, נוכחות.",
					en: "Sport peak: 19\" wheels, tuned suspension, presence."
				}
			}
		],
		specs: [
			{
				label: {
					he: "הנעה",
					en: "Drivetrain"
				},
				value: {
					he: "היברידית · קדמית / AWD לפי גימור",
					en: "Hybrid · FWD / AWD by trim"
				}
			},
			{
				label: {
					he: "מושבים",
					en: "Seats"
				},
				value: {
					he: "5",
					en: "5"
				}
			},
			{
				label: {
					he: "בטיחות",
					en: "Safety"
				},
				value: {
					he: "Toyota Safety Sense 3.0",
					en: "Toyota Safety Sense 3.0"
				}
			},
			{
				label: {
					he: "מסך",
					en: "Display"
				},
				value: {
					he: "8״ או 12.3״ לפי גימור",
					en: "8\" or 12.3\" by trim"
				}
			}
		],
		highlights: [
			{
				he: "היברידית בכל רמות הגימור",
				en: "Hybrid across every trim"
			},
			{
				he: "עיצוב חדש לדור הנוכחי",
				en: "Current-generation restyle"
			},
			{
				he: "חבילת Nightshade שחורה",
				en: "Nightshade black package"
			}
		]
	},
	{
		slug: "grand-highlander",
		brand: "toyota",
		year: 2026,
		name: {
			he: "טויוטה גרנד היילנדר",
			en: "Toyota Grand Highlander"
		},
		tagline: {
			he: "שלושה טורים, עד שמונה מקומות",
			en: "Three rows, up to eight seats"
		},
		description: {
			he: "גרנד היילנדר 2026 — רכב פנאי משפחתי עם מנוע בנזין או היבריד, כולל Hybrid MAX. מרווח במטען מאחורי הטור השלישי.",
			en: "2026 Grand Highlander — family SUV with gas or hybrid, including Hybrid MAX. Real cargo behind the third row."
		},
		body: "suv",
		seats: 8,
		hybrid: true,
		featured: true,
		defaultTrim: "limited",
		defaultColor: "underground",
		colors: [
			P.under,
			P.ice,
			P.silver,
			P.wind,
			P.blue,
			P.black
		],
		trims: [
			{
				id: "le",
				name: {
					he: "LE",
					en: "LE"
				},
				blurb: {
					he: "שמונה מקומות, מסך 12.3״.",
					en: "Eight seats, 12.3\" screen."
				}
			},
			{
				id: "xle",
				name: {
					he: "XLE",
					en: "XLE"
				},
				blurb: {
					he: "דלת מטען חשמלית ומושב נהג חשמלי.",
					en: "Power liftgate and power driver seat."
				}
			},
			{
				id: "limited",
				name: {
					he: "Limited",
					en: "Limited"
				},
				blurb: {
					he: "פנים עשיר ומולטימדיה מלאה.",
					en: "Richer cabin and full multimedia."
				}
			},
			{
				id: "platinum",
				name: {
					he: "Platinum",
					en: "Platinum"
				},
				blurb: {
					he: "גג פנורמי וציוד שיא.",
					en: "Panoramic roof and top equipment."
				}
			},
			{
				id: "hybrid-max",
				name: {
					he: "Hybrid MAX",
					en: "Hybrid MAX"
				},
				blurb: {
					he: "היברידית חזקה עם AWD.",
					en: "High-output hybrid with AWD."
				},
				hybrid: true
			}
		],
		specs: [
			{
				label: {
					he: "מושבים",
					en: "Seats"
				},
				value: {
					he: "עד 8",
					en: "Up to 8"
				}
			},
			{
				label: {
					he: "הנעה",
					en: "Drivetrain"
				},
				value: {
					he: "בנזין / היבריד / Hybrid MAX",
					en: "Gas / Hybrid / Hybrid MAX"
				}
			},
			{
				label: {
					he: "טורים",
					en: "Rows"
				},
				value: {
					he: "3",
					en: "3"
				}
			},
			{
				label: {
					he: "בטיחות",
					en: "Safety"
				},
				value: {
					he: "TSS + Pre-Collision",
					en: "TSS + Pre-Collision"
				}
			}
		],
		highlights: [
			{
				he: "שמונה מקומות אמיתיים",
				en: "A genuine eight-seater"
			},
			{
				he: "Hybrid MAX למי שרוצה כוח",
				en: "Hybrid MAX when you want power"
			},
			{
				he: "מרווח מאחורי הטור השלישי",
				en: "Cargo behind the third row"
			}
		]
	},
	{
		slug: "sienna",
		brand: "toyota",
		year: 2026,
		name: {
			he: "טויוטה סיינה הייבריד",
			en: "Toyota Sienna Hybrid"
		},
		tagline: {
			he: "מיניוואן היברידי עם דלתות חשמליות",
			en: "Hybrid minivan with power sliding doors"
		},
		description: {
			he: "סיינה 2026 היברידית בלבד. שבעה או שמונה מקומות, AWD זמין, וחבילת Woodland לעבירות קלה.",
			en: "The 2026 Sienna is hybrid-only. Seven or eight seats, available AWD, and a Woodland package for light trails."
		},
		body: "minivan",
		seats: 8,
		hybrid: true,
		featured: true,
		defaultTrim: "woodland",
		defaultColor: "cypress",
		colors: [
			P.cypress,
			P.ice,
			P.wind,
			P.blue,
			P.silver
		],
		trims: [
			{
				id: "le",
				name: {
					he: "LE",
					en: "LE"
				},
				blurb: {
					he: "שמונה מקומות ודלתות חשמליות.",
					en: "Eight seats and power sliding doors."
				}
			},
			{
				id: "xle",
				name: {
					he: "XLE",
					en: "XLE"
				},
				blurb: {
					he: "עור, גג שמש ונוחות משפחתית.",
					en: "Leather, sunroof, family comfort."
				}
			},
			{
				id: "xse",
				name: {
					he: "XSE",
					en: "XSE"
				},
				blurb: {
					he: "מראה ספורטיבי על בסיס המשפחתי.",
					en: "Sport looks on the family base."
				}
			},
			{
				id: "woodland",
				name: {
					he: "Woodland",
					en: "Woodland"
				},
				blurb: {
					he: "AWD, מגן וגחון וצמיגי שטח קל.",
					en: "AWD, skid plate and all-terrain tires."
				}
			},
			{
				id: "platinum",
				name: {
					he: "Platinum",
					en: "Platinum"
				},
				blurb: {
					he: "שיא הציוד, כולל מולטימדיה מאחור.",
					en: "Top spec, including rear entertainment."
				}
			}
		],
		specs: [
			{
				label: {
					he: "הנעה",
					en: "Drivetrain"
				},
				value: {
					he: "היברידית · FWD / AWD",
					en: "Hybrid · FWD / AWD"
				}
			},
			{
				label: {
					he: "מושבים",
					en: "Seats"
				},
				value: {
					he: "7 או 8",
					en: "7 or 8"
				}
			},
			{
				label: {
					he: "דלתות",
					en: "Doors"
				},
				value: {
					he: "הזזה חשמלית",
					en: "Power sliding"
				}
			},
			{
				label: {
					he: "גרירה",
					en: "Towing"
				},
				value: {
					he: "עד כ־1.6 טון לפי גימור",
					en: "Up to ~1.6 t by trim"
				}
			}
		],
		highlights: [
			{
				he: "היברידית בכל הגימורים",
				en: "Hybrid in every trim"
			},
			{
				he: "Woodland עם AWD",
				en: "Woodland with AWD"
			},
			{
				he: "דלתות הזזה חשמליות",
				en: "Power sliding doors"
			}
		]
	},
	{
		slug: "4runner",
		brand: "toyota",
		year: 2026,
		name: {
			he: "טויוטה 4Runner",
			en: "Toyota 4Runner"
		},
		tagline: {
			he: "שטח אמיתי, דור חדש",
			en: "Real off-road, new generation"
		},
		description: {
			he: "4Runner 2026 על פלטפורמה חדשה, עם i-FORCE ואופציית i-FORCE MAX. TRD Pro, Trailhunter ו־SR5.",
			en: "The 2026 4Runner is a new generation, with i-FORCE and available i-FORCE MAX. TRD Pro, Trailhunter and SR5."
		},
		body: "suv",
		seats: 5,
		featured: true,
		defaultTrim: "trd-pro",
		defaultColor: "ice-cap",
		colors: [
			P.ice,
			P.red,
			P.silver,
			P.metal,
			P.octane,
			P.black
		],
		trims: [
			{
				id: "sr5",
				name: {
					he: "SR5",
					en: "SR5"
				},
				blurb: {
					he: "בסיס שטח עם 4x4.",
					en: "Off-road base with 4x4."
				}
			},
			{
				id: "trd-sport",
				name: {
					he: "TRD Sport",
					en: "TRD Sport"
				},
				blurb: {
					he: "כביש חד עם חתימת TRD.",
					en: "On-road stance with TRD cues."
				}
			},
			{
				id: "trd-off-road",
				name: {
					he: "TRD Off-Road",
					en: "TRD Off-Road"
				},
				blurb: {
					he: "נעילות, מצלמות שטח ומתלים.",
					en: "Lockers, crawl cameras and suspension."
				}
			},
			{
				id: "limited",
				name: {
					he: "Limited",
					en: "Limited"
				},
				blurb: {
					he: "פנים יוקרתי על יכולת שטח.",
					en: "A luxury cabin on off-road hardware."
				}
			},
			{
				id: "trd-pro",
				name: {
					he: "TRD Pro",
					en: "TRD Pro"
				},
				blurb: {
					he: "גג, מתלים וצמיגים של TRD Pro.",
					en: "TRD Pro roof, suspension and tires."
				}
			}
		],
		specs: [
			{
				label: {
					he: "הנעה",
					en: "Drivetrain"
				},
				value: {
					he: "i-FORCE / i-FORCE MAX · 4x4",
					en: "i-FORCE / i-FORCE MAX · 4x4"
				}
			},
			{
				label: {
					he: "מושבים",
					en: "Seats"
				},
				value: {
					he: "5 (טור שלישי בחלק מהגימורים)",
					en: "5 (third row on some trims)"
				}
			},
			{
				label: {
					he: "שטח",
					en: "Off-road"
				},
				value: {
					he: "Multi-Terrain / Crawl Control לפי גימור",
					en: "Multi-Terrain / Crawl Control by trim"
				}
			},
			{
				label: {
					he: "דור",
					en: "Generation"
				},
				value: {
					he: "חדש ל־2026",
					en: "New for 2026"
				}
			}
		],
		highlights: [
			{
				he: "דור חדש לגמרי",
				en: "All-new generation"
			},
			{
				he: "TRD Pro ו־Trailhunter",
				en: "TRD Pro and Trailhunter"
			},
			{
				he: "i-FORCE MAX היברידי בחלק מהגרסאות",
				en: "i-FORCE MAX hybrid on select trims"
			}
		]
	},
	{
		slug: "rav4-prime",
		brand: "toyota",
		year: 2026,
		name: {
			he: "טויוטה RAV4 פלאג־אין הייבריד",
			en: "Toyota RAV4 Plug-in Hybrid"
		},
		tagline: {
			he: "PHEV — חשמל ליום־יום, היבריד לדרך",
			en: "PHEV — electric for the day, hybrid for the trip"
		},
		description: {
			he: "RAV4 Plug-in Hybrid 2026 (Prime). טווח חשמלי יומיומי, AWD, וגימורי SE, XSE, Woodland ו־GR Sport.",
			en: "2026 RAV4 Plug-in Hybrid (Prime). Everyday EV range, AWD, and SE, XSE, Woodland and GR Sport trims."
		},
		body: "suv",
		seats: 5,
		hybrid: true,
		plugin: true,
		featured: true,
		defaultTrim: "gr-sport",
		defaultColor: "gr-sport",
		colors: [
			P.gr,
			P.black,
			P.ice,
			P.wood
		],
		trims: [
			{
				id: "se",
				name: {
					he: "SE",
					en: "SE"
				},
				blurb: {
					he: "PHEV עם AWD וחבילת בטיחות מלאה.",
					en: "PHEV with AWD and full safety suite."
				}
			},
			{
				id: "xse",
				name: {
					he: "XSE",
					en: "XSE"
				},
				blurb: {
					he: "גג וציוד נוסף על בסיס SE.",
					en: "Roof and extra kit on the SE base."
				}
			},
			{
				id: "woodland",
				name: {
					he: "Woodland",
					en: "Woodland"
				},
				blurb: {
					he: "מראה שטח וצמיגי כל־שטח.",
					en: "Trail looks and all-terrain tires."
				}
			},
			{
				id: "gr-sport",
				name: {
					he: "GR Sport",
					en: "GR Sport"
				},
				blurb: {
					he: "חתימת Gazoo Racing.",
					en: "Gazoo Racing signature."
				}
			}
		],
		specs: [
			{
				label: {
					he: "הנעה",
					en: "Drivetrain"
				},
				value: {
					he: "פלאג־אין היבריד · AWD",
					en: "Plug-in hybrid · AWD"
				}
			},
			{
				label: {
					he: "מושבים",
					en: "Seats"
				},
				value: {
					he: "5",
					en: "5"
				}
			},
			{
				label: {
					he: "טעינה",
					en: "Charge"
				},
				value: {
					he: "שקע ביתי / עמדת AC",
					en: "Home outlet / AC station"
				}
			},
			{
				label: {
					he: "מצב",
					en: "Modes"
				},
				value: {
					he: "EV / היבריד",
					en: "EV / Hybrid"
				}
			}
		],
		highlights: [
			{
				he: "נסיעה חשמלית ליום־יום",
				en: "Electric for the daily drive"
			},
			{
				he: "AWD בכל הגימורים",
				en: "AWD on every trim"
			},
			{
				he: "GR Sport ו־Woodland",
				en: "GR Sport and Woodland"
			}
		]
	},
	{
		slug: "land-cruiser",
		brand: "toyota",
		year: 2026,
		name: {
			he: "טויוטה לנד קרוזר",
			en: "Toyota Land Cruiser"
		},
		tagline: {
			he: "השטח הקלאסי, עם i-FORCE MAX",
			en: "The classic trail SUV, with i-FORCE MAX"
		},
		description: {
			he: "לנד קרוזר האמריקאי עם היברידית i-FORCE MAX, גימור 1958 והדגם הרגיל. יכולת שטח, נוכחות, וחתימת 70 שנה ל־1958.",
			en: "The US Land Cruiser with i-FORCE MAX hybrid, 1958 trim and the standard model. Trail ability, presence, and the 1958 heritage pack."
		},
		body: "suv",
		seats: 5,
		hybrid: true,
		featured: true,
		defaultTrim: "land-cruiser",
		defaultColor: "meteor",
		colors: [
			P.meteor,
			P.heritage,
			P.sand
		],
		trims: [{
			id: "1958",
			name: {
				he: "1958",
				en: "1958"
			},
			blurb: {
				he: "מראה מורשת, בד, וחישוקים ייעודיים.",
				en: "Heritage look, cloth, and unique wheels."
			}
		}, {
			id: "land-cruiser",
			name: {
				he: "Land Cruiser",
				en: "Land Cruiser"
			},
			blurb: {
				he: "הדגם המלא עם ציוד נוחות ושטח.",
				en: "The full model with comfort and trail kit."
			}
		}],
		specs: [
			{
				label: {
					he: "הנעה",
					en: "Drivetrain"
				},
				value: {
					he: "i-FORCE MAX היבריד · 4x4",
					en: "i-FORCE MAX hybrid · 4x4"
				}
			},
			{
				label: {
					he: "מושבים",
					en: "Seats"
				},
				value: {
					he: "5",
					en: "5"
				}
			},
			{
				label: {
					he: "שטח",
					en: "Off-road"
				},
				value: {
					he: "Multi-Terrain Select, Crawl Control",
					en: "Multi-Terrain Select, Crawl Control"
				}
			},
			{
				label: {
					he: "גרירה",
					en: "Towing"
				},
				value: {
					he: "יכולת גרירה גבוהה לפי מפרט US",
					en: "Strong US-spec towing capacity"
				}
			}
		],
		highlights: [
			{
				he: "i-FORCE MAX",
				en: "i-FORCE MAX"
			},
			{
				he: "גימור 1958",
				en: "1958 trim"
			},
			{
				he: "שטח שמחזיק שם",
				en: "Off-road that earns the name"
			}
		]
	},
	{
		slug: "sequoia",
		brand: "toyota",
		year: 2026,
		name: {
			he: "טויוטה סקויה הייבריד",
			en: "Toyota Sequoia Hybrid"
		},
		tagline: {
			he: "SUV מלא־גודל, היברידי, עד שמונה מקומות",
			en: "Full-size hybrid SUV, up to eight seats"
		},
		description: {
			he: "סקויה 2026 עם i-FORCE MAX. שלושה טורים, גרירה רצינית, וגימורים מ־SR5 עד Capstone ו־TRD Pro.",
			en: "2026 Sequoia with i-FORCE MAX. Three rows, serious towing, and trims from SR5 to Capstone and TRD Pro."
		},
		body: "suv",
		seats: 8,
		hybrid: true,
		featured: true,
		defaultTrim: "limited",
		defaultColor: "lunar-rock",
		colors: [
			P.lunar,
			P.black,
			P.blue,
			P.silver,
			P.octane,
			P.red
		],
		trims: [
			{
				id: "sr5",
				name: {
					he: "SR5",
					en: "SR5"
				},
				blurb: {
					he: "שמונה מקומות והיבריד מלא־גודל.",
					en: "Eight seats and the full-size hybrid."
				}
			},
			{
				id: "limited",
				name: {
					he: "Limited",
					en: "Limited"
				},
				blurb: {
					he: "נוחות וציוד למשפחה הגדולה.",
					en: "Comfort and kit for a large family."
				}
			},
			{
				id: "platinum",
				name: {
					he: "Platinum",
					en: "Platinum"
				},
				blurb: {
					he: "פנים עשיר ומתלים אדפטיביים לפי גימור.",
					en: "Rich cabin and adaptive suspension on spec."
				}
			},
			{
				id: "trd-pro",
				name: {
					he: "TRD Pro",
					en: "TRD Pro"
				},
				blurb: {
					he: "שטח על בסיס מלא־גודל.",
					en: "Trail hardware on a full-size body."
				}
			},
			{
				id: "capstone",
				name: {
					he: "Capstone",
					en: "Capstone"
				},
				blurb: {
					he: "שיא הגימור של סקויה.",
					en: "The top Sequoia trim."
				}
			}
		],
		specs: [
			{
				label: {
					he: "הנעה",
					en: "Drivetrain"
				},
				value: {
					he: "i-FORCE MAX היבריד",
					en: "i-FORCE MAX hybrid"
				}
			},
			{
				label: {
					he: "מושבים",
					en: "Seats"
				},
				value: {
					he: "עד 8",
					en: "Up to 8"
				}
			},
			{
				label: {
					he: "טורים",
					en: "Rows"
				},
				value: {
					he: "3",
					en: "3"
				}
			},
			{
				label: {
					he: "גרירה",
					en: "Towing"
				},
				value: {
					he: "גרירה כבדה לפי מפרט US",
					en: "Heavy US-spec towing"
				}
			}
		],
		highlights: [
			{
				he: "היבריד מלא־גודל",
				en: "Full-size hybrid"
			},
			{
				he: "TRD Pro ו־Capstone",
				en: "TRD Pro and Capstone"
			},
			{
				he: "שלושה טורים",
				en: "Three rows"
			}
		]
	},
	{
		slug: "odyssey",
		brand: "honda",
		year: 2025,
		name: {
			he: "הונדה אודיסי",
			en: "Honda Odyssey"
		},
		tagline: {
			he: "מיניוואן אמריקאי עם Honda Sensing",
			en: "US minivan with Honda Sensing"
		},
		description: {
			he: "אודיסי — שמונה מקומות, דלתות הזזה, Magic Slide ושפע תאי אחסון. אחד הדגמים שטרגט מייבאת באופן קבוע.",
			en: "Odyssey — eight seats, sliding doors, Magic Slide and storage everywhere. A staple of Target’s US import list."
		},
		body: "minivan",
		seats: 8,
		featured: true,
		defaultTrim: "touring",
		defaultColor: "white",
		colors: [
			P.hWhite,
			P.hBlack,
			P.hSilver,
			P.hBlue,
			P.hGray
		],
		trims: [{
			id: "ex-l",
			name: {
				he: "EX-L",
				en: "EX-L"
			},
			blurb: {
				he: "עור, דלתות חשמליות ו־Sensing.",
				en: "Leather, power doors and Sensing."
			}
		}, {
			id: "touring",
			name: {
				he: "Touring",
				en: "Touring"
			},
			blurb: {
				he: "מולטימדיה מאחור וציוד משפחתי מלא.",
				en: "Rear entertainment and full family kit."
			}
		}],
		specs: [
			{
				label: {
					he: "מנוע",
					en: "Engine"
				},
				value: {
					he: "V6 3.5",
					en: "3.5 V6"
				}
			},
			{
				label: {
					he: "מושבים",
					en: "Seats"
				},
				value: {
					he: "8",
					en: "8"
				}
			},
			{
				label: {
					he: "בטיחות",
					en: "Safety"
				},
				value: {
					he: "Honda Sensing",
					en: "Honda Sensing"
				}
			},
			{
				label: {
					he: "דלתות",
					en: "Doors"
				},
				value: {
					he: "הזזה חשמלית",
					en: "Power sliding"
				}
			}
		],
		highlights: [
			{
				he: "שמונה מקומות",
				en: "Eight seats"
			},
			{
				he: "Magic Slide",
				en: "Magic Slide"
			},
			{
				he: "Honda Sensing",
				en: "Honda Sensing"
			}
		]
	},
	{
		slug: "civic",
		brand: "honda",
		year: 2025,
		name: {
			he: "הונדה סיוויק",
			en: "Honda Civic"
		},
		tagline: {
			he: "סדאן חדה עם Sensing",
			en: "A sharp sedan with Sensing"
		},
		description: {
			he: "סיוויק אמריקאית — מנוע 2.0 או 1.5 טורבו לפי גימור, מסך גדול וחבילת Honda Sensing.",
			en: "US Civic — 2.0 or 1.5 turbo by trim, a large screen and Honda Sensing."
		},
		body: "sedan",
		seats: 5,
		defaultTrim: "sport",
		defaultColor: "red",
		colors: [
			P.hRed,
			P.hWhite,
			P.hBlack,
			P.hSilver,
			P.hGray
		],
		trims: [{
			id: "sport",
			name: {
				he: "Sport",
				en: "Sport"
			},
			blurb: {
				he: "מראה חד וגלגלים גדולים.",
				en: "Sharp looks and larger wheels."
			}
		}, {
			id: "touring",
			name: {
				he: "Touring",
				en: "Touring"
			},
			blurb: {
				he: "עור, בוסט וציוד מלא.",
				en: "Leather, Bose and full kit."
			}
		}],
		specs: [
			{
				label: {
					he: "מנוע",
					en: "Engine"
				},
				value: {
					he: "2.0 או 1.5 טורבו",
					en: "2.0 or 1.5 turbo"
				}
			},
			{
				label: {
					he: "מושבים",
					en: "Seats"
				},
				value: {
					he: "5",
					en: "5"
				}
			},
			{
				label: {
					he: "בטיחות",
					en: "Safety"
				},
				value: {
					he: "Honda Sensing",
					en: "Honda Sensing"
				}
			},
			{
				label: {
					he: "מרכב",
					en: "Body"
				},
				value: {
					he: "סדאן",
					en: "Sedan"
				}
			}
		],
		highlights: [
			{
				he: "עיצוב הדור הנוכחי",
				en: "Current-generation design"
			},
			{
				he: "Honda Sensing",
				en: "Honda Sensing"
			},
			{
				he: "חסכונית ליום־יום",
				en: "Efficient for daily use"
			}
		]
	},
	{
		slug: "cr-v",
		brand: "honda",
		year: 2025,
		name: {
			he: "הונדה CR-V",
			en: "Honda CR-V"
		},
		tagline: {
			he: "רכב הפנאי הנמכר — גם בהיבריד",
			en: "The volume SUV — hybrid available"
		},
		description: {
			he: "CR-V אמריקאית, כולל היבריד. חמישה מקומות, מרווח, ו־Honda Sensing.",
			en: "US CR-V, including hybrid. Five seats, space, and Honda Sensing."
		},
		body: "suv",
		seats: 5,
		hybrid: true,
		defaultTrim: "hybrid",
		defaultColor: "white",
		colors: [
			P.hWhite,
			P.hBlack,
			P.hSilver,
			P.hBlue,
			P.hGray
		],
		trims: [{
			id: "ex-l",
			name: {
				he: "EX-L",
				en: "EX-L"
			},
			blurb: {
				he: "עור ונוחות יום־יומית.",
				en: "Leather and daily comfort."
			}
		}, {
			id: "hybrid",
			name: {
				he: "Hybrid",
				en: "Hybrid"
			},
			blurb: {
				he: "היברידית עם AWD זמין.",
				en: "Hybrid with available AWD."
			},
			hybrid: true
		}],
		specs: [
			{
				label: {
					he: "הנעה",
					en: "Drivetrain"
				},
				value: {
					he: "בנזין / היבריד",
					en: "Gas / Hybrid"
				}
			},
			{
				label: {
					he: "מושבים",
					en: "Seats"
				},
				value: {
					he: "5",
					en: "5"
				}
			},
			{
				label: {
					he: "בטיחות",
					en: "Safety"
				},
				value: {
					he: "Honda Sensing",
					en: "Honda Sensing"
				}
			},
			{
				label: {
					he: "מרכב",
					en: "Body"
				},
				value: {
					he: "רכב פנאי",
					en: "SUV"
				}
			}
		],
		highlights: [
			{
				he: "היבריד זמין",
				en: "Hybrid available"
			},
			{
				he: "מרווח משפחתי",
				en: "Family space"
			},
			{
				he: "Honda Sensing",
				en: "Honda Sensing"
			}
		]
	},
	{
		slug: "accord",
		brand: "honda",
		year: 2025,
		name: {
			he: "הונדה אקורד",
			en: "Honda Accord"
		},
		tagline: {
			he: "סדאן מנהלים היברידית",
			en: "A hybrid executive sedan"
		},
		description: {
			he: "אקורד הדור הנוכחי — היברידית ברוב הגימורים בארה״ב, מרחב ו־Sensing.",
			en: "Current Accord — hybrid in most US trims, space and Sensing."
		},
		body: "sedan",
		seats: 5,
		hybrid: true,
		defaultTrim: "hybrid",
		defaultColor: "black",
		colors: [
			P.hBlack,
			P.hWhite,
			P.hSilver,
			P.hGray,
			P.hBlue
		],
		trims: [{
			id: "sport",
			name: {
				he: "Sport",
				en: "Sport"
			},
			blurb: {
				he: "מראה חד על בסיס היברידי.",
				en: "Sharp looks on a hybrid base."
			}
		}, {
			id: "hybrid",
			name: {
				he: "Touring Hybrid",
				en: "Touring Hybrid"
			},
			blurb: {
				he: "שיא הציוד ההיברידי.",
				en: "The top hybrid spec."
			},
			hybrid: true
		}],
		specs: [
			{
				label: {
					he: "הנעה",
					en: "Drivetrain"
				},
				value: {
					he: "היברידית",
					en: "Hybrid"
				}
			},
			{
				label: {
					he: "מושבים",
					en: "Seats"
				},
				value: {
					he: "5",
					en: "5"
				}
			},
			{
				label: {
					he: "בטיחות",
					en: "Safety"
				},
				value: {
					he: "Honda Sensing",
					en: "Honda Sensing"
				}
			},
			{
				label: {
					he: "מרכב",
					en: "Body"
				},
				value: {
					he: "סדאן",
					en: "Sedan"
				}
			}
		],
		highlights: [
			{
				he: "היברידית",
				en: "Hybrid"
			},
			{
				he: "מרחב מאחור",
				en: "Rear space"
			},
			{
				he: "Honda Sensing",
				en: "Honda Sensing"
			}
		]
	},
	{
		slug: "pilot",
		brand: "honda",
		year: 2025,
		name: {
			he: "הונדה פיילוט",
			en: "Honda Pilot"
		},
		tagline: {
			he: "שלושה טורים אמריקאיים",
			en: "A US three-row SUV"
		},
		description: {
			he: "פיילוט — עד שמונה מקומות, V6, ו־TrailSport למי שרוצה יותר שטח.",
			en: "Pilot — up to eight seats, V6, and TrailSport if you want more trail."
		},
		body: "suv",
		seats: 8,
		defaultTrim: "trailsport",
		defaultColor: "white",
		colors: [
			P.hWhite,
			P.hBlack,
			P.hSilver,
			P.hGray,
			P.hBlue
		],
		trims: [{
			id: "ex-l",
			name: {
				he: "EX-L",
				en: "EX-L"
			},
			blurb: {
				he: "שמונה מקומות וציוד משפחתי.",
				en: "Eight seats and family kit."
			}
		}, {
			id: "trailsport",
			name: {
				he: "TrailSport",
				en: "TrailSport"
			},
			blurb: {
				he: "צמיגי שטח וחתימת TrailSport.",
				en: "All-terrain tires and TrailSport cues."
			}
		}],
		specs: [
			{
				label: {
					he: "מנוע",
					en: "Engine"
				},
				value: {
					he: "V6",
					en: "V6"
				}
			},
			{
				label: {
					he: "מושבים",
					en: "Seats"
				},
				value: {
					he: "עד 8",
					en: "Up to 8"
				}
			},
			{
				label: {
					he: "טורים",
					en: "Rows"
				},
				value: {
					he: "3",
					en: "3"
				}
			},
			{
				label: {
					he: "בטיחות",
					en: "Safety"
				},
				value: {
					he: "Honda Sensing",
					en: "Honda Sensing"
				}
			}
		],
		highlights: [
			{
				he: "שלושה טורים",
				en: "Three rows"
			},
			{
				he: "TrailSport",
				en: "TrailSport"
			},
			{
				he: "Honda Sensing",
				en: "Honda Sensing"
			}
		]
	}
];
function carsByBrand(brand) {
	return CARS.filter((c) => c.brand === brand);
}
function carBySlug(slug) {
	return CARS.find((c) => c.slug === slug);
}
function featuredCars() {
	return CARS.filter((c) => c.featured);
}
function colorsForTrim(car, trimId) {
	const trim = car.trims.find((t) => t.id === trimId);
	if (!trim?.colors?.length) return car.colors;
	return car.colors.filter((c) => trim.colors.includes(c.id));
}
function carImage(car) {
	return catalogSrc(car.slug, car.defaultColor);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-C7q2OnTC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var copy = {
	he: {
		skip: "דלג לתוכן",
		langSwitch: "EN",
		langSwitchAria: "Switch to English",
		quote: "קבלו הצעה",
		call: "התקשרו",
		menu: "תפריט",
		close: "סגירה",
		details: "פרטים",
		whatsapp: "וואטסאפ",
		whatsappPrefill: "שלום, אשמח לקבל פרטים על רכב ביבוא מארה״ב",
		nav: {
			toyota: "טויוטה",
			honda: "הונדה",
			financing: "מימון",
			leasing: "ליסינג",
			about: "אודות",
			contact: "צור קשר"
		},
		heroKicker: "יבוא מקביל מארצות הברית",
		heroTitle: "המסלול המהיר לרכב החלומות שלכם",
		heroSub: "טרגט מוטורס מייבאת טויוטה והונדה מארה״ב — עם ליווי בעברית ובאנגלית, מימון וליסינג, ואולם תצוגה בירושלים.",
		heroCta: "דגמי טויוטה 2026",
		heroSecondary: "מי אנחנו",
		featured: "דגמים נבחרים",
		featuredSub: "2026 מארה״ב — בלי מחירים מומצאים. הצעת מחיר אישית אחרי שיחה.",
		trust: [
			{
				n: "2016",
				l: "שנת הקמה"
			},
			{
				n: "US",
				l: "יבוא מקביל"
			},
			{
				n: "ירושלים",
				l: "אולם תצוגה"
			},
			{
				n: "077",
				l: "שיחה ישירה"
			}
		],
		servicesTitle: "איך קונים אצלנו",
		services: [
			{
				t: "יבוא מקביל",
				d: "דגמים אמריקאיים שלא תמיד מגיעים דרך היבואן הרשמי — עם שקיפות מלאה על המפרט."
			},
			{
				t: "מימון",
				d: "מסלולי מימון דרך שותפים בנקאיים וחוץ־בנקאיים. התנאים נקבעים לפי הרכב והפרופיל."
			},
			{
				t: "ליסינג",
				d: "ליסינג פרטי ועסקי לדגמי טויוטה והונדה. נבנה הצעה אחרי שיחת אפיון."
			}
		],
		angloKicker: "For English speakers",
		angloTitle: "הדילר ששם את דוברי האנגלית במרכז",
		angloBody: "צוות דו־לשוני, תהליך ברור, וליווי מבחירת הדגם עד המסירה. Up to 40% discount for visa holders — לפי הזכאות האישית.",
		stepsTitle: "שלושה צעדים",
		steps: [
			{
				t: "בחרו דגם",
				d: "עיינו בטויוטה ובהונדה, בחרו רמת גימור וצבע."
			},
			{
				t: "דברו איתנו",
				d: "וואטסאפ או טופס — נחזור עם זמינות והצעה."
			},
			{
				t: "מסירה",
				d: "רישוי, מימון או ליסינג, ומסירה בירושלים."
			}
		],
		ctaBand: "רוצים הצעת מחיר?",
		ctaBandBody: "בלי מחיר באתר. נבדוק זמינות ונחזור עם מספר אמיתי.",
		footer: {
			tag: "יבוא מקביל לטויוטה והונדה מארצות הברית. אולם תצוגה בירושלים.",
			legal: "טרגט מוטורס מ.ר 2016 בע״מ",
			social: "קישורים",
			disclaimer: "התמונות להמחשה. המפרט, הצבעים ורמות הגימור תלויים בשנת הדגם ובזמינות היבוא. אין באתר מחירון — כל הצעה אישית."
		},
		toyotaTitle: "דגמי טויוטה 2026",
		toyotaSub: "יבוא מקביל מארה״ב — גרנד היילנדר, סיינה, קאמרי, פורראנר, RAV4 פלאג־אין, לנד קרוזר וסקויה.",
		hondaTitle: "דגמי הונדה",
		hondaSub: "יבוא מקביל מארה״ב — אודיסי, סיוויק, CR-V, אקורד ופיילוט.",
		aboutKicker: "אודות",
		aboutTitle: "טרגט מוטורס — לקנות רכב בראש שקט",
		aboutBody: [
			"טרגט מוטורס הוקמה רשמית בשנת 2016, אך בעלי החברה פועלים בשוק הרכב בארץ ובחו״ל כבר למעלה מעשור, ומלווים מאות לקוחות.",
			"אנחנו יבואן מקביל לרכבים מארצות הברית — בעיקר טויוטה והונדה — עם דגש על שקיפות, אחריות וליווי עד המסירה.",
			"החברה מתפתחת משנה לשנה. בנוסף לדגמים הייחודיים של טויוטה והונדה, מתוכננים מותגים נוספים בהמשך."
		],
		aboutTeaser: "אולם התצוגה",
		aboutTeaserBody: "ירמיהו 68, ירושלים. מוזמנים לתאם הגעה.",
		values: [
			{
				t: "שקיפות",
				d: "מפרט אמיתי, בלי הפתעות במסירה."
			},
			{
				t: "ליווי",
				d: "עברית ואנגלית — מבחירה עד רישוי."
			},
			{
				t: "גב כלכלי",
				d: "מימון וליסינג לפי הצורך, לא לפי לחץ."
			}
		],
		financeKicker: "מימון",
		financeTitle: "מימון שמתאים לרכב — לא להפך",
		financeSub: "עובדים עם גופי מימון. הריבית, ההון העצמי והתקופה נקבעים אחרי בדיקה. לא מפרסמים ריביות באתר.",
		financeItems: [
			{
				t: "רכישה פרטית",
				d: "מימון לרכב חדש ביבוא מקביל, כולל אופציות להון עצמי גמיש."
			},
			{
				t: "מסלול ויזה",
				d: "הטבות לבעלי ויזה — לפי זכאות. נבדוק במשרד."
			},
			{
				t: "אישור עקרוני",
				d: "שולחים מסמכים, מקבלים מסגרת, ורק אז סוגרים דגם."
			}
		],
		leaseKicker: "ליסינג",
		leaseTitle: "ליסינג פרטי ועסקי",
		leaseSub: "תשלום חודשי במקום רכישה מלאה. התנאים תלויים בדגם, בקילומטראז׳ ובתקופה.",
		leaseItems: [
			{
				t: "פרטי",
				d: "ליסינג לדגמי משפחה — סיינה, גרנד היילנדר, אודיסי."
			},
			{
				t: "עסקי",
				d: "חשבונית וניהול צי קטן. נתאים חבילה אחרי שיחה."
			},
			{
				t: "גמישות",
				d: "תקופה וקילומטראז׳ לפי שימוש אמיתי, לא לפי טמפלט."
			}
		],
		contactKicker: "צור קשר",
		contactTitle: "אנחנו כאן בשבילכם",
		contactSub: "וואטסאפ, טלפון, או טופס. נחזור במהירות.",
		showroom: "אולם תצוגה",
		hours: "שעות פעילות",
		formTitle: "השארת פנייה",
		form: {
			name: "שם מלא",
			phone: "טלפון",
			email: "אימייל",
			model: "דגם שמעניין",
			message: "הודעה",
			interest: "מה מעניין",
			buy: "רכישה",
			finance: "מימון",
			lease: "ליסינג",
			send: "שליחה",
			consent: "אני מאשר/ת שטרגט מוטורס יחזרו אליי לגבי הפנייה.",
			sent: "הפנייה נקלטה. נחזור אליכם בהקדם."
		},
		car: {
			back: "חזרה לדגמים",
			trim: "רמת גימור",
			color: "צבע",
			plugin: "פלאג־אין",
			fromUs: "מארה״ב",
			specs: "מפרט",
			highlights: "עיקרי הדגם",
			quoteTitle: "הצעת מחיר",
			quoteBody: "אין מחיר באתר. שלחו פנייה ונחזור עם זמינות ומספר."
		},
		notFound: {
			title: "העמוד לא נמצא",
			body: "חזרו לדף הבית או לדגמים."
		}
	},
	en: {
		skip: "Skip to content",
		langSwitch: "עב",
		langSwitchAria: "מעבר לעברית",
		quote: "Get a quote",
		call: "Call",
		menu: "Menu",
		close: "Close",
		details: "Details",
		whatsapp: "WhatsApp",
		whatsappPrefill: "Hi, I would like details on a US-import vehicle",
		nav: {
			toyota: "Toyota",
			honda: "Honda",
			financing: "Financing",
			leasing: "Leasing",
			about: "About",
			contact: "Contact"
		},
		heroKicker: "Parallel import from the United States",
		heroTitle: "The fast lane to the car you actually want",
		heroSub: "Target Motors imports Toyota and Honda from the US — bilingual support, financing and leasing, showroom in Jerusalem.",
		heroCta: "2026 Toyota models",
		heroSecondary: "About us",
		featured: "Featured",
		featuredSub: "2026 US models. No invented prices — a real quote after we talk.",
		trust: [
			{
				n: "2016",
				l: "Established"
			},
			{
				n: "US",
				l: "Parallel import"
			},
			{
				n: "Jerusalem",
				l: "Showroom"
			},
			{
				n: "077",
				l: "Direct line"
			}
		],
		servicesTitle: "How buying works",
		services: [
			{
				t: "Parallel import",
				d: "US-spec Toyota and Honda that the official channel may not offer — with a clear spec sheet."
			},
			{
				t: "Financing",
				d: "Bank and non-bank partners. Terms depend on the car and your profile — not a website rate."
			},
			{
				t: "Leasing",
				d: "Private and business leases. We build the offer after a short intake call."
			}
		],
		angloKicker: "For English speakers",
		angloTitle: "The dealership that puts Anglos first",
		angloBody: "Bilingual desk, a clear process, and support from model choice to delivery. Up to 40% discount for visa holders — subject to eligibility.",
		stepsTitle: "Three steps",
		steps: [
			{
				t: "Pick a model",
				d: "Browse Toyota and Honda, choose a trim and color."
			},
			{
				t: "Talk to us",
				d: "WhatsApp or the form — we reply with availability."
			},
			{
				t: "Delivery",
				d: "Registration, finance or lease, handover in Jerusalem."
			}
		],
		ctaBand: "Want a number?",
		ctaBandBody: "No prices on the site. We check stock and send a real quote.",
		footer: {
			tag: "Parallel import of Toyota and Honda from the United States. Showroom in Jerusalem.",
			legal: "Target Motors M.R. 2016 Ltd.",
			social: "Links",
			disclaimer: "Images are for illustration. Specs, colors and trims depend on model year and import availability. This site is not a price list — every quote is personal."
		},
		toyotaTitle: "2026 Toyota",
		toyotaSub: "US parallel import — Grand Highlander, Sienna, Camry, 4Runner, RAV4 Plug-in Hybrid, Land Cruiser and Sequoia.",
		hondaTitle: "Honda models",
		hondaSub: "US parallel import — Odyssey, Civic, CR-V, Accord and Pilot.",
		aboutKicker: "About",
		aboutTitle: "Target Motors — buy a car with a quiet mind",
		aboutBody: [
			"Target Motors was founded in 2016, after more than a decade of the owners working the car market in Israel and abroad, serving hundreds of clients.",
			"We are a licensed parallel importer of US vehicles — mainly Toyota and Honda — with a focus on transparency, warranty and support through delivery.",
			"The company grows every year. Alongside exclusive Toyota and Honda models, additional brands are planned."
		],
		aboutTeaser: "Showroom",
		aboutTeaserBody: "68 Yirmiyahu St, Jerusalem. Book a visit.",
		values: [
			{
				t: "Transparency",
				d: "The real spec, no surprises at delivery."
			},
			{
				t: "Support",
				d: "Hebrew and English — from choice to registration."
			},
			{
				t: "Backing",
				d: "Finance and lease when you need them, not as a push."
			}
		],
		financeKicker: "Financing",
		financeTitle: "Finance that fits the car",
		financeSub: "We work with lenders. Rate, down payment and term are set after underwriting. We do not publish rates here.",
		financeItems: [
			{
				t: "Private purchase",
				d: "Finance for a new parallel-import vehicle, with flexible down-payment options."
			},
			{
				t: "Visa path",
				d: "Visa-holder benefits where eligible — confirmed in the office."
			},
			{
				t: "Pre-approval",
				d: "Send documents, get a frame, then lock the model."
			}
		],
		leaseKicker: "Leasing",
		leaseTitle: "Private and business lease",
		leaseSub: "A monthly payment instead of a full purchase. Terms depend on model, mileage and term.",
		leaseItems: [
			{
				t: "Private",
				d: "Family models — Sienna, Grand Highlander, Odyssey."
			},
			{
				t: "Business",
				d: "Invoicing and small-fleet handling after a call."
			},
			{
				t: "Flexible",
				d: "Term and mileage around real use, not a template."
			}
		],
		contactKicker: "Contact",
		contactTitle: "We’re here",
		contactSub: "WhatsApp, phone, or the form. We reply quickly.",
		showroom: "Showroom",
		hours: "Hours",
		formTitle: "Send a request",
		form: {
			name: "Full name",
			phone: "Phone",
			email: "Email",
			model: "Model of interest",
			message: "Message",
			interest: "I’m interested in",
			buy: "Purchase",
			finance: "Financing",
			lease: "Leasing",
			send: "Send",
			consent: "I agree that Target Motors may contact me about this request.",
			sent: "Received. We’ll get back to you shortly."
		},
		car: {
			back: "Back to models",
			trim: "Trim",
			color: "Color",
			plugin: "Plug-in",
			fromUs: "From the US",
			specs: "Specifications",
			highlights: "Highlights",
			quoteTitle: "Quote",
			quoteBody: "No prices on the site. Send a request and we’ll return availability and a number."
		},
		notFound: {
			title: "Page not found",
			body: "Head home or back to the models."
		}
	}
};
var LanguageContext = (0, import_react.createContext)(null);
function LanguageProvider({ children }) {
	const [lang, setLang] = (0, import_react.useState)("he");
	(0, import_react.useEffect)(() => {
		const stored = localStorage.getItem("tm-lang");
		if (stored === "he" || stored === "en") setLang(stored);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = lang;
		document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
		localStorage.setItem("tm-lang", lang);
	}, [lang]);
	const value = (0, import_react.useMemo)(() => ({
		lang,
		dir: lang === "he" ? "rtl" : "ltr",
		t: copy[lang],
		toggleLang: () => setLang((v) => v === "he" ? "en" : "he")
	}), [lang]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageContext.Provider, {
		value,
		children
	});
}
function useLanguage() {
	const ctx = (0, import_react.useContext)(LanguageContext);
	if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
	return ctx;
}
function Logo({ className }) {
	const { lang } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: cn("flex items-center gap-3 text-fg no-underline", className),
		"aria-label": "Target Motors",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-9 shrink-0 place-items-center border border-border bg-bg",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 32 32",
				className: "size-6",
				fill: "none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M6 8h20",
						stroke: "currentColor",
						strokeWidth: "2.2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M16 8v16",
						stroke: "currentColor",
						strokeWidth: "2.2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M8 24h16",
						stroke: "var(--color-brand)",
						strokeWidth: "2.2"
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex min-w-0 flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-lg font-semibold tracking-tight",
				children: lang === "he" ? "טרגט מוטורס" : "Target Motors"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-muted",
				children: lang === "he" ? "Target Motors" : "טרגט מוטורס"
			})]
		})]
	});
}
var buttonVariants = cva("inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 [&_svg]:size-4 [&_svg]:shrink-0 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-brand text-accent-foreground hover:bg-brand-dark",
			inverse: "bg-paper text-ink hover:opacity-90",
			outline: "border border-border bg-transparent text-fg hover:bg-fg/10",
			ghost: "text-fg hover:bg-fg/10",
			paper: "border border-rule bg-paper text-ink hover:bg-mist",
			whatsapp: "bg-whatsapp text-accent-foreground hover:opacity-90"
		},
		size: {
			default: "h-11",
			sm: "h-10 min-h-10 px-4 text-sm",
			lg: "h-12 min-h-12 px-6"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = (0, import_react.forwardRef)(({ className, variant, size, asChild, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		ref,
		...props
	});
});
Button.displayName = "Button";
var COMPANY = {
	nameHe: "טרגט מוטורס",
	nameEn: "Target Motors",
	legalHe: "טרגט מוטורס מ.ר 2016 בע״מ",
	phoneDisplay: "077-8053655",
	phoneTel: "tel:0778053655",
	whatsapp: "972778053655",
	addressHe: "ירמיהו 68, ירושלים",
	addressEn: "68 Yirmiyahu St, Jerusalem",
	hoursHe: "א׳–ה׳ 9:30–18:30 · ו׳ 9:30–11:20",
	hoursEn: "Sun–Thu 9:30–18:30 · Fri 9:30–11:20",
	instagram: "https://www.instagram.com/targetmotors_cars/",
	facebook: "https://www.facebook.com/TargetMotors/",
	maps: "https://maps.google.com/?q=Yirmiyahu+68+Jerusalem"
};
function whatsappHref(text) {
	return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`;
}
var NAV = [
	{
		to: "/toyota",
		key: "toyota"
	},
	{
		to: "/honda",
		key: "honda"
	},
	{
		to: "/financing",
		key: "financing"
	},
	{
		to: "/leasing",
		key: "leasing"
	},
	{
		to: "/about",
		key: "about"
	},
	{
		to: "/contact",
		key: "contact"
	}
];
function SiteShell({ children }) {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:bg-brand focus:px-4 focus:py-2 focus:text-accent-foreground",
				children: t.skip
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "content",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappFab, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "dark",
				position: "top-center",
				richColors: false
			})
		]
	});
}
function Header() {
	const { t, toggleLang } = useLanguage();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-40 border-b border-transparent bg-bg/90 backdrop-blur-md transition-[border-color] duration-200", scrolled && "border-border"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center gap-4 px-5 sm:h-[4.25rem] sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "ms-auto hidden items-center gap-1 lg:flex",
					"aria-label": "Main",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: cn("rounded-md px-3 py-2 text-sm text-muted transition-colors duration-150 hover:text-fg", pathname.startsWith(item.to) && "text-fg"),
						children: t.nav[item.key]
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ms-auto flex items-center gap-1 lg:ms-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: toggleLang,
							className: "inline-flex h-11 min-w-11 items-center justify-center rounded-md px-3 text-xs font-semibold tracking-wide text-muted hover:bg-fg/10 hover:text-fg",
							"aria-label": t.langSwitchAria,
							children: t.langSwitch
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: COMPANY.phoneTel,
							className: "hidden h-11 items-center gap-2 rounded-md px-3 text-sm text-fg hover:bg-fg/10 sm:inline-flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), COMPANY.phoneDisplay]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "hidden sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: t.quote
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center rounded-md hover:bg-fg/10 lg:hidden",
							"aria-expanded": open,
							"aria-label": open ? t.close : t.menu,
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-bg px-5 py-4 lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "grid gap-1",
				"aria-label": "Mobile",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: "rounded-md px-3 py-3 text-base hover:bg-fg/10",
					children: t.nav[item.key]
				}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: COMPANY.phoneTel,
					className: "rounded-md px-3 py-3 text-base hover:bg-fg/10",
					children: [
						t.call,
						" ",
						COMPANY.phoneDisplay
					]
				})]
			})
		}) : null]
	});
}
function Footer() {
	const { t, lang } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-auto border-t border-border bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-sm text-muted",
							children: t.footer.tag
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm text-muted",
							children: t.footer.legal
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-medium uppercase tracking-[0.18em] text-subtle",
					children: t.nav.contact
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: COMPANY.phoneTel,
							className: "hover:text-brand",
							children: COMPANY.phoneDisplay
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: lang === "he" ? COMPANY.addressHe : COMPANY.addressEn }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-muted",
							children: lang === "he" ? COMPANY.hoursHe : COMPANY.hoursEn
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-medium uppercase tracking-[0.18em] text-subtle",
					children: t.footer.social
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "hover:text-brand",
							children: t.nav[item.key]
						}) }, item.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: COMPANY.instagram,
							className: "hover:text-brand",
							children: "Instagram"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: COMPANY.facebook,
							className: "hover:text-brand",
							children: "Facebook"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-paper text-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-6xl px-5 py-6 text-xs leading-relaxed text-quiet sm:px-8",
				children: t.footer.disclaimer
			})
		})]
	});
}
function WhatsappFab() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: whatsappHref(t.whatsappPrefill),
		target: "_blank",
		rel: "noreferrer",
		className: "fixed end-4 bottom-4 z-40 inline-flex h-12 items-center gap-2 rounded-full bg-whatsapp px-4 text-sm font-medium text-accent-foreground shadow-lg transition-transform duration-150 hover:opacity-95 active:scale-[0.96] sm:end-6 sm:bottom-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-5 fill-current",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01zm-7.01 15.24h-.01c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.42 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74 1.49.64 1.87.7 2.54.59.41-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.17-.48-.29z" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden sm:inline",
			children: t.whatsapp
		})]
	});
}
function NotFound() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center gap-4 px-5 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-medium",
				children: t.notFound.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: t.notFound.body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: t.heroCta
				})
			})
		]
	});
}
var styles_default = "/assets/styles-BU3jWeHn.css";
var APP_NAME = "טרגט מוטורס | Target Motors";
var Route$9 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "טרגט מוטורס — יבוא מקביל לטויוטה והונדה מארה״ב. אולם תצוגה ירמיהו 68 ירושלים. 077-8053655."
			},
			{
				name: "theme-color",
				content: "#121212"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@500;600;700&family=Heebo:wght@400;500;600;700&display=swap"
			}
		]
	}),
	notFoundComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {}) }) }),
	component: Root
});
function Root() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "he",
		dir: "rtl",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$8 = () => import("./routes-CEakDQfO.mjs");
var Route$8 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./about-wsOYeb7E.mjs");
var Route$7 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./contact-Cj_57HMZ.mjs");
var Route$6 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./financing-Cm-PKLll.mjs");
var Route$5 = createFileRoute("/financing")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./honda-D69yY3rz.mjs");
var Route$4 = createFileRoute("/honda")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./leasing-Cok8W-OF.mjs");
var Route$3 = createFileRoute("/leasing")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./toyota-D1TBxVoC.mjs");
var Route$2 = createFileRoute("/toyota")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./honda._slug-DeELqhMZ.mjs");
var Route$1 = createFileRoute("/honda/$slug")({
	loader: ({ params }) => {
		const car = carBySlug(params.slug);
		if (!car || car.brand !== "honda") throw notFound();
		return { car };
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./toyota._slug-nb7msMvF.mjs");
var Route = createFileRoute("/toyota/$slug")({
	loader: ({ params }) => {
		const car = carBySlug(params.slug);
		if (!car || car.brand !== "toyota") throw notFound();
		return { car };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var AboutRoute = Route$7.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$9
});
var ContactRoute = Route$6.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$9
});
var FinancingRoute = Route$5.update({
	id: "/financing",
	path: "/financing",
	getParentRoute: () => Route$9
});
var HondaRoute = Route$4.update({
	id: "/honda",
	path: "/honda",
	getParentRoute: () => Route$9
});
var LeasingRoute = Route$3.update({
	id: "/leasing",
	path: "/leasing",
	getParentRoute: () => Route$9
});
var ToyotaRoute = Route$2.update({
	id: "/toyota",
	path: "/toyota",
	getParentRoute: () => Route$9
});
var HondaSlugRoute = Route$1.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => HondaRoute
});
var ToyotaSlugRoute = Route.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ToyotaRoute
});
var HondaRouteChildren = { HondaSlugRoute };
var HondaRouteWithChildren = HondaRoute._addFileChildren(HondaRouteChildren);
var ToyotaRouteChildren = { ToyotaSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	FinancingRoute,
	HondaRoute: HondaRouteWithChildren,
	LeasingRoute,
	ToyotaRoute: ToyotaRoute._addFileChildren(ToyotaRouteChildren)
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { cn as _, whatsappHref as a, BODY_LABEL as c, carsByBrand as d, colorsForTrim as f, spinSrc as g, frameCount as h, COMPANY as i, BRAND_LABEL as l, featuredCars as m, Route as n, Button as o, defaultFrame as p, Route$1 as r, useLanguage as s, router_exports as t, carImage as u };
