export function isNumber(number: any): boolean {
    return typeof number === 'number' || (number && number instanceof Number)
}
