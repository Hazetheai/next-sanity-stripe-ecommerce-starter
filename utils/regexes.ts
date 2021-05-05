export const subpathRe = new RegExp(/[^\/]*$/, 'i');
export const journalsRe = new RegExp(/^\/journal\/(.+)$/, 'i');
export const betweenSlashes = (term: string): RegExp => new RegExp(`\/${term}\/([^\/]*)\/?`, 'i');
export const trimSlash = (word: string): string => (/\/$/.test(word) ? word.replace(/\/$/, '') : word);
export const shopifyTranSrcImageDimRe = new RegExp(/[\d]+x[\d]+\.[png\|jpg]+/);
export const eircodeRe = new RegExp(
    /(a(4[125]|6[37]|75|8[1-6]|9[12468])|c15|d([0o])[1-9]|1[0-8o]|2[024o]|6w|e(2[15]|3[24]|4[15]|53|91)|f(12|2[368]|3[15]|4[25]|5[26]|9[1-4])|h(1[2468]|23|5[34]|6[25]|[79]1)|k(3[246]|45|56|67|78)|n(3[79]|[49]1)|p(1[247]|2[45]|3[126]|4[37]|5[16]|6[17]|7[25]|8[15])|r(14|21|3[25]|4[25]|5[16]|9[35])|t(12|23|34|45|56)|v(1[45]|23|3[15]|42|9[2-5])|w(12|23|34|91)|x(35|42|91)|y(14|2[15]|3[45]))\s*[acdefhknoprtvwxy\d]{4}/,
    'i',
);
export const northernIre = new RegExp(/^bt.{5,6}/, 'i');
export const isDynamicPageRe = new RegExp(/shop|journal|product/);
