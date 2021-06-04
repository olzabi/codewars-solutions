// TypeScript
// https://www.codewars.com/kata/576b93db1129fcf2200001e6
export function sumArray(array:number[]): number {
    return array ? array.sort((a,b) => a-b).slice(1,-1).reduce((a,b) => a+b, 0) : 0
}