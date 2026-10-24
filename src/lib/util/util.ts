// Typescript
// _______________________________________

interface validator {
  name: string;
  iArray: unknown[];
  linksObj: Record<string, any>;
  text: string;
  number: number;
}

// Logging
// _______________________________________

export function logStr(value: unknown, label = "value") {
  const ok = typeof value === "string";
  console.log(`[${label}] string? ${ok ? "YES" : "NO"}`, value);
}

export function logInt(value: unknown, label = "value") {
  const ok = Number.isInteger(value);
  console.log(`[${label}] integer? ${ok ? "YES" : "NO"}`, value);
}

export function logArr(value: unknown, label = "value") {
  const ok = Array.isArray(value);
  console.log(`[${label}] array? ${ok ? "YES" : "NO"}`, value);
}

export function logObj(value: unknown, label = "value") {
  const ok =
    typeof value === "object" && value !== null && !Array.isArray(value);
  console.log(`[${label}] object? ${ok ? "YES" : "NO"}`, value);
}

export function clearArray(iArray: validator) {
  return iArray.iArray.splice(0);
}

export function clearObject(obj: Record<string, unknown> | null) {
  if (!obj) return;
  for (const key of Object.keys(obj)) {
    delete obj[key];
  }
}

export function clearJsonObject(data: Record<string, unknown> | null) {
  if (!data) return;
  for (const key of Object.keys(data)) {
    delete data[key];
  }
}

// maps
export function mapJsonURL(linksObj: validator) {
  return Object.values(linksObj).map((item) => {
    // Return a fresh, isolated clone/transformation of each item
    return {
      name: item.name,
      descr: item.descr,
      url: item.url,
      status: item.status, // true/false ready for your future toggle logic
    };
  });
}

export function countLetters(text: validator) {
  const letters = text.text.match(/[A-Za-z]/g) ?? [];
  return { count: letters.length, letters };
}
