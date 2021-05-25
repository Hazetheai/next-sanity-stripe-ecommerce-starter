export function capitalize(str) {
  return str
    .split(/-/gi.test(str) ? "-" : /_/gi.test(str) ? "_" : " ")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ")
    .replace(/_/gi, "");
}
