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
export function mapJsonURL(linksObj: object) {
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

export function countLetters(text: any) {
  const letters = text.text.match(/[A-Za-z]/g) ?? [];
  return { count: letters.length, letters };
}

export function greeting(msg: string, name: string) {
  interface objects {
    date: Date;
    time: Date;
    msg: string;
    name: string;
  }

  const date = new Date();
  const time = date.getTime;

  const log = "Hello " + { name } + " today is " + { time };
  return log;
}

export function pageChange(url: string): void {
  window.location.assign(url);
}
export function redirect(url: string): void {
  window.location.replace(url);
}

export function logUser(): void {
  const protocol = window.location.protocol;
  const ip = window.location.hostname;
  const port = window.location.port;
  const url = window.location.href;
  const count: number = 1;

  const user = "User " + count + " : " + protocol + ip + port;
  const output = user + " ~ " + url;
  const userCount = 0;
  const areUsersOnPage = false;
  // const isNewUser =

  // while (true) {
  //   if(userCount > 0)
  // }
}

export function clearSession(): void {
  // document.cookie.
}

export function lowercase(text: string) {
  return text.toLocaleLowerCase;
}

export function filterStringArray(array: string[], length: number) {
  const result = array.filter((array) => array.length > length);
  return result;
}
