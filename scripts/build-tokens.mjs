import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const INPUT = "src/themes/theme.json";
const OUTPUT = "src/styles/partials/_theme.sass";

// camelCase -> kebab-case
const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

// Flatten nested objects: { space: { 4: "1rem" } } -> space-4
function flatten(obj, prefix = "") {
  return Object.entries(obj).flatMap(([key, value]) => {
    const name = prefix ? `${prefix}-${kebab(key)}` : kebab(key);
    return value !== null && typeof value === "object"
      ? flatten(value, name)
      : [[name, value]];
  });
}

const pairs = flatten(JSON.parse(readFileSync(INPUT, "utf8")));

// Stop if two keys produce the same variable name
const seen = new Set();
for (const [name] of pairs) {
  if (seen.has(name)) throw new Error(`tokens: duplicate variable $${name}`);
  seen.add(name);
}

const output = [
  "// Generated from src/themes/theme.json. Do not edit by hand.",
  "// Run: bun run tokens (or npm run tokens)",
  "",
  ...pairs.map(([name, value]) => `$${name}: ${value}`),
  "",
].join("\n");

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, output);

console.log(`tokens: wrote ${pairs.length} variables to ${OUTPUT}`);
