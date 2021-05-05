export function removeDupes<T>(arr: T[]): T[] {
    const uniqueArray = arr.filter(function (item, pos) {
        return arr.indexOf(item) == pos;
    });

    return uniqueArray;
}

export function rmUndef(arr: (any | undefined)[]): any[] {
    return arr ? arr.filter((el) => el !== undefined && el !== null) : arr;
}

export function rmType(arr: any[], type: 'string' | 'object' | 'number'): any[] {
    return arr ? arr.filter((el) => typeof el !== type) : arr;
}

export function fyShuffle(array) {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
