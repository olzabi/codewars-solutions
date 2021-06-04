// TypeScript:
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
export function accum(s: string): string {
    return s
        .split('')
        .map(
            (a,b) => a.toUpperCase() + a.toLowerCase().repeat(b)
        )
        .join('-');
}
