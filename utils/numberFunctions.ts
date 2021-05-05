export function clampN(num: number, min: number, max: number) {
    const MIN = min || 0;
    const MAX = max || 20;
    const parsed = num;
    return Math.min(Math.max(parsed, MIN), MAX);
}

export function wrap(min: number, max: number, v: number) {
    if (v > min && v < max) return v;
    if (v < min) return max;
    if (v > min && v > max) return min;
    return min;
}
