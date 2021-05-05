export function compareStrings(str: string, str2: string): boolean {
  const one = str.trim().split("").sort().join("");
  const two = str2.trim().split("").sort().join("");

  if (one === two) {
    return true;
  }

  return false;
}

function isConjunc(str: string): boolean {
  const conjunctions = ["is", "it", "of", "with", "so", "and"];
  return conjunctions.some((c) => c === str.toLowerCase());
}
function isSize(str: string): boolean {
  const sizes = ["xs", "s", "m", "l", "xl", "xxl", "xxxl"];
  return sizes.some((c) => c === str.toLowerCase());
}

/**
 * @description Splits a word up by separators _ or - or ' ' & Capitalizes them
 * @param str String to be split
 */
export function capitalize(str: string): string {
  return str
    .split(/-/gi.test(str) ? "-" : /_/gi.test(str) ? "_" : " ")
    .map((w) =>
      isConjunc(w)
        ? w
        : isSize(w)
        ? w.toUpperCase()
        : w[0].toUpperCase() + w.slice(1)
    )
    .join(" ")
    .replace(/_/gi, "");
}

/**
 * @description Add an 's' to any word that doesn't end with one.
 * @param noun Word to be pluralized
 */
export function pluralizeNoun(noun: string): string {
  return /s$/gi.test(noun) ? noun : noun + "s";
}

/**
 *
 * @param str String to be split
 * @param num Fraction of string to split
 * @param show Boolean switch to show whole string
 * @param minLength Minimum length to begin clipping
 */
export function truncate(str: string, num = 2, show = false, minLength = 22) {
  if (show === true) return str;
  if (str.length <= minLength) return str;
  const clipNum =
    num <= str.split(" ").length - 1 ? num : str.split(" ").length - 1;
  return str.split(" ").slice(0, clipNum).join(" ").concat("...");
}

export function formatShopifyMetafieldDates(
  str: string,
  withDashes?: boolean | undefined
) {
  const splitStr = str.split("-");

  return [splitStr[1], splitStr[0], splitStr[2]].join(withDashes ? "-" : "/");
}
export function formatWPMetafieldDates(
  str: string,
  dashes?: boolean | undefined
) {
  const dateAndTime = str.split(" ");
  const date = dateAndTime[0].split("/");
  const time = dateAndTime[1].split(" ")[0];

  return [date[2], date[1], date[0]].join(dashes ? "-" : "/");
}

export function formatShopifyMetafieldStrings(str: string) {
  return str.replace(/\[|\]|\"/g, "");
}

export function string_to_slug(str: string) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  const to = "aaaaeeeeiiiioooouuuunc------";
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
}

export function decodeHTML(str) {
  return str.replace(/&#([0-9]+);/g, function (full, int) {
    return String.fromCharCode(parseInt(int));
  });
}

export function convertRems(str) {
  return Number(str.replace(/rem/, "")) * 10;
}

/**
 * @description turns an array of strings into a single string separated by a comma
 * @param args Array of string
 */
export function concatenateStrings(...args: string[]) {
  return args.join(",");
}
