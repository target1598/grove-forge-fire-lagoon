import { catalogSrc } from "@/lib/visualizer";

export type Text = { he: string; en: string };

export type Paint = {
  id: string;
  name: Text;
  hex: string;
};

export type Spec = { label: Text; value: Text };

export type TrimLevel = {
  id: string;
  name: Text;
  blurb: Text;
  colors?: string[];
  specs?: Spec[];
  highlights?: Text[];
  hybrid?: boolean;
  plugin?: boolean;
  seats?: number;
};

export type Car = {
  slug: string;
  brand: "toyota" | "honda";
  year: number;
  name: Text;
  tagline: Text;
  description: Text;
  body: "sedan" | "suv" | "minivan" | "pickup";
  seats: number;
  hybrid?: boolean;
  plugin?: boolean;
  featured?: boolean;
  defaultTrim: string;
  defaultColor: string;
  colors: Paint[];
  trims: TrimLevel[];
  specs: Spec[];
  highlights: Text[];
};

export const BODY_LABEL: Record<Car["body"], Text> = {
  sedan: { he: "סדאן", en: "Sedan" },
  suv: { he: "רכב פנאי", en: "SUV" },
  minivan: { he: "מיניוואן", en: "Minivan" },
  pickup: { he: "טנדר", en: "Pickup" },
};

export const BRAND_LABEL = {
  toyota: { he: "טויוטה", en: "Toyota" },
  honda: { he: "הונדה", en: "Honda" },
};

const P = {
  red: { id: "supersonic-red", name: { he: "סופרסוניק רד", en: "Supersonic Red" }, hex: "#b5121b" },
  ice: { id: "ice-cap", name: { he: "אייס קאפ", en: "Ice Cap" }, hex: "#f2f2f0" },
  silver: { id: "celestial-silver", name: { he: "סילבר סלסטיאל", en: "Celestial Silver" }, hex: "#c5c7c8" },
  under: { id: "underground", name: { he: "אנדרגראונד", en: "Underground" }, hex: "#4a4e51" },
  metal: { id: "heavy-metal", name: { he: "הבי מטאל", en: "Heavy Metal" }, hex: "#6d6f71" },
  black: { id: "midnight-black", name: { he: "שחור מידנייט", en: "Midnight Black" }, hex: "#1a1a1a" },
  blue: { id: "blueprint", name: { he: "בלופרינט", en: "Blueprint" }, hex: "#2c4a6e" },
  meteor: { id: "meteor", name: { he: "מטאור שאוור", en: "Meteor Shower" }, hex: "#5b6a75" },
  cypress: { id: "cypress", name: { he: "סייפרס", en: "Cypress" }, hex: "#4a5a3c" },
  octane: { id: "solar-octane", name: { he: "סולר אוקטן", en: "Solar Octane" }, hex: "#c45a12" },
  lunar: { id: "lunar-rock", name: { he: "לונר רוק", en: "Lunar Rock" }, hex: "#8a8b83" },
  wind: { id: "wind-chill", name: { he: "ווינד צ׳יל", en: "Wind Chill Pearl" }, hex: "#d8d6cf" },
  ocean: { id: "ocean-gem", name: { he: "אושן ג׳ם", en: "Ocean Gem" }, hex: "#1f4f6a" },
  gr: { id: "gr-sport", name: { he: "GR ספורט", en: "Emotional Red II" }, hex: "#9b1b2e" },
  wood: { id: "woodland", name: { he: "וודלנד", en: "Woodland" }, hex: "#5c5a3e" },
  heritage: { id: "heritage-blue", name: { he: "הריטג׳ בלו", en: "Heritage Blue" }, hex: "#2a3d55" },
  sand: { id: "sand-dune", name: { he: "סנד דיון", en: "Sand Dune" }, hex: "#c4b089" },
  hWhite: { id: "white", name: { he: "לבן פנינה", en: "Platinum White" }, hex: "#f4f4f1" },
  hBlack: { id: "black", name: { he: "שחור קריסטל", en: "Crystal Black" }, hex: "#111111" },
  hRed: { id: "red", name: { he: "אדום ראלי", en: "Rallye Red" }, hex: "#c1121f" },
  hSilver: { id: "silver", name: { he: "כסף", en: "Lunar Silver" }, hex: "#c0c4c8" },
  hBlue: { id: "blue", name: { he: "כחול", en: "Aegean Blue" }, hex: "#2a4a6e" },
  hGray: { id: "gray", name: { he: "אפור מטאלי", en: "Modern Steel" }, hex: "#6a6e72" },
};

