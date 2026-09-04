export type ToyotaJelly = {
  year: string;
  series: string;
  grade: string;
  code: string;
  frames: number;
  defaultPaint: string;
  byPaint?: Record<string, { series?: string; grade: string; code: string }>;
};

export type HondaSpin = {
  family: string;
  year: string;
  defaultPaint: string;
};

const TOYOTA: Record<string, ToyotaJelly> = {
  camry: {
    year: "2026",
    series: "camry",
    grade: "nightshade",
    code: "2558",
    frames: 36,
    defaultPaint: "supersonic-red",
    byPaint: {
      "supersonic-red": { grade: "nightshade", code: "2558" },
      "ice-cap": { grade: "nightshade", code: "2558" },
      "celestial-silver": { grade: "nightshade", code: "2558" },
      "heavy-metal": { grade: "nightshade", code: "2558" },
      "ocean-gem": { grade: "nightshade", code: "2558" },
    },
  },
  "grand-highlander": {
    year: "2026",
    series: "grandhighlander",
    grade: "hybridmaxplatinum",
    code: "6732",
    frames: 36,
    defaultPaint: "underground",
    byPaint: {
      underground: { grade: "hybridmaxplatinum", code: "6732" },
      "ice-cap": { grade: "hybridmaxplatinum", code: "6732" },
      "celestial-silver": { grade: "hybridmaxplatinum", code: "6732" },
      "wind-chill": { grade: "hybridmaxplatinum", code: "6732" },
      blueprint: { grade: "hybridmaxplatinum", code: "6732" },
      "midnight-black": { grade: "hybridmaxplatinum", code: "6732" },
    },
  },
  sienna: {
    year: "2026",
    series: "sienna",
    grade: "woodlandedition",
    code: "5409",
    frames: 36,
    defaultPaint: "cypress",
    byPaint: {
      cypress: { grade: "woodlandedition", code: "5409" },
      "ice-cap": { grade: "woodlandedition", code: "5409" },
      "wind-chill": { grade: "woodlandedition", code: "5409" },
      blueprint: { grade: "woodlandedition", code: "5409" },
      "celestial-silver": { grade: "woodlandedition", code: "5409" },
    },
  },
  "4runner": {
    year: "2026",
    series: "4runner",
    grade: "trdpro",
    code: "8634",
    frames: 36,
    defaultPaint: "ice-cap",
    byPaint: {
      "ice-cap": { grade: "trdpro", code: "8634" },
      "supersonic-red": { grade: "trdpro", code: "8634" },
      "celestial-silver": { grade: "trdpro", code: "8634" },
      "heavy-metal": { grade: "trdpro", code: "8634" },
      "solar-octane": { grade: "trdpro", code: "8634" },
      "midnight-black": { grade: "trdpro", code: "8634" },
    },
  },
  "rav4-prime": {
    year: "2026",
    series: "rav4pluginhybrid",
    grade: "grsport",
    code: "4538",
    frames: 18,
    defaultPaint: "gr-sport",
    byPaint: {
      "gr-sport": { grade: "grsport", code: "4538" },
      "midnight-black": { grade: "grsport", code: "4538" },
      "ice-cap": { grade: "grsport", code: "4538" },
      woodland: { grade: "grsport", code: "4538" },
    },
  },
  "land-cruiser": {
    year: "2027",
    series: "landcruiser",
    grade: "landcruiser",
    code: "6167",
    frames: 18,
    defaultPaint: "meteor",
    byPaint: {
      meteor: { grade: "landcruiser", code: "6167" },
      "heritage-blue": { grade: "landcruiser1958", code: "6165" },
      "sand-dune": { grade: "landcruiser1958", code: "6165" },
    },
  },
  sequoia: {
    year: "2026",
    series: "sequoia",
    grade: "limited",
    code: "7948",
    frames: 36,
    defaultPaint: "lunar-rock",
    byPaint: {
      "lunar-rock": { grade: "limited", code: "7948" },
      "midnight-black": { grade: "limited", code: "7948" },
      blueprint: { grade: "limited", code: "7948" },
      "celestial-silver": { grade: "limited", code: "7948" },
      "solar-octane": { grade: "limited", code: "7948" },
      "supersonic-red": { grade: "limited", code: "7948" },
    },
  },
};

const HONDA: Record<string, HondaSpin> = {
  odyssey: { family: "odyssey", year: "2025", defaultPaint: "white" },
  civic: { family: "civic", year: "2025", defaultPaint: "red" },
  "cr-v": { family: "cr-v", year: "2025", defaultPaint: "white" },
  accord: { family: "accord", year: "2025", defaultPaint: "black" },
  pilot: { family: "pilot", year: "2025", defaultPaint: "white" },
};

export const TOYOTA_PAINT: Record<string, string> = {
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
  "sand-dune": "4v8",
};

const HONDA_PAINT: Record<string, string> = {
  white: "pspc0004",
  black: "pspc0001",
  red: "pspc0034",
  silver: "pspc0012",
  blue: "pspc0062",
  gray: "pspc0016",
};

function toyotaCombo(slug: string, paintId: string) {
  const base = TOYOTA[slug];
  if (!base) return null;
  const over = base.byPaint?.[paintId];
  return {
    ...base,
    series: over?.series ?? base.series,
    grade: over?.grade ?? base.grade,
    code: over?.code ?? base.code,
  };
}

export function toyotaUrl(slug: string, paintId: string, frame: number, width = 1000) {
  const combo = toyotaCombo(slug, paintId);
  if (!combo) return "";
  const color = TOYOTA_PAINT[paintId] ?? TOYOTA_PAINT[combo.defaultPaint] ?? "040";
  const folder = combo.frames >= 30 ? `/${combo.frames}` : combo.frames === 18 ? "/18" : "";
  return `https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/${combo.year}/${combo.series}/${combo.grade}/${combo.code}/${color}${folder}/${frame}.png?fmt=png-alpha&wid=${width}&qlt=90`;
}

export function hondaUrl(slug: string, paintId: string, frame: number, width = 1000) {
  const spec = HONDA[slug];
  if (!spec) return "";
  const paint = HONDA_PAINT[paintId] ?? HONDA_PAINT[spec.defaultPaint];
  const angle = String(((frame - 1) % 36) + 1).padStart(2, "0");
  return `https://cdn.imagin.studio/getImage?customer=img&make=honda&modelFamily=${encodeURIComponent(spec.family)}&modelYear=${spec.year}&angle=${angle}&width=${width}&zoomType=fullscreen&countryCode=US&paintId=${paint}`;
}

export function frameCount(slug: string, _paintId: string) {
  if (TOYOTA[slug]) return TOYOTA[slug].frames;
  if (HONDA[slug]) return 36;
  return 1;
}

export function defaultFrame(slug: string, paintId: string) {
  const n = frameCount(slug, paintId);
  if (n >= 30) return 5;
  if (n === 18) return 3;
  return 1;
}

export function spinSrc(slug: string, paintId: string, frame: number, width = 1000) {
  if (TOYOTA[slug]) return toyotaUrl(slug, paintId, frame, width);
  return hondaUrl(slug, paintId, frame, width);
}

export function catalogSrc(slug: string, paintId: string) {
  return spinSrc(slug, paintId, defaultFrame(slug, paintId), 900);
}

export function isToyotaSpin(slug: string) {
  return Boolean(TOYOTA[slug]);
}
