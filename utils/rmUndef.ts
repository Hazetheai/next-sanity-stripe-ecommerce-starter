function rmUndef(arr: (any | undefined)[]): any[] {
    return arr ? arr.filter((el) => el !== undefined && el !== null) : arr;
}

export function rmType(arr: any[], type: 'string' | 'object' | 'number'): any[] {
    return arr ? arr.filter((el) => typeof el !== type) : arr;
}

export default rmUndef;
