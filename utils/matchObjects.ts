export function matchObjects(doThese: Record<string, any>, matchThese: Record<string, any>): boolean {
    if (!doThese) return false;
    const doTheyMatch = Object.entries(doThese).every((el) => {
        if (!matchThese) return false;

        return el[1] === matchThese[el[0]];
    });

    return doTheyMatch;
}
