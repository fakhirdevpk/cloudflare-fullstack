import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const INPUT = "src/themes/theme.json";
const OUTPUT = "src/styles/partials/_theme.sass";

// camelCase -> kebab-case
const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

// Flatten nested objects: { brand: { primary: "#fff" } } -> brand-primary
function flatten(obj, prefix = "") {
  return Object.entries(obj).flatMap(([key, value]) => {
    const name = prefix ? `${prefix}-${kebab(key)}` : kebab(key);
    return typeof value === "object" && value !== null
      ? flatten(value, name)
      : [[name, value]];
  });
}

const theme = JSON.parse(readFileSync(INPUT, "utf8"));
const lines = flatten(theme).map(([name, value]) => `$${name}: ${value}`);

const output = [
  "// Generated from src/themes/theme.json. Do not edit by hand.",
  "// Run: bun run tokens (or npm run tokens)",
  "",
  ...lines,
  "",
].join("\n");

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, output);

console.log(`tokens: wrote ${lines.length} variables to ${OUTPUT}`);