export const CARS: Car[] = [
  {
    slug: "camry",
    brand: "toyota",
    year: 2026,
    name: { he: "טויוטה קאמרי הייבריד", en: "Toyota Camry Hybrid" },
    tagline: { he: "סדאן היברידית שקטה, חדה וחסכונית", en: "A quiet, sharp, efficient hybrid sedan" },
    description: {
      he: "קאמרי 2026 מגיעה כהיברידית בלבד בארה״ב. חמישה מקומות, חבילת בטיחות Toyota Safety Sense, ורמות גימור מ־LE עד XSE ו־Nightshade.",
      en: "The 2026 Camry is hybrid-only in the US. Five seats, Toyota Safety Sense, and trims from LE through XSE and Nightshade.",
    },
    body: "sedan",
    seats: 5,
    hybrid: true,
    featured: true,
    defaultTrim: "xse",
    defaultColor: "supersonic-red",
    colors: [P.red, P.ice, P.silver, P.metal, P.ocean],
    trims: [
      { id: "le", name: { he: "LE", en: "LE" }, blurb: { he: "בסיס היברידי עם מסך 8״ ו־TSS.", en: "Hybrid base with 8\" screen and TSS." } },
      { id: "se", name: { he: "SE", en: "SE" }, blurb: { he: "מתלים ספורטיביים וגלגלי 18״.", en: "Sport-tuned suspension and 18\" wheels." } },
      { id: "nightshade", name: { he: "Nightshade", en: "Nightshade" }, blurb: { he: "חבילת שחור חיצונית על בסיס SE.", en: "Blacked-out exterior package on SE." } },
      { id: "xle", name: { he: "XLE", en: "XLE" }, blurb: { he: "נוחות, עור וציוד נוסף.", en: "Comfort, leather and extra equipment." } },
      { id: "xse", name: { he: "XSE", en: "XSE" }, blurb: { he: "הקצה הספורטיבי: גלגלי 19״, מתלים מכוונים, נוכחות.", en: "Sport peak: 19\" wheels, tuned suspension, presence." } },
    ],
    specs: [
      { label: { he: "הנעה", en: "Drivetrain" }, value: { he: "היברידית · קדמית / AWD לפי גימור", en: "Hybrid · FWD / AWD by trim" } },
      { label: { he: "מושבים", en: "Seats" }, value: { he: "5", en: "5" } },
      { label: { he: "בטיחות", en: "Safety" }, value: { he: "Toyota Safety Sense 3.0", en: "Toyota Safety Sense 3.0" } },
      { label: { he: "מסך", en: "Display" }, value: { he: "8״ או 12.3״ לפי גימור", en: "8\" or 12.3\" by trim" } },
    ],
    highlights: [
      { he: "היברידית בכל רמות הגימור", en: "Hybrid across every trim" },
      { he: "עיצוב חדש לדור הנוכחי", en: "Current-generation restyle" },
      { he: "חבילת Nightshade שחורה", en: "Nightshade black package" },
    ],
  },
  {
    slug: "grand-highlander",
    brand: "toyota",
    year: 2026,
    name: { he: "טויוטה גרנד היילנדר", en: "Toyota Grand Highlander" },
    tagline: { he: "שלושה טורים, עד שמונה מקומות", en: "Three rows, up to eight seats" },
    description: {
      he: "גרנד היילנדר 2026 — רכב פנאי משפחתי עם מנוע בנזין או היבריד, כולל Hybrid MAX. מרווח במטען מאחורי הטור השלישי.",
      en: "2026 Grand Highlander — family SUV with gas or hybrid, including Hybrid MAX. Real cargo behind the third row.",
    },
    body: "suv",
    seats: 8,
    hybrid: true,
    featured: true,
    defaultTrim: "limited",
    defaultColor: "underground",
    colors: [P.under, P.ice, P.silver, P.wind, P.blue, P.black],
    trims: [
      { id: "le", name: { he: "LE", en: "LE" }, blurb: { he: "שמונה מקומות, מסך 12.3״.", en: "Eight seats, 12.3\" screen." } },
      { id: "xle", name: { he: "XLE", en: "XLE" }, blurb: { he: "דלת מטען חשמלית ומושב נהג חשמלי.", en: "Power liftgate and power driver seat." } },
      { id: "limited", name: { he: "Limited", en: "Limited" }, blurb: { he: "פנים עשיר ומולטימדיה מלאה.", en: "Richer cabin and full multimedia." } },
      { id: "platinum", name: { he: "Platinum", en: "Platinum" }, blurb: { he: "גג פנורמי וציוד שיא.", en: "Panoramic roof and top equipment." } },
      { id: "hybrid-max", name: { he: "Hybrid MAX", en: "Hybrid MAX" }, blurb: { he: "היברידית חזקה עם AWD.", en: "High-output hybrid with AWD." }, hybrid: true },
    ],
    specs: [
      { label: { he: "מושבים", en: "Seats" }, value: { he: "עד 8", en: "Up to 8" } },
      { label: { he: "הנעה", en: "Drivetrain" }, value: { he: "בנזין / היבריד / Hybrid MAX", en: "Gas / Hybrid / Hybrid MAX" } },
      { label: { he: "טורים", en: "Rows" }, value: { he: "3", en: "3" } },
      { label: { he: "בטיחות", en: "Safety" }, value: { he: "TSS + Pre-Collision", en: "TSS + Pre-Collision" } },
    ],
    highlights: [
      { he: "שמונה מקומות אמיתיים", en: "A genuine eight-seater" },
      { he: "Hybrid MAX למי שרוצה כוח", en: "Hybrid MAX when you want power" },
      { he: "מרווח מאחורי הטור השלישי", en: "Cargo behind the third row" },
    ],
  },
  {
    slug: "sienna",
    brand: "toyota",
    year: 2026,
    name: { he: "טויוטה סיינה הייבריד", en: "Toyota Sienna Hybrid" },
    tagline: { he: "מיניוואן היברידי עם דלתות חשמליות", en: "Hybrid minivan with power sliding doors" },
    description: {
      he: "סיינה 2026 היברידית בלבד. שבעה או שמונה מקומות, AWD זמין, וחבילת Woodland לעבירות קלה.",
      en: "The 2026 Sienna is hybrid-only. Seven or eight seats, available AWD, and a Woodland package for light trails.",
    },
    body: "minivan",
    seats: 8,
    hybrid: true,
    featured: true,
    defaultTrim: "woodland",
    defaultColor: "cypress",
    colors: [P.cypress, P.ice, P.wind, P.blue, P.silver],
    trims: [
      { id: "le", name: { he: "LE", en: "LE" }, blurb: { he: "שמונה מקומות ודלתות חשמליות.", en: "Eight seats and power sliding doors." } },
      { id: "xle", name: { he: "XLE", en: "XLE" }, blurb: { he: "עור, גג שמש ונוחות משפחתית.", en: "Leather, sunroof, family comfort." } },
      { id: "xse", name: { he: "XSE", en: "XSE" }, blurb: { he: "מראה ספורטיבי על בסיס המשפחתי.", en: "Sport looks on the family base." } },
      { id: "woodland", name: { he: "Woodland", en: "Woodland" }, blurb: { he: "AWD, מגן וגחון וצמיגי שטח קל.", en: "AWD, skid plate and all-terrain tires." } },
      { id: "platinum", name: { he: "Platinum", en: "Platinum" }, blurb: { he: "שיא הציוד, כולל מולטימדיה מאחור.", en: "Top spec, including rear entertainment." } },
    ],
    specs: [
      { label: { he: "הנעה", en: "Drivetrain" }, value: { he: "היברידית · FWD / AWD", en: "Hybrid · FWD / AWD" } },
      { label: { he: "מושבים", en: "Seats" }, value: { he: "7 או 8", en: "7 or 8" } },
      { label: { he: "דלתות", en: "Doors" }, value: { he: "הזזה חשמלית", en: "Power sliding" } },
      { label: { he: "גרירה", en: "Towing" }, value: { he: "עד כ־1.6 טון לפי גימור", en: "Up to ~1.6 t by trim" } },
    ],
    highlights: [
      { he: "היברידית בכל הגימורים", en: "Hybrid in every trim" },
      { he: "Woodland עם AWD", en: "Woodland with AWD" },
      { he: "דלתות הזזה חשמליות", en: "Power sliding doors" },
    ],
  },
  {
    slug: "4runner",
    brand: "toyota",
    year: 2026,
    name: { he: "טויוטה 4Runner", en: "Toyota 4Runner" },
    tagline: { he: "שטח אמיתי, דור חדש", en: "Real off-road, new generation" },
    description: {
      he: "4Runner 2026 על פלטפורמה חדשה, עם i-FORCE ואופציית i-FORCE MAX. TRD Pro, Trailhunter ו־SR5.",
      en: "The 2026 4Runner is a new generation, with i-FORCE and available i-FORCE MAX. TRD Pro, Trailhunter and SR5.",
    },
    body: "suv",
    seats: 5,
    featured: true,
    defaultTrim: "trd-pro",
    defaultColor: "ice-cap",
    colors: [P.ice, P.red, P.silver, P.metal, P.octane, P.black],
    trims: [
      { id: "sr5", name: { he: "SR5", en: "SR5" }, blurb: { he: "בסיס שטח עם 4x4.", en: "Off-road base with 4x4." } },
      { id: "trd-sport", name: { he: "TRD Sport", en: "TRD Sport" }, blurb: { he: "כביש חד עם חתימת TRD.", en: "On-road stance with TRD cues." } },
      { id: "trd-off-road", name: { he: "TRD Off-Road", en: "TRD Off-Road" }, blurb: { he: "נעילות, מצלמות שטח ומתלים.", en: "Lockers, crawl cameras and suspension." } },
      { id: "limited", name: { he: "Limited", en: "Limited" }, blurb: { he: "פנים יוקרתי על יכולת שטח.", en: "A luxury cabin on off-road hardware." } },
      { id: "trd-pro", name: { he: "TRD Pro", en: "TRD Pro" }, blurb: { he: "גג, מתלים וצמיגים של TRD Pro.", en: "TRD Pro roof, suspension and tires." } },
    ],
    specs: [
      { label: { he: "הנעה", en: "Drivetrain" }, value: { he: "i-FORCE / i-FORCE MAX · 4x4", en: "i-FORCE / i-FORCE MAX · 4x4" } },
      { label: { he: "מושבים", en: "Seats" }, value: { he: "5 (טור שלישי בחלק מהגימורים)", en: "5 (third row on some trims)" } },
      { label: { he: "שטח", en: "Off-road" }, value: { he: "Multi-Terrain / Crawl Control לפי גימור", en: "Multi-Terrain / Crawl Control by trim" } },
      { label: { he: "דור", en: "Generation" }, value: { he: "חדש ל־2026", en: "New for 2026" } },
    ],
    highlights: [
      { he: "דור חדש לגמרי", en: "All-new generation" },
      { he: "TRD Pro ו־Trailhunter", en: "TRD Pro and Trailhunter" },
      { he: "i-FORCE MAX היברידי בחלק מהגרסאות", en: "i-FORCE MAX hybrid on select trims" },
    ],
  },
  {
    slug: "rav4-prime",
    brand: "toyota",
    year: 2026,
    name: { he: "טויוטה RAV4 פלאג־אין הייבריד", en: "Toyota RAV4 Plug-in Hybrid" },
    tagline: { he: "PHEV — חשמל ליום־יום, היבריד לדרך", en: "PHEV — electric for the day, hybrid for the trip" },
    description: {
      he: "RAV4 Plug-in Hybrid 2026 (Prime). טווח חשמלי יומיומי, AWD, וגימורי SE, XSE, Woodland ו־GR Sport.",
      en: "2026 RAV4 Plug-in Hybrid (Prime). Everyday EV range, AWD, and SE, XSE, Woodland and GR Sport trims.",
    },
    body: "suv",
    seats: 5,
    hybrid: true,
    plugin: true,
    featured: true,
    defaultTrim: "gr-sport",
    defaultColor: "gr-sport",
    colors: [P.gr, P.black, P.ice, P.wood],
    trims: [
      { id: "se", name: { he: "SE", en: "SE" }, blurb: { he: "PHEV עם AWD וחבילת בטיחות מלאה.", en: "PHEV with AWD and full safety suite." } },
      { id: "xse", name: { he: "XSE", en: "XSE" }, blurb: { he: "גג וציוד נוסף על בסיס SE.", en: "Roof and extra kit on the SE base." } },
      { id: "woodland", name: { he: "Woodland", en: "Woodland" }, blurb: { he: "מראה שטח וצמיגי כל־שטח.", en: "Trail looks and all-terrain tires." } },
      { id: "gr-sport", name: { he: "GR Sport", en: "GR Sport" }, blurb: { he: "חתימת Gazoo Racing.", en: "Gazoo Racing signature." } },
    ],
    specs: [
      { label: { he: "הנעה", en: "Drivetrain" }, value: { he: "פלאג־אין היבריד · AWD", en: "Plug-in hybrid · AWD" } },
      { label: { he: "מושבים", en: "Seats" }, value: { he: "5", en: "5" } },
      { label: { he: "טעינה", en: "Charge" }, value: { he: "שקע ביתי / עמדת AC", en: "Home outlet / AC station" } },
      { label: { he: "מצב", en: "Modes" }, value: { he: "EV / היבריד", en: "EV / Hybrid" } },
    ],
    highlights: [
      { he: "נסיעה חשמלית ליום־יום", en: "Electric for the daily drive" },
      { he: "AWD בכל הגימורים", en: "AWD on every trim" },
      { he: "GR Sport ו־Woodland", en: "GR Sport and Woodland" },
    ],
  },
  {
    slug: "land-cruiser",
    brand: "toyota",
    year: 2026,
    name: { he: "טויוטה לנד קרוזר", en: "Toyota Land Cruiser" },
    tagline: { he: "השטח הקלאסי, עם i-FORCE MAX", en: "The classic trail SUV, with i-FORCE MAX" },
    description: {
      he: "לנד קרוזר האמריקאי עם היברידית i-FORCE MAX, גימור 1958 והדגם הרגיל. יכולת שטח, נוכחות, וחתימת 70 שנה ל־1958.",
      en: "The US Land Cruiser with i-FORCE MAX hybrid, 1958 trim and the standard model. Trail ability, presence, and the 1958 heritage pack.",
    },
    body: "suv",
    seats: 5,
    hybrid: true,
    featured: true,
    defaultTrim: "land-cruiser",
    defaultColor: "meteor",
    colors: [P.meteor, P.heritage, P.sand],
    trims: [
      { id: "1958", name: { he: "1958", en: "1958" }, blurb: { he: "מראה מורשת, בד, וחישוקים ייעודיים.", en: "Heritage look, cloth, and unique wheels." } },
      { id: "land-cruiser", name: { he: "Land Cruiser", en: "Land Cruiser" }, blurb: { he: "הדגם המלא עם ציוד נוחות ושטח.", en: "The full model with comfort and trail kit." } },
    ],
    specs: [
      { label: { he: "הנעה", en: "Drivetrain" }, value: { he: "i-FORCE MAX היבריד · 4x4", en: "i-FORCE MAX hybrid · 4x4" } },
      { label: { he: "מושבים", en: "Seats" }, value: { he: "5", en: "5" } },
      { label: { he: "שטח", en: "Off-road" }, value: { he: "Multi-Terrain Select, Crawl Control", en: "Multi-Terrain Select, Crawl Control" } },
      { label: { he: "גרירה", en: "Towing" }, value: { he: "יכולת גרירה גבוהה לפי מפרט US", en: "Strong US-spec towing capacity" } },
    ],
    highlights: [
      { he: "i-FORCE MAX", en: "i-FORCE MAX" },
      { he: "גימור 1958", en: "1958 trim" },
      { he: "שטח שמחזיק שם", en: "Off-road that earns the name" },
    ],
  },
  {
    slug: "sequoia",
    brand: "toyota",
    year: 2026,
    name: { he: "טויוטה סקויה הייבריד", en: "Toyota Sequoia Hybrid" },
    tagline: { he: "SUV מלא־גודל, היברידי, עד שמונה מקומות", en: "Full-size hybrid SUV, up to eight seats" },
    description: {
      he: "סקויה 2026 עם i-FORCE MAX. שלושה טורים, גרירה רצינית, וגימורים מ־SR5 עד Capstone ו־TRD Pro.",
      en: "2026 Sequoia with i-FORCE MAX. Three rows, serious towing, and trims from SR5 to Capstone and TRD Pro.",
    },
    body: "suv",
    seats: 8,
    hybrid: true,
    featured: true,
    defaultTrim: "limited",
    defaultColor: "lunar-rock",
    colors: [P.lunar, P.black, P.blue, P.silver, P.octane, P.red],
    trims: [
      { id: "sr5", name: { he: "SR5", en: "SR5" }, blurb: { he: "שמונה מקומות והיבריד מלא־גודל.", en: "Eight seats and the full-size hybrid." } },
      { id: "limited", name: { he: "Limited", en: "Limited" }, blurb: { he: "נוחות וציוד למשפחה הגדולה.", en: "Comfort and kit for a large family." } },
      { id: "platinum", name: { he: "Platinum", en: "Platinum" }, blurb: { he: "פנים עשיר ומתלים אדפטיביים לפי גימור.", en: "Rich cabin and adaptive suspension on spec." } },
      { id: "trd-pro", name: { he: "TRD Pro", en: "TRD Pro" }, blurb: { he: "שטח על בסיס מלא־גודל.", en: "Trail hardware on a full-size body." } },
      { id: "capstone", name: { he: "Capstone", en: "Capstone" }, blurb: { he: "שיא הגימור של סקויה.", en: "The top Sequoia trim." } },
    ],
    specs: [
      { label: { he: "הנעה", en: "Drivetrain" }, value: { he: "i-FORCE MAX היבריד", en: "i-FORCE MAX hybrid" } },
      { label: { he: "מושבים", en: "Seats" }, value: { he: "עד 8", en: "Up to 8" } },
      { label: { he: "טורים", en: "Rows" }, value: { he: "3", en: "3" } },
      { label: { he: "גרירה", en: "Towing" }, value: { he: "גרירה כבדה לפי מפרט US", en: "Heavy US-spec towing" } },
    ],
    highlights: [
      { he: "היבריד מלא־גודל", en: "Full-size hybrid" },
      { he: "TRD Pro ו־Capstone", en: "TRD Pro and Capstone" },
      { he: "שלושה טורים", en: "Three rows" },
    ],
  },
  {
    slug: "odyssey",
    brand: "honda",
    year: 2025,
    name: { he: "הונדה אודיסי", en: "Honda Odyssey" },
    tagline: { he: "מיניוואן אמריקאי עם Honda Sensing", en: "US minivan with Honda Sensing" },
    description: {
      he: "אודיסי — שמונה מקומות, דלתות הזזה, Magic Slide ושפע תאי אחסון. אחד הדגמים שטרגט מייבאת באופן קבוע.",
      en: "Odyssey — eight seats, sliding doors, Magic Slide and storage everywhere. A staple of Target’s US import list.",
    },
    body: "minivan",
    seats: 8,
    featured: true,
    defaultTrim: "touring",
    defaultColor: "white",
    colors: [P.hWhite, P.hBlack, P.hSilver, P.hBlue, P.hGray],
    trims: [
      { id: "ex-l", name: { he: "EX-L", en: "EX-L" }, blurb: { he: "עור, דלתות חשמליות ו־Sensing.", en: "Leather, power doors and Sensing." } },
      { id: "touring", name: { he: "Touring", en: "Touring" }, blurb: { he: "מולטימדיה מאחור וציוד משפחתי מלא.", en: "Rear entertainment and full family kit." } },
    ],
    specs: [
      { label: { he: "מנוע", en: "Engine" }, value: { he: "V6 3.5", en: "3.5 V6" } },
      { label: { he: "מושבים", en: "Seats" }, value: { he: "8", en: "8" } },
      { label: { he: "בטיחות", en: "Safety" }, value: { he: "Honda Sensing", en: "Honda Sensing" } },
      { label: { he: "דלתות", en: "Doors" }, value: { he: "הזזה חשמלית", en: "Power sliding" } },
    ],
    highlights: [
      { he: "שמונה מקומות", en: "Eight seats" },
      { he: "Magic Slide", en: "Magic Slide" },
      { he: "Honda Sensing", en: "Honda Sensing" },
    ],
  },
  {
    slug: "civic",
    brand: "honda",
    year: 2025,
    name: { he: "הונדה סיוויק", en: "Honda Civic" },
    tagline: { he: "סדאן חדה עם Sensing", en: "A sharp sedan with Sensing" },
    description: {
      he: "סיוויק אמריקאית — מנוע 2.0 או 1.5 טורבו לפי גימור, מסך גדול וחבילת Honda Sensing.",
      en: "US Civic — 2.0 or 1.5 turbo by trim, a large screen and Honda Sensing.",
    },
    body: "sedan",
    seats: 5,
    defaultTrim: "sport",
    defaultColor: "red",
    colors: [P.hRed, P.hWhite, P.hBlack, P.hSilver, P.hGray],
    trims: [
      { id: "sport", name: { he: "Sport", en: "Sport" }, blurb: { he: "מראה חד וגלגלים גדולים.", en: "Sharp looks and larger wheels." } },
      { id: "touring", name: { he: "Touring", en: "Touring" }, blurb: { he: "עור, בוסט וציוד מלא.", en: "Leather, Bose and full kit." } },
    ],
    specs: [
      { label: { he: "מנוע", en: "Engine" }, value: { he: "2.0 או 1.5 טורבו", en: "2.0 or 1.5 turbo" } },
      { label: { he: "מושבים", en: "Seats" }, value: { he: "5", en: "5" } },
      { label: { he: "בטיחות", en: "Safety" }, value: { he: "Honda Sensing", en: "Honda Sensing" } },
      { label: { he: "מרכב", en: "Body" }, value: { he: "סדאן", en: "Sedan" } },
    ],
    highlights: [
      { he: "עיצוב הדור הנוכחי", en: "Current-generation design" },
      { he: "Honda Sensing", en: "Honda Sensing" },
      { he: "חסכונית ליום־יום", en: "Efficient for daily use" },
    ],
  },
  {
    slug: "cr-v",
    brand: "honda",
    year: 2025,
    name: { he: "הונדה CR-V", en: "Honda CR-V" },
    tagline: { he: "רכב הפנאי הנמכר — גם בהיבריד", en: "The volume SUV — hybrid available" },
    description: {
      he: "CR-V אמריקאית, כולל היבריד. חמישה מקומות, מרווח, ו־Honda Sensing.",
      en: "US CR-V, including hybrid. Five seats, space, and Honda Sensing.",
    },
    body: "suv",
    seats: 5,
    hybrid: true,
    defaultTrim: "hybrid",
    defaultColor: "white",
    colors: [P.hWhite, P.hBlack, P.hSilver, P.hBlue, P.hGray],
    trims: [
      { id: "ex-l", name: { he: "EX-L", en: "EX-L" }, blurb: { he: "עור ונוחות יום־יומית.", en: "Leather and daily comfort." } },
      { id: "hybrid", name: { he: "Hybrid", en: "Hybrid" }, blurb: { he: "היברידית עם AWD זמין.", en: "Hybrid with available AWD." }, hybrid: true },
    ],
    specs: [
      { label: { he: "הנעה", en: "Drivetrain" }, value: { he: "בנזין / היבריד", en: "Gas / Hybrid" } },
      { label: { he: "מושבים", en: "Seats" }, value: { he: "5", en: "5" } },
      { label: { he: "בטיחות", en: "Safety" }, value: { he: "Honda Sensing", en: "Honda Sensing" } },
      { label: { he: "מרכב", en: "Body" }, value: { he: "רכב פנאי", en: "SUV" } },
    ],
    highlights: [
      { he: "היבריד זמין", en: "Hybrid available" },
      { he: "מרווח משפחתי", en: "Family space" },
      { he: "Honda Sensing", en: "Honda Sensing" },
    ],
  },
  {
    slug: "accord",
    brand: "honda",
    year: 2025,
    name: { he: "הונדה אקורד", en: "Honda Accord" },
    tagline: { he: "סדאן מנהלים היברידית", en: "A hybrid executive sedan" },
    description: {
      he: "אקורד הדור הנוכחי — היברידית ברוב הגימורים בארה״ב, מרחב ו־Sensing.",
      en: "Current Accord — hybrid in most US trims, space and Sensing.",
    },
    body: "sedan",
    seats: 5,
    hybrid: true,
    defaultTrim: "hybrid",
    defaultColor: "black",
    colors: [P.hBlack, P.hWhite, P.hSilver, P.hGray, P.hBlue],
    trims: [
      { id: "sport", name: { he: "Sport", en: "Sport" }, blurb: { he: "מראה חד על בסיס היברידי.", en: "Sharp looks on a hybrid base." } },
      { id: "hybrid", name: { he: "Touring Hybrid", en: "Touring Hybrid" }, blurb: { he: "שיא הציוד ההיברידי.", en: "The top hybrid spec." }, hybrid: true },
    ],
    specs: [
      { label: { he: "הנעה", en: "Drivetrain" }, value: { he: "היברידית", en: "Hybrid" } },
      { label: { he: "מושבים", en: "Seats" }, value: { he: "5", en: "5" } },
      { label: { he: "בטיחות", en: "Safety" }, value: { he: "Honda Sensing", en: "Honda Sensing" } },
      { label: { he: "מרכב", en: "Body" }, value: { he: "סדאן", en: "Sedan" } },
    ],
    highlights: [
      { he: "היברידית", en: "Hybrid" },
      { he: "מרחב מאחור", en: "Rear space" },
      { he: "Honda Sensing", en: "Honda Sensing" },
    ],
  },
  {
    slug: "pilot",
    brand: "honda",
    year: 2025,
    name: { he: "הונדה פיילוט", en: "Honda Pilot" },
    tagline: { he: "שלושה טורים אמריקאיים", en: "A US three-row SUV" },
    description: {
      he: "פיילוט — עד שמונה מקומות, V6, ו־TrailSport למי שרוצה יותר שטח.",
      en: "Pilot — up to eight seats, V6, and TrailSport if you want more trail.",
    },
    body: "suv",
    seats: 8,
    defaultTrim: "trailsport",
    defaultColor: "white",
    colors: [P.hWhite, P.hBlack, P.hSilver, P.hGray, P.hBlue],
    trims: [
      { id: "ex-l", name: { he: "EX-L", en: "EX-L" }, blurb: { he: "שמונה מקומות וציוד משפחתי.", en: "Eight seats and family kit." } },
      { id: "trailsport", name: { he: "TrailSport", en: "TrailSport" }, blurb: { he: "צמיגי שטח וחתימת TrailSport.", en: "All-terrain tires and TrailSport cues." } },
    ],
    specs: [
      { label: { he: "מנוע", en: "Engine" }, value: { he: "V6", en: "V6" } },
      { label: { he: "מושבים", en: "Seats" }, value: { he: "עד 8", en: "Up to 8" } },
      { label: { he: "טורים", en: "Rows" }, value: { he: "3", en: "3" } },
      { label: { he: "בטיחות", en: "Safety" }, value: { he: "Honda Sensing", en: "Honda Sensing" } },
    ],
    highlights: [
      { he: "שלושה טורים", en: "Three rows" },
      { he: "TrailSport", en: "TrailSport" },
      { he: "Honda Sensing", en: "Honda Sensing" },
    ],
  },
];

export function carsByBrand(brand: Car["brand"]) {
  return CARS.filter((c) => c.brand === brand);
}

export function carBySlug(slug: string) {
  return CARS.find((c) => c.slug === slug);
}

export function featuredCars() {
  return CARS.filter((c) => c.featured);
}

export function colorsForTrim(car: Car, trimId: string): Paint[] {
  const trim = car.trims.find((t) => t.id === trimId);
  if (!trim?.colors?.length) return car.colors;
  return car.colors.filter((c) => trim.colors!.includes(c.id));
}

export function carImage(car: Car) {
  return catalogSrc(car.slug, car.defaultColor);
}
