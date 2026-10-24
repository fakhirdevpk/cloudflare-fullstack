// ________________________________________________
// # import here
// ________________________________________________

import { array, number } from "astro:schema";

// ........................................
// export function logString(str: string) {
//   let string = str;
//   console.log(string);
// }
// ........................................

// Typescript
// _______________________________________

interface validator {
  name: string;
  email: string;
  password: string;
  phone: number;
  date: string;
}

export function convertDate(date: any) {
  let toString = date.toStringfy();
  return toString;
}

export function convertNumber(int: number) {
  let convertedNum = int.toString();
  return convertedNum;
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

// Counter
// _______________________________________

export function counter(
  startingNumber: number,
  maxNumber: number,
  itemID: any,
) {
  if (
    !Number.isFinite(startingNumber) ||
    !Number.isFinite(maxNumber) ||
    maxNumber === 0
  ) {
    return null;
  }
  if (!itemID) return null;
  const el = document.getElementById(itemID);
  const raw = el?.getAttribute("value"); // string | null | undefined

  if (raw === null || raw === undefined || raw.trim() === "") return null;

  const num = Number(raw);
  if (Number.isNaN(num)) return null;
  return num;
}

// function validName(name: validator) {}
// function validEmail(email: validator) {}
// function validPassword(password: validator) {}
// function validPhone(phone: validator) {}
// function validDate(date: validator) {}

// maps
export function mapJsonURL(linksObj: Record<string, any>) {
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
