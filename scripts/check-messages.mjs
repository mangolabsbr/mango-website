// Verifies that messages/{en,es,pt}.json share the exact same key tree.
// Usage: node scripts/check-messages.mjs
import { readFileSync } from "node:fs";

const locales = ["en", "es", "pt"];

const flatten = (obj, prefix = "") =>
  Object.entries(obj).flatMap(([key, value]) =>
    value !== null && typeof value === "object"
      ? flatten(value, `${prefix}${key}.`)
      : [`${prefix}${key}`],
  );

const keySets = Object.fromEntries(
  locales.map((locale) => [
    locale,
    new Set(
      flatten(JSON.parse(readFileSync(`messages/${locale}.json`, "utf8"))),
    ),
  ]),
);

let ok = true;
const [base, ...rest] = locales;
for (const locale of rest) {
  const missing = [...keySets[base]].filter((k) => !keySets[locale].has(k));
  const extra = [...keySets[locale]].filter((k) => !keySets[base].has(k));
  for (const key of missing) {
    ok = false;
    console.error(`missing in ${locale}: ${key}`);
  }
  for (const key of extra) {
    ok = false;
    console.error(`extra in ${locale}: ${key}`);
  }
}

if (ok) {
  console.log(`OK: ${locales.join(", ")} share ${keySets.en.size} keys`);
} else {
  process.exit(1);
}
